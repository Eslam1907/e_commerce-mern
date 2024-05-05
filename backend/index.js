const port =process.env.PORT || 4001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cloudinary = require("cloudinary").v2
const path = require("path");
const { type } = require("os");
const { Console, error } = require("console");
app.use(express.json());
app.use(cors());

cloudinary.config({ 
  cloud_name: 'doa2fklhw', 
  api_key: '736168926758839', 
  api_secret: 'UGImel9tKSBgc7VA52gpYITSJac' 
});

mongoose.connect(
  "mongodb://EcommerceMern:user123@ac-plx0fcb-shard-00-00.gglovl8.mongodb.net:27017,ac-plx0fcb-shard-00-01.gglovl8.mongodb.net:27017,ac-plx0fcb-shard-00-02.gglovl8.mongodb.net:27017/ecomm0mern?ssl=true&replicaSet=atlas-34rd2o-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("express is running");
});

// image storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// creating endpoint for image
app.use("/images", express.static("upload/images"));

app.post("/upload/", upload.single("product"), (req, res) => {
  cloudinary.uploader.upload(req.file.path ,(err, result)=>{
    if (err) {
      console.log(err);
      return res.status(500).json({
        success:false,
        message:"Error"
      })
      }
      res.status(200).json({
        success:true,
        message:"uploaded",
        image_url: result.url,
      })
    
        
       
    
  })
});
// schema for creating products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
// creating api to add product
app.post("/addproduct/", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(product);
  await product.save();
  console.log("saved");

  res.json({
    success: 1,
    name: req.body.name,
  });
});

// creating api to remove product

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");

  res.json({
    success: 1,
    name: req.body.name,
  });
});

// creating api to get all product
app.get("/allproduct", async (req, res) => {
  const allProducts = await Product.find({});
  console.log("the appi was fetched");
  res.send(allProducts);
});

//  schema for user

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// endpoint for registering the user

app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });

  if (check) {
    return res
      .status(400)
      .json({
        success: false,
        errors: "Existing user email founded like this email",
      });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secretecom");

  res.json({ success: true, token });
});

// treating endpoint for login

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passcheck = req.body.password === user.password;
    if (passcheck) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secretecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Addreess" });
  }
});

// creating endpointing for latest products
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("fetched");
  res.send(newcollection);
});
// creating endpointing for popular products
app.get("/popularproducts", async (req, res) => {
  let products = await Product.find({});
  let popularproducts = products.slice(10, 14);
  console.log("fetched popular");
  res.send(popularproducts);
});


// creating middleware to fetch user

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "please authenticate using valid login" });
   
  } else {
    try {
      const data = jwt.verify(token, "secretecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "please authenticate using valid token" });
    }
  }
};

// creating endpoint for add to cart

app.post("/addtocart",fetchUser , async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("added thanks");
});

// creating endpoint for remove pruduct from cart 

app.post("/removefromcart",fetchUser , async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id});
 if(userData.cartData[req.body.itemId] > 0)
  userData.cartData[req.body.itemId] -= 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("removed");
});

// creating endpoint to get cart data 
app.post("/getcart" ,fetchUser , async(req , res)=>{
  console.log("get cart")
  let userData = await User.findOne({_id:req.user.id})
  res.json(userData.cartData)
})


app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port :" + port);
  } else {
    console.log("Error : " + error);
  }
});

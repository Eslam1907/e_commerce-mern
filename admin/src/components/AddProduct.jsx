import { useState } from "react";
import apload_area from "../assets/upload_area.svg";
import { MdAdd } from "react-icons/md";
function AddProduct() {
  const [image, setImage] = useState(false);
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "women",
    old_price: "",
    new_price: "",
    image: "",
  });

  const changeHandler =(e)=>{
    setProductDetails({...productDetails , [e.target.name] : e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData ;
    let product = productDetails;
    let formData = new FormData()
    formData.append("product" , image)

    await fetch ('https://e-commerce-mern-3-d0ep.onrender.com/upload', {
      method:"POST",
      headers:{
        Accept: 'application/json',
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=> {responseData = data})

if(responseData.success){
  product.image= responseData.image_url

  console.log(product);
  await fetch('https://e-commerce-mern-3-d0ep.onrender.com/addproduct', {
    method:"POST",
    headers:{
      Accept: 'application/json',
      "Content-Type" : 'application/json',
    },
    body:JSON.stringify(product),
  }).then((res)=>res.json()).then((data)=>{
    data.success?alert("Product Added"):alert("image not load")
  })
}

  }
  return (
    <div className=" box-border w-full bg-white mt-4 p-8 lg:m-7 rounded-sm">
      <div className="mb-3">
        <h4 className="bold-18 pb-3">Product title:</h4>
        <input
          className=" outline-none bg-primary w-full max-w-80 px-4 py-3 rounded-md "
          name="name"
          type="text"
          placeholder="Type here:" value={productDetails.name} onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-3">Old price:</h4>
        <input
          className=" outline-none bg-primary w-full max-w-80 px-4 py-3 rounded-md "
          name="old_price"
          type="number"
          placeholder="Type here:" value={productDetails.old_price} onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-3">New price:</h4>
        <input
          className=" outline-none bg-primary w-full max-w-80 px-4 py-3 rounded-md "
          name="new_price"
          type="number"
          placeholder="Type here:" value={productDetails.new_price} onChange={changeHandler}
        />
      </div>
      <div className="mb-3 flex items-center gap-x-4">
        <h4 className="bold-18 pb-2">Category:</h4>
        <select className=" bg-primary right-1 ring-slate-900/20 rounded-sm py-1 medium-16 outline-none" value={productDetails.category} name="category" onChange={changeHandler}>
          <option type="women">Women</option>
          <option type="men">Men</option>
          <option type="kid">Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img
            className="w-20 rounded-sm inline-block"
            src={image ? URL.createObjectURL(image) : apload_area}
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          className=" w-full max-w-80 bg-primary px-4 py-3 "
          hidden
        />
      </div>
      <button onClick={()=> Add_Product()} className="btn_dark_rounded mt-4 flexCenter gap-x-1">
        {" "}
        <MdAdd /> Add product
      </button>
    </div>
  );
}

export default AddProduct;

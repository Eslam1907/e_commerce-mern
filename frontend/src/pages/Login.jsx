import { useState } from "react";
import { motion } from "framer-motion-3d";
function Login() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// login//////////////////////////
  const login = async () => {
    console.log("Log in executed", formData);
    let fetchUrlSign;

    await fetch("https://e-commerce-mern-4.onrender.com/login/", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (fetchUrlSign = data));
      if(fetchUrlSign.success){
        localStorage.setItem("auth-token",fetchUrlSign.token)
        window.location.replace('/')
      }else{
        alert(fetchUrlSign.errors)
      }
  };
  // sign up \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const signin = async () => {
    console.log("signin executed", formData);
    let fetchUrlSign;

    await fetch("https://e-commerce-mern-4.onrender.com/signup/", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (fetchUrlSign = data));
      if(fetchUrlSign.success){
        localStorage.setItem("auth-token",fetchUrlSign.token)
        window.location.replace('/')
      }else{
        alert(fetchUrlSign.errors)
      }
  };
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <motion.div
        layout
        animate={{ transform: "scale(1)" }}
        initial={{ transform: "scale(0)" }}
        transition={{ duration: 0.8 }}
        className="px-14 py-10 bg-white xs:w-[350px] md:w-[555px] h-[600px] rounded-md"
      >
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-20">
          {state === "Sign up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className=" bg-slate-900/5 w-full h-12 rounded-xl pl-5 outline-none"
              type="text"
              placeholder="Your name"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className=" bg-slate-900/5 w-full h-12 rounded-xl pl-5 outline-none"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className=" bg-slate-900/5 w-full h-12 rounded-xl pl-5 outline-none"
            type="password"
            placeholder="Your Password"
          />
        </div>
        {/* <div className=" text-center"> */}
        <button
          onClick={() => {
            state === "Login" ? login() : signin();
          }}
          className="btn_dark_rounded mt-5 py- w-full !rounded-md"
        >
          Continue
        </button>
        {/* </div> */}
        {state === "Sign up" ? (
          <p className="mt-5 text-black font-bold ">
            Already have an account{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className=" text-secondary underline pl-2 cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="mt-5 text-black font-bold ">
            Create an account{" "}
            <span
              onClick={() => {
                setState("Sign up");
              }}
              className=" text-secondary underline pl-2 cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
        <div className="flex gap-3 mt-5">
          <input className="w-10" type="checkbox" id="" name="" />
          <p className=" regular-14">
            By Continuing , i agree to the terms of use & privacy policy
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Login;

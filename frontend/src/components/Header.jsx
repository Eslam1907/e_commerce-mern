import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { useContext, useState } from "react";
import { MdClose, MdMenu, MdShoppingCart } from "react-icons/md";
import { ShopContext } from "../context/Shopcontext";
function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenue = () => {
    setMenuMobile(!menuMobile);
  };
  const {totalCart} = useContext(ShopContext)
  return (
    <header className="fixed  m-auto top-0 left-0 right-0 max_padd_container w-[100%] ring-1 ring-slate-900/5 bg-white z-10">
      <div className="flexBetween px-4 max-xs:px-3 py-3">
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={66} />
          </Link>
        </div>
        {/* for desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* for mobile */}
        <Navbar
          containerStyles={`${
            menuMobile
              ? " flex item-start flex-col fixed p-12 top-20 right-8 gap-y-12 transition-all duration-300 shadow-md ring-1 bg-white medium-16  ring-slate-900/5 rounded-3xl w-60  "
              : " flex item-start flex-col fixed p-12 top-20 -right-[100%] gap-y-12 transition-all duration-600 shadow-md ring-1 bg-white medium-16  ring-slate-900/5 rounded-3xl w-60  "
          }`}
        />
        <div className=" flexBetween sm:gap-x-1 bold-16">
          {/* menu icon */}
          {!menuMobile ? (
            <MdMenu
              onClick={toggleMenue}
              className=" md:hidden w-8 h-8 rounded-full ring-1 hover:ring-secondary ring-slate-900/30 mr-2 p-1 cursor-pointer hover:text-secondary "
            />
          ) : (
            <MdClose
              onClick={toggleMenue}
              className=" md:hidden w-8 h-8 rounded-full ring-1 hover:ring-secondary ring-slate-900/30 mr-2 p-1 cursor-pointer hover:text-secondary "
            />
          )}

          {/* cart icon */}
          <Link to={"/cart"} className="flex">
            <MdShoppingCart className=" ring-1 ring-slate-900/30 hover:ring-secondary w-8 h-8 rounded-full p-1  hover:text-secondary " />
            <span className=" relative bg-secondary w-5 h-5 rounded-full -top-2 flexCenter medium-16 text-white">
              {totalCart()}
            </span>
          </Link>
          {/* btn logout*/}
         {localStorage.getItem("auth-token")? <Link
         onClick={()=> {localStorage.removeItem("auth-token") , window.location.replace('/')}}
            to={"/logout"}
            className="btn_secondary_rounded flexCenter gap-x-2  medium-16"
          >
            <img src={logout} alt="logout" width={19} height={19} />
            Logout
          </Link> 
      
          :<Link
            to={"/login"}
            className="btn_secondary_rounded flexCenter gap-x-2 medium-16"
          >
            <img src={user} alt="login" width={19} height={19} />
            Login
          </Link>}
        </div>
      </div>
    </header>
  );
}

export default Header;

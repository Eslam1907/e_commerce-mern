import logo from "../assets/logo.svg";
import profile from '../assets/profile.png'
function Navbar() {
  return (
    <div className="max_padd_container flexBetween bg-white py-2 relative ring-1 ring-slate-900/5">
      <div className="">
        <img className="" src={logo} />
      </div>
      <div className=" uppercase bg-secondary text-white px-3 tracking-widest bold-22 rounded-md max-xs:py-2 max-xs:px-1 max-xs:bold-18 line-clamp-1  ">Admin panel</div>
      <div>
        <img className=" w-14 h-14 rounded-full " src={profile} alt="" />
      </div>
    </div>
  );
}

export default Navbar;

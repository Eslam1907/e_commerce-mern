import { NavLink } from "react-router-dom"
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from 'react-icons/md'
function Navbar({containerStyles}) {
  return (
   <nav className= {`${containerStyles}`}>
    <NavLink   to={'/'} className={({isActive})=> isActive ? "active_link":""}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
    <NavLink   to={'/men'} className={({isActive})=> isActive ? "active_link":""}><div className="flexCenter gap-x-1"><MdCategory />Men`s</div></NavLink>
    <NavLink   to={'/Women'} className={({isActive})=> isActive ? "active_link":""}><div className="flexCenter gap-x-1"><MdShop2 />Women`s</div></NavLink>
    <NavLink   to={'/kid'} className={({isActive})=> isActive ? "active_link":""}><div className="flexCenter gap-x-1"><MdContacts />Kid`s</div></NavLink>
   </nav>
  )
}

export default Navbar
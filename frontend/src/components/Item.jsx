/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {FaSearch} from 'react-icons/fa'
function Item({id,name,image, old_price, new_price}) {
  return (
  <div className=" flex justify-between">
     <div className=" rounded-xl shadow-lg overflow-hidden xs:w-[165px] sm:w-[250px]">
       <div className="relative flexCenter group transition-all duration-100: " >
           <Link to={`/product/${id}`} className="w-12 h-12 bg-white rounded-full absolute scale-0 group-hover:scale-100 flexCenter z-20 transition-all duration-700 top-1/2 bottom-1/2 "><FaSearch className=" hover:scale-150 hover:rotate-90 transition-all duration-200"/></Link>
           <img onClick={
            window.scrollTo(0,0)
            
            } className=" w-full group-hover:scale-105 transition-all duration-1000 object-cover block" src={image} alt="imageProduct"/>
       </div>
      
       <div className=" overflow-hidden p-4">
           <h4 className=" my-[5px] medium-16 text-gray-50 line-clamp-2">{name}</h4>
          <div className="flex gap-3">
             <div className="bold-15 ">{new_price}$</div>
             <div className="bold-15 text-secondary line-through">{old_price}$</div>
          </div>
       </div>
     </div>
  </div>
  )
}

export default Item
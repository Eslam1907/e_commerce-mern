/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} =useContext(ShopContext)
  return (
    <section >
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2 flex-1">
          {/* left */}
          <div className="flex flex-col gap-[7px] flex-wrap">
            <img
              className=" max-h-[99px]"
              src={product_rt_1}
              alt="productimg"
            />
            <img
              className=" max-h-[99px]"
              src={product_rt_2}
              alt="productimg"
            />
            <img
              className=" max-h-[99px]"
              src={product_rt_3}
              alt="productimg"
            />
            <img
              className=" max-h-[99px]"
              src={product_rt_4}
              alt="productimg"
            />
          </div>
          <div className="">
            <img className="" src={product.image} alt="eslmkmsk" />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col flex-[1.7]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex text-secondary gap-x-2 medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar /> 
            <p className="">(111)</p>
          </div>
        
        <div className="flex gap-x-2 medium-20 my-4">
          <div className=" line-through">{product.old_price}</div>
          <div className=" text-secondary">{product.new_price}</div>
        </div>
        <div className="mb-4">
            <h4 className="bold-16">Select the Size:</h4>
          <div className="flex gap-3 my-3">
              <div className=" ring-2 ring-slate-900 w-10 h-10 flexCenter cursor-pointer ">S</div>
              <div className=" ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer ">M</div>
              <div className=" ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer ">L</div>
              <div className=" ring-2 ring-slate-900/10 w-10 h-10 flexCenter cursor-pointer ">XL</div>
          </div>
          <div className="flex flex-col max-w-[555px] gap-y-3 mb-4">
            
             <button onClick={()=>{addToCart(product.id)}} className="btn_dark_outline !rounded-none tracking-widest uppercase regular-14 text-center">Add to cart  </button>
          
            <button className="btn_dark_rounded !rounded-none tracking-widest uppercase regular-14">Buy it now</button>
          </div>
          <p className=""><span className=" medium-16 text-tertiary">Category:</span> Women | Jacket | Winter</p>
          <p className=""><span className=" medium-16 text-tertiary">Tags:</span> Modern | Latest</p>
        </div>
</div>
      </div>
    </section>
  );
}

export default ProductDisplay;

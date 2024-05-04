import { useContext } from "react"
import { ShopContext } from "../context/Shopcontext"
import {TbTrash} from 'react-icons/tb'
function CartItem() {
    const {getTotalPrice ,all_products , cartItem, removeFromCart} = useContext(ShopContext)
  return (
    <section className="max_padd_container pt-28">
    <table className=" w-full mx-auto">
        <thead>
            <tr className=" bg-slate-900/10 regular-15 sm:regular-18 sm:regular-22 text-start py-12 ">
                <th className=" p-1 py-2">Products</th>
                <th className=" p-1 py-2">Title</th>
                <th className=" p-1 py-2">Ptice</th>
                <th className=" p-1 py-2">Quantity</th>
                <th className=" p-1 py-2">Total</th>
                <th className=" p-1 py-2">Remove</th>
            </tr>
        </thead>
        <tbody>
            {all_products.map((item)=>{
                if(cartItem[item.id]> 0){
                    return <tr key={item.id} className=" border-b border-slate-900/20 text-center p-6 medium-14 text-gray-30 ">
                        <td className="flexCenter "><img src={item.image} alt="image" width={60} height={60} className=" rounded-lg ring-1 my-1 ring-slate-900/5"/></td>
                        <td><div className=" line-clamp-3">{item.name}</div></td>
                        <td>${item.new_price}</td>
                        <td className=" bg-white w-16 h-16 ">{cartItem[item.id]}</td>
                        <td>{cartItem[item.id] * item.new_price}</td>
                        <td><div className="bold-22 pl-14"><TbTrash onClick={()=> removeFromCart(item.id)} /></div></td>
                    </tr>
                }
                return null
            })}
        </tbody>
    </table>

    {/* details of cart */}
    <div className="flex flex-col md:flex-row my-20 bg-white w-full max-w-[666px] rounded-md p-4 sm:p-8 gap-20">
        <div className="flex flex-col gap-10">
            <h4 className="bold-20">Summary</h4>
            <div className="">
                <div className="flexBetween py-4">
                    <h4 className="medium-16">Subtotal:</h4>
                    <h4 className=" text-gray-30 font-semibold">${getTotalPrice()}</h4>
                </div>
                <hr />
                <div className="flexBetween py-4">
                    <h4 className="medium-16">Shipping fee:</h4>
                    <h4 className=" text-gray-30 font-semibold">free</h4>
                </div>
                <hr />
                <div className="flexBetween py-4">
                    <h4 className="bold-18">Total:</h4>
                <h4 className="bold-18">${getTotalPrice()}</h4>
                </div>
                <hr />
            </div>
            <button className="btn_dark_rounded w-44">Checkout</button>
            <div className="flex flex-col gap-10">
                <h4 className=" bold-20 capitalize">Your coupon code Enter here: </h4>
                <div className="flexBetween bg-primary ring-1 rounded-full ring-slate-900/10 pl-3 sm:pl-5 h-12 ">
                    <input className=" bg-transparent border-none outline-none  " type="text" placeholder="Your coupon code" />
                    <button className="btn_dark_rounded">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CartItem
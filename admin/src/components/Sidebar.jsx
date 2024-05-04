import { Link } from "react-router-dom"
import addProduct  from "../assets/addproduct.png"
import productlist from '../assets/productlist.png'
function Sidebar() {
  return (
    <div className="gap-x-2 py-7 gap-y-5 w-full sm:gap-x-4 flex justify-center bg-white lg:max-w-60 lg:h-screen lg:pl-6 lg:justify-start lg:pt-20 lg:flex-col ">
        <Link to={'/addproduct'}>
            <button className="flexCenter gap-2 h-12 w-40 xs:w-44 bg-primary medium-16 " >
                <img src={addProduct} width={45} height={45}  />
                <span className="">Add Product</span>
            </button>
        </Link>
        <Link to={'/listproduct'}>
            <button className="flexCenter gap-2 rounded-md h-12 w-40 xs:w-44 bg-primary medium-16 ">
                <img src={productlist} width={45} height={45}  />
                <span className="">Product List</span>
            </button>
        </Link>
    </div>
  )
}

export default Sidebar
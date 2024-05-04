import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AddProduct from "../components/AddProduct"
import ListProduct from "../components/ListProduct"

function Admin() {
  return (
    <div className=" lg:flex">
        <Sidebar />
        <Routes>
            <Route path="/addproduct"  element={<AddProduct />} />
            <Route path="/listproduct"  element={<ListProduct />} />
        </Routes>
    </div>
  )
}

export default Admin
import Header from "./components/Header";
import {Routes , Route } from 'react-router-dom'
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
export default function App() {
  return (
   <main className="bg-primary text-tertiary ">
    <Header />
   
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/men" element={<Category category= "Men" banner={bannermens} />}/>
      <Route path="/Women" element={<Category category= "women" banner={bannerwomens} />}/>
      <Route path="/kid" element={<Category category= "Kid" banner={bannerkids}/>}/>
      
      <Route path="/product" element={<Product />}/>
      <Route path="/product/:productId" element={<Product />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
   </main>
  )
}
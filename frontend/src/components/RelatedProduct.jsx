import { useEffect, useState } from "react"
// import POPULAR from "../assets/popular"
import Item from "./Item"

function RelatedProduct() {

    const [popularproducts, setPopularproducts] = useState([])
    

useEffect(()=>{
fetch("https://e-commerce-mern-4.onrender.com/popularproducts/").then((res)=>res.json()).then((data)=>setPopularproducts(data))
},[])
  return (
    <section className=" bg-primary" >
    
    <div className=" max_padd_container xl:w-[88%]">
    <h3 className="h3 text-center pt-10">Related Products</h3>
    <hr className="h-[3px] md:w-1/2 from-transparent bg-gradient-to-l via-black mb-16 to-transparent mx-auto "></hr>
        <div className="flex justify-between xs:justify-center flex-wrap gap-8">
            {popularproducts.map((item)=>(
                <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
        
    </div>
        </section>
  )
}

export default RelatedProduct
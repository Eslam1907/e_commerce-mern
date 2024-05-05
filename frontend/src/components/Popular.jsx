// import POPULAR from "../assets/popular"
import { useEffect, useState } from "react"
import Item from "./Item"
import { ColorRing } from "react-loader-spinner"

function Popular() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
     
    
  }, [])
const [popularproducts, setPopularproducts] = useState([])

useEffect(()=>{
fetch("https://e-commerce-mern-4.onrender.com/popularproducts/").then((res)=>res.json()).then((data)=>setPopularproducts(data))
},[])
  return (
    <section >
    
<div className=" max_padd_container ">
<h3 className="h3 text-center pt-10">Popular Products</h3>
<hr className="h-[3px] md:w-1/2 from-transparent bg-gradient-to-l via-black mb-16 to-transparent mx-auto "></hr>
{loading ?<div className="flexCenter"> <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /></div>:
    <div className="flex justify-between xs:justify-center flex-wrap gap-8">
        {popularproducts.map((item)=>(
            <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
    </div>
    }
    
</div>
    </section>
  )
}

export default Popular
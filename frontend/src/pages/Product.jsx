import { useContext } from "react"
import { useParams } from "react-router-dom"
import ProductHd from "../components/ProductHd"
import { ShopContext } from "../context/Shopcontext"
import ProductDisplay from "../components/ProductDisplay"
import ProductDetails from "../components/ProductDetails"
import RelatedProduct from "../components/RelatedProduct"

function Product() {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))
      
  if (!product){
    return <div className="">Product not found!</div>
  }
  return (
    <section className="max_padd_container py-28">
      <div className="">
        <ProductHd product = {product} />
        <ProductDisplay product={product} />
        <ProductDetails />
        <RelatedProduct />
      </div>
    </section>
  )
}

export default Product
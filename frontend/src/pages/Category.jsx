/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import all_products from "../assets/all_products"
import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { motion } from "framer-motion-3d";

function Category({ category, banner }) {
  const { all_products } = useContext(ShopContext);
  return (
    <section className=" max_padd_container py-12 my-5 xl:py-28 ">
      <div>
        <div className="">
          <img className=" block my-7 mx-auto " src={banner} alt="" />
        </div>
        <div className="flexBetween align-middle mx-2 my-8">
          <h5>
            <span className=" font-bold">showing 1-12</span> Out of 36 products{" "}
          </h5>
          <div className="flexBetween gap-3 ring-1  rounded-5xl ring-slate-900/15 max-xs:p-3 px-3 sm:px-8 py-3">
            Sorted by
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="flex md:justify-between xs:justify-center sm:justify-center gap-x-7 flex-wrap gap-y-8">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <motion.div layout
                animate={{ transform:"scale(1)" }}
                initial={{ transform:"scale(0)" }}
                transition={{duration: 0.8}}  key={item.id}>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </motion.div>
              );
            }
          })}
        </div>
        <div className=" text-center mt-20">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
    </section>
  );
}

export default Category;

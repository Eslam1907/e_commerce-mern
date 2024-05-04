import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
function ListProduct() {
  const [allProduct, setAllProduct] = useState([]);
  const fetchUrl = async () => {
    await fetch("https://e-commerce-mern-3-d0ep.onrender.com/allproduct/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const Remove_Product = async (id) => {
    await fetch("https://e-commerce-mern-3-d0ep.onrender.com/removeproduct/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    await fetchUrl();
  };

  return (
    <div className="p-2 box-border mb-0 bg-white mt-4 rounded-sm w-full sm:p-4 sm:m-7 ">
      <h4 className="bold-22 p-4 uppercase">Product List</h4>
      <div className="max-h-[77vh] overflow-auto mx-4 text-center">
        <table className="w-full mx-auto">
          <thead className="">
            <tr className=" bg-primary py-12 bold-14 sm:regular-22 text-start ">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Categoty</th>
              <th className="p-2">Old price</th>
              <th className="p-2">New price</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody className="">
            {allProduct.map((product, i) => (
              <tr
                key={i}
                className=" border-b border-slate-900/20 p-4 text-gray-20 medium-14"
              >
                <td className="flexStart sm:flexCenter my-1">
                  <img
                    className=" rounded-lg ring-1 ring-slate-900/10"
                    width={43}
                    height={43}
                    src={product.image}
                  />
                </td>
                <td className=" max-w-20 sm:w-full ">
                  <div className=" line-clamp-3 ">{product.name}</div>
                </td>
                <td className="">{product.category}</td>
                <td className="">${product.old_price}</td>
                <td className="">${product.new_price}</td>
                <td className="">
                  <div className=" bold-22 pl-6 sm:pl-14 cursor-pointer">
                    <TbTrash onClick={() => Remove_Product(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProduct;

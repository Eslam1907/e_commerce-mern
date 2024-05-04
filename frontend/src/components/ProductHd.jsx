/* eslint-disable react/prop-types */
import { TbArrowRight } from "react-icons/tb";




function ProductHd(props) {

  const {product} = props;

  return (
    <div className="flex items-center flex-wrap gap-x-2 my-5 medium-18  ">
      Home <TbArrowRight /> shop <TbArrowRight />
      {product.category}
      <TbArrowRight />
      {product.name}
    </div>
  );
}

export default ProductHd;

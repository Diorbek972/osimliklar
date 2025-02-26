
// icon

import { FcLike } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
export default function PlantscCategoria({image, decription, price}) {
  return (
    <div>
          <div>
      <img src={image} className="img-fluid" alt="" />
      <SlBasket  className="mx-3 icons text-success"/>
      <FcLike className="mx-3 icons"/><CiSearch className="mx-3 icons"/>
      <h4 className="my-3">{decription}</h4>
      <h4 className="text-success">{price}</h4>
    </div>
    </div>
  )
}

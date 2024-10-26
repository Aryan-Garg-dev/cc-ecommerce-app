import { OrderedProduct } from "@/types/product";
import getProductById from "./get-product-by-id";

const getTotalCartValue = async (cart: OrderedProduct[])=>{
  let totalValue  = 0;
  for (const item of cart){
    const product = await getProductById(item.id);
    totalValue += product.price * item.quantity;
  }
  return totalValue;
}

export default getTotalCartValue;
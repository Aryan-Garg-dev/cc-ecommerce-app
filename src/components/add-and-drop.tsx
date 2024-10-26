import useCart from "@/hooks/use-cart";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

const AddAndDrop = ({
  id
}: {
  id: string
}) => {
  const cart = useCart();

  const addToCart = (id: string)=>{
    cart.add(id);
    console.log(cart.data);
    toast.success("item has been added to cart");
  }

  const removeFromCart = (id: string)=>{
    if (cart.count(id) >= 1){
      cart.remove(id);
      toast.success("Item has been removed from cart");
    } else toast.error("Item is not present in cart");
  }
  return (  
    <div className="flex items-center gap-4">
      <div className="p-1 rounded-full border" onClick={()=>removeFromCart(id)}><Minus className="size-4" /></div>
      {cart.count(id)}
      <div className="p-1 rounded-full border" onClick={()=>addToCart(id)}><Plus className="size-4" /></div>
    </div>
  );
}
 
export default AddAndDrop;
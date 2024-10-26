import { icons } from "@/assets";
import AddAndDrop from "@/components/add-and-drop";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import useProductId from "@/hooks/use-product-id";
import getTotalCartValue from "@/lib/get-total-cart-value";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { roundOff } from "@/lib/round-off-value";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const cart = useCart();
  const navigate = useNavigate();

  const [totalValue, setTotalValue] = useState(0);

  useEffect(()=>{
    getTotalCartValue(cart.data).then(value=>{
      setTotalValue(value);
    })
  }, [cart.data]);

  return (    
    <div className="w-full h-full min-h-screen md:grid md:grid-cols-2 max-md:mb-10">
      <div className="hidden md:flex justify-center items-center">
        <img src={icons.site} alt="shop" />
      </div>
      {cart.data.length === 0 
      ? <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div className=""><ShoppingCart className="size-28" /></div>
        <div className="font-playwrite lg:text-5xl md:text-4xl sm:text-3xl text-2xl">The cart is empty</div>
      </div>
      : <div className="flex flex-col px-10 gap-2 py-5 md:pt-10">
          <div className="w-full text-center font-poppins text-xl pl-1 py-0.5 text-stone-700 border rounded-lg bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200">Cart</div>
          {cart.data.map((item, index)=>(
            <div key={index} className="flex">
              <ProductDetails id={item.id} />
            </div>
          ))}
          <div className="w-full flex justify-center border py-1 rounded-md bg-gradient-to-tr from-red-50 via-blue-50 to-green-50">
            <div className="font-bebas text-lg text-gray-700 tracking-wide">
              Total Cart Value: 
              <span className="text-gray-800 ml-1">${roundOff(totalValue)}</span>
            </div>
          </div>
          <Button className="mt-2 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:via-slate-100 hover:to-slate-200 active:scale-95 font-poppins text-neutral-900" onClick={()=>navigate("/checkout")}>
            Buy Now
          </Button>
        </div>
      }
    </div>
  );
}

const ProductDetails = ({id}:{id: string})=>{
  const { product, loading } = useProductId(id);
  if (loading) return <div></div>
  return (
    <div className="flex w-full justify-between max-md:flex-col gap-10 max-md:gap-2 border pr-2 rounded shadow-sm border-neutral-200">
      <Link className="flex gap-4" to={`/products/${id}`}>
        <div className="p-1 border-2 border-neutral-500 shadow-sm rounded w-16 h-16 flex justify-center items-center"><img src={product?.image} className="size-12" /></div>
        <div className="flex flex-col justify-center">
          <div className="truncate text-wrap font-oswald">{product?.title}</div>
          <div className="truncate text-wrap font-oswald text-neutral-500">{product?.category}</div>
        </div>
      </Link>
      <div className="flex items-center max-md:justify-center max-md:mb-2"><AddAndDrop id={id} /></div>
    </div>
  )
}
 
export default Cart;  

import useProductId from "@/hooks/use-product-id";
import { useParams } from "react-router-dom";
import { Loading } from "../loading";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { toast } from "sonner";
import AddAndDrop from "@/components/add-and-drop";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading } = useProductId(id || "");
  const [ hovering, setHovering ] = useState(false)
  const cart = useCart();

  const addToCart = (id: string)=>{
    cart.add(id);
    console.log(cart.data);
    toast.success("item has been added to cart");
  }
  console.log(cart.data);
  if (loading || !id) return <Loading />
  return (  
    <div className="w-full h-full min-h-screen md:grid md:grid-cols-2 flex flex-col">
      <div className="bg-white flex justify-center items-center">
        <Lens zoomFactor={1.5} lensSize={192} hovering={hovering} setHovering={setHovering}>
          <img src={product?.image} className="size-96" />
        </Lens>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:px-24 px-12 max-md:mt-10 bg-slate-50">
        <div className="flex flex-col justify-center items-center">
          <div className="font-montserrat font-bold text-3xl text-center">{product?.title}</div>
          <div className="font-montserrat text-neutral-600 text-lg">{product?.category}</div>
          <p className="font-open_sans text-center text-xl">{product?.description}</p>
        </div>
        <div className="font-oswald font-semibold text-3xl text-neutral-800">MRP: ${product?.price}</div>
        <div className="flex justify-around w-full">
          <div className="flex justify-center items-center gap-1">
            <FaStar className="text-yellow-500 size-6" />
            <div className="text-xl font-oswald">{product?.rating.rate}</div>
          </div>
          <div className="font-oswald text-xl">{product?.rating.count} ratings</div>
        </div>
        {cart.count(id) >= 1 && <AddAndDrop id={id} />}
        <Button className="my-5 flex bg-slate-200 hover:bg-slate-300 text-black active:scale-95" onClick={()=>addToCart(id || "")}>
          <div>Add to Cart</div>
          <BsCartPlus />
        </Button>
      </div>
    </div>
  );
}
 
export default ProductDetails;
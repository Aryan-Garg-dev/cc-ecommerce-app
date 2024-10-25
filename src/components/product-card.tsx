import { Lens } from "@/components/ui/lens";
import { Product } from "@/types/product";
import { useState } from "react";
import "./product-card.css"
import { Link } from "react-router-dom";
import { Image } from "lucide-react";

export type ProductCardProps = {
  product: Product
  className?: string
  titleColor?: string,
  categoryColor?: string,
  priceColor?: string
}

const ProductCard = ({
  product,
  className,
  priceColor,
  titleColor,
  categoryColor,
}: ProductCardProps) => {
  const [ hovering, setHovering ] = useState(false);
  return (  
    <Link to={`/products/${product.id}`}>
      <div className={`flex flex-col rounded-xl items-center justify-around bg-purple-200 max-w-80 max-md:max-w-72 max-sm:max-w-60 p-2 py-4 border gap-2 gradient mx-1 select-none ${className}`}>
        <div className="p-5 bg-white w-fit rounded-2xl flex justify-center shadow-md mx-2 hover:shadow-inner hover:shadow-slate-400 hover:bg-slate-50 select-none">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img src={product.image} alt={product.title} className="rounded-2xl size-60 max-md:size-48 max-sm:size-36" />
          </Lens>
        </div>
        <div className="w-full flex flex-col item-start gap-2 px-4">
          <div className="font-poppins text-lg max-md:text-base max-sm:text-sm truncate" style={{color: titleColor}}>{product.title}</div>
          <div className="font-raleway text-gray-700 max-md:text-sm" style={{color: categoryColor}}>{product.category}</div>
          <div className="font-oswald text-blue-950 font-semibold max-md:text-sm" style={{ color: priceColor }}>MRP : ${product.price}</div>
        </div>
      </div>
    </Link>
  );
}

export const ProductCardSkeleton = ({
  className
}: {
  className?: string
})=>{
  return (
    <div className={`flex flex-col rounded-xl items-center justify-around bg-purple-200 max-w-80 max-md:max-w-72 max-sm:max-w-60 p-2 py-4 border gap-2 gradient mx-1 ${className}`}>
      <div className="p-5 w-fit rounded-2xl flex justify-center shadow-md mx-2 bg-purple-50">
          <div className="rounded-2xl size-60 max-md:size-48 max-sm:size-36 animate-pulse flex justify-center items-center">
            <Image className="text-neutral-500 size-16" />
          </div>
      </div>
      <div className="w-full flex flex-col item-start gap-2 px-4 mt-2 animate-pulse">
        <div className="h-3 bg-purple-50 rounded-full mb-2"></div>
        <div className="h-3 bg-purple-50 rounded-full mb-2"></div>
        <div className="h-3 bg-purple-50 rounded-full mb-2"></div>
      </div>
    </div>
  )
}
 
export default ProductCard;
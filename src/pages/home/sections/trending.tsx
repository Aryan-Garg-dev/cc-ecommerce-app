import Marquee from "@/components/ui/marquee";
import useProducts from "@/hooks/use-products";
import ProductCard, { ProductCardSkeleton } from "@/components/product-card";

const Trending = () => {
  const { products, loading } = useProducts(6);
  return (  
    <div className="w-full min-w-screen bg-slate-50 shadow-lg py-4">
      <div className="font-bebas md:text-6xl text-4xl md:ml-16 ml-5 text-slate-800 text-left">Trending This Week</div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:20s]">
            {loading && Array(5).fill({}).map((_, index)=>(
              <ProductCardSkeleton key={index} />
            ))}
            {!loading && products.map((product, index)=>(
              <ProductCard product={product} key={index} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-purple-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-purple-50 dark:from-background"></div>
        </div>
      </div>
  );
}
 
export default Trending;
import Marquee from "@/components/ui/marquee";
import useProducts from "@/hooks/use-products";
import ProductCard, { ProductCardSkeleton } from "@/components/product-card";

const BestSellers = () => {
  const { products, loading } = useProducts(12);
  return (  
    <div className="w-full min-w-screen bg-slate-200 shadow-lg py-4">
      <div className="font-bebas md:text-6xl text-4xl md:mr-16 mr-5 text-gray-800 text-right">Our Bestsellers</div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:20s]" reverse>
            {loading && Array(5).fill({}).map((_, index)=>(
              <ProductCardSkeleton key={index} className="gradient-dark" />
            ))}
            {!loading && products.map((product, index)=>(
              index > 6 && <ProductCard product={product} key={index} className="gradient-dark" priceColor="#1f2937" />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-100 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-100 dark:from-background"></div>
        </div>
      </div>
  );
}
 
export default BestSellers;
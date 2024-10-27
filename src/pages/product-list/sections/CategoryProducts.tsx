import ProductCard, { ProductCardProps, ProductCardSkeleton } from "@/components/product-card";
import useCategoryProducts from "@/hooks/use-category-products";
import { CATEGORY } from "@/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CategoryProductsProps = {
  category: CATEGORY,
  titleClass?: string,
  containerClass?: string
} & Omit<ProductCardProps, 'product'>;

const CategoryProducts = (props: CategoryProductsProps) => {
  const { products, loading } = useCategoryProducts(props.category);
  return (  
    <div className={`w-full px-20 pt-8 pb-10 ${props.containerClass}`}>
      <div className={`md:text-5xl text-4xl tracking-tight font-oswald font-medium capitalize mb-5 ${props.titleClass}`}>{props.category}</div>
      <Carousel className="w-full max-w-screen-2xl">
        <CarouselContent>  
          {loading && Array.from({ length: 6 }).map((_, index)=>(
            <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 w-fit"><ProductCardSkeleton className={props.className} /></CarouselItem>
          ))}
          {!loading && products.map((product, index)=>(
            <CarouselItem key={index} className="w-fit lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
              <ProductCard 
                product={product}
                categoryColor={props.categoryColor}
                className={props.className}
                priceColor={props.priceColor}
                titleColor={props.titleColor}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
 
export default CategoryProducts;
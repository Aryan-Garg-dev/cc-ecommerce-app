import { useEffect, useState } from "react";
import { Product } from "@/types/product"
import { endpoints } from "@/constants";
import axios from "axios"

const useCategoryProducts = (category: string, sortByPrice: boolean = true)=>{
  const [ products, setProducts ] = useState<Product[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const url = `${endpoints.getProducts}/category/${category}`;
  useEffect(()=>{
    axios.get(url).then((response) => {
      setProducts(response.data);
      setLoading(false);
    }).catch(error=>{
      console.log(error);
    })
  }, [url]);
  if (sortByPrice) products.sort((productA, productB)=>(productA.price - productB.price));
  return { products, loading };
}

export default useCategoryProducts;

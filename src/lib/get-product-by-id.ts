import { endpoints } from "@/constants";
import { Product } from "@/types/product";
import axios from "axios";

const getProductById =  async (id: string)=>{
  const url = `${endpoints.getProducts}/${id}`;
  const response = await axios.get(url);
  return response.data as Product;
}

export default getProductById;
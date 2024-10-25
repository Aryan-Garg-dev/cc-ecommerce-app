import { OrderedProduct } from "@/types/product";
import { atom } from "recoil";

export const cartAtom = atom({
  key: "cartAtom",
  default: [] as OrderedProduct[]
})
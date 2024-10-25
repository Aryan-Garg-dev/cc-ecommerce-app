export type Product = {
  id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    count: number,
    rate: number,
  }
}

export type OrderedProduct = Product & {
  quantity: number
}

export enum CATEGORY {
  electronics = "electronics",
  jewelery = "jewelery",
  mens = "men's clothing",
  womens = "women's clothing"
}
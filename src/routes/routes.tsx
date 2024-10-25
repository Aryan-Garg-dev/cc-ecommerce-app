import { lazy } from "react";
import { RouteData } from "@/types/routes";
import { Loading } from "@/pages/loading";

const HomeLayout = lazy(()=>import("@/pages/home/layout"));
const ProductDetailsLayout = lazy(()=>import("@/pages/product-details/layout"));
const ProductListLayout = lazy(()=>import("@/pages/product-list/layout"));
const CartLayout = lazy(()=>import("@/pages/cart/layout"));

const HomePage = lazy(()=>import("@/pages/home/page"))
const ProductDetailsPage = lazy(()=>import("@/pages/product-details/page"))
const ProductListPage = lazy(()=>import("@/pages/product-list/page"))
const CartPage = lazy(()=>import("@/pages/cart/page"))
const NotFoundPage = lazy(()=>import("@/pages/not-found"));

export const routes: RouteData[] = [
  { path: "/", page: <HomeLayout><HomePage /></HomeLayout> },
  { path: "/products", page: <ProductListLayout><ProductListPage /></ProductListLayout> },
  { path: "/products/:id", page: <ProductDetailsLayout><ProductDetailsPage /></ProductDetailsLayout> },
  { path: "/cart", page: <CartLayout><CartPage /></CartLayout> },
  { path: "/test", page: <Loading /> },
  { path: "*", page: <NotFoundPage /> },
]
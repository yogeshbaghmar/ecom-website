'use client'
import Image from "next/image";
import Banner from "./Components/Home/Banner";
import Sidebar from "./Components/Products/Sidebar";
import Productlisting from "./Components/Products/Productlisting";
import Cart from "./Components/Page/Cart";
import WishlistSidebar from "./Components/Wishlist/WishlistSidebar";
import WishListProduct from "./Components/Wishlist/WishListProduct";
import Header from "./Components/Common/Header";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
        <Banner/>
        <section
        class="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">   
      </section> 
    </>
  );
}

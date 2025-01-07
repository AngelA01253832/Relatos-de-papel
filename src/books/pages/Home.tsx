import { books, salesImages } from "../../data";
import { ShopLayout } from "../../layouts";
import { BooksGrid, SalesCarousel } from "../components";

export const Home = () => {
  return (
    <ShopLayout>
      {/* carousel */}
      <SalesCarousel salesImages={salesImages} />
      <h3 className="font-bold text-3xl mt-20">Our Books</h3>
      <BooksGrid books={books} />
    </ShopLayout>
  );
};

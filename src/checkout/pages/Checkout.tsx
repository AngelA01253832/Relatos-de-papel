import { Link } from "react-router-dom";
import { BooksInCart, PlaceOrder } from "../components";
import { ShopLayout } from "../../layouts";

export const Checkout = () => {
  return (
    <ShopLayout title={""}>
      <div className="flex justify-center items-center mt-20 mb-72 px-10 sm:px-0">
        <div className="flex flex-col w-[1000px]">
          <h1 title="Order Summary" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col mt-5">
              <span className="text-xl">Modify elements</span>
              <Link to="/cart" className="underline mb-5">
                Edit Cart
              </Link>

              <BooksInCart />
            </div>

            <PlaceOrder />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

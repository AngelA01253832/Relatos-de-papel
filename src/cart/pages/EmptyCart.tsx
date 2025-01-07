import { IoCartOutline } from "react-icons/io5";
import { ShopLayout } from "../../layouts";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <ShopLayout title="Empty Cart">
      <div className="flex justify-center items-center h-[800px]">
        <IoCartOutline size={80} className="mx-5" />

        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">Your cart it's empty</h1>

          <Link to="/" className="text-blue-500 mt-2 text-4xl">
            Home
          </Link>
        </div>
      </div>
    </ShopLayout>
  );
};

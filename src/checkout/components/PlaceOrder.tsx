import { useContext, useState } from "react";
import { CartContext } from "../../cart/context";
import { format } from "../../utils/currency";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const PlaceOrder = () => {
  const { numberOfItems, total, shippingAddress, initCartState } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);
  const onPlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Order paid successfully",
      }).then(() => {
        initCartState();
        navigate("/");
      });
    }, 2000);
  };
  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl mb-2">Shipping Address</h2>
      <div className="mb-10">
        <p className="text-xl">
          <span className="font-bold">Customer: </span>{" "}
          {shippingAddress!.firstName} {shippingAddress!.lastName}
        </p>
        <p className="mt-6">
          <span className="font-bold">Main Address: </span>
          {shippingAddress!.address}
        </p>

        {shippingAddress!.address2 && (
          <p>
            <span className="font-bold">Second Address: </span>
            {shippingAddress!.address2}
          </p>
        )}

        <p>
          <span className="font-bold">Zip Code: </span>
          {shippingAddress!.zip}
        </p>
        <p>
          <span className="font-bold">City: </span>
          {shippingAddress!.city}, {shippingAddress!.country}
        </p>
        <p>
          <span className="font-bold">Phone: </span>
          {shippingAddress!.phone}
        </p>
      </div>

      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Order Summary</h2>

      <div className="grid grid-cols-2">
        <span>Number of Products:</span>
        <span className="text-right">
          {numberOfItems === 1 ? "1 book" : `${numberOfItems} books`}
        </span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">{format(total)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5 text-center">
          {/* Disclaimer */}
          <span className="text-xs">
            By clicking on{" "}
            <span className="font-bold">&quot;Payment&quot;</span>, you agree to
            our{" "}
            <a href="#" className="underline">
              terms and conditions
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </span>
        </p>

        <button
          className="flex w-full disabled:bg-gray-500 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={onPlaceOrder}
          disabled={isPlacingOrder}
        >
          Payment
        </button>
      </div>
    </div>
  );
};

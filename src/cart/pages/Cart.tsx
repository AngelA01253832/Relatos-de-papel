import { Link, useNavigate } from "react-router-dom";
import { ShopLayout } from "../../layouts";
import { useContext, useEffect } from "react";
import { CartContext } from "../context";
import { ItemCounter } from "../../books/components";
import { BookCart } from "../models";
import { currency } from "../../utils";

export const Cart = () => {
  const navigate = useNavigate();

  const { cart, updateCartQuantity, removeBookCart, total, numberOfItems } =
    useContext(CartContext);

  const onNewCartQuantity = (book: BookCart, newQuantityValue: number) => {
    book.quantity = newQuantityValue;
    updateCartQuantity(book);
  };

  useEffect(() => {
    if (numberOfItems === 0) {
      navigate("/cart/empty");
    }
  }, [numberOfItems]);

  return (
    <ShopLayout>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Cart Items */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700">
                Shopping Cart
              </span>
            </div>

            {/* Continue Shopping Link */}
            <Link to="/" className="underline font-medium mt-2 block">
              Continue Shopping
            </Link>

            {/* Cart Items */}
            {cart.map((book) => (
              <div
                key={book.slug}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 space-x-4 mb-4"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-800">
                    {book.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currency.format(book.price)}
                  </p>
                  <ItemCounter
                    currentValue={book.quantity}
                    maxValue={book.inStock}
                    updatedQuantity={(newValue) =>
                      onNewCartQuantity(book, newValue)
                    }
                  />
                </div>
                <button
                  onClick={() => removeBookCart(book)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-[350px] flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>No. of Books</span>
                <span>
                  {numberOfItems} {numberOfItems === 1 ? "book" : "books"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">
                  {currency.format(total)}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/checkout/address"
                className="flex w-full disabled:bg-gray-500 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

import { FC, useContext, useState } from "react";
import { ItemCounter, Rating } from ".";
import { Book } from "../models";
import { BookCart } from "../../cart/models";
import { CartContext } from "../../cart/context";
import { useNavigate } from "react-router-dom";
import { currency } from "../../utils";

interface Props {
  book: Book;
}

export const BookDetails: FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  const [tempBookCart, setTempBookCart] = useState<BookCart>({
    id: book.id,
    coverImage: book.coverImage,
    price: book.price,
    title: book.title,
    slug: book.slug,
    inStock: book.inStock,
    quantity: 1,
  });

  const { addBookToCart } = useContext(CartContext);

  const onAddBook = () => {
    addBookToCart(tempBookCart);
    navigate("/cart");
  };

  const onUpdateQuantity = (newQuantity: number) => {
    setTempBookCart((currentBook) => ({
      ...currentBook,
      quantity: newQuantity,
    }));
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Book Genre and Title */}
      <div className="mb-6">
        <p className="text-lg font-medium leading-8 text-indigo-600">
          {book.genre}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 capitalize mb-4">
          {book.title}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
          <h6 className="text-2xl font-semibold text-gray-900 sm:border-r border-gray-200 pr-5 sm:mr-5">
            {currency.format(book.price)}
          </h6>
          <div className="flex items-center gap-2">
            <Rating rating={book.rating} />
          </div>
        </div>
      </div>

      {/* Book Description */}
      <div className="mb-6">
        <p className="text-sm text-gray-700">{book.description}</p>
      </div>

      {/* Add to Cart Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
        <ItemCounter
          currentValue={tempBookCart.quantity}
          updatedQuantity={onUpdateQuantity}
          maxValue={tempBookCart.inStock}
        />
        <button
          onClick={onAddBook}
          className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

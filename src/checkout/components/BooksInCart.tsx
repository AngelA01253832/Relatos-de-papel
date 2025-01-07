import { useContext } from "react";
import { format } from "../../utils/currency";
import { CartContext } from "../../cart/context";

export const BooksInCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((book) => (
        <div key={book.id} className="flex mb-5">
          <img
            src={book.coverImage}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={book.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
              {book.title} ({book.quantity})
            </span>

            <p className="font-bold">{format(book.price * book.quantity)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

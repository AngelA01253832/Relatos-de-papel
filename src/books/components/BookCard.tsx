import { FC } from "react";
import { Book } from "../models";
import { Link } from "react-router-dom";
import { currency } from "../../utils";
import { BookRating } from ".";

interface Props {
  book: Book;
}

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={`/books/${book.slug}`}
      >
        <img
          className="object-cover mx-auto"
          src={book.coverImage}
          alt={book.title}
        />
        {book.inStock === 0 && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            Unavailable
          </span>
        )}
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to={`/books/${book.slug}`}>
          <h5 className="text-xl tracking-tight text-slate-900">
            {book.title}
          </h5>
        </Link>
        <p className="text-xs p-2">{`By ${book.author}`}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {currency.format(book.price)}
            </span>
            {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
          </p>
          <div className="flex items-center">
            <BookRating rating={book.rating} />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {book.rating}
            </span>
          </div>
        </div>
        <Link to={`/books/${book.slug}`}>
          <button
            disabled={book.inStock === 0}
            className="flex w-full disabled:bg-gray-500 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {book.inStock === 0 ? "Unavailable" : "Details"}
          </button>
        </Link>
      </div>
    </div>
  );
};

{
}

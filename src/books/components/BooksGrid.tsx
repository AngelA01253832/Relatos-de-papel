import { FC } from "react";
import { Book } from "../models";
import { BookCard } from ".";

interface Props {
  books: Book[];
}
export const BooksGrid: FC<Props> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

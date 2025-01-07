import { useSearchParams } from "react-router-dom";
import { ShopLayout } from "../../layouts";
import { useEffect, useState } from "react";
import { books } from "../../data";
import { Book } from "../../books/models";
import { BooksGrid } from "../../books/components";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term") || "";
  const [booksResults, setBooksResults] = useState<Book[]>([]);

  useEffect(() => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setBooksResults(filteredBooks);
  }, [searchTerm]);

  return (
    <ShopLayout>
      {`Results for: ${searchTerm}`}
      <BooksGrid books={booksResults} />
    </ShopLayout>
  );
};

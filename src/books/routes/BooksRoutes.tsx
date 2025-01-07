import { Route, Routes } from "react-router-dom";
import { Home, Book } from "../pages";
import { NotFound } from "../../ui/components";

export const BooksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:slug" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

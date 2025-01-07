import { Route, Routes } from "react-router-dom";
import { BooksRoutes } from "../books/routes/BooksRoutes";
import { CartRoutes } from "../cart/routes/CartRoutes";
import { SearchRoutes } from "../search/routes/SearchRoutes";
import { CheckOutRoutes } from "../checkout/routes/CheckOutRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<BooksRoutes />} />
      <Route path="/cart/*" element={<CartRoutes />} />
      <Route path="/search/*" element={<SearchRoutes />} />
      <Route path="/checkout/*" element={<CheckOutRoutes />} />
    </Routes>
  );
};

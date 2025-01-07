import { Route, Routes } from "react-router-dom";
import { Cart, EmptyCart } from "../pages";
import { NotFound } from "../../ui/components";

export const CartRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="empty" element={<EmptyCart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

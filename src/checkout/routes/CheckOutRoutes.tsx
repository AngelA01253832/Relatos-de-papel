import { Route, Routes } from "react-router-dom";
import { Address, Checkout } from "../pages";
import { NotFound } from "../../ui/components";

export const CheckOutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

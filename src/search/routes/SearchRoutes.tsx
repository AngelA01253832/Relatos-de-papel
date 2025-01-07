import { Route, Routes } from "react-router-dom";
import { Search } from "../pages/Search";
import { NotFound } from "../../ui/components";

export const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

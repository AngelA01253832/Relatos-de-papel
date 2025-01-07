import { FC } from "react";
import { Navbar, SideBar } from "../ui/components";

interface Props {
  children: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <SideBar />
      <div className="flex-1 px-0 sm:px-10 bg-gray-100">{children}</div>
    </main>
  );
};

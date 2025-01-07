import { FC } from "react";
import { Navbar, SideBar } from "../ui/components";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const ShopLayout: FC<Props> = ({ children, title }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <SideBar />
      <div className="flex-1 px-0 sm:px-10 bg-gray-100">
        {/* <h1 className="antialiased text-4xl font-semibold my-7">{title}</h1> */}
        {children}
      </div>
    </main>
  );
};

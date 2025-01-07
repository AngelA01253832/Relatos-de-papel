import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const SideBarContext = createContext({} as ContextProps);

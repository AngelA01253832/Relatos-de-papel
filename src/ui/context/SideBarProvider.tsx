import { FC, useReducer } from "react";
import { SideBarContext, sideBarReducer } from ".";

export interface SideBarState {
  isMenuOpen: boolean;
}
interface Props {
  children: React.ReactNode;
}

const SIDEBAR_INITIAL_STATE: SideBarState = {
  isMenuOpen: false,
};

export const SideBarProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(sideBarReducer, SIDEBAR_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "[SideBar] - ToggleMenu" });
  };

  return (
    <SideBarContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

import { SideBarState } from "./SideBarProvider";

type SideBarAction = { type: "[SideBar] - ToggleMenu" };

export const sideBarReducer = (
  state: SideBarState,
  action: SideBarAction
): SideBarState => {
  switch (action.type) {
    case "[SideBar] - ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};

import { CartState } from ".";
import { Address } from "../../checkout/models";
import { BookCart } from "../models";

type CartActionType =
  | { type: "[Cart] - LoadCart"; payload: BookCart[] }
  | { type: "[Cart] - Update products in cart"; payload: BookCart[] }
  | { type: "[Cart] - Change cart quantity"; payload: BookCart }
  | { type: "[Cart] - Remove book in cart"; payload: BookCart }
  | { type: "[Cart] - LoadAddress from Cookies"; payload: Address }
  | { type: "[Cart] - Init State" }
  | { type: "[Cart] - Update Address"; payload: Address }
  | {
      type: "[Cart] - Update order summary";
      payload: {
        numberOfItems: number;
        total: number;
      };
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Update products in cart":
      return {
        ...state,
        cart: [...action.payload],
      };

    case "[Cart] - Change cart quantity":
      return {
        ...state,
        cart: state.cart.map((book) => {
          if (book.id !== action.payload.id) return book;

          return action.payload;
        }),
      };
    case "[Cart] - Remove book in cart":
      return {
        ...state,
        cart: state.cart.filter((book) => {
          if (book.id === action.payload.id) {
            return false;
          }
          return true;
        }),
      };
    case "[Cart] - Update order summary":
      return {
        ...state,
        ...action.payload,
      };
    case "[Cart] - Update Address":
    case "[Cart] - LoadAddress from Cookies":
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case "[Cart] - Init State":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

import { createContext } from "react";
import { BookCart } from "../models";
import { Address } from "../../checkout/models";

interface ContextProps {
  cart: BookCart[];
  numberOfItems: number;
  total: number;

  shippingAddress?: Address;

  addBookToCart: (book: BookCart) => void;
  updateCartQuantity: (book: BookCart) => void;
  removeBookCart: (book: BookCart) => void;
  updateAddress: (address: Address) => void;
  initCartState: () => void;
}

export const CartContext = createContext({} as ContextProps);

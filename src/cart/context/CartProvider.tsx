import { FC, useEffect, useReducer } from "react";
import Cookie from "js-cookie";
import { CartContext, cartReducer } from ".";
import { BookCart } from "../models";
import { Address } from "../../checkout/models";

interface Props {
  children: React.ReactNode;
}
export interface CartState {
  cart: BookCart[];
  numberOfItems: number;
  total: number;
  shippingAddress?: Address;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  total: 0,
  shippingAddress: undefined,
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieBooks = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({ type: "[Cart] - LoadCart", payload: cookieBooks });
    } catch (error) {
      dispatch({ type: "[Cart] - LoadCart", payload: [] });
    }
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    if (Cookie.get("firstName")) {
      const shippingAddress = {
        firstName: Cookie.get("firstName") || "",
        lastName: Cookie.get("lastName") || "",
        address: Cookie.get("address") || "",
        address2: Cookie.get("address2") || "",
        zip: Cookie.get("zip") || "",
        city: Cookie.get("city") || "",
        country: Cookie.get("country") || "",
        phone: Cookie.get("phone") || "",
      };

      dispatch({
        type: "[Cart] - LoadAddress from Cookies",
        payload: shippingAddress,
      });
    }
  }, []);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const total = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );
    const orderSummary = {
      numberOfItems,
      total,
    };
    dispatch({ type: "[Cart] - Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addBookToCart = (book: BookCart) => {
    const bookInCart = state.cart.some((b) => b.id === book.id);
    if (!bookInCart)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, book],
      });

    const updatedBooks = state.cart.map((b) => {
      if (b.id !== book.id) return b;

      b.quantity += book.quantity;
      return b;
    });

    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updatedBooks,
    });
  };

  const updateCartQuantity = (book: BookCart) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: book });
  };

  const removeBookCart = (book: BookCart) => {
    dispatch({ type: "[Cart] - Remove book in cart", payload: book });
  };
  const updateAddress = (address: Address) => {
    Cookie.set("firstName", address.firstName);
    Cookie.set("lastName", address.lastName);
    Cookie.set("address", address.address);
    Cookie.set("address2", address.address2 || "");
    Cookie.set("zip", address.zip);
    Cookie.set("city", address.city);
    Cookie.set("country", address.country);
    Cookie.set("phone", address.phone);

    dispatch({ type: "[Cart] - Update Address", payload: address });
  };

  const initCartState = () => {
    Cookie.remove("cart");
    dispatch({ type: "[Cart] - Init State" });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addBookToCart,
        updateCartQuantity,
        removeBookCart,
        updateAddress,
        initCartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

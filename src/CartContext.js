import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    if (index !== -1) {
      setCartItems((prevCartItems) => {
        const copy = prevCartItems.slice();
        copy.splice(index, 1, { product, quantity });
        return copy;
      });
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.slice().concat({ product, quantity })
      );
    }
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    setCartItems((prevCartItems) => {
      const copy = prevCartItems.slice();
      const cartItem = cartItems[index];
      if (cartItem.quantity > 1) {
        copy.splice(index, 1, { product, quantity: --cartItem.quantity });
        return copy;
      } else {
        copy.splice(index, 1);
        return copy;
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

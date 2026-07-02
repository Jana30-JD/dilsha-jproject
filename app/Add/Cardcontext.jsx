"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from LocalStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add Item
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          selected: false,
        },
      ]);
    }
  };

  // Remove One Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Select One Item
  const toggleSelect = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  // Select All
  const selectAll = () => {
    const allSelected = cart.every((item) => item.selected);

    setCart(
      cart.map((item) => ({
        ...item,
        selected: !allSelected,
      }))
    );
  };

  // Delete Selected
  const deleteSelected = () => {
    setCart(cart.filter((item) => !item.selected));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        toggleSelect,
        selectAll,
        deleteSelected,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
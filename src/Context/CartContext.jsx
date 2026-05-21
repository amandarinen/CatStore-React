import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(cat) {
    if (cart.some(c => c.id === cat.id)) {
      alert('This cat is already in your cart!');
      return;
    }
    setCart([...cart, cat]);
    alert('Added to cart!');

  }

  function removeFromCart(cat) {
    setCart(cart.filter(c => c.id !== cat.id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

// Define the cart item interface
export interface CartItem {
  id: number;
  name: string;
  image: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
  shipping?: string;
}

// Define the cart context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Cart Provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Add to cart function
  const addToCart = (product: CartItem) => {
    setCartItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(item => item.id === product.id)
      
      if (existingItemIndex > -1) {
        // If item exists, update quantity
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        return updatedItems
      }
      
      // If item doesn't exist, add new item
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  // Remove from cart function
  const removeFromCart = (id: number) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== id)
    )
  }

  // Update quantity function
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  // Clear cart function
  const clearCart = () => {
    setCartItems([])
  }

  // Calculate total cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Calculate total cart value
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
"use client"
import Link from "next/link"
import { useCart } from "@/app/cartProvider/cartContext"

export default function OrderSummary() {
  const { cartItems, cartTotal } = useCart()

  const shipping = cartTotal > 2 ? 0 : 100

  const grandTotal = cartTotal + shipping

  return (
    <div className="bg-[#f8fcfc] p-16 rounded-md">
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>Rs.{cartTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs.{shipping.toFixed(2)}</span>
        </div>

        <div className="border-t border-dotted border-[#14B8A6] pt-4 flex justify-between font-medium">
          <span>Grand Total</span>
          <span>Rs.{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="border-t border-black p-5">
          {cartItems.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>
        <button
             onClick={() => alert("Checkout")}
          className={`block w-full py-3 text-white text-center rounded-md transition ${
            cartItems.length > 0 
              ? 'bg-teal-500 hover:bg-teal-600' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          aria-disabled={cartItems.length === 0}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}


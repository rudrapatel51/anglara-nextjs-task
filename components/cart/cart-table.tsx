"use client"

import { useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"

export default function CartTable() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blue Flower Print Crop Top",
      image: "/placeholder.svg?height=100&width=100",
      color: "Yellow",
      size: "M",
      price: 1000,
      quantity: 1,
      shipping: "FREE",
    },
    {
      id: 2,
      name: "Levender Hoodie",
      image: "/placeholder.svg?height=100&width=100",
      color: "Levender",
      size: "XXL",
      price: 2050,
      quantity: 1,
      shipping: "FREE",
    },
  ])

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="overflow-x-auto">
      <div className="hidden sm:block"> 
      <table className="w-full">
        <thead>
          <tr className="text-left bg-[#F0FDFA] font-bold">
            <th className="py-4 px-4">PRODUCT DETAILS</th>
            <th className="py-4 px-4">PRICE</th>
            <th className="py-4 px-4">QUANTITY</th>
            <th className="py-4 px-4">SHIPPING</th>
            <th className="py-4 px-4">SUBTOTAL</th>
            <th className="py-4 px-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="w-60">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Color : {item.color}</p>
                    <p className="text-sm text-gray-500">Size : {item.size}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-[#64748B]">Rs.{item.price}</td>
              <td className="py-4 px-4">
                <div className="flex items-center border rounded-md w-24">
                  <button
                    className="px-3 py-1 text-[#64748B]"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="px-2 text-[#64748B]">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-[#64748B]"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 px-4 text-[#64748B]">{item.shipping}</td>
              <td className="py-4 px-4 text-[#64748B]">Rs.{item.price * item.quantity}</td>
              <td className="py-4 px-4">
                <button className="text-teal-500" onClick={() => handleRemoveItem(item.id)}>
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Mobile view */}
      <div className="sm:hidden">
        {cartItems.map((item) => (
          <div key={item.id} className="border-t p-4">
            <div className="flex mb-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Color : {item.color}</p>
                <p className="text-sm text-gray-500">Size : {item.size}</p>
                <p className="text-sm text-gray-500">Price: Rs.{item.price}</p>
                <p className="text-sm text-gray-500">Shipping: {item.shipping}</p>
                <p className="text-sm text-gray-500">Subtotal: Rs.{item.price * item.quantity}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded-md w-24">
                <button
                  className="px-3 py-1 text-[#64748B]"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span className="px-2 text-[#64748B]">{item.quantity}</span>
                <button
                  className="px-3 py-1 text-[#64748B]"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button className="text-teal-500" onClick={() => handleRemoveItem(item.id)}>
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

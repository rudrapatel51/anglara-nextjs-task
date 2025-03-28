"use client"

import { useState } from "react"
import Link from "next/link"

export default function DiscountCode() {
  const [couponCode, setCouponCode] = useState("")

  const handleApplyCoupon = () => {
    // Handle coupon application logic here
    alert(`Applying coupon: ${couponCode}`)
  }

  return (
    <div className="p-2 lg:p-6">
      <h3 className="text-lg font-bold mb-4">Discount Codes</h3>
      <p className="text-gray-500 mb-8">Enter your coupon code if you have one</p>

      <div className="flex">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 px-2 py-2 bg-white border rounded-l-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <button
          onClick={handleApplyCoupon}
          className="px-4 py-2 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600 transition"
        >
          Apply Coupon
        </button>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block px-6 py-2 border border-teal-500 text-teal-500 rounded-xl hover:bg-teal-50 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}


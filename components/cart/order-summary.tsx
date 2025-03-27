"use client"

import { useState } from "react"
import Link from "next/link"

export default function OrderSummary() {
  const [summary, setSummary] = useState({
    subtotal: 3050,
    shipping: 0,
    total: 3050,
  })

  return (
    <div className="bg-[#f8fcfc] p-6 rounded-md">
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>Rs.{summary.subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs.{summary.shipping}</span>
        </div>

        <div className="border-t pt-4 flex justify-between font-medium">
          <span>Grand Total</span>
          <span>Rs.{summary.total}</span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/checkout"
          className="block w-full py-3 bg-teal-500 text-white text-center rounded-md hover:bg-teal-600 transition"
        >
          Proceed To Checkout
        </Link>
      </div>
    </div>
  )
}


import CartTable from "@/components/cart/cart-table"
import DiscountCode from "@/components/cart/discount-code"
import OrderSummary from "@/components/cart/order-summary"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#f8fcfc] rounded-md">
        <CartTable />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <DiscountCode />
        <OrderSummary />
      </div>
    </div>
  )
}


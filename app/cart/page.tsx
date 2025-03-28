import CartTable from "@/components/cart/cart-table"
import DiscountCode from "@/components/cart/discount-code"
import OrderSummary from "@/components/cart/order-summary"

export default function CartPage() {
  return (
    <div className="container mx-auto p-4 md:p-12">
      <div className="rounded-md">
        <CartTable />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <DiscountCode />
        <div className="col-span-1">
        </div>
        <OrderSummary />
      </div>
    </div>
  )
}


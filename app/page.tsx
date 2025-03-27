import Hero from "@/components/home/hero"
import Stats from "@/components/home/stats"
import Categories from "@/components/home/categories"
import FeaturedProducts from "@/components/home/featured-products"
import Benefits from "@/components/home/benefits"
import PromoBanner from "@/components/home/promo-banner"
import PopularProducts from "@/components/home/popular-products"
import PopularBrands from "@/components/home/popular-brands"
import Faq from "@/components/home/faq"
import CustomerReviews from "@/components/home/customer-reviews"

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <PromoBanner />
      <PopularProducts />
      <PopularBrands />
      <Faq />
      <CustomerReviews />
    </div>
  )
}


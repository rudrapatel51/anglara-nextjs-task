import Link from "next/link"
import { User, Users, Baby, Sparkles, Shirt, HomeIcon, Footprints, Trophy } from "lucide-react"
import Image from "next/image"

export default function Categories() {
  const categories = [
    { name: "Men", icon: "/icons/men.png", href: "/categories/men" },
    { name: "Women", icon: "/icons/women.png", href: "/categories/women" },
    { name: "Kids", icon: "/icons/kids.png", href: "/categories/kids" },
    { name: "Cosmetic", icon: "/icons/cosmetic.png", href: "/categories/cosmetics" },
    { name: "Accessories", icon: "/icons/assesiors.png", href: "/categories/accessories" },
    { name: "Home", icon: "/icons/home.png", href: "/categories/home" },
    { name: "Footwear", icon:"/icons/footwear.png", href: "/categories/footwear" },
    { name: "Sports", icon: "/icons/sports.png", href: "/categories/sports" },
  ]

  return (
    <section>
      <div className="container  lg:p-8 p-4">
        <h2 className="text-4xl text-[#1E293B] font-bold mb-8 text-center lg:text-left lg:pl-12">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 pl-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="w-24 h-24 bg-[#F1F5F9] rounded-full flex items-center justify-center text-gray-600 mb-2">
                  <Image src={category.icon} alt={category.name} width={50} height={50} className="object-cover" />
              </div>
              <span className="text-xl font-bold text-black text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


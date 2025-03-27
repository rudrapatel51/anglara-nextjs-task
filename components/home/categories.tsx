import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/categories"

export default function Categories() {

  return (
    <section>
      <div className="container  lg:p-8 p-4">
        <h2 className="text-4xl text-[#1E293B] font-bold mb-8 text-center lg:text-left lg:pl-12">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 justify-items-center lg:pl-6">
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


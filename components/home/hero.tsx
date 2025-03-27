import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="p-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:pl-16 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-[#1E293B]">
              Lorem ipsum
              <br />
              dolor sit.
            </h1>
            <p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/explore"
                className="px-6 lg:px-20 py-3 bg-white border border-teal-500 text-teal-500 rounded-lg font-bold hover:bg-gray-50 transition"
              >
                Explore
              </Link>
              <Link href="/shop" className="px-6 lg:px-20 py-3 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-600 transition">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <Image
              src="/images/shoes.png"
              alt="Featured Product"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            {/* <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-3 h-3 rounded-full bg-white"></button>
              <button className="w-3 h-3 rounded-full bg-teal-500"></button>
              <button className="w-3 h-3 rounded-full bg-white"></button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}


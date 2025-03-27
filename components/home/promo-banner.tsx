import Image from "next/image"
import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="p-2 lg:p-20">
      <div className="container mx-auto">
        <div 
          className="relative bg-cover bg-center text-white rounded-2xl overflow-hidden" 
          style={{ backgroundImage: `url("/images/background.png")` }}
        >
          {/* Discount Star - Responsive Positioning */}
          <div className="absolute top-4 right-4 md:top-10 lg:top-14 md:right-0 z-20">
            <Image 
              src="/images/discount.png" 
              alt="discount" 
              width={50} 
              height={50} 
              className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>

          {/* Content Grid - Responsive Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
            {/* Text Content - Adjusted for Mobile */}
            <div className="space-y-4 z-10 p-6 md:p-10 lg:p-16 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-tight">
                Lorem ipsum
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-tight">
                dolor sit.
              </h2>
              <p className="text-gray-200 max-w-lg mx-auto md:mx-0 text-sm md:text-base pt-3 md:pt-5">
                Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.  
              </p>
              <div className="pt-4 md:pt-5 flex justify-center md:justify-start">
                <Link
                  href="/shop"
                  className="inline-block px-4 md:px-6 lg:px-20 py-2 md:py-3 bg-white text-teal-400 rounded-md hover:bg-gray-100 transition text-sm md:text-base"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Image Container - Responsive Sizing */}
            <div className="flex items-center justify-center md:justify-start relative z-10">
              <Image 
                src="/images/lady.png" 
                alt="Promo Models" 
                width={500} 
                height={500} 
                className="object-contain max-h-48 md:max-h-80 lg:max-h-[500px] w-auto"
              />
            </div>
          </div>

          {/* Optional Overlay for better readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
      </div>
    </section>
  )
}
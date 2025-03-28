import Image from "next/image";
import { reviews } from "@/lib/review";

export default function CustomerReviews() {
  return (
    <div className="lg:p-24 p-4">
      <h2 className="text-2xl font-bold mb-6 md:text-4xl lg:pl-5">Customers Review</h2>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4 shadow-md bg-white flex flex-col items-start "
          >
            <div className="flex justify-between w-full items-start">
              {/* Avatar */}
              <Image
                src={review.avatar}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-lg w-16 h-16"
              />
              {/* Review Stars */}
              <div className="flex items-center ml-auto">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
            {/* Name */}
            <h3 className="font-semibold text-lg mt-4">{review.name}</h3>
            {/* Review Text */}
            <p className="text-sm text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Floyd Miles",
    avatar: "/images/reviewlady.png",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function CustomerReviews() {
  return (
    <div className="p-24">
      <h2 className="text-2xl font-bold mb-6 md:text-4xl">Customers Review</h2>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-6">
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
                className="rounded-lg"
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

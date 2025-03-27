"use client";

import { useState , useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: Product[] = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="lg:p-20">
        <div className="container mx-auto text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="lg:p-20">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }



  return (
    <section className="lg:p-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-2 mb-8">
          <h2 className="text-2xl md:text-4xl text-[#1E293B] font-bold">
            Feature Products
          </h2>
          <Link
            href="/products"
            className="bg-[#14B8A6] text-white px-2 py-2 md:px-12 md:py-4 rounded-lg hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm flex flex-col"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-64 object-fill"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <div className="absolute bottom-3 left-3 bg-white text-black text-lg px-2 py-1 rounded">
                  4.2★
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-medium mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                {/* <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div> */}

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-teal-500 font-medium">
                      Rs.80{product.rating.rate}
                    </span>
                    <span className="text-gray-400 text-sm line-through ml-2">
                      Rs.{product.price}
                    </span>
                    <span className="text-red-500 text-sm ml-2">(81% off)</span>
                  </div>
                </div>
                <div>
                  <button className="w-full mt-3 py-2 bg-teal-500 text-white rounded-lg flex items-center justify-center hover:bg-teal-600 transition">
                    {/* <ShoppingCart className="h-4 w-4 mr-1" /> */}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

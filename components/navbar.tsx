"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useCart } from "@/app/cartProvider/cartContext"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const pathname = usePathname()
  const isActive = (path: string) => {
    return path === '/' 
      ? pathname === '/' 
      : pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center lg:pl-12">
            <div className="w-8 h-8 flex items-center justify-center">
             <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
            </div>
            <span className="ml-2 text-xl font-bold text-teal-500">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium ${isActive('/') ? 'text-teal-400' : ''}`}>
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center font-medium ${isActive('/categories') ? 'text-teal-400' : ''}`}>
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  <Link href="/categories/men" className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActive('/categories/men') ? 'text-teal-400' : ''}`}>
                    Men
                  </Link>
                  <Link href="/categories/women" className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActive('/categories/women') ? 'text-teal-400' : ''}`}>
                    Women
                  </Link>
                  <Link href="/categories/kids" className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActive('/categories/kids') ? 'text-teal-400' : ''}`}>
                    Kids
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/explore" className={`font-medium ${isActive('/explore') ? 'text-teal-400' : ''}`}>
              Explore
            </Link>
            <Link href="/about" className={`font-medium ${isActive('/about') ? 'text-teal-400' : ''}`}>
              About
            </Link>
            <Link href="/blog" className={`font-medium ${isActive('/blog') ? 'text-teal-400' : ''}`}>
              Blog
            </Link>
            <Link href="/contact" className={`font-medium ${isActive('/contact') ? 'text-teal-400' : ''}`}>
              Contact Us
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <Link href="/cart" className="relative p-2 rounded-full bg-teal-500 text-white">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
   )}
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-1 fixed bg-white w-full text-center">
            <Link href="/" className={`block py-2 font-medium ${isActive('/') ? 'text-teal-400' : ''}`}>
              Home
            </Link>
            <Link href="/categories" className={`block py-2 font-medium ${isActive('/categories') ? 'text-teal-400' : ''}`}>
              Categories
            </Link>
            <Link href="/explore" className={`block py-2 font-medium ${isActive('/explore') ? 'text-teal-400' : ''}`}>
              Explore
            </Link>
            <Link href="/about" className={`block py-2 font-medium ${isActive('/about') ? 'text-teal-400' : ''}`}>
              About
            </Link>
            <Link href="/blog" className={`block py-2 font-medium ${isActive('/blog') ? 'text-teal-400' : ''}`}>
              Blog
            </Link>
            <Link href="/contact" className={`block py-2 font-medium ${isActive('/contact') ? 'text-teal-400' : ''}`}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}


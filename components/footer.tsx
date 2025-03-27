import Link from "next/link"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white p-4 md:p-16">
      <div className="container mx-auto px-4">
      <div className="lg:col-span-1">
          {/* Logo and Contact */}
            <Link href="/" className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-teal-500">
               <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
              </div>
              <span className="ml-2 text-xl font-bold text-white">Logo</span>
            </Link>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-4">
        
      {/* contact us  */}
          <div className="lg:col-span-2">
            <h3 className="text-teal-400 font-medium mb-4">Contact us</h3>
            <p className="mb-2">Logo@gmail.com</p>
            <p className="mb-2">+91 12345 67890</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur.<br/> Nulla tempus elit nec.</p>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
                 
          </div>   
          {/* product links */}
          <div className="lg:col-span-1">
            <h3 className="text-teal-400 font-medium mb-4">Products Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Auctor volutpat.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Fermentum turpis.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Mi consequat.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Amet venenatis.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Convallis porttitor.
                </Link>
              </li>
            </ul>
          </div>           

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-teal-400 font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Erat nulla.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-teal-400 font-medium mb-4">Legal Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Erat nulla.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div className="lg:col-span-1">
            <h3 className="text-teal-400 font-medium mb-4">Get the app</h3>
            <div className="space-y-3">
              <Link href="#" className="block">
                <img src="/images/appstore.png" alt="App Store" className="h-10 rounded-md" />
              </Link>
              <Link href="#" className="block">
                <img src="/images/googleplay.png" alt="Google Play" className="h-10 rounded-md" />
              </Link>
            </div>
          </div>
        </div>
            </div>

        <div className="mt-12 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © 2020. All rights reserved.</p>
        </div>
    </footer>
  )
}


import {
  BookA,
  BookAIcon,
  BookCheck,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Afghan Arya Guesthouse</h3>
            <p className="mb-4 text-gray-400">
              Offering clean, secure, and affordable accommodation across the city, we're proud to
              welcome travelers from around the world with warm Afghan hospitality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#248a23]" target="_blank">
                <BookA className="h-5 w-5" />
                <span className="sr-only">Booking.com</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#248a23]" target="_blank">
                <BookAIcon className="h-5 w-5" />
                <span className="sr-only">Agoda</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#248a23]" target="_blank">
                <BookCheck className="h-5 w-5" />
                <span className="sr-only">Hostel World</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#248a23]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#248a23]" target="_blank">
                  Booking.com
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-[#248a23]"
                  target="_blank"
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#248a23]" target="_blank">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#248a23]"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#248a23] mr-2 mt-0.5" />
                <span className="text-gray-400">
                  29 Imam Moafaq Herawi St. (کوچه مسجد هراتی ها)، Shahr-e-Naw, Kabul, Afghanistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#248a23] mr-2" />
                <span className="text-gray-400">+93 79 870 8035</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#248a23] mr-2" />
                <span className="text-gray-400">info@afghanaryaguesthouse.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-[#248a23] hover:bg-[#248a23] cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Afghan Arya Guesthouse. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#248a23] text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#248a23] text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

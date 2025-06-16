'use client'

import { Menu, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-gray-600">
      <div className="flex h-16 items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/logo.png" alt="logo" className="w-[150px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.path}
              className={`text-base font-medium transition-colors hover:text-[#248a23] ${
                pathname === route.path ? 'text-[#248a23]' : 'text-gray-600'
              }`}
            >
              {route.name}
            </Link>
          ))}

          <Link
            href="/login"
            className={`text-base font-medium transition-colors hover:text-[#248a23] ${
              pathname === '/login' ? 'text-[#248a23]' : 'text-gray-600'
            }`}
          >
            Login
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#248a23]" />
            <span className="text-sm font-medium text-[#248a23]">+93 79 870 8035</span>
          </div>
          <a
            href="https://www.booking.com/hotel/af/afghan-arya-guest-house.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaAKIAQGYATG4ARjIAQzYAQHoAQH4AQKIAgGoAgS4Aqih5sEGwAIB0gIkY2Y5YWI4M2QtMjRkOS00YjNkLThlMmItZWY3YTk0YWRmNzc32AIF4AIB&sid=6e5d53a4adb132014ac626e678a9d1ce&checkin=2025-05-28&checkout=2025-05-29&dest_id=-3378435&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&srepoch=1748603083&srpvid=dd984dddfc3c1958&type=total&ucfs=1&"
            target="_blank"
          >
            <Button className="bg-[#248a23] hover:bg-teal-700 cursor-pointer text-base">
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] text-gray-600">
            <SheetTitle></SheetTitle>
            <nav className="flex flex-col gap-4 mt-8 px-5">
              {routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.path}
                  className={`text-lg font-medium transition-colors hover:text-[#248a23] ${
                    pathname === route.path ? 'text-[#248a23]' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <a
                href="https://www.booking.com/hotel/af/afghan-arya-guest-house.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaAKIAQGYATG4ARjIAQzYAQHoAQH4AQKIAgGoAgS4Aqih5sEGwAIB0gIkY2Y5YWI4M2QtMjRkOS00YjNkLThlMmItZWY3YTk0YWRmNzc32AIF4AIB&sid=6e5d53a4adb132014ac626e678a9d1ce&checkin=2025-05-28&checkout=2025-05-29&dest_id=-3378435&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&srepoch=1748603083&srpvid=dd984dddfc3c1958&type=total&ucfs=1&"
                target="_blank"
              >
                <Button className="bg-[#248a23] hover:bg-teal-700 cursor-pointer text-base">
                  Book Now
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

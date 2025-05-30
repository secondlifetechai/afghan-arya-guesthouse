import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, MapPin, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-gradient-to-r from-[#248a23] to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted className="object-cover opacity-90 h-full w-full">
            <source src="/videos/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-12 space-y-6 text-white">
          <div className="space-y-1 max-w-3xl mt-36">
            <div className="text-2xl md:text-4xl font-extrabold">
              Affordable Comfort in the Heart of Kabul
            </div>
            <div className="text-xl md:text-xl text-white/90">
              Experience a warm stay with modern amenities at Afghan Arya Guesthouse.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-base cursor-pointer text-[#248a23] hover:bg-white/90 group"
            >
              View Rooms
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#248a23] border-none text-base cursor-pointer"
            >
              Take a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section 
      <section className="bg-white py-8 text-gray-600">
        <div className="px-4 md:px-6">
          <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg -mt-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Branch Location</label>
                <div className="flex border rounded-md p-2">
                  <MapPin className="h-5 w-5 text-[#248a23] mr-2" />
                  <input type="text" placeholder="Where to?" className="w-full outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Date</label>
                <div className="flex border rounded-md p-2">
                  <input type="date" className="w-full outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Travelers</label>
                <div className="flex border rounded-md p-2">
                  <Users className="h-5 w-5 text-[#248a23] mr-2" />
                  <select className="w-full outline-none bg-transparent">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-[#248a23] hover:bg-[#258a237e] text-base cursor-pointer py-6">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section> */}

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="text-3xl font-bold  text-gray-900 mb-4">
              Explore Our Comfortable & Affordable Rooms
            </div>
            <div className="text-xl text-gray-600 max-w-3xl">
              Choose the perfect space for your stay - from shared bedspaces to private master
              rooms.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={destination.image || '/placeholder.svg'}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-xl text-white">{destination.name}</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{destination.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/90 px-2 py-1 rounded text-sm font-medium text-[#248a23]">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">{destination.duration}</p>
                      <p className="font-bold text-[#248a23]">
                        {destination.price} AFN
                        <span className="text-sm font-normal text-gray-500"></span>
                      </p>
                    </div>
                    {/*<Button
                      variant="outline"
                      className="border-[#248a23] cursor-pointer text-[#248a23] hover:bg-teal-50"
                    >
                      View Details
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div className="flex justify-center mt-12">
            <Link href="/destinations">
              <Button
                variant="outline"
                size="lg"
                className="border-[#248a23] cursor-pointer text-[#248a23] hover:bg-teal-50"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="text-3xl font-bold  text-gray-900 mb-4">
              Why Stay With Afghan Arya Guesthouse?
            </div>
            <div className="text-xl text-gray-600 max-w-3xl">
              We combine comfort, affordability, and convenience to make your stay unforgettable.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#248a23]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#248a23]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-teal-50">
        <div className=" px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Hear from our satisfied customers about their amazing experiences with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || '/placeholder.svg'}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.destination}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">&quot;{testimonial.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#248a23] to-cyan-800 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>

        <div className="px-4 md:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 ">
              Stay Connected with Afghan Arya Guesthouse
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Be the first to hear about exclusive offers, new room openings, and travel tips for
              exploring Kabul. We only send emails that matter - no spam, ever.
            </p>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 bg-white text-gray-900 placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto text-base bg-white text-[#248a23] hover:bg-white/90 cursor-pointer h-full"
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const destinations = [
  {
    name: 'Male Dormitory Rooms with bunk beds',
    location: 'Kabul',
    image: '/photos/p7.jpeg',
    rating: 4.9,
    duration: 'Available',
    price: 850,
  },
  {
    name: 'Female Dormitory Rooms with bunk beds',
    location: 'Kabul',
    image: '/photos/p5.jpg',
    rating: 4.8,
    duration: 'Available',
    price: 850,
  },
  {
    name: 'Private Room With One King Size Bed',
    location: 'Kabul',
    image: '/photos/p3.jpg',
    rating: 4.9,
    duration: 'Available',
    price: 2000,
  },
  {
    name: 'Private Room With Two King Size Beds',
    location: 'Kabul',
    image: '/photos/p2.jpg',
    rating: 4.7,
    duration: 'Available',
    price: 3380,
  },
  {
    name: 'VIP Studio',
    location: 'Kabul',
    image: '/photos/p6.jpg',
    rating: 4.8,
    duration: 'Available',
    price: 6830,
  },
]

const features = [
  {
    title: 'Prime City Locations',
    description:
      'Each branch of Afghan Arya Guesthouse is strategically located near transportation hubs, markets, and attractions - so you spend less time commuting and more time exploring.',
    icon: Star,
  },
  {
    title: 'Clean & Comfortable Rooms',
    description:
      'Our staff follows strict hygiene protocols and daily cleaning routines to ensure every bed, room, and facility is fresh, inviting, and ready for your stay.',
    icon: function Icon({ className }: any) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
  },
  {
    title: '24/7 Security & Guest Safety',
    description:
      "With round-the-clock surveillance, secure premises, and trained staff, you can relax knowing you're in a safe and well-managed environment.",
    icon: function Icon({ className = '' }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
  },
]

const testimonials = [
  {
    name: 'Fatima S.',
    destination: 'Dubai',
    avatar: '/user1.jpg',
    rating: 5,
    comment:
      'I was honestly surprised at how clean and organized everything was. The staff were so friendly and helped me find great places around the city. I felt safe and cared for. Will definitely return!',
  },
  {
    name: 'John M.',
    destination: 'UK',
    avatar: '/user2.jpg',
    rating: 5,
    comment:
      'For the price, you get amazing service, a clean bed, good Wi-Fi, and hot water. Location is perfect for travelers. It felt more like a home than a hostel.',
  },
  {
    name: 'Zahra K.',
    destination: 'Iran',
    avatar: '/user3.jpg',
    rating: 4,
    comment:
      'The team at Afghan Arya Guesthouse made my first trip to Afghanistan feel completely comfortable. From airport pickup to check-out, everything was smooth. Highly recommended!',
  },
]

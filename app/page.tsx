import Link from "next/link"
import { Calendar, MapPin, Users, Music, Shield, Camera, Star, TrendingUp, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Events",
    icon: Calendar,
    href: "/events",
    description: "Discover amazing events happening near you",
    count: "2,847",
  },
  {
    title: "Venues",
    icon: MapPin,
    href: "/venues",
    description: "Find the perfect venue for your event",
    count: "1,234",
  },
  {
    title: "Artists",
    icon: Users,
    href: "/artists",
    description: "Book talented artists for your events",
    count: "5,678",
  },
  {
    title: "Music Systems",
    icon: Music,
    href: "/music-systems",
    description: "Professional audio equipment rental",
    count: "892",
  },
  {
    title: "Security",
    icon: Shield,
    href: "/security",
    description: "Reliable security services for events",
    count: "456",
  },
  {
    title: "Photographers",
    icon: Camera,
    href: "/photographers",
    description: "Capture your special moments",
    count: "3,421",
  },
]

const sponsoredItems = [
  {
    title: "Premium Event Planning",
    description: "Let our experts handle everything for your next big event",
    badge: "Sponsored",
    icon: Star,
  },
  {
    title: "VIP Venue Access",
    description: "Exclusive access to premium venues in your city",
    badge: "Featured",
    icon: TrendingUp,
  },
  {
    title: "Award-Winning Services",
    description: "Connect with our top-rated service providers",
    badge: "Premium",
    icon: Award,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-green-500"></div>
              <span className="text-xl font-bold text-white">EventSaaS</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Complete
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {" "}
                Event Solution
              </span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Connect with the best venues, artists, and service providers to make your events unforgettable
            </p>
          </div>
        </div>
      </div>

      {/* Sponsored Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
          <p className="text-neutral-400">Premium solutions for exceptional events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sponsoredItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <item.icon className="w-8 h-8 text-blue-400 group-hover:text-green-400 transition-colors" />
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Explore Categories</h2>
          <p className="text-neutral-400">Find everything you need for your perfect event</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className="w-10 h-10 text-blue-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm font-medium text-neutral-400">{category.count}+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {category.title}
                  </h3>
                  <p className="text-neutral-400">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900/50 backdrop-blur-md border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
              <span className="text-lg font-bold text-white">EventSaaS</span>
            </div>
            <p className="text-neutral-400">Making events extraordinary, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

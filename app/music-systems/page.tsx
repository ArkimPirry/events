import Link from "next/link"
import { ArrowLeft, Volume2, Star, MapPin, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const musicSystems = [
  {
    id: 1,
    name: "Pro Audio Complete Package",
    company: "SoundTech Solutions",
    location: "Los Angeles, CA",
    rating: 4.9,
    price: "$800/day",
    capacity: "5,000+ people",
    features: ["Wireless Mics", "Mixing Console", "Speakers", "Lighting"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "DJ Setup Premium",
    company: "Beat Masters",
    location: "Miami, FL",
    rating: 4.8,
    price: "$450/day",
    capacity: "1,000 people",
    features: ["DJ Controller", "Turntables", "Sound System", "LED Lights"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Concert Grade System",
    company: "MegaSound Pro",
    location: "Nashville, TN",
    rating: 4.9,
    price: "$2,500/day",
    capacity: "20,000+ people",
    features: ["Line Array", "Subwoofers", "Monitor System", "Digital Console"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Intimate Venue Package",
    company: "Acoustic Solutions",
    location: "Austin, TX",
    rating: 4.7,
    price: "$300/day",
    capacity: "200 people",
    features: ["Compact Speakers", "Wireless Mics", "Simple Mixer", "Stands"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Wedding Audio Special",
    company: "Ceremony Sounds",
    location: "San Francisco, CA",
    rating: 4.8,
    price: "$550/day",
    capacity: "300 people",
    features: ["Ceremony Mics", "Reception System", "Uplighting", "Coordinator"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Corporate Event System",
    company: "Business Audio",
    location: "Chicago, IL",
    rating: 4.6,
    price: "$650/day",
    capacity: "500 people",
    features: ["Presentation Mics", "Video Support", "Recording", "Tech Support"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function MusicSystemsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
                <span className="text-lg font-bold text-white">EventSaaS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Professional
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Audio Systems
            </span>
          </h1>
          <p className="text-xl text-neutral-400">High-quality sound equipment for every event</p>
        </div>

        {/* Music Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicSystems.map((system) => (
            <Card
              key={system.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={system.image || "/placeholder.svg"}
                  alt={system.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs font-medium">{system.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {system.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{system.price}</span>
                </div>

                <p className="text-sm text-blue-400 mb-3">{system.company}</p>

                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {system.location}
                  </div>
                  <div className="flex items-center">
                    <Volume2 className="w-4 h-4 mr-2 text-blue-400" />
                    Suitable for {system.capacity}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2">Included Equipment:</p>
                  <div className="flex flex-wrap gap-2">
                    {system.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <Zap className="w-3 h-3 text-blue-400 mr-1" />
                        <span className="text-xs text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Rent Equipment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

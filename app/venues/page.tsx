import Link from "next/link"
import { ArrowLeft, MapPin, Users, Star, Wifi, Car, Utensils } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const venues = [
  {
    id: 1,
    name: "Grand Ballroom Hotel",
    location: "Downtown Miami, FL",
    capacity: 800,
    rating: 4.8,
    price: "$2,500/day",
    category: "Luxury",
    amenities: ["WiFi", "Parking", "Catering", "AV Equipment"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Central Park Amphitheater",
    location: "New York, NY",
    capacity: 15000,
    rating: 4.9,
    price: "$8,000/day",
    category: "Outdoor",
    amenities: ["Sound System", "Lighting", "Security", "Parking"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Modern Art Museum",
    location: "Los Angeles, CA",
    capacity: 500,
    rating: 4.7,
    price: "$1,800/day",
    category: "Cultural",
    amenities: ["Gallery Space", "WiFi", "Security", "Catering"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Innovation Hub",
    location: "Austin, TX",
    capacity: 1200,
    rating: 4.6,
    price: "$1,200/day",
    category: "Tech",
    amenities: ["High-Speed WiFi", "AV Equipment", "Parking", "Catering"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Rooftop Terrace",
    location: "Chicago, IL",
    capacity: 300,
    rating: 4.5,
    price: "$900/day",
    category: "Rooftop",
    amenities: ["City Views", "Bar Service", "Heating", "WiFi"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Convention Center",
    location: "San Francisco, CA",
    capacity: 2500,
    rating: 4.4,
    price: "$3,500/day",
    category: "Convention",
    amenities: ["Multiple Halls", "AV Equipment", "Catering", "Parking"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case "wifi":
    case "high-speed wifi":
      return Wifi
    case "parking":
      return Car
    case "catering":
    case "bar service":
      return Utensils
    default:
      return Star
  }
}

export default function VenuesPage() {
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
            Perfect
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Venues</span>
          </h1>
          <p className="text-xl text-neutral-400">Find the ideal space for your next event</p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <Card
              key={venue.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-blue-500/80 text-white backdrop-blur-sm">
                    {venue.category}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs font-medium">{venue.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {venue.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{venue.price}</span>
                </div>

                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {venue.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-400" />
                    Up to {venue.capacity.toLocaleString()} guests
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {venue.amenities.slice(0, 3).map((amenity, index) => {
                      const IconComponent = getAmenityIcon(amenity)
                      return (
                        <div key={index} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                          <IconComponent className="w-3 h-3 text-blue-400 mr-1" />
                          <span className="text-xs text-neutral-300">{amenity}</span>
                        </div>
                      )
                    })}
                    {venue.amenities.length > 3 && (
                      <div className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <span className="text-xs text-neutral-300">+{venue.amenities.length - 3} more</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

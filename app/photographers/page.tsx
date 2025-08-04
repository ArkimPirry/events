import Link from "next/link"
import { ArrowLeft, Camera, Star, MapPin, Eye, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const photographers = [
  {
    id: 1,
    name: "Sarah Mitchell Photography",
    location: "New York, NY",
    rating: 4.9,
    price: "$2,500/event",
    experience: "12 years",
    specialties: ["Wedding Photography", "Portrait Sessions", "Event Coverage"],
    portfolio: "500+ events",
    style: "Artistic & Candid",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Urban Lens Studios",
    location: "Los Angeles, CA",
    rating: 4.8,
    price: "$1,800/event",
    experience: "8 years",
    specialties: ["Corporate Events", "Product Photography", "Headshots"],
    portfolio: "300+ projects",
    style: "Modern & Clean",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Moments in Time",
    location: "Chicago, IL",
    rating: 4.9,
    price: "$2,200/event",
    experience: "15 years",
    specialties: ["Family Events", "Celebrations", "Milestone Photography"],
    portfolio: "800+ families",
    style: "Natural & Warm",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Concert Capture Co",
    location: "Nashville, TN",
    rating: 4.7,
    price: "$1,500/event",
    experience: "10 years",
    specialties: ["Music Events", "Concert Photography", "Festival Coverage"],
    portfolio: "200+ concerts",
    style: "Dynamic & Energetic",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Elegant Affairs Photography",
    location: "Miami, FL",
    rating: 4.8,
    price: "$3,000/event",
    experience: "18 years",
    specialties: ["Luxury Events", "Galas", "High-End Weddings"],
    portfolio: "400+ luxury events",
    style: "Elegant & Timeless",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Creative Vision Photo",
    location: "San Francisco, CA",
    rating: 4.6,
    price: "$1,200/event",
    experience: "6 years",
    specialties: ["Startup Events", "Tech Conferences", "Creative Sessions"],
    portfolio: "150+ tech events",
    style: "Creative & Bold",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PhotographersPage() {
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
              Photographers
            </span>
          </h1>
          <p className="text-xl text-neutral-400">Capture your special moments with expert photographers</p>
        </div>

        {/* Photographers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographers.map((photographer) => (
            <Card
              key={photographer.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={photographer.image || "/placeholder.svg"}
                  alt={photographer.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs font-medium">{photographer.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-pink-500/80 text-white backdrop-blur-sm">
                    Photography
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {photographer.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{photographer.price}</span>
                </div>

                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {photographer.location}
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-blue-400" />
                    {photographer.experience} experience
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2 text-blue-400" />
                    {photographer.portfolio}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-neutral-500">Style:</p>
                    <Badge variant="outline" className="border-purple-400 text-purple-400 text-xs">
                      {photographer.style}
                    </Badge>
                  </div>
                  <p className="text-xs text-neutral-500 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {photographer.specialties.slice(0, 2).map((specialty, index) => (
                      <div key={index} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <Award className="w-3 h-3 text-blue-400 mr-1" />
                        <span className="text-xs text-neutral-300">{specialty}</span>
                      </div>
                    ))}
                    {photographer.specialties.length > 2 && (
                      <div className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <span className="text-xs text-neutral-300">+{photographer.specialties.length - 2} more</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Book Photographer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

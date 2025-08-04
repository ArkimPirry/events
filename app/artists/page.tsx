import Link from "next/link"
import { ArrowLeft, Music, Star, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const artists = [
  {
    id: 1,
    name: "The Electric Waves",
    genre: "Electronic",
    location: "Los Angeles, CA",
    rating: 4.9,
    price: "$5,000/event",
    experience: "8 years",
    specialties: ["DJ Sets", "Live Performance", "Mixing"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    genre: "Jazz",
    location: "New York, NY",
    rating: 4.8,
    price: "$2,500/event",
    experience: "12 years",
    specialties: ["Vocals", "Piano", "Composition"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Rock Legends",
    genre: "Rock",
    location: "Chicago, IL",
    rating: 4.7,
    price: "$8,000/event",
    experience: "15 years",
    specialties: ["Live Band", "Original Songs", "Covers"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Classical Ensemble",
    genre: "Classical",
    location: "Boston, MA",
    rating: 4.9,
    price: "$3,500/event",
    experience: "20 years",
    specialties: ["Orchestra", "Chamber Music", "Weddings"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Hip Hop Collective",
    genre: "Hip Hop",
    location: "Atlanta, GA",
    rating: 4.6,
    price: "$4,200/event",
    experience: "6 years",
    specialties: ["Rap", "Beatboxing", "Freestyle"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Acoustic Duo",
    genre: "Folk",
    location: "Nashville, TN",
    rating: 4.8,
    price: "$1,800/event",
    experience: "10 years",
    specialties: ["Guitar", "Harmonies", "Storytelling"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ArtistsPage() {
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
            Talented
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Artists</span>
          </h1>
          <p className="text-xl text-neutral-400">Book amazing performers for your events</p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-purple-500/80 text-white backdrop-blur-sm">
                    {artist.genre}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs font-medium">{artist.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {artist.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{artist.price}</span>
                </div>

                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {artist.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    {artist.experience} experience
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <Music className="w-3 h-3 text-blue-400 mr-1" />
                        <span className="text-xs text-neutral-300">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Book Artist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

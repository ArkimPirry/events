import Link from "next/link"
import { ArrowLeft, Shield, Star, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const securityServices = [
  {
    id: 1,
    name: "Elite Event Security",
    location: "New York, NY",
    rating: 4.9,
    price: "$150/hour per guard",
    experience: "15 years",
    specialties: ["VIP Protection", "Crowd Control", "Access Management"],
    certifications: ["Licensed", "Insured", "Background Checked"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Metro Security Solutions",
    location: "Los Angeles, CA",
    rating: 4.8,
    price: "$120/hour per guard",
    experience: "12 years",
    specialties: ["Concert Security", "Festival Management", "Emergency Response"],
    certifications: ["State Licensed", "CPR Certified", "First Aid"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Corporate Event Guards",
    location: "Chicago, IL",
    rating: 4.7,
    price: "$100/hour per guard",
    experience: "10 years",
    specialties: ["Corporate Events", "Trade Shows", "Conference Security"],
    certifications: ["Bonded", "Licensed", "Professional Training"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Wedding Security Pros",
    location: "Miami, FL",
    rating: 4.8,
    price: "$90/hour per guard",
    experience: "8 years",
    specialties: ["Wedding Security", "Private Parties", "Venue Protection"],
    certifications: ["Licensed", "Discrete Service", "Event Trained"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Festival Security Team",
    location: "Austin, TX",
    rating: 4.6,
    price: "$130/hour per guard",
    experience: "18 years",
    specialties: ["Music Festivals", "Large Crowds", "Stage Security"],
    certifications: ["Crowd Management", "Emergency Response", "Licensed"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Premium Protection Services",
    location: "San Francisco, CA",
    rating: 4.9,
    price: "$200/hour per guard",
    experience: "20 years",
    specialties: ["High-Profile Events", "Celebrity Protection", "Risk Assessment"],
    certifications: ["Executive Protection", "Advanced Training", "Top Secret Clearance"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function SecurityPage() {
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
              Security Services
            </span>
          </h1>
          <p className="text-xl text-neutral-400">Reliable protection for your events</p>
        </div>

        {/* Security Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityServices.map((service) => (
            <Card
              key={service.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs font-medium">{service.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-red-500/80 text-white backdrop-blur-sm">
                    Security
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{service.price}</span>
                </div>

                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {service.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    {service.experience} experience
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                        <Shield className="w-3 h-3 text-blue-400 mr-1" />
                        <span className="text-xs text-neutral-300">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="border-green-400 text-green-400 text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Hire Security
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

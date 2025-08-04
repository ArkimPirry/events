import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "July 15-17, 2024",
    time: "6:00 PM - 2:00 AM",
    venue: "Central Park Amphitheater",
    location: "New York, NY",
    attendees: 15000,
    price: "$89",
    category: "Music",
    status: "Selling Fast",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Tech Innovation Conference",
    date: "August 22, 2024",
    time: "9:00 AM - 6:00 PM",
    venue: "Convention Center",
    location: "San Francisco, CA",
    attendees: 2500,
    price: "$299",
    category: "Conference",
    status: "Available",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    date: "September 5-6, 2024",
    time: "11:00 AM - 9:00 PM",
    venue: "Grand Exhibition Hall",
    location: "Chicago, IL",
    attendees: 8000,
    price: "$45",
    category: "Food",
    status: "Available",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Art Gallery Opening",
    date: "July 28, 2024",
    time: "7:00 PM - 11:00 PM",
    venue: "Modern Art Museum",
    location: "Los Angeles, CA",
    attendees: 500,
    price: "$25",
    category: "Art",
    status: "Limited",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    date: "August 10, 2024",
    time: "2:00 PM - 8:00 PM",
    venue: "Innovation Hub",
    location: "Austin, TX",
    attendees: 1200,
    price: "$75",
    category: "Business",
    status: "Available",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Charity Gala Dinner",
    date: "September 15, 2024",
    time: "6:30 PM - 11:30 PM",
    venue: "Grand Ballroom Hotel",
    location: "Miami, FL",
    attendees: 800,
    price: "$150",
    category: "Charity",
    status: "VIP Available",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventsPage() {
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
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Events</span>
          </h1>
          <p className="text-xl text-neutral-400">Find your next unforgettable experience</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={`${
                        event.status === "Selling Fast"
                          ? "bg-red-500/80"
                          : event.status === "Limited"
                            ? "bg-orange-500/80"
                            : event.status === "VIP Available"
                              ? "bg-purple-500/80"
                              : "bg-green-500/80"
                      } text-white backdrop-blur-sm`}
                    >
                      {event.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-blue-400 text-blue-400">
                      {event.category}
                    </Badge>
                    <span className="text-lg font-bold text-green-400">{event.price}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                      {event.venue}, {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-400" />
                      {event.attendees.toLocaleString()} attendees
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

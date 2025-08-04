import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2, Heart, Ticket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const getEventById = (id: string) => {
  const events = {
    "1": {
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
      image: "/placeholder.svg?height=400&width=800",
      description:
        "Join us for the biggest summer music festival of the year! Featuring over 50 artists across 5 stages, food trucks, art installations, and an unforgettable experience under the stars.",
      highlights: [
        "50+ Artists across multiple genres",
        "5 Different stages and venues",
        "Food trucks and local vendors",
        "Art installations and interactive experiences",
        "VIP packages available",
        "Camping options on-site",
      ],
      organizer: "MusicFest Productions",
      ticketTypes: [
        { name: "General Admission", price: "$89", description: "Access to all stages and general areas" },
        {
          name: "VIP Pass",
          price: "$199",
          description: "VIP viewing areas, complimentary drinks, exclusive restrooms",
        },
        {
          name: "Backstage Pass",
          price: "$399",
          description: "Meet & greet opportunities, backstage access, VIP amenities",
        },
      ],
    },
  }
  return events[id as keyof typeof events]
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event Not Found</h1>
          <Link href="/events">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500">Back to Events</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/events">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
                <span className="text-lg font-bold text-white">EventSaaS</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
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
              } text-white backdrop-blur-sm mb-4`}
            >
              {event.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Info */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    {event.category}
                  </Badge>
                  <span className="text-sm text-neutral-400">Organized by {event.organizer}</span>
                </div>

                <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {event.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-neutral-300">
                    <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-sm text-neutral-400">Date</div>
                    </div>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <Clock className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <div className="font-medium">{event.time}</div>
                      <div className="text-sm text-neutral-400">Time</div>
                    </div>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <div className="font-medium">{event.venue}</div>
                      <div className="text-sm text-neutral-400">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <Users className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <div className="font-medium">{event.attendees.toLocaleString()}</div>
                      <div className="text-sm text-neutral-400">Expected Attendees</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">About This Event</h3>
                  <p className="text-neutral-300 leading-relaxed">{event.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Event Highlights</h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-neutral-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Options */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Ticket className="w-5 h-5 mr-2 text-blue-400" />
                  Ticket Options
                </h3>
                <div className="space-y-4">
                  {event.ticketTypes.map((ticket, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white">{ticket.name}</h4>
                        <span className="text-lg font-bold text-green-400">{ticket.price}</span>
                      </div>
                      <p className="text-sm text-neutral-400 mb-3">{ticket.description}</p>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                        Select Ticket
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Add to Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Contact Organizer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  review: string
  service: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Roodepoort",
    rating: 5,
    review: "Dr. Diana and her team provided excellent dental care. The facility is modern and clean, and the staff is very professional. I highly recommend Jackal Creek Medical Centre.",
    service: "Dental Cleaning",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Michael Johnson",
    location: "Krugersdorp",
    rating: 5,
    review: "Outstanding service from Dr. Ntendeni. He took the time to explain my condition and treatment options. The booking process was smooth and convenient.",
    service: "General Practice",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Randburg",
    rating: 5,
    review: "I've been a patient here for over two years. The quality of care is exceptional, and the staff always makes me feel comfortable and welcome.",
    service: "Family Medicine",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "David Williams",
    location: "Honeydew",
    rating: 5,
    review: "The orthodontic treatment I received was excellent. The results exceeded my expectations, and the payment plans made it very affordable.",
    service: "Orthodontics",
    avatar: "/placeholder-user.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued patients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={`${testimonial.id}-star-${i}`} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.avatar || "/placeholder-user.jpg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.location}</div>
                        <div className="text-xs text-red-500">{testimonial.service}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Join hundreds of satisfied patients</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center space-x-1">
              {["star1", "star2", "star3", "star4", "star5"].map((key) => (
                <Star key={key} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-gray-400">(328 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

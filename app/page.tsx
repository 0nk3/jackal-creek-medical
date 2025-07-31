import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Users, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonials"
import { GoogleMapsEmbed } from "@/components/google-maps"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Premium Healthcare</span>
                <br />
                <span className="text-white">in Roodepoort</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Jackal Creek Medical Centre provides comprehensive medical and dental services with experienced
                professionals in a modern, comfortable environment.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <div className="font-semibold">011 958 0866</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Jackal Creek Corner</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button className="btn-primary w-full sm:w-auto">Book Appointment</Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" className="btn-secondary w-full sm:w-auto bg-transparent">
                    Meet Our Doctors
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/logo-sign.jpg"
                alt="Jackal Creek Medical Centre"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-400">Excellence in healthcare with a personal touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-400">
                  Our qualified doctors and specialists provide comprehensive care across multiple disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-400">
                  State-of-the-art equipment and comfortable facilities ensure the best patient experience.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
                <p className="text-gray-400">
                  From general practice to specialized dental services, we cover all your healthcare needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl text-gray-400 mb-12">
            Conveniently located in Jackal Creek Corner, Roodepoort. We're here when you need us most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="font-semibold text-lg mb-2">Monday - Friday</div>
                <div className="text-gray-400">08:30 - 17:30</div>
              </CardContent>
            </Card>
            
            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="font-semibold text-lg mb-2">Saturday</div>
                <div className="text-gray-400">09:00 - 15:00</div>
              </CardContent>
            </Card>
            
            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="font-semibold text-lg mb-2">Sunday & Holidays</div>
                <div className="text-gray-400">Closed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-gray-400">Located in Jackal Creek Corner, Roodepoort</p>
          </div>

          <GoogleMapsEmbed />
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Users, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
                    <div className="font-semibold">North Riding, Roodepoort</div>
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

      {/* Patient Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What Our Patients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real experiences from our valued patients highlight the quality care and compassionate service at Jackal Creek Medical Centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Dr Tshifularo is by far the best doctor I've ever experienced. Compassionate and engaging and also very thoughtful. She clearly genuinely loves helping people. I felt better and lighter just walking out of her exam room."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    T
                  </div>
                  <div>
                    <p className="font-semibold text-white">Thozama Faku</p>
                    <p className="text-sm text-gray-400">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "By Far the best Doctor ever experienced. Excellent service, attention to detail at its best and always going the extra mile. I would highly recommend Dr. Tshifularo."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    K
                  </div>
                  <div>
                    <p className="font-semibold text-white">Keke Magongoa</p>
                    <p className="text-sm text-gray-400">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The service I always get there is unbelievable. Dr T put me at ease. Her Aura is amazing :) I have never felt so comfortable with a Dr like this before. Thank you for making my life so easy!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    I
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ingrid Mashishi</p>
                    <p className="text-sm text-gray-400">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The service is friendly from the time you go in. I love the Dr. she takes her time and listens and examines you thoroughly. Amazing. Thanks Dr."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    W
                  </div>
                  <div>
                    <p className="font-semibold text-white">Wianka Roth</p>
                    <p className="text-sm text-gray-400">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "We received exceptional service before, during and after my son's circumcision. The ladies at reception were very professional and friendly. The Dr was amazing - my son didn't cry because she was very kind and gave him hope."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    T
                  </div>
                  <div>
                    <p className="font-semibold text-white">Thempeli Mzolo</p>
                    <p className="text-sm text-gray-400">Verified Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 - Call to Action Card */}
            <Card className="medical-card">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-gray-400 italic mb-4">
                    "Join our family of satisfied patients"
                  </p>
                  <Link href="/booking">
                    <Button className="btn-primary">Book Your Appointment</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Experience the difference for yourself</p>
            <Link href="/booking">
              <Button className="btn-primary">Book Your Appointment</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl text-gray-400 mb-12">
            Conveniently located in North Riding, Roodepoort. We're here when you need us most.
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

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-gray-400">Located in North Riding, Roodepoort</p>
          </div>

          <GoogleMapsEmbed />
        </div>
      </section>
    </div>
  )
}

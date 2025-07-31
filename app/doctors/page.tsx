import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User, Stethoscope } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Ntendeni",
    specialty: "General Practitioner",
    bio: "Experienced general practitioner specializing in chronic illness management, family planning, and comprehensive healthcare services.",
    phone: "011 958 0866",
    email: "DrNtendeni@gmail.com",
    services: [
      "Chronic Illness Management",
      "Diabetes & Hypertension Care",
      "TB & HIV Testing & Counselling",
      "ARV Provision & Treatment Monitoring",
      "Pregnancy Monitoring & Antenatal Care",
      "Family Planning",
      "Pediatric & Child Health",
      "Minor Trauma & Wound Care",
      "Weight Loss & Nutritional Management",
      "Vitamin Drip Infusions",
      "Occupational Health Services",
    ],
  },
  {
    id: 2,
    name: "Dr. Diana",
    specialty: "Dentist",
    bio: "Professional dentist providing comprehensive dental care with modern techniques and a gentle approach to patient comfort.",
    phone: "011 958 5777 / 081 579 6700",
    email: "drdianahdental@gmail.com",
    services: [
      "General Oral Examination",
      "Cleaning and Polishing",
      "Fluoride Treatment",
      "Teeth Fillings",
      "Teeth Removal (Including Surgical)",
      "Oral Hygiene Advice",
      "Teeth Whitening",
      "Crown and Bridge",
      "Braces",
      "Root Canal Treatment",
      "Veneers",
      "Gum Disease Management",
      "Orthodontist Services (By Appointment)",
    ],
  },
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Doctors</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet our experienced healthcare professionals dedicated to providing exceptional medical and dental care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="medical-card">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{doctor.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-red-500 mb-3">
                      <Stethoscope className="w-4 h-4" />
                      <span className="font-semibold">{doctor.specialty}</span>
                    </div>
                    <p className="text-gray-400">{doctor.bio}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-red-500" />
                    <span className="break-all">{doctor.email}</span>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-3">Services Offered:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.services.map((service) => (
                      <div key={service} className="text-sm text-gray-400 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/booking" className="flex-1">
                    <Button className="btn-primary w-full">Book Appointment</Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="btn-secondary w-full bg-transparent">
                      Contact Doctor
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Doctors Coming Soon */}
        <div className="mt-16 text-center">
          <Card className="medical-card max-w-md mx-auto">
            <CardContent className="p-8">
              <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">More Specialists Coming Soon</h3>
              <p className="text-gray-400 mb-4">
                We're expanding our team to serve you better. Stay tuned for more specialized services.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="btn-secondary bg-transparent">
                  Get Notified
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

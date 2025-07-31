import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Stethoscope, Activity, Shield, Baby, Pill, Smile, Sparkles, Crown, Zap } from "lucide-react"
import Link from "next/link"

const medicalServices = [
  {
    icon: Heart,
    title: "Chronic Illness Management",
    description: "Comprehensive care for diabetes, hypertension, and other chronic conditions",
  },
  {
    icon: Activity,
    title: "HIV Testing & Counselling",
    description: "Confidential testing and ongoing support services",
  },
  {
    icon: Pill,
    title: "ARV Provision & Treatment Monitoring",
    description: "Complete HIV treatment management and monitoring",
  },
  {
    icon: Baby,
    title: "Pregnancy Monitoring & Antenatal Care",
    description: "Comprehensive prenatal care for mother and baby",
  },
  {
    icon: Shield,
    title: "Family Planning",
    description: "Contraceptive counseling and reproductive health services",
  },
  {
    icon: Stethoscope,
    title: "Pediatric & Child Health",
    description: "Specialized care for infants, children, and adolescents",
  },
  {
    icon: Heart,
    title: "Minor Trauma & Wound Care",
    description: "Treatment of cuts, burns, and minor injuries",
  },
  {
    icon: Activity,
    title: "Weight Loss & Nutritional Management",
    description: "Personalized weight management and nutrition counseling",
  },
  {
    icon: Zap,
    title: "Vitamin Drip Infusions",
    description: "IV vitamin therapy for wellness and recovery",
  },
  {
    icon: Shield,
    title: "Occupational Health Services",
    description: "Workplace health assessments and medical surveillance",
  },
]

const dentalServices = [
  {
    icon: Smile,
    title: "General Oral Examination",
    description: "Comprehensive dental checkups and oral health assessments",
  },
  {
    icon: Sparkles,
    title: "Cleaning and Polishing",
    description: "Professional dental cleaning and plaque removal",
  },
  {
    icon: Shield,
    title: "Fluoride Treatment",
    description: "Preventive fluoride applications for cavity protection",
  },
  {
    icon: Pill,
    title: "Teeth Fillings",
    description: "Composite and amalgam fillings for cavity treatment",
  },
  {
    icon: Stethoscope,
    title: "Teeth Removal (Including Surgical)",
    description: "Simple and surgical tooth extractions",
  },
  {
    icon: Heart,
    title: "Oral Hygiene Advice",
    description: "Personalized oral care education and guidance",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for brighter smiles",
  },
  {
    icon: Crown,
    title: "Crown and Bridge",
    description: "Restorative crowns and bridges for damaged teeth",
  },
  {
    icon: Activity,
    title: "Braces",
    description: "Orthodontic treatment for teeth alignment",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Endodontic therapy to save infected teeth",
  },
  {
    icon: Smile,
    title: "Veneers",
    description: "Cosmetic veneers for smile enhancement",
  },
  {
    icon: Shield,
    title: "Gum Disease Management",
    description: "Treatment and prevention of periodontal disease",
  },
  {
    icon: Crown,
    title: "Orthodontist (Per Appointment)",
    description: "Specialized orthodontic consultations and treatments",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive medical and dental services to meet all your healthcare needs in one convenient location.
          </p>
        </div>

        {/* Medical Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medical Services</h2>
            <p className="text-gray-400">General practice and specialized medical care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="medical-card">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-red-500 mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Dental Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dental Services</h2>
            <p className="text-gray-400">Complete dental care for the whole family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dentalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="medical-card">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-red-500 mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to provide you with the highest quality medical and dental care. Schedule your
            visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="btn-primary">Book Appointment</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="btn-secondary bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

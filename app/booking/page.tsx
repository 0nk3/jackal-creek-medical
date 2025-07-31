"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Phone, Mail, FileText, AlertCircle } from "lucide-react"
import { z } from "zod"

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  reason: z.string().min(10, "Please provide more details about your visit (minimum 10 characters)").max(500, "Description is too long"),
})

type BookingData = z.infer<typeof bookingSchema>

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  const validateForm = (): boolean => {
    try {
      bookingSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof BookingData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof BookingData] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Store in localStorage for demo purposes
    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    )

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <Card className="medical-card max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for your appointment request. We'll contact you within 24 hours to confirm your booking.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  doctor: "",
                  date: "",
                  time: "",
                  reason: "",
                })
              }}
              className="btn-primary"
            >
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Book Appointment</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule your visit with our experienced healthcare professionals. We'll confirm your appointment within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span>Appointment Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium">
                        <User className="w-4 h-4 text-red-500" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                          errors.name ? "border-red-500 bg-red-500/10" : ""
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium">
                        <Phone className="w-4 h-4 text-red-500" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                          errors.phone ? "border-red-500 bg-red-500/10" : ""
                        }`}
                        placeholder="011 123 4567"
                      />
                      {errors.phone && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium">
                      <Mail className="w-4 h-4 text-red-500" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                        errors.email ? "border-red-500 bg-red-500/10" : ""
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="flex items-center space-x-2 text-sm font-medium">
                      <User className="w-4 h-4 text-red-500" />
                      <span>Preferred Doctor *</span>
                    </Label>
                    <Select value={formData.doctor} onValueChange={(value: string) => handleInputChange("doctor", value)}>
                      <SelectTrigger className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                        errors.doctor ? "border-red-500 bg-red-500/10" : ""
                      }`}>
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 rounded-xl">
                        <SelectItem value="dr-ntendeni" className="hover:bg-gray-700">Dr. Ntendeni (General Practitioner)</SelectItem>
                        <SelectItem value="dr-diana" className="hover:bg-gray-700">Dr. Diana (Dentist)</SelectItem>
                        <SelectItem value="any" className="hover:bg-gray-700">Any Available Doctor</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.doctor && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.doctor}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center space-x-2 text-sm font-medium">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span>Preferred Date *</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                          errors.date ? "border-red-500 bg-red-500/10" : ""
                        }`}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      {errors.date && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.date}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center space-x-2 text-sm font-medium">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span>Preferred Time *</span>
                      </Label>
                      <Select value={formData.time} onValueChange={(value: string) => handleInputChange("time", value)}>
                        <SelectTrigger className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                          errors.time ? "border-red-500 bg-red-500/10" : ""
                        }`}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 rounded-xl">
                          <SelectItem value="09:00" className="hover:bg-gray-700">09:00 AM</SelectItem>
                          <SelectItem value="10:00" className="hover:bg-gray-700">10:00 AM</SelectItem>
                          <SelectItem value="11:00" className="hover:bg-gray-700">11:00 AM</SelectItem>
                          <SelectItem value="12:00" className="hover:bg-gray-700">12:00 PM</SelectItem>
                          <SelectItem value="14:00" className="hover:bg-gray-700">02:00 PM</SelectItem>
                          <SelectItem value="15:00" className="hover:bg-gray-700">03:00 PM</SelectItem>
                          <SelectItem value="16:00" className="hover:bg-gray-700">04:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.time && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.time}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason" className="flex items-center space-x-2 text-sm font-medium">
                      <FileText className="w-4 h-4 text-red-500" />
                      <span>Reason for Visit *</span>
                    </Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => handleInputChange("reason", e.target.value)}
                      className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 resize-none ${
                        errors.reason ? "border-red-500 bg-red-500/10" : ""
                      }`}
                      placeholder="Please describe your symptoms or reason for the visit..."
                      rows={4}
                    />
                    {errors.reason && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.reason}</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full py-3 rounded-xl font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      "Book Appointment"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>011 958 0866</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <div>
                    <div>Mon-Fri: 08:30-17:30</div>
                    <div>Sat: 09:00-15:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-400">
                <p>• We'll confirm your appointment within 24 hours</p>
                <p>• Please arrive 15 minutes early</p>
                <p>• Bring your ID and medical aid card</p>
                <p>• List any current medications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

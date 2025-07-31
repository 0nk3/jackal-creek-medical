"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Share2,
  AlertCircle,
} from "lucide-react";
import { z } from "zod";
import { GoogleMapsEmbed } from "@/components/google-maps";

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please provide more details (minimum 10 characters)")
    .max(1000, "Message is too long"),
});

type ContactData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactData, string>>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof ContactData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with any questions
            about our services or to assist with your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">011 958 0866</p>
                    <p className="text-sm text-gray-500">Main reception line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">Shop No. 6 Boundary Rd &, Aureole Ave</p>
                    <p className="text-gray-400">North Riding AH, Roodepoort, 2162</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operating Hours</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Friday: 08:30 - 17:30</p>
                      <p>Saturday: 09:00 - 15:00</p>
                      <p>Sunday & Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Share2 className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Follow Us</h3>
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=100064764169045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                          f
                        </div>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                          @
                        </div>
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Doctor Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dr. Ntendeni</CardTitle>
                  <p className="text-sm text-gray-400">General Practitioner</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>011 958 0866</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-red-500" />
                    <span className="break-all">DrNtendeni@gmail.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dr. Diana</CardTitle>
                  <p className="text-sm text-gray-400">Dentist</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>011 958 5777</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>081 579 6700</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-red-500" />
                    <span className="break-all">drdianahdental@gmail.com</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-red-500" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                            errors.name ? "border-red-500 bg-red-500/10" : ""
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <div className="flex items-center space-x-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 ${
                            errors.phone ? "border-red-500 bg-red-500/10" : ""
                          }`}
                          placeholder="Your phone number"
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
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
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

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className={`bg-gray-800/50 border-gray-600 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 resize-none ${
                          errors.message ? "border-red-500 bg-red-500/10" : ""
                        }`}
                        placeholder="How can we help you?"
                        rows={6}
                      />
                      {errors.message && (
                        <div className="flex items-center space-x-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.message}</span>
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
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-400">
              Located in the heart of North Riding, Roodepoort
            </p>
          </div>

          <GoogleMapsEmbed />
        </section>
      </div>
    </div>
  );
}

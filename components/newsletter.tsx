"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Send, CheckCircle } from "lucide-react"
import { customToast } from "@/lib/toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      customToast.error({
        title: "Invalid Email",
        description: "Please enter a valid email address"
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Store in localStorage for demo
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]")
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers))
      }

      setIsSubscribed(true)
      customToast.success({
        title: "Successfully Subscribed!",
        description: "You'll receive health tips and clinic updates"
      })
      
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      customToast.error({
        title: "Subscription Failed",
        description: "Please try again later"
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="medical-card text-center">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Thank You for Subscribing!</h3>
              <p className="text-gray-400 mb-6">
                You're now part of our health community. Expect valuable health tips, clinic updates, and wellness advice directly in your inbox.
              </p>
              <Button 
                onClick={() => {
                  setIsSubscribed(false)
                  setEmail("")
                }}
                variant="outline"
                className="btn-secondary"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="medical-card">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-red-500" />
            </div>
            <CardTitle className="text-3xl font-bold mb-4">
              Stay <span className="gradient-text">Healthy & Informed</span>
            </CardTitle>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter for health tips, clinic updates, appointment reminders, and wellness advice from our medical professionals.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="newsletter-email" className="sr-only">
                    Email Address
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white text-center text-lg py-4"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="btn-primary w-full text-lg py-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe to Newsletter
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="text-center mt-6 space-y-2">
              <p className="text-sm text-gray-500">
                🔒 We respect your privacy. No spam, unsubscribe anytime.
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                <span>✓ Health Tips</span>
                <span>✓ Clinic Updates</span>
                <span>✓ Appointment Reminders</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

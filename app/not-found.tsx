import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Calendar, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="btn-primary w-full">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link href="/booking">
              <Button variant="outline" className="btn-secondary w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" className="btn-secondary w-full">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Need immediate medical attention?</p>
          <p className="font-semibold text-red-500">Call: 011 958 0866</p>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-white">Jackal Creek Medical Centre</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing premium healthcare services in North Riding, Roodepoort. Our experienced team offers
              comprehensive medical and dental care in a modern, comfortable environment.
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Shop No. 6 Boundary Rd & Aureole Ave, North Riding AH, Roodepoort, 2162</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-red-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/notices" className="text-gray-400 hover:text-red-500 transition-colors">
                  Notices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>011 958 0866</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Mon-Fri: 08:30-17:30</div>
                  <div>Sat: 09:00-15:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100064764169045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    f
                  </div>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    @
                  </div>
                </a>
                <a
                  href="mailto:info@jackalcreekmedical.co.za"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jackal Creek Medical Centre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

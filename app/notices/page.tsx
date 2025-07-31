import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Clock, CreditCard, Phone } from "lucide-react"

const notices = [
  {
    id: 1,
    type: "important",
    icon: AlertTriangle,
    title: "Child Vaccinations - Saturday Only",
    date: "2024-04-27",
    content:
      "As from 27 April, child vaccinations will only be done on Saturdays. Please plan accordingly and book your appointment in advance for your child's vaccination schedule.",
    category: "Vaccination",
    urgent: true,
  },
  {
    id: 2,
    type: "alert",
    icon: CreditCard,
    title: "No Cash Payments",
    date: "2024-06-13",
    content:
      "We no longer accept cash payments starting from 13th June. You can pay by card or use your medical aid. This change helps us provide better service and maintain hygiene standards.",
    category: "Payment",
    urgent: true,
  },
  {
    id: 3,
    type: "info",
    icon: Clock,
    title: "Operating Hours",
    date: "2024-01-15",
    content:
      "Monday-Friday: 08:30-17:30 | Saturday: 09:00-15:00 | Sunday & Public Holidays: Closed. Please plan your visits accordingly.",
    category: "Hours",
    urgent: false,
  },
  {
    id: 4,
    type: "info",
    icon: Phone,
    title: "Appointment Booking",
    date: "2024-02-01",
    content:
      "Book appointments online through our website or call 011 958 0866. We confirm all appointments within 24 hours to ensure your preferred time slot.",
    category: "Booking",
    urgent: false,
  },
]

const getNoticeStyle = (type: string) => {
  switch (type) {
    case "important":
      return "border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-500/10 to-transparent"
    case "alert":
      return "border-l-4 border-l-red-500 bg-gradient-to-r from-red-500/10 to-transparent"
    case "info":
      return "border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent"
    default:
      return "border-l-4 border-l-gray-500 bg-gradient-to-r from-gray-500/10 to-transparent"
  }
}

const getBadgeStyle = (type: string) => {
  switch (type) {
    case "important":
      return "bg-amber-600 hover:bg-amber-700 text-white"
    case "alert":
      return "bg-red-600 hover:bg-red-700 text-white"
    case "info":
      return "bg-blue-600 hover:bg-blue-700 text-white"
    default:
      return "bg-gray-600 hover:bg-gray-700 text-white"
  }
}

const getIconColor = (type: string) => {
  switch (type) {
    case "important":
      return "text-amber-500"
    case "alert":
      return "text-red-500"
    case "info":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

export default function NoticesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Important Notices</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed about important updates, changes to our services, and announcements from Jackal Creek Medical
            Centre.
          </p>
        </div>

        {/* Notices Grid */}
        <div className="space-y-8">
          {notices.map((notice) => {
            const IconComponent = notice.icon
            return (
              <Card key={notice.id} className={`medical-card hover:scale-[1.02] transition-transform duration-300 ${getNoticeStyle(notice.type)}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gray-800 ${getIconColor(notice.type)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2 text-white">{notice.title}</CardTitle>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={getBadgeStyle(notice.type)}>{notice.category}</Badge>
                            {notice.urgent && (
                              <Badge variant="outline" className="border-red-500 text-red-400">
                                Urgent
                              </Badge>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          {new Date(notice.date).toLocaleDateString("en-ZA", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed text-base">{notice.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact for More Info */}
        <div className="mt-16 text-center">
          <Card className="medical-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Info className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Need More Information?</h3>
              <p className="text-gray-400 mb-6">
                If you have questions about any of these notices or need clarification, please don't hesitate to contact
                us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0119580866"
                  className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold text-center"
                >
                  Call Us: 011 958 0866
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-block px-6 py-3 rounded-lg font-semibold text-center"
                >
                  Contact Form
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

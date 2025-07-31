import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jackal Creek Medical Centre - Premium Healthcare in Roodepoort",
  description:
    "Professional medical and dental services in North Riding, Roodepoort, South Africa. Offering comprehensive healthcare with experienced doctors and modern facilities.",
  keywords: "medical centre, dentist, doctor, healthcare, Roodepoort, South Africa, dental services, medical services",
  openGraph: {
    title: "Jackal Creek Medical Centre",
    description: "Premium healthcare services in Roodepoort, South Africa",
    type: "website",
    locale: "en_ZA",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

import Script from 'next/script'

export function StructuredData() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Jackal Creek Medical Centre",
    "description": "Premium medical and dental services in Roodepoort, South Africa",
    "url": "https://jackalcreekmedical.co.za",
    "telephone": "+27-11-958-0866",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 6 Boundary Rd & Aureole Ave, North Riding AH",
      "addressLocality": "Roodepoort",
      "postalCode": "2162",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "openingHours": [
      "Mo-Fr 08:30-17:30",
      "Sa 09:00-15:00"
    ],
    "speciality": [
      "General Practice",
      "Dentistry",
      "Dental Surgery",
      "Orthodontics"
    ],
    "medicalSpecialty": [
      "Family Medicine",
      "Dentistry"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jackal Creek Medical Centre",
    "alternateName": "JCMC",
    "url": "https://jackalcreekmedical.co.za",
    "logo": "https://jackalcreekmedical.co.za/placeholder-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-11-958-0866",
      "contactType": "customer service",
      "availableLanguage": ["English", "Afrikaans"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 6 Boundary Rd & Aureole Ave, North Riding AH",
      "addressLocality": "Roodepoort",
      "addressRegion": "Gauteng",
      "postalCode": "2162",
      "addressCountry": "ZA"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100064764169045",
      "https://www.instagram.com/"
    ]
  }

  return (
    <>
      <Script
        id="medical-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  )
}

import { z } from "zod"

// Booking form validation schema
export const bookingSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
    
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[0-9\s-()]+$/, "Please enter a valid phone number"),
    
  doctor: z.string()
    .min(1, "Please select a doctor"),
    
  date: z.string()
    .min(1, "Please select a date")
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, "Date cannot be in the past"),
    
  time: z.string()
    .min(1, "Please select a time"),
    
  reason: z.string()
    .max(500, "Reason must be less than 500 characters")
    .optional()
})

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
    
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
    
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[0-9\s-()]+$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
    
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
})

// Newsletter validation schema
export const newsletterSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required")
})

export type BookingFormData = z.infer<typeof bookingSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>

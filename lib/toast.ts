import { toast as sonnerToast } from "sonner"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive" | "success"
}

export const customToast = {
  success: ({ title, description }: ToastProps) => {
    sonnerToast.success(title || "Success", {
      description,
      duration: 4000,
      style: {
        background: "#065f46",
        border: "1px solid #10b981",
        color: "#ffffff",
      }
    })
  },
  error: ({ title, description }: ToastProps) => {
    sonnerToast.error(title || "Error", {
      description,
      duration: 5000,
      style: {
        background: "#7f1d1d",
        border: "1px solid #ef4444",
        color: "#ffffff",
      }
    })
  },
  info: ({ title, description }: ToastProps) => {
    sonnerToast(title || "Info", {
      description,
      duration: 4000,
      style: {
        background: "#1f2937",
        border: "1px solid #6b7280",
        color: "#ffffff",
      }
    })
  },
  loading: ({ title, description }: ToastProps) => {
    return sonnerToast.loading(title || "Loading...", {
      description,
      style: {
        background: "#1f2937",
        border: "1px solid #6b7280",
        color: "#ffffff",
      }
    })
  }
}

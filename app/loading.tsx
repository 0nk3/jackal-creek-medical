import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Skeleton className="h-16 w-full bg-gray-800" />
            <Skeleton className="h-6 w-3/4 bg-gray-800" />
            <Skeleton className="h-6 w-2/3 bg-gray-800" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Skeleton className="h-20 w-full bg-gray-800" />
              <Skeleton className="h-20 w-full bg-gray-800" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32 bg-gray-800" />
              <Skeleton className="h-12 w-32 bg-gray-800" />
            </div>
          </div>
          <Skeleton className="h-96 w-full bg-gray-800 rounded-lg" />
        </div>

        {/* Features Section Skeleton */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-96 mx-auto bg-gray-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["feature-1", "feature-2", "feature-3"].map((id) => (
              <div key={id} className="text-center">
                <Skeleton className="h-12 w-12 mx-auto mb-4 bg-gray-800 rounded-full" />
                <Skeleton className="h-6 w-32 mx-auto mb-2 bg-gray-800" />
                <Skeleton className="h-4 w-full mb-1 bg-gray-800" />
                <Skeleton className="h-4 w-3/4 mx-auto bg-gray-800" />
              </div>
            ))}
          </div>
        </div>

        {/* Operating Hours Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Skeleton className="h-12 w-64 bg-gray-800" />
            <Skeleton className="h-6 w-full bg-gray-800" />
            <div className="space-y-4">
              {["hours-1", "hours-2", "hours-3"].map((id) => (
                <div key={id} className="flex items-center space-x-3">
                  <Skeleton className="h-5 w-5 bg-gray-800 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-32 bg-gray-800" />
                    <Skeleton className="h-4 w-24 bg-gray-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="h-80 w-full bg-gray-800 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

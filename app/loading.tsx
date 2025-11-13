export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center space-y-8 animate-pulse">
            {/* Profile Photo Skeleton */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-secondary/50" />
            
            {/* Badge Skeleton */}
            <div className="h-10 w-64 bg-secondary/50 rounded-full" />
            
            {/* Name Skeleton */}
            <div className="space-y-4">
              <div className="h-16 w-96 bg-secondary/50 rounded-lg" />
              <div className="h-8 w-80 bg-secondary/50 rounded-lg" />
            </div>
            
            {/* Location Skeleton */}
            <div className="h-6 w-32 bg-secondary/50 rounded-md" />
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-6 w-96 bg-secondary/50 rounded-md" />
              <div className="h-6 w-80 bg-secondary/50 rounded-md" />
            </div>
            
            {/* Buttons Skeleton */}
            <div className="flex gap-4">
              <div className="h-11 w-40 bg-secondary/50 rounded-md" />
              <div className="h-11 w-40 bg-secondary/50 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      {[...Array(3)].map((_, i) => (
        <section key={i} className="section-padding bg-secondary/20">
          <div className="container-custom">
            <div className="animate-pulse space-y-8">
              {/* Section Heading Skeleton */}
              <div className="space-y-4 text-center">
                <div className="h-10 w-64 bg-secondary/50 rounded-lg mx-auto" />
                <div className="h-6 w-96 bg-secondary/50 rounded-md mx-auto" />
              </div>
              
              {/* Content Grid Skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-64 bg-secondary/50 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

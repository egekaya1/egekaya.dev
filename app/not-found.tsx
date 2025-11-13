"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-2">
        <CardHeader>
          <div className="space-y-3 text-center">
            <div className="text-6xl font-bold text-primary">404</div>
            <CardTitle className="text-2xl">Page Not Found</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-center text-muted-foreground">
              Looking for something specific? Try navigating from the{' '}
              <Link href="/" className="text-primary hover:underline">
                homepage
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

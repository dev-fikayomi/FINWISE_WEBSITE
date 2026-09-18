import { Compass } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <Compass className="h-10 w-10 text-gold-500" />
      <h1 className="mt-6 font-display text-3xl font-extrabold text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-mist-400">
        The page you're looking for doesn't exist or may have moved. Let's get you back on
        track.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </div>
  )
}

import { Button } from '@/components/ui/button'

export function ExpertSection() {
  return (
    <div className="relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="subtitle">THE LETSPART ADVANTAGE</span>
            <h2 className="heading-xl mt-4 mb-6">
              EXPERT LITIGATION MANAGEMENT
            </h2>
            <p className="text-base tracking-wide italic text-gray-600 mb-6">
              We provide expert assistance for all aspects of your litigation needs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of litigation managers is dedicated to guiding prospective litigants through the
              legal process. We assess case viability, connect you with the right lawyer, assist in
              negotiating fair fees, and serve as a trusted escrow to ensure secure transactions,
              providing peace of mind every step of the way.
            </p>
            <Button variant="outline" className="rounded-none border-black text-black hover:bg-black hover:text-white transition-colors tracking-wider px-8 py-6 text-sm">
              I NEED ASSISTANCE
            </Button>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="/placeholder.svg?height=800&width=600"
              alt="Decorative plant"
              className="w-full max-w-md ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


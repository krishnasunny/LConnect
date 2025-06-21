import { Facebook, Twitter, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#1A2E35] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="border border-white/30 p-6">
            <h2 className="text-3xl tracking-[0.2em] font-bold">LETS PART</h2>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-sm text-gray-400">
            POWERED BY <span className="text-white">LETSPART</span>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>

          <div className="text-sm">
            <a href="/terms" className="hover:underline">
              TERM OF USE
            </a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:underline">
              PRIVACY POLICY
            </a>
            <span className="mx-2">|</span>
            <a href="/about" className="hover:underline">
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


import { Eye, Sun, Monitor } from 'lucide-react'

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      <div className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-[#75A5A9] opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="relative p-12 md:p-16 lg:p-20 text-white h-full flex flex-col items-start transition-all duration-300 group-hover:p-16 md:group-hover:p-20 lg:group-hover:p-24">
          <Eye className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold tracking-wider mb-4">PERSONALLY VERIFIED</h3>
          <p className="text-base tracking-wide">
            All lawyers are personally met by us.<br />
            Many times.
          </p>
        </div>
      </div>
      <div className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-[#A5B575] opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="relative p-12 md:p-16 lg:p-20 text-white h-full flex flex-col items-start transition-all duration-300 group-hover:p-16 md:group-hover:p-20 lg:group-hover:p-24">
          <Sun className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold tracking-wider mb-4">CHOOSE FROM FEW</h3>
          <p className="text-base tracking-wide">
            We don't have a million lawyers.<br />
            In fact, we have fewer than 50.
          </p>
        </div>
      </div>
      <div className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-[#75B59C] opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="relative p-12 md:p-16 lg:p-20 text-white h-full flex flex-col items-start transition-all duration-300 group-hover:p-16 md:group-hover:p-20 lg:group-hover:p-24">
          <Monitor className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold tracking-wider mb-4">WE UNDERSTAND</h3>
          <p className="text-base tracking-wide">
            We make sure that you are treated<br />
            with care and respect.
          </p>
        </div>
      </div>
    </div>
  )
}


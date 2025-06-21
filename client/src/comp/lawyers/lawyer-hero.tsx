
import { ChevronLeft } from "lucide-react"
import type { Lawyer } from "../../lawyers/lawyers-data"

export function LawyerHero({ lawyer }: { lawyer: Lawyer }) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={lawyer.heroImage || lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </div>

      {/* Back Button */}
      <div className="absolute top-32 left-4 md:left-8 z-10">
        <a href="/lawyers" className="flex items-center text-white hover:text-[#75B59C] transition-colors">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-sm tracking-wider">BACK TO LAWYERS</span>
        </a>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end">
        <div className="container mx-auto px-4 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="text-[#75B59C] text-sm tracking-wider mb-2">{lawyer.specialty}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-4">{lawyer.name}</h1>
            <p className="text-xl text-white/90">Trusted Legal Expertise Since {lawyer.practicingSince}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


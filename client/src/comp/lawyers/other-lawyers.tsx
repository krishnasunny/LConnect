

import { MapPin, Star, StarHalf } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Lawyer } from "../../lawyers/lawyers-data"

export function OtherLawyers({ lawyers }: { lawyers: Lawyer[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-wider mb-10 text-center">Meet Our Other Lawyers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/lawyers">
            <Button
              variant="outline"
              className="rounded-none border-black text-black hover:bg-black hover:text-white transition-colors tracking-wider px-8 py-6 text-sm"
            >
              VIEW ALL LAWYERS
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={lawyer.image || "/placeholder.svg"}
          alt={lawyer.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-wider">{lawyer.name}</h3>
          <p className="text-[#75B59C] font-medium">{lawyer.specialty}</p>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{lawyer.location}</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex text-yellow-500">
            {[...Array(Math.floor(lawyer.rating))].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            {lawyer.rating % 1 !== 0 && <StarHalf size={16} fill="currentColor" />}
          </div>
          <span className="text-sm text-gray-600 ml-2">({lawyer.reviews} reviews)</span>
        </div>

        <div className="pt-2">
          <a href={`/lawyers/${lawyer.id}`}>
            <Button className="w-full bg-[#1A2E35] hover:bg-[#2a3f47] text-white rounded-none">VIEW PROFILE</Button>
          </a>
        </div>
      </div>
    </div>
  )
}


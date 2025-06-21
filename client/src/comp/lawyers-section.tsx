import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Lawyer {
  name: string
  image: string
  practicingSince: string
  courts: string[]
}

const lawyers: Lawyer[] = [
  {
    name: "RADHA DWIVEDI",
    image: "/placeholder.svg?height=400&width=400",
    practicingSince: "2012",
    courts: ["BOMBAY HIGH COURT", "BANDRA FAMILY COURT"]
  },
  {
    name: "MEGHNA LAL",
    image: "/placeholder.svg?height=400&width=400",
    practicingSince: "2018",
    courts: ["BOMBAY HIGH COURT"]
  },
  {
    name: "JOYTI PRAVESH",
    image: "/placeholder.svg?height=400&width=400",
    practicingSince: "2016",
    courts: ["BOMBAY HIGH COURT", "BANDRA FAMILY COURT"]
  }
]

export function LawyersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="subtitle">
            A SMALL SELECTION OF PERSONALLY
          </span>
          <h2 className="heading-xl mt-4">
            VERIFIED LAWYERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 relative overflow-hidden">
                <div className="w-48 h-48 relative mx-auto transition-transform duration-300 group-hover:scale-105">
                  <Avatar className="w-full h-full border-4 border-transparent transition-colors group-hover:border-[#75B59C]">
                    <AvatarImage src={lawyer.image} alt={lawyer.name} />
                    <AvatarFallback>{lawyer.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <h3 className="heading-md mb-4">{lawyer.name}</h3>
              <div className="bg-[#75B59C] text-white text-sm tracking-wider py-2 px-6 mb-4">
                PRACTICING SINCE {lawyer.practicingSince}
              </div>
              <div className="space-y-2">
                {lawyer.courts.map((court, courtIndex) => (
                  <div key={courtIndex} className="text-gray-600 text-sm tracking-wider">
                    {court}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="rounded-none border-black text-black hover:bg-black hover:text-white transition-colors tracking-wider px-8 py-6 text-sm"
          >
            FIND YOUR LAWYER
          </Button>
        </div>
      </div>
    </section>
  )
}


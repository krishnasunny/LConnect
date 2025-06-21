import type { Lawyer } from "@/lib/lawyers-data"
import { CheckCircle, Award, Briefcase, Scale } from "lucide-react"

export function LawyerDetails({ lawyer }: { lawyer: Lawyer }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-wider mb-10 text-center">Why Choose {lawyer.name.split(" ")[0]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 text-[#75B59C]">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  With over {new Date().getFullYear() - Number.parseInt(lawyer.practicingSince)} years of experience and{" "}
                  {lawyer.reviews}+ satisfied clients,
                  {lawyer.name.split(" ")[0]} has consistently delivered exceptional results in complex legal matters.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-[#75B59C]">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Recognized Expertise</h3>
                <p className="text-gray-600">
                  Recognized as a leading {lawyer.specialty.toLowerCase()} specialist,
                  {lawyer.name.split(" ")[0]} brings unparalleled knowledge and insight to every case.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-[#75B59C]">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                <p className="text-gray-600">
                  {lawyer.name.split(" ")[0]} takes the time to understand your unique situation, developing tailored
                  strategies that address your specific legal needs and goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="text-xl font-bold mb-4">Case Success Rate</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Settlements</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#75B59C] h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Court Victories</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#75B59C] h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Client Satisfaction</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#75B59C] h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Notable Achievements</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Successfully resolved 500+ family law cases</li>
                  <li>Recognized by Legal Excellence Awards 2023</li>
                  <li>Featured expert on legal matters in national media</li>
                  <li>Published author on {lawyer.specialty.toLowerCase()} topics</li>
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="text-[#75B59C]">
                  <Scale className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">"Justice is not just my profession, it's my passion."</p>
                  <p className="text-sm font-bold">— {lawyer.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Client Testimonials</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="italic text-gray-600 mb-4">
                "{lawyer.name.split(" ")[0]} provided exceptional guidance during my divorce.
                {lawyer.gender === "female" ? "Her" : "His"} expertise and compassion made a difficult time much easier
                to navigate."
              </p>
              <p className="font-bold">— Rahul M.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <p className="italic text-gray-600 mb-4">
                "I was impressed by {lawyer.name.split(" ")[0]}'s attention to detail and strategic approach.
                {lawyer.gender === "female" ? "She" : "He"} secured an outcome that exceeded my expectations."
              </p>
              <p className="font-bold">— Priya S.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


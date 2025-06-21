import type { Lawyer } from "@/lib/lawyers-data"

export function LawyerAbout({ lawyer }: { lawyer: Lawyer }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Text Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold tracking-wider mb-6">About {lawyer.name}</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {lawyer.name} is a distinguished legal professional with over{" "}
                {new Date().getFullYear() - Number.parseInt(lawyer.practicingSince)} years of experience in{" "}
                {lawyer.specialty}. Throughout {lawyer.gender === "female" ? "her" : "his"} career,{" "}
                {lawyer.name.split(" ")[0]} has built a reputation for providing exceptional legal counsel with
                integrity and dedication.
              </p>

              <p>
                As a specialist in {lawyer.specialty.toLowerCase()}, {lawyer.name.split(" ")[0]} has successfully
                represented clients in numerous complex cases, achieving favorable outcomes through a combination of
                legal expertise, strategic thinking, and compassionate advocacy.
              </p>

              <p>
                {lawyer.name.split(" ")[0]} is admitted to practice in {lawyer.courts.join(" and ")}, where{" "}
                {lawyer.gender === "female" ? "she" : "he"} has established a strong track record of success.{" "}
                {lawyer.gender === "female" ? "Her" : "His"} approach focuses on understanding each client's unique
                situation and developing tailored legal strategies to address their specific needs.
              </p>

              <p>
                Beyond {lawyer.gender === "female" ? "her" : "his"} legal practice, {lawyer.name.split(" ")[0]} is
                actively involved in legal education and community service, regularly conducting workshops and providing
                pro bono services to those in need.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Education</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>J.D., National Law School of India University</li>
                  <li>B.A., Delhi University</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Practice Areas</h3>
                <ul className="space-y-1 text-gray-600">
                  {lawyer.specialty.includes("Family") && (
                    <>
                      <li>Divorce Proceedings</li>
                      <li>Child Custody</li>
                      <li>Alimony & Maintenance</li>
                    </>
                  )}
                  {lawyer.specialty.includes("Property") && (
                    <>
                      <li>Property Disputes</li>
                      <li>Real Estate Transactions</li>
                      <li>Tenant-Landlord Issues</li>
                    </>
                  )}
                  {lawyer.specialty.includes("Corporate") && (
                    <>
                      <li>Business Formation</li>
                      <li>Contract Negotiations</li>
                      <li>Corporate Compliance</li>
                    </>
                  )}
                  {!lawyer.specialty.includes("Family") &&
                    !lawyer.specialty.includes("Property") &&
                    !lawyer.specialty.includes("Corporate") && (
                      <>
                        <li>Legal Consultation</li>
                        <li>Case Representation</li>
                        <li>Legal Documentation</li>
                      </>
                    )}
                </ul>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`${lawyer.name} - Legal Expertise`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Watch {lawyer.name.split(" ")[0]} discuss {lawyer.gender === "female" ? "her" : "his"} approach to legal
                practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


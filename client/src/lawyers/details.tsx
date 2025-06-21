import { SiteHeader } from "@/comp/site-header"
import { SiteFooter } from "@/comp/site-footer"
import { LawyerHero } from "@/comp/lawyers/lawyer-hero"
import { LawyerAbout } from "@/comp/lawyers/lawyer-about"
import { LawyerActions } from "@/comp/lawyers/lawyer-actions"
import { LawyerDetails } from "@/comp/lawyers/lawyer-details"
import { OtherLawyers } from "@/comp/lawyers/other-lawyers"
import { getLawyer, getOtherLawyers } from "./lawyers-data.ts"

export default function LawyerProfilePage({ params }: { params: { id: string } }) {
  const lawyer = getLawyer(params.id)
  const otherLawyers = getOtherLawyers(params.id, 3)

  if (!lawyer) {
    return (
      <main className="min-h-screen">
        <SiteHeader />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Lawyer Not Found</h1>
          <p className="mb-8">The lawyer profile you're looking for doesn't exist or has been removed.</p>
          <a href="/lawyers" className="text-[#75B59C] hover:underline">
            Return to Lawyers List
          </a>
        </div>
        <SiteFooter />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <LawyerHero lawyer={lawyer} />
      <LawyerAbout lawyer={lawyer} />
      <LawyerActions />
      <LawyerDetails lawyer={lawyer} />
      <OtherLawyers lawyers={otherLawyers} />
      <SiteFooter />
    </main>
  )
}


import { LawyersHeader } from "@/comp/lawyers/lawyers-header"
import { LawyersFilter } from "@/comp/lawyers/lawyers-filter"
import { LawyersGrid } from "@/comp/lawyers/lawyers-grid"
import { SiteHeader } from "@/comp/site-header"
import { SiteFooter } from "@/comp/site-footer"

export default function LawyersPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <LawyersHeader />
      <section className="bg-gray-50 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <LawyersFilter />
          <LawyersGrid />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}


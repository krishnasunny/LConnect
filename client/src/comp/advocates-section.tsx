export function AdvocatesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-12">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#75B59C] font-medium">EXPERT LEGAL REPRESENTATION</h3>
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mt-2">OUR ADVOCATES</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {/* Row 1 */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Female advocate in business suit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Male advocate with beard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Male advocate in suit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Male advocate with crossed arms"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Row 2 */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Female advocate with dark hair"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Senior male advocate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Female advocate in professional attire"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Male advocate in judicial robe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}


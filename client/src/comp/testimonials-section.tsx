"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "This team truly embodies the spirit of justice. Their unwavering support and commitment to my case gave me strength when I felt lost. They guided me with integrity and ensured my interests were always prioritized.",
    author: "RAJ P.",
  },
  {
    quote:
      "The level of professionalism and personal attention I received was outstanding. They made a difficult situation much easier to handle.",
    author: "ANJALI SHARMA",
  },
  {
    quote:
      "Finding the right lawyer seemed impossible until I found LetsPart. Their team guided me through every step with expertise and compassion.",
    author: "RAHUL MEHTA",
  },
  {
    quote:
      "What sets them apart is their genuine care for clients. They don't just assign you a lawyer; they ensure it's the right match for your case.",
    author: "DEEPIKA PATEL",
  },
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const totalSlides = testimonials.length

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const element = document.getElementById("testimonials-section")
        if (element) {
          const rect = element.getBoundingClientRect()
          const scrollPosition = window.scrollY - rect.top - window.scrollY
          setScrollY(scrollPosition * 0.3) // Smoother parallax effect
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <section id="testimonials-section" className="relative h-[600px] overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY}px)`,
          transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?auto=format&fit=crop&w=2400&h=1600"
          alt="Forest background"
          className="h-[120%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] mb-2 font-medium">TESTIMONIALS</h3>
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-12">WHAT THEY SAY?</h2>

            {/* Testimonials Carousel */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full transition-all duration-700 px-4",
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none",
                  )}
                  aria-hidden={currentSlide !== index}
                >
                  <p className="text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
                    {testimonial.quote}
                  </p>
                  <p className="text-2xl font-bold tracking-wider">{testimonial.author}</p>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-16">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    currentSlide === index ? "bg-white" : "bg-white/40",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={currentSlide === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


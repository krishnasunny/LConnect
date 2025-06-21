'use client'

import { useState, useEffect } from 'react'

import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? "bg-black" : "bg-transparent"
    )}>
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <a href="/" className="text-2xl font-bold tracking-[0.2em] text-white">
          LETSPART
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wider font-medium text-white">
          <a href="/" className="hover:opacity-80">HOME</a>
          <a href="/about" className="hover:opacity-80">ABOUT</a>
          <a href="/lawyers" className="hover:opacity-80">LAWYERS</a>
          <a href="/testimonials" className="hover:opacity-80">TESTIMONIALS</a>
          <a href="/contact" className="hover:opacity-80">CONTACT</a>
          <a href="/login" className="hover:opacity-80">LOGIN/SIGNUP</a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="hover:opacity-80">HOME</a>
            <a href="/about" className="hover:opacity-80">ABOUT</a>
            <a href="/lawyers" className="hover:opacity-80">LAWYERS</a>
            <a href="/testimonials" className="hover:opacity-80">TESTIMONIALS</a>
            <a href="/contact" className="hover:opacity-80">CONTACT</a>
            <a href="/login" className="hover:opacity-80">LOGIN/SIGNUP</a>
          </nav>
        </div>
      )}
    </header>
  )
}


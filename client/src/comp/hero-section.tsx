"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "THE BEST FAMILY LAWYERS.",
    subtitle: "WE DO THINGS DIFFERENTLY",
    buttonText: "FIND ONE NOW",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    title: "EXPERT LEGAL SOLUTIONS.",
    subtitle: "DEDICATED TO YOUR SUCCESS",
    buttonText: "FIND ONE NOW",
    image: "/placeholder.svg?height=1080&width=1920",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-200">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={currentSlide !== index}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <img
              src="https://letspart.org/images/Wide--Banner%201.png"
              // src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="h-[120%] w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div
              className={cn(
                "transform text-center text-white transition-all duration-500",
                currentSlide === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
            >
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                {slide.title}
              </h1>
              <p className="mb-8 text-base sm:text-lg tracking-[0.2em]">
                {slide.subtitle}
              </p>
              <a href="/lawyers">
                <Button className="rounded-none bg-black px-8 py-6 text-sm tracking-wider text-white hover:bg-black/80">
                  {slide.buttonText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 sm:bottom-8 flex w-full justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </div>
  );
}

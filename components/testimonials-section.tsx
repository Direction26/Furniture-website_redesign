"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "New Delhi",
    text: "We furnished our entire home with Vishwakarma Furniture and the quality is outstanding. The teak dining table and sofa set are absolutely stunning. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    location: "Gurgaon",
    text: "The custom wardrobe they built for our bedroom is a work of art. The attention to detail in the carving and the finishing is remarkable. Great value for money too.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    location: "Noida",
    text: "I ordered an office desk and bookshelf set for my study. The delivery was on time and the installation was perfect. The wood quality is genuinely premium.",
    rating: 5,
  },
  {
    name: "Sunita Gupta",
    location: "Faridabad",
    text: "Vishwakarma Furniture transformed our living room with a beautiful L-shaped sofa. The fabric and cushioning are top quality. Their team was very professional throughout.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="rounded-xl bg-card p-8 shadow-sm md:p-12">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <blockquote className="mt-6 text-lg leading-relaxed text-card-foreground md:text-xl">
              {`"${testimonials[current].text}"`}
            </blockquote>

            {/* Author */}
            <div className="mt-6">
              <p className="font-semibold text-card-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === current ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Custom bookshelf with walnut finish" },
  { src: "/images/gallery-2.jpg", alt: "Modern TV unit console" },
  { src: "/images/gallery-3.jpg", alt: "Premium study desk" },
  { src: "/images/gallery-4.jpg", alt: "Handcrafted side tables" },
  { src: "/images/gallery-5.jpg", alt: "Wooden kitchen cabinets" },
  { src: "/images/gallery-6.jpg", alt: "Upholstered accent chair" },
  { src: "/images/category-sofa.jpg", alt: "Royal sofa set" },
  { src: "/images/category-dining.jpg", alt: "Heritage dining table" },
]

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Showcase
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Our Work Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Browse through our portfolio of completed projects and get inspired
            for your next furniture piece.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelected(index)}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"
              } w-full`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 rounded-full bg-card p-2 text-card-foreground shadow-lg"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

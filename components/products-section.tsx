"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Sofa Sets",
    image: "/images/category-sofa.jpg",
    description: "Luxurious comfort for your living room",
  },
  {
    title: "Beds",
    image: "/images/category-bed.jpg",
    description: "Restful designs for perfect sleep",
  },
  {
    title: "Dining Tables",
    image: "/images/category-dining.jpg",
    description: "Elegant gathering for every meal",
  },
  {
    title: "Wardrobes",
    image: "/images/category-wardrobe.jpg",
    description: "Organized storage, beautiful design",
  },
  {
    title: "Office Furniture",
    image: "/images/category-office.jpg",
    description: "Professional spaces, refined comfort",
  },
  {
    title: "Custom Furniture",
    image: "/images/category-custom.jpg",
    description: "Your vision, our craftsmanship",
  },
]

const featuredProducts = [
  {
    name: "Royal Chesterfield Sofa",
    description: "Hand-tufted premium leather sofa with solid teak frame and brass accents.",
    image: "/images/category-sofa.jpg",
  },
  {
    name: "Walnut King Bed",
    description: "Solid walnut king-size bed with a carved headboard and under-bed storage.",
    image: "/images/category-bed.jpg",
  },
  {
    name: "Heritage Dining Set",
    description: "6-seater solid sheesham dining table with upholstered chairs.",
    image: "/images/category-dining.jpg",
  },
  {
    name: "Executive Office Desk",
    description: "L-shaped executive desk in premium oak with cable management and drawers.",
    image: "/images/category-office.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Our Collection
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Explore Our Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From classic elegance to modern minimalism, find the perfect furniture to complete your space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#contact"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/50" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {category.description}
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mt-32">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Handpicked
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Featured Products
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href="#contact">Enquire Now</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

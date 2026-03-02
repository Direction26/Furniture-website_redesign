import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Luxury living room with custom furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
            Since 1995
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Custom Furniture Crafted With Precision
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Transform your living spaces with handcrafted furniture designed to
            reflect your style. Every piece tells a story of expert
            craftsmanship and timeless elegance.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base"
            >
              <a href="#products">
                View Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 text-base"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-12">
            <div>
              <p className="font-serif text-3xl font-bold text-primary-foreground">28+</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary-foreground">5000+</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary-foreground">100%</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Custom Made</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

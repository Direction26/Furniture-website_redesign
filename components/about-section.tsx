import Image from "next/image"
import { Award, Shield, Hammer } from "lucide-react"

const highlights = [
  {
    icon: Hammer,
    title: "Master Craftsmanship",
    description:
      "Every piece is handcrafted by skilled artisans with decades of experience in woodworking and furniture design.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We source only premium-grade timber and materials, ensuring each product meets the highest standards of durability.",
  },
  {
    icon: Award,
    title: "Trusted Since 1995",
    description:
      "With over 28 years in the industry, we have built a legacy of trust, serving thousands of satisfied customers.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Our Story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl text-balance">
            Building Furniture, Building Trust
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/about-workshop.jpg"
              alt="Vishwakarma Furniture workshop with craftsmen at work"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              New Vishwakarma Furniture has been a cornerstone of quality
              furniture manufacturing since 1995. What began as a small
              workshop has grown into a full-service furniture studio, renowned
              for bespoke designs that blend traditional craftsmanship with
              contemporary aesthetics.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our team of skilled carpenters and designers work closely with
              each client to bring their vision to life, whether it is a
              statement sofa set, an elegant dining table, or a complete home
              furnishing solution.
            </p>

            {/* Highlights */}
            <div className="mt-10 flex flex-col gap-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

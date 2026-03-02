import { Paintbrush, TreePine, Users, IndianRupee, Truck } from "lucide-react"

const features = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    description:
      "Every piece is designed to match your vision, space, and lifestyle. Tell us your dream, we will build it.",
  },
  {
    icon: TreePine,
    title: "Premium Materials",
    description:
      "We use only seasoned hardwoods like sheesham, teak, and walnut to ensure lasting durability.",
  },
  {
    icon: Users,
    title: "Skilled Artisans",
    description:
      "Our team of experienced carpenters brings decades of expertise to every joint and finish.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Factory-direct pricing without showroom markups. Premium quality that fits your budget.",
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Safe doorstep delivery and professional installation across the region at no extra cost.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Why Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl text-balance">
            Why Choose Vishwakarma Furniture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We combine traditional woodworking mastery with modern design
            sensibility to deliver furniture that stands the test of time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

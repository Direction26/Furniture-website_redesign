import { MessageSquare, PenTool, Hammer, PackageCheck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "Share your requirements, preferences, and budget. Our design experts will guide you through material and style options.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "We create detailed designs and 3D visualisations so you can see your furniture before it is built.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Manufacturing",
    description:
      "Your furniture is handcrafted in our workshop using premium materials with meticulous attention to detail.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Delivery",
    description:
      "We deliver and professionally install your furniture at your doorstep, ensuring it looks perfect in your space.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl text-balance">
            Our Work Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From the first conversation to the final delivery, we make every
            step seamless and transparent.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.title} className="relative flex flex-col items-center text-center">
              {/* Connector Line (hidden on mobile and for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-7 hidden h-px w-full bg-border md:block" />
              )}

              {/* Step Circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Step Number */}
              <span className="mt-4 font-serif text-sm font-bold text-accent">
                Step {item.step}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

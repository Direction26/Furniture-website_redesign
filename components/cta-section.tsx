import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Ready to Transform Your Space?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Get in touch with us today for a free consultation. Whether you need a
          single piece or want to furnish your entire home, we are here to help
          bring your vision to life.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base"
          >
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20your%20furniture%20collection."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 text-base"
          >
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 text-base"
          >
            <a href="#contact">Request Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

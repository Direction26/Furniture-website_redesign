import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

const categories = [
  "Sofa Sets",
  "Beds",
  "Dining Tables",
  "Wardrobes",
  "Office Furniture",
  "Custom Furniture",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground font-serif">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight tracking-wide text-background">
                  Vishwakarma
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-background/60">
                  Furniture
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Crafting premium custom furniture since 1995. Quality wood,
              expert craftsmanship, and designs that stand the test of time.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-background">Categories</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-background/60">
              <p>
                123, Industrial Area, Sector 5,
                <br />
                Near Main Highway, New Delhi - 110001
              </p>
              <a href="tel:+919876543210" className="hover:text-background">
                +91 98765 43210
              </a>
              <a
                href="mailto:info@vishwakarmafurniture.com"
                className="hover:text-background"
              >
                info@vishwakarmafurniture.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            {`© ${new Date().getFullYear()} New Vishwakarma Furniture. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}

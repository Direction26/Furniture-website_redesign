"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^[0-9+\-() ]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl text-balance">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a question or ready to start your project? Reach out to us and
            our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="mt-1 text-muted-foreground hover:text-accent"
                >
                  +91 98765 43210
                </a>
                <br />
                <a
                  href="tel:+919876543211"
                  className="text-muted-foreground hover:text-accent"
                >
                  +91 98765 43211
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Email</h3>
                <a
                  href="mailto:info@vishwakarmafurniture.com"
                  className="mt-1 text-muted-foreground hover:text-accent"
                >
                  info@vishwakarmafurniture.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Address</h3>
                <p className="mt-1 text-muted-foreground">
                  123, Industrial Area, Sector 5,
                  <br />
                  Near Main Highway, New Delhi - 110001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Working Hours
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-background p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  Thank You!
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has been sent successfully. Our team will get
                  back to you shortly.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", message: "" })
                  }}
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2 bg-card"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 bg-card"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="mt-2 bg-card"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the furniture you are looking for..."
                    rows={5}
                    className="mt-2 bg-card"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

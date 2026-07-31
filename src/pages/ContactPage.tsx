import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQ } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { faqs } from '@/data/content'
import { SITE } from '@/constants/site'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiries',
    message: '',
  })

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Rwoga Family Association for partnerships, volunteering, donations, media, or general questions."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Connect"
              title="Start a conversation"
              description="This form is frontend-ready. Wire it to your email service or CRM when you deploy."
            />
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 rounded-2xl border border-navy-900/8 bg-white p-4 shadow-soft transition-colors hover:bg-cream-100"
              >
                <Mail className="mt-0.5 h-5 w-5 text-amber-500" aria-hidden />
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <p className="text-sm text-navy-800/70">{SITE.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-navy-900/8 bg-white p-4 shadow-soft">
                <MapPin className="mt-0.5 h-5 w-5 text-amber-500" aria-hidden />
                <div>
                  <p className="font-semibold text-navy-900">Location</p>
                  <p className="text-sm text-navy-800/70">{SITE.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-navy-900/8 bg-white p-4 shadow-soft">
                <MessageSquare className="mt-0.5 h-5 w-5 text-amber-500" aria-hidden />
                <div>
                  <p className="font-semibold text-navy-900">Social</p>
                  <div className="mt-1 flex flex-wrap gap-3 text-sm">
                    <a href={SITE.social.linkedin} className="text-blue-500 hover:underline">
                      LinkedIn
                    </a>
                    <a href={SITE.social.instagram} className="text-blue-500 hover:underline">
                      Instagram
                    </a>
                    <a href={SITE.social.facebook} className="text-blue-500 hover:underline">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-lift sm:p-8">
              {submitted ? (
                <p className="rounded-2xl bg-sage-100 px-4 py-5 text-sage-600" role="status">
                  Thank you for reaching out. This demo form captured your message locally. Connect a backend to deliver it.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                    >
                      <option>General Inquiries</option>
                      <option>Partnerships</option>
                      <option>Volunteer Opportunities</option>
                      <option>Media</option>
                      <option>Donate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 bg-cream-100 py-20 sm:py-28">
        <div className="container-page max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" className="mb-8" />
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Take action"
            title="Prefer a clearer next step?"
            description="Explore volunteering, partnerships, or donations, then reach out when you’re ready."
            primaryLabel="Get involved"
            primaryTo="/get-involved"
            secondaryLabel="Donate"
            secondaryTo="/donate"
            variant="amber"
          />
          <div className="mt-6 text-center">
            <ButtonLink to="/transparency" variant="ghost">
              Or review our transparency commitments
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}

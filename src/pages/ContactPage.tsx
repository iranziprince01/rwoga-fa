import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQ } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { faqs } from '@/data/content'
import { SITE } from '@/constants/site'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiries',
    message: '',
  })

  useEffect(() => {
    if (!submitted) return

    const timeout = window.setTimeout(() => {
      setSubmitted(false)
      setForm({
        name: '',
        email: '',
        subject: 'General Inquiries',
        message: '',
      })
    }, 10_000)

    return () => window.clearTimeout(timeout)
  }, [submitted])

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
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

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Connect"
              title="Start a conversation"
              description="We read every note and respond with care."
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
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-blue-500 hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-blue-500 hover:underline"
                    >
                      Instagram
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
                  Thank you for your message. It has been received, and we will get back to you as soon as possible.
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
                        className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-base focus:border-blue-500 focus:outline-none"
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
                        className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-base focus:border-blue-500 focus:outline-none"
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
                      className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-base focus:border-blue-500 focus:outline-none"
                    >
                      <option>General Inquiries</option>
                      <option>Partnerships</option>
                      <option>Sponsorships</option>
                      <option>Mentorship</option>
                      <option>Membership</option>
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
                      className="w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 py-3 text-base focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  {error ? (
                    <p className="rounded-xl bg-amber-100 px-4 py-3 text-sm text-navy-900" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 bg-cream-100 section-pad">
        <div className="container-page max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" className="mb-8" />
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  )
}

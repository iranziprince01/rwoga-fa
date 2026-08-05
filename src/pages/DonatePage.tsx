import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { contributions } from '@/data/content'
import { getIcon } from '@/utils'

export function DonatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Financial Support',
    message: '',
  })

  useEffect(() => {
    if (!submitted) return

    const timeout = window.setTimeout(() => {
      setSubmitted(false)
      setForm({
        name: '',
        email: '',
        type: 'Financial Support',
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
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send your interest. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to send your interest. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Donate"
        description="Support Rwoga through money, books, laptops, training, mentorship, equipment, or volunteer time, warmly and without pressure."
        path="/donate"
      />
      <PageHero
        eyebrow="Donate"
        title={"Support refugee communities\nby contributing"}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Where support goes"
              title="Programs, learning tools, and community care"
              description="As financial systems mature, we will publish clear reports. Today, we commit that contributions will strengthen education support, mentorship, leadership activities, and member wellbeing."
            />
            <div className="mt-8 space-y-4">
              {[
                'Academic and skills programming',
                'Learning materials and device access',
                'Community gatherings and member care',
                'Transparent organizational capacity',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-navy-900/8 bg-white px-5 py-4 text-navy-900 shadow-soft"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-lift sm:p-8">
              <h2 className="font-display text-2xl font-bold text-navy-900">Express interest to give</h2>

              {submitted ? (
                <p className="mt-8 rounded-2xl bg-sage-100 px-4 py-5 text-sage-600" role="status">
                  Thank you for your generous heart. Your interest has been received with deep appreciation, and we will be in touch soon.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="donor-name" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Full name
                    </label>
                    <input
                      id="donor-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Email
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-type" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Contribution type
                    </label>
                    <select
                      id="donor-type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="h-11 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 text-sm focus:border-blue-500 focus:outline-none"
                    >
                      {contributions.map((c) => (
                        <option key={c.id}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="donor-message" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Message
                    </label>
                    <textarea
                      id="donor-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                      placeholder="Tell us briefly how you’d like to help."
                    />
                  </div>
                  {error ? (
                    <p className="rounded-xl bg-amber-100 px-4 py-3 text-sm text-navy-900" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <Button type="submit" variant="amber" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Submit interest'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Ways to contribute"
            title="Many forms of support create opportunity"
            description="Contribute learning materials, laptops, books, vocational equipment, scholarships, training, financial support, professional skills, or volunteer time."
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contributions.map((item, index) => {
              const Icon = getIcon(item.icon)
              return (
                <Reveal key={item.id} delay={index * 0.04}>
                  <article className="h-full rounded-2xl border border-navy-900/8 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{item.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <CTA
            eyebrow="Trust"
            title="Transparency is part of the gift"
            description="We are preparing governance documents, policies, and reports so every supporter can see how Rwoga stewards resources."
            primaryLabel="Visit Resources"
            primaryTo="/transparency"
            secondaryLabel="Get Involved"
            secondaryTo="/get-involved"
            variant="light"
          />
        </div>
      </section>
    </>
  )
}

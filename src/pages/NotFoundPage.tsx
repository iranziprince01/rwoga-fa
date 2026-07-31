import { SEO } from '@/components/ui/SEO'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" description="The page you are looking for could not be found." path="/404" />
      <section className="gradient-mesh flex min-h-[80svh] items-center pt-28 pb-20">
        <div className="container-page text-center">
          <p className="font-display text-8xl font-extrabold text-amber-400">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            This path isn’t part of the journey
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            The page may have moved, or the link might be incorrect. Let’s get you back to Rwoga.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/" variant="amber" size="lg">
              Back home
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}

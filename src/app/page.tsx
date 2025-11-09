import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCanvas } from "@/components/HeroCanvas";
import { courses } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  const course = courses[0];
  const savings =
    course.originalPrice > course.price
      ? course.originalPrice - course.price
      : 0;

  const testimonials = [
    {
      name: "Ava Harrison",
      title: "Founder, Lumen Atelier",
      quote:
        "We rebuilt our commerce stack with the included blueprints in 9 days, doubled launch velocity, and closed our first partner deal straight out of the investor narrative lab.",
      avatar: "/avatars/ava.png",
    },
    {
      name: "Malik Ortega",
      title: "COO, CartShift",
      quote:
        "The automation drills and revenue telemetry dashboards let us replace three disjointed tools. Our ops latency dropped by 61% in the first month.",
      avatar: "/avatars/malik.png",
    },
    {
      name: "Noor Valdez",
      title: "Principal, Venture North",
      quote:
        "The storytelling frameworks helped two portfolio companies close strategic capital. Investors finally see the metrics instrumentation baked into their storefronts.",
      avatar: "/avatars/noor.png",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora bg-cover opacity-80" />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <HeroCanvas />
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-28 lg:flex-row lg:items-center lg:gap-20">
            <div className="flex-1 space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-brand-muted">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                Cinematic Commerce Blueprint
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                {course.heroHeadline}
              </h1>
              <p className="max-w-2xl text-lg text-brand-muted md:text-xl">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/checkout"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:gap-4"
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#modules"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-secondary/70 hover:text-brand-secondary"
                >
                  Preview Curriculum
                </Link>
              </div>
              <div className="grid gap-4 text-sm sm:grid-cols-3">
                <div className="glass-panel rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                    Investment
                  </p>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {formatCurrency(course.price)}
                  </div>
                  {savings > 0 && (
                    <p className="mt-1 text-xs text-brand-muted">
                      Save {formatCurrency(savings)}
                    </p>
                  )}
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                    Format
                  </p>
                  <div className="mt-2 text-sm text-white">{course.format}</div>
                  <p className="mt-1 text-xs text-brand-muted">
                    {course.duration}
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                    Level
                  </p>
                  <div className="mt-2 text-sm text-white">{course.level}</div>
                  <p className="mt-1 text-xs text-brand-muted">
                    Built for founders, operators & studios
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow lg:max-w-sm">
              <h2 className="font-display text-2xl text-white">
                {course.title}
              </h2>
              <p className="text-sm text-brand-muted">{course.subtitle}</p>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-semibold text-white">
                  {formatCurrency(course.price)}
                </span>
                <span className="text-sm text-brand-muted line-through">
                  {formatCurrency(course.originalPrice)}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-brand-muted">
                <li className="flex items-start gap-3">
                  <Zap className="mt-1 h-4 w-4 text-brand-secondary" />
                  Advanced 3D storefront blueprints
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-1 h-4 w-4 text-brand-secondary" />
                  Private mastermind & partner marketplace
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-brand-secondary" />
                  Graduation badge & investor data room
                </li>
              </ul>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-surface transition hover:bg-white"
              >
                Claim Founder Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-surface/80">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-12 text-sm text-brand-muted md:gap-0">
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">Operators</p>
              <p className="mt-2 text-lg font-semibold text-white">
                1,200+ teams accelerated
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">
                Time to launch
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                9 day average build sprint
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">
                Revenue impact
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                3.4x median growth
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">Satisfaction</p>
              <p className="mt-2 text-lg font-semibold text-white">
                98% would recommend
              </p>
            </div>
          </div>
        </section>

        <section
          id="modules"
          className="relative mx-auto w-full max-w-6xl px-6 py-24"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              Curriculum
            </span>
            <h2 className="mt-4 font-display text-3xl text-white md:text-5xl">
              A 6-lab immersion engineered for revenue, retention, and runway.
            </h2>
          </div>
          <div className="mt-12 space-y-6">
            {course.modules.map((module, index) => (
              <div
                key={module.title}
                className="glass-panel relative overflow-hidden rounded-3xl p-8 transition hover:border-brand-secondary/40 hover:shadow-glow md:grid md:grid-cols-[auto_1fr] md:gap-12"
              >
                <div className="mb-6 flex flex-col text-sm text-brand-muted md:mb-0">
                  <span className="text-xs uppercase tracking-[0.35em]">
                    Lab {index + 1}
                  </span>
                  <span className="mt-2 text-lg font-semibold text-white">
                    {module.duration}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">
                    {module.title}
                  </h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    {module.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {module.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-muted"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="bonuses"
          className="relative mx-auto w-full max-w-6xl px-6 py-24"
        >
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                Founder Toolkit
              </span>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Plug-and-play code accelerators to deploy cinematic experiences.
              </h2>
              <p className="mt-3 text-sm text-brand-muted">
                Every module unlocks ready-to-ship components, automation
                blueprints, and narrative assets so you can apply the lessons in
                real product environments the same day.
              </p>
              <div className="mt-8 grid gap-6">
                {course.bonuses.map((bonus) => (
                  <div key={bonus.title} className="glass-panel rounded-3xl p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">
                        {bonus.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-brand-muted">
                      {bonus.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel flex flex-col justify-between rounded-3xl p-8">
              <h3 className="font-display text-2xl text-white">
                Outcomes you can expect
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-secondary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="relative mx-auto w-full max-w-6xl px-6 py-24"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                Operator Proof
              </span>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Trusted by studios, venture-backed founders, and scaling
                operators.
              </h2>
            </div>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-3 text-sm font-semibold text-brand-secondary transition hover:text-white"
            >
              Secure your seat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6"
              >
                <p className="text-sm text-brand-muted">{testimonial.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="glass-panel overflow-hidden rounded-3xl p-10 md:p-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Join the next Nobel launch cohort.
                </h2>
                <p className="mt-4 text-sm text-brand-muted">
                  Enrollment closes once we hit 150 operators to preserve
                  personal support. Start building your cinematic storefront and
                  code-driven automation stack today.
                </p>
              </div>
              <div className="space-y-4 text-sm text-brand-muted">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em]">
                    Next start
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    December 2 · 10AM PST
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em]">
                    Access limit
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    150 founders & operators
                  </p>
                </div>
              </div>
              <Link
                href="/checkout"
                className="inline-flex items-center gap-3 rounded-full bg-brand-secondary/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-surface transition hover:bg-brand-secondary"
              >
                Reserve Spot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { courses } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";
import { useMarketplaceStore } from "@/store/useMarketplaceStore";

type CheckoutForm = {
  fullName: string;
  email: string;
  company?: string;
  agree: boolean;
};

export default function CheckoutPage() {
  const router = useRouter();
  const course = courses[0];
  const addOrder = useMarketplaceStore((state) => state.addOrder);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      agree: true,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    const order = addOrder({
      courseId: course.id,
      purchaserName: data.fullName,
      email: data.email,
      company: data.company,
    });
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push(`/thank-you?order=${order.id}`);
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-16 lg:flex-row">
        <div className="flex-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted transition hover:text-brand-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>
          <h1 className="mt-8 font-display text-3xl text-white md:text-4xl">
            Complete your enrollment
          </h1>
          <p className="mt-4 max-w-lg text-sm text-brand-muted">
            Claim one of the remaining seats in the next Nobel launch lab.
            You&apos;ll receive immediate access to module zero, assets, and the
            private community while we prep your onboarding sprint.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                Full name
              </label>
              <input
                {...register("fullName", { required: "Please provide a name." })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                placeholder="Avery Quinn"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-brand-secondary">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "We use your email to deliver course access.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email address.",
                  },
                })}
                type="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                placeholder="avery@nobel.studio"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-brand-secondary">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                Company (optional)
              </label>
              <input
                {...register("company")}
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                placeholder="Nobel Systems"
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-brand-muted">
              <input
                type="checkbox"
                {...register("agree", {
                  required:
                    "You need to acknowledge the founder agreement to enroll.",
                })}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-surface text-brand-secondary focus:ring-brand-secondary"
              />
              <span>
                I agree to the founder service agreement, covering cohort
                participation, confidentiality, and lifetime access to course
                materials.
              </span>
            </label>
            {errors.agree && (
              <p className="text-xs text-brand-secondary">
                {errors.agree.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Secure Enrollment"}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <p className="flex items-center justify-center gap-2 text-xs text-brand-muted">
              <Lock className="h-4 w-4" />
              256-bit payment layer · Instant access on completion
            </p>
          </form>
        </div>
        <aside className="flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
              Your enrollment
            </p>
            <h2 className="mt-4 font-display text-2xl text-white">
              {course.title}
            </h2>
            <p className="mt-2 text-sm text-brand-muted">{course.subtitle}</p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-surface/60 p-6">
            <div className="flex items-center justify-between text-sm text-brand-muted">
              <span>Program access</span>
              <span>{formatCurrency(course.price)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-brand-muted">
              <span>Bonus assets</span>
              <span>Included</span>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>Total due today</span>
                <span>{formatCurrency(course.price)}</span>
              </div>
              <p className="mt-2 text-xs text-brand-muted">
                {course.format} · {course.duration}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 text-sm text-brand-muted">
            <p className="font-semibold text-white">What happens next?</p>
            <ul className="mt-3 space-y-2">
              <li>• Receive onboarding email with your private access links.</li>
              <li>• Join the Nobel operator community and intros channel.</li>
              <li>• Unlock Module Zero and the immersive kickoff brief.</li>
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

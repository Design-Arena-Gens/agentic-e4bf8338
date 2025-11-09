"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, HomeIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useMarketplaceStore } from "@/store/useMarketplaceStore";
import { courses } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");
  const orders = useMarketplaceStore((state) => state.orders);
  const order = orders.find((entry) => entry.id === orderId);
  const course = courses[0];

  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="glass-panel flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl px-10 py-16">
          <CheckCircle2 className="h-16 w-16 text-brand-secondary" />
          <h1 className="font-display text-3xl text-white md:text-4xl">
            Welcome to the Nobel Operator Circle.
          </h1>
          <p className="max-w-2xl text-sm text-brand-muted">
            We just dispatched your cinematic onboarding kit. It includes access
            to Module Zero, your private community invite, and the automation
            templates to prep for Lab One.
          </p>
          {order ? (
            <div className="w-full rounded-2xl border border-white/10 bg-surface/70 p-6 text-sm text-left text-brand-muted">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
                Enrollment summary
              </p>
              <div className="mt-4 flex flex-col gap-2 text-white md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {course.title}
                  </p>
                  <p className="text-xs text-brand-muted">
                    Order #{order.id.slice(0, 6).toUpperCase()} ·{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(order.createdAt))}
                  </p>
                </div>
                <div className="text-lg font-semibold">
                  {formatCurrency(order.total)}
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-xs text-brand-muted md:grid-cols-2">
                <div>
                  <p className="uppercase tracking-[0.3em] text-white/60">
                    Operator
                  </p>
                  <p className="mt-1 text-white">{order.purchaserName}</p>
                  <p>{order.email}</p>
                </div>
                {order.company && (
                  <div>
                    <p className="uppercase tracking-[0.3em] text-white/60">
                      Company
                    </p>
                    <p className="mt-1 text-white">{order.company}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 px-6 py-4 text-sm text-brand-muted">
              We couldn&apos;t locate a recent order. If you completed payment,
              your confirmation email includes your onboarding link.
            </div>
          )}
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-surface transition hover:bg-white"
            >
              Return home
              <HomeIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-secondary/70 hover:text-brand-secondary"
            >
              Manage enrollment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-surface text-brand-muted">
          Loading confirmation...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

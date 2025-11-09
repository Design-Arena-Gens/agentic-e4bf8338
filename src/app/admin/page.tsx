"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Lock, LogOut, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useMarketplaceStore } from "@/store/useMarketplaceStore";
import { formatCurrency } from "@/lib/utils";

type PricingFormValues = {
  price: number;
  originalPrice: number;
  level: "Beginner" | "Intermediate" | "Advanced";
};

export default function AdminPage() {
  const [error, setError] = useState<string | null>(null);
  const [passcode, setPasscode] = useState("");
  const {
    adminSession,
    authenticateAdmin,
    courses,
    orders,
    updateCoursePricing,
    toggleCourseLevel,
  } = useMarketplaceStore((state) => ({
    adminSession: state.adminSession,
    authenticateAdmin: state.authenticateAdmin,
    courses: state.courses,
    orders: state.orders,
    updateCoursePricing: state.updateCoursePricing,
    toggleCourseLevel: state.toggleCourseLevel,
  }));

  const course = courses[0];

  const { register, handleSubmit, reset } = useForm<PricingFormValues>({
    defaultValues: {
      price: course.price,
      originalPrice: course.originalPrice,
      level: course.level,
    },
  });

  const handleAuthenticate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = authenticateAdmin(passcode);
    if (!success) {
      setError("Incorrect command phrase. Try again.");
    } else {
      setError(null);
    }
  };

  const onSubmit = handleSubmit((data) => {
    updateCoursePricing(
      course.id,
      Number(data.price),
      Number(data.originalPrice),
    );
    toggleCourseLevel(course.id, data.level);
    reset({
      price: Number(data.price),
      originalPrice: Number(data.originalPrice),
      level: data.level,
    });
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16">
        <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-brand-muted">
              Admin Command
            </span>
            <h1 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Nobel Control Center
            </h1>
            <p className="mt-2 max-w-xl text-sm text-brand-muted">
              Monitor enrollments, adjust tuition, and broadcast updates to the
              cohort. All edits persist locally and sync instantly across your
              session.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-brand-muted">
            Session · {adminSession.isAuthenticated ? "Unlocked" : "Restricted"}
          </div>
        </header>

        {!adminSession.isAuthenticated ? (
          <form
            onSubmit={handleAuthenticate}
            className="glass-panel flex max-w-2xl flex-col gap-5 rounded-3xl p-8"
          >
            <h2 className="text-xl font-semibold text-white">
              Enter command phrase
            </h2>
            <p className="text-sm text-brand-muted">
              Authorized operators only. Use the passphrase distributed in your
              onboarding manifest to gain access to the control tower.
            </p>
            <input
              type="password"
              value={passcode}
              onChange={(event) => setPasscode(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
              placeholder="Command phrase"
            />
            {error && <p className="text-xs text-brand-secondary">{error}</p>}
            <button
              type="submit"
              className="inline-flex items-center gap-3 self-start rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:opacity-90"
            >
              Authenticate
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-10">
            <section className="glass-panel rounded-3xl p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {course.title}
                  </h2>
                  <p className="text-sm text-brand-muted">
                    Modify price, anchor value, and learning level.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPasscode("");
                    useMarketplaceStore.setState({
                      adminSession: {
                        isAuthenticated: false,
                        issuedAt: null,
                      },
                    });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted transition hover:text-brand-secondary"
                >
                  <LogOut className="h-4 w-4" />
                  End session
                </button>
              </div>
              <form onSubmit={onSubmit} className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                    Tuition (USD)
                  </label>
                  <input
                    type="number"
                    step="10"
                    {...register("price", { valueAsNumber: true })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                    Anchor price (USD)
                  </label>
                  <input
                    type="number"
                    step="10"
                    {...register("originalPrice", { valueAsNumber: true })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                    Learning level
                  </label>
                  <select
                    {...register("level")}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-brand-secondary/70 focus:ring-2 focus:ring-brand-secondary/30"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20 md:col-span-3"
                >
                  Update course profile
                  <Sparkles className="h-4 w-4" />
                </button>
              </form>
            </section>

            <section className="glass-panel rounded-3xl p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Enrollment feed
                  </h2>
                  <p className="text-sm text-brand-muted">
                    Track incoming founders, detect revenue, and prep community
                    intros.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-muted">
                  {orders.length} active orders
                </span>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-white/5 text-left text-sm text-brand-muted">
                  <thead>
                    <tr>
                      <th className="pb-3 pr-6 text-xs uppercase tracking-[0.3em]">
                        Operator
                      </th>
                      <th className="pb-3 pr-6 text-xs uppercase tracking-[0.3em]">
                        Email
                      </th>
                      <th className="pb-3 pr-6 text-xs uppercase tracking-[0.3em]">
                        Company
                      </th>
                      <th className="pb-3 pr-6 text-xs uppercase tracking-[0.3em]">
                        Tuition
                      </th>
                      <th className="pb-3 text-xs uppercase tracking-[0.3em]">
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {orders.map((order) => (
                      <tr key={order.id} className="text-xs">
                        <td className="py-4 pr-6 text-white">
                          {order.purchaserName}
                        </td>
                        <td className="py-4 pr-6">{order.email}</td>
                        <td className="py-4 pr-6">
                          {order.company ?? "—"}
                        </td>
                        <td className="py-4 pr-6">
                          {formatCurrency(order.total)}
                        </td>
                        <td className="py-4 text-brand-muted">
                          {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          }).format(new Date(order.createdAt))}
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-6 text-center text-xs text-brand-muted"
                        >
                          Awaiting first cohort enrollment.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer />
      {!adminSession.isAuthenticated && (
        <div className="fixed bottom-10 left-1/2 z-40 w-[90vw] max-w-sm -translate-x-1/2 rounded-3xl border border-brand-secondary/30 bg-brand-secondary/10 px-6 py-4 text-xs text-brand-muted backdrop-blur">
          <div className="flex items-center gap-3 text-brand-secondary">
            <Lock className="h-4 w-4" />
            Restricted area · Authorized operators only
          </div>
        </div>
      )}
    </div>
  );
}

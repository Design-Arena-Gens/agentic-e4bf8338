"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-muted">
            Nobel E-Commerce Lab
          </p>
          <p className="mt-3 max-w-xl text-sm text-brand-muted">
            Code-first e-commerce accelerators for founders and operators who
            want to build immersive customer journeys with cinematic polish.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm text-brand-muted md:flex-row md:items-center md:gap-6">
          <Link
            href="/checkout"
            className="transition hover:text-brand-secondary"
          >
            Enroll Now
          </Link>
          <Link
            href="/thank-you"
            className="transition hover:text-brand-secondary"
          >
            Student Success
          </Link>
          <Link href="/admin" className="transition hover:text-brand-secondary">
            Admin Panel
          </Link>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-brand-muted"
        >
          © {new Date().getFullYear()} Nobel Systems
        </motion.span>
      </div>
    </footer>
  );
}

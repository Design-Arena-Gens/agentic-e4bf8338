"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/#modules", label: "Curriculum" },
  { href: "/#bonuses", label: "Bonuses" },
  { href: "/#testimonials", label: "Proof" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-white/5 bg-surface/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-muted transition hover:text-white"
        >
          <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent shadow-glow" />
          <span>Secret of E-Commerce Nobel</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition hover:text-white ${
                pathname === link.href ? "text-white" : ""
              }`}
            >
              {pathname === link.href && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-brand-secondary"
                />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/checkout"
            className="hidden rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white shadow-inner transition hover:border-brand-secondary/80 hover:text-brand-secondary md:inline-flex"
          >
            Purchase
          </Link>
          <Link
            href="/#modules"
            className="rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg"
          >
            Explore Curriculum
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

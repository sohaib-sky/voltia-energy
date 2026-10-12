"use client";

import { Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
                <Sparkles className="h-4 w-4 text-accent-light" />
              </div>
              <span className="font-display text-lg font-bold text-text-primary">
                TRUE CUTOUT
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              Cut the background. Keep the subject.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} TURE. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            TRUE CUTOUT by TURE
          </p>
        </div>
      </div>
    </footer>
  );
}

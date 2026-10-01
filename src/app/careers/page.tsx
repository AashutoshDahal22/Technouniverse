"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section className="aboutus min-h-screen bg-[#0b0b0b] text-white px-6 md:px-20 py-28 relative overflow-hidden flex items-center">
      {/* Background accent line */}
      <div
        className="absolute left-0 top-0 h-full w-px opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #e0cfa0, transparent)",
        }}
      />

      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-5 text-white/40"
            style={{
              letterSpacing: "0.35em",
            }}
          >
            Join Us
          </p>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light leading-none">
            Careers
          </h1>
        </motion.div>

        {/* Main Careers Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-y border-white/10 py-12 md:py-16"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-white/20" />

                <span className="text-xs tracking-[0.3em] uppercase text-white/40">
                  No Open Positions
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl">
                We're not hiring right now.
              </h2>

              <p className="mt-7 text-base md:text-lg text-white/45 leading-relaxed max-w-2xl">
                We’re a small team with diverse skills, working across
                software, hardware, and emerging technologies. As we grow,
                we’ll update this page with new opportunities for people who
                like solving problems and building things from the ground up.
              </p>
            </div>

            {/* CTA */}
            <div className="md:text-right">
              <p className="text-xs tracking-[0.25em] uppercase text-white/25 mb-5">
                Stay Connected
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:border-amber-200/50 hover:text-amber-200 transition-colors duration-300"
              >
                Get in Touch

                <span className="text-base leading-none">↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Small footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-8 text-xs text-white/20 tracking-wide"
        >
          Check back here for future opportunities.
        </motion.p>
      </div>
    </section>
  );
}

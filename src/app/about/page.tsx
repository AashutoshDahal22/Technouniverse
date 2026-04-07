"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Split the paragraph into individual words for stagger reveal
  const paragraph =
    "At Technouniverse, we are a dynamic team of young entrepreneurs driven by an unwavering passion for pushing the boundaries of innovation and advancing the frontiers of technology. Our mission is to deliver cutting-edge solutions that are future-ready, user-centric, and designed to create a lasting global impact. We build powerful web and mobile applications, immersive augmented reality experiences, and advanced 3D technologies — helping businesses not just adapt to the digital landscape, but actively shape it.";

  const words = paragraph.split(" ");

  return (
    <section
      ref={containerRef}
      className="aboutus min-h-screen relative overflow-hidden px-6 md:px-20 py-28"
    >
      {/* Custom cursor */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 120 : 16,
          height: hovering ? 120 : 16,
          border: "1px solid rgba(255,255,255,0.6)",
          backgroundColor: hovering ? "rgba(224,207,160,0.08)" : "transparent",
          mixBlendMode: "difference",
          transition:
            "width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1), background-color 0.35s ease",
        }}
      />

      {/* Decorative top-right corner mark */}
      <div className="absolute top-16 right-20 opacity-20 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <line x1="60" y1="0" x2="0" y2="0" stroke="white" strokeWidth="0.5" />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="60"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.4em] uppercase mb-6 opacity-40 text-white"
      >
        Our Story
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-light text-white leading-none mb-20"
        style={{
          fontStyle: "bold",
        }}
      >
        Who Are We?
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="w-full h-px bg-white/15 mb-20 origin-left"
      />

      {/* Main text block */}
      <div
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Accent line */}
        <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-200/30 to-transparent hidden md:block" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.018 } },
          }}
          className="text-xl md:text-2xl font-light leading-relaxed text-white/70"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Bottom stat row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mt-24 flex flex-wrap gap-12 md:gap-20"
      >
        {[
          { value: "4+", label: "Core Services" },
          { value: "100%", label: "Client-Focused" },
          { value: "∞", label: "Innovation Drive" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-5xl font-light text-amber-100/80">
              {stat.value}
            </span>
            <span className="text-xs tracking-widest uppercase opacity-40 text-white">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

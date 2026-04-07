"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      title: "Web Development",
      tag: "Digital Products",
      description:
        "We specialize in creating fast, modern, and scalable websites and web applications. Our team works closely with you to understand your business requirements, crafting custom solutions that deliver seamless user experiences. Whether it's a simple website or a complex web application, we ensure that it is responsive, secure, and optimized for performance",
    },
    {
      number: "02",
      title: "AR & 3D Solutions",
      tag: "Immersive Tech",
      description:
        "We design and develop immersive augmented reality (AR) experiences and advanced 3D visualizations that bring your ideas to life. From interactive product demos to cutting-edge architectural visualizations, our AR and 3D solutions enable users to engage with products or concepts in a more dynamic and hands-on way.",
    },
    {
      number: "03",
      title: "Hardware Services",
      tag: "Infrastructure",
      description:
        "Our hardware services cover everything from the sale of top-quality computer parts to professional upgrades and repairs. We work with businesses and individuals to ensure that their computer systems and hardware are running at optimal performance, delivering fast, reliable, and affordable solutions.",
    },
    {
      number: "04",
      title: "Automation Systems",
      tag: "Efficiency",
      description:
        "We help businesses streamline operations and boost efficiency through automation. Our systems optimize workflows, eliminate manual processes, and enhance data accuracy — saving you time, reducing errors, and improving productivity across all levels of your organization.",
    },
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="aboutus min-h-screen text-white px-6 md:px-20 py-28 relative overflow-hidden">
      {/* Background accent line */}
      <div
        className="absolute left-0 top-0 h-full w-px opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #e0cfa0, transparent)",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4 opacity-50"
          style={{
            letterSpacing: "0.35em",
          }}
        >
          What We Do
        </p>
        <h1
          className="text-7xl md:text-8xl font-light leading-none"
          style={{
            fontStyle: "bold",
          }}
        >
          Our Services
        </h1>
      </motion.div>

      {/* Service List */}
      <div className="flex flex-col divide-y divide-white/10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div
              className="group py-8 cursor-pointer relative"
              onClick={() => toggleIndex(index)}
            >
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(ellipse at left, rgba(224,207,160,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="flex items-start justify-between gap-8 relative z-10">
                {/* Left: number + title */}
                <div className="flex items-baseline gap-6 flex-1">
                  <span className="text-sm opacity-30 shrink-0">
                    {service.number}
                  </span>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-3xl md:text-4xl font-light group-hover:text-amber-200 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <span className="text-xs tracking-widest opacity-40 uppercase">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Right: animated indicator */}
                <div className="flex items-center justify-center shrink-0 mt-2">
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-amber-200/40 transition-colors duration-300"
                    style={{ borderRadius: 0 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="6"
                        x2="12"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="desc"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden relative z-10"
                  >
                    <p className="pt-6 pb-2 pl-12 text-base text-white/55 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

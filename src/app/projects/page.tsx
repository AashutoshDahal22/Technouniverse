"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
  {
    number: "01",
    title: "Pentagon Legal Associates",
    category: "Web Development",
    year: "2025",
    link:"https://pentagonlegalassociates.com.np",
    description:
      "A professional website designed for a law firm to establish a strong digital presence, clearly present its legal services, and make it easier for prospective clients to learn about the firm and get in touch.",
    image: "/projects/project-01.jpg",
    tags: ["Web", "Legal", "Digital Presence"],
  },

    {
      number: "02",
      title: "V-Light IT",
      category: "E-Commerce",
      year: "2025",
      link:"https://vit.com.np/",
      description:
        "A ecommerce platform to buy and sell computer hardware products simply and effeciently",
      image: "/projects/project-02.jpg",
      tags: ["Web", "Business", "Interactive"],
    },
    // {
    //   number: "03",
    //   title: "Project Name Three",
    //   category: "Software",
    //   year: "2024",
    //   description:
    //     "A custom software solution designed to simplify business operations and replace inefficient manual workflows.",
    //   image: "/projects/project-03.jpg",
    //   tags: ["Software", "Automation"],
    // },
    // {
    //   number: "04",
    //   title: "Project Name Four",
    //   category: "Security Systems",
    //   year: "2024",
    //   description:
    //     "A complete security and surveillance solution designed around the specific requirements of a modern business environment.",
    //   image: "/projects/project-04.jpg",
    //   tags: ["CCTV", "Security", "Infrastructure"],
    // },
  ];

  const toggleProject = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen bg-[#f5f3ee] text-[#111111] px-6 md:px-20 py-28 relative overflow-hidden">
      {/* Background accent line */}
      <div
        className="absolute left-0 top-0 h-full w-px opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #b99b5f, transparent)",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4 text-black/45"
          style={{
            letterSpacing: "0.35em",
          }}
        >
          Selected Work
        </p>

        <h1 className="text-7xl md:text-8xl font-light leading-none">
          Our Projects
        </h1>

        <p className="mt-8 text-black/50 max-w-xl text-base md:text-lg leading-relaxed">
          A selection of the products, systems, and experiences we have built to
          solve real-world problems.
        </p>
      </motion.div>

      {/* Project List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="border-t border-black/10"
          >
            <div
              className="group py-10 md:py-12 cursor-pointer relative"
              onClick={() => toggleProject(index)}
            >
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(ellipse at left, rgba(185,155,95,0.10) 0%, transparent 70%)",
                }}
              />

              {/* Project Header */}
              <div className="flex items-start justify-between gap-8 relative z-10">
                <div className="flex items-start gap-6 md:gap-10 flex-1">
                  {/* Number */}
                  <span className="text-sm text-black/30 pt-2 shrink-0">
                    {project.number}
                  </span>

                  <div className="flex-1">
                    {/* Category + Year */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <span className="text-xs tracking-[0.25em] uppercase text-[#9b7d42]">
                        {project.category}
                      </span>

                      <span className="text-xs text-black/20">/</span>

                      <span className="text-xs text-black/30">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-light group-hover:text-[#9b7d42] transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Animated Indicator */}
                <div className="flex items-center justify-center shrink-0 mt-2">
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="w-8 h-8 border border-black/20 flex items-center justify-center group-hover:border-[#b99b5f]/70 transition-colors duration-300"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
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

              {/* Expanded Project */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="project-content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="pt-8 md:pt-10 pl-0 md:pl-20">
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/8] overflow-hidden bg-black/[0.03] border border-black/10 mb-8">
                        <motion.img
                          initial={{
                            scale: 1.05,
                            opacity: 0,
                          }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>

                      {/* Project Details */}
                      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                        <div>
                          <p className="text-base md:text-lg text-black/50 leading-relaxed max-w-2xl">
                            {project.description}
                          </p>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 mt-8 text-xs tracking-[0.25em] uppercase text-black/60 hover:text-[#9b7d42] transition-colors duration-300 group/link"
                            >
                              Visit Project
                              <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                ↗
                              </span>
                            </a>
                          )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 border border-black/10 text-[10px] tracking-widest uppercase text-black/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div className="border-t border-black/10" />
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-black/30 mb-4">
            Have a project in mind?
          </p>

          <h3 className="text-4xl md:text-5xl font-light">
            Let&apos;s build something.
          </h3>
        </div>

        <button className="self-start md:self-auto border border-black/20 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:border-[#b99b5f] hover:text-[#9b7d42] transition-colors duration-300">
          Start a Project
        </button>
      </motion.div>
    </section>
  );
}

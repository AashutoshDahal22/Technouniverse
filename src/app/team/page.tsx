"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TeamMember {
  title: string;
  image: string;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    title: "Founder",
    image: "/shiba.jpg",
    name: "Shiba Prasad Dahal",
    role: "Founder & Chairman",
  },
  {
    title: "Product Engineer",
    image: "/aashu.jpg",
    name: "Aashutosh Dahal",
    role: "Product Engineering Lead",
  },
  {
    title: "Software Engineer",
    image: "/aayush.jpg",
    name: "Aayush Pandey",
    role: "Mobile Development Team Lead",
  },
  {
    title: "CyberSecutiry Engineer",
    image: "/suhas.jpg",
    name: "Suhash Bajracharya",
    role: "Cyber Security Lead",
  },
];

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-0 cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            style={{
              filter: hovered
                ? "brightness(0.75)"
                : "brightness(0.9) grayscale(0.2)",
            }}
          />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex flex-col justify-end p-8"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          }}
        >
          <p className="text-white/80 text-2xl leading-relaxed">
            {member.role}
          </p>
        </motion.div>

        {/* Corner brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-amber-200/40 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-amber-200/40 pointer-events-none" />
      </div>

      {/* Text below image */}
      <div className="pt-6 pb-2 flex flex-col gap-1">
        <p className="text-xs tracking-[0.35em] uppercase opacity-40 text-black">
          {member.title}
        </p>

        <h3 className="text-2xl md:text-3xl font-light text-black">
          {member.name}
        </h3>

        <div className="mt-3 w-8 h-px bg-amber-200/40" />
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="min-h-screen relative overflow-hidden px-6 md:px-20 py-28">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${(i + 1) * 20}%` }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase mb-4 opacity-40 text-black"
        >
          The People
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-light text-black leading-none"
            style={{
              fontStyle: "bold",
            }}
          >
            Meet the
            <br />
            Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-black max-w-xs leading-relaxed"
          >
            A small, focused team with diverse skills and a problem-solving
            mindset — building technology that matters.
          </motion.p>
        </div>
      </div>

      {/* Full-width divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="w-full h-px bg-white/15 mb-20 origin-left"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-16">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}

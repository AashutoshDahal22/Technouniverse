"use client";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 sm:px-12 py-6 border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="group relative flex items-center"
        >
          <span className="text-sm font-semibold tracking-widest uppercase transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-x-1 absolute">
            TCU
          </span>
          <span className="text-sm font-semibold tracking-widest uppercase transition-all duration-500 ease-in-out opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0">
            TECHNOUNIVERSE
          </span>
          {/* spacer so header height is stable */}
          <span className="text-sm font-semibold tracking-widest uppercase invisible select-none">
            TECHNOUNIVERSE
          </span>
        </motion.div>

        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={handleScrollToContact}
          className="text-xs font-semibold tracking-widest uppercase border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-300 hidden sm:block"
        >
          Contact
        </motion.button> */}
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 mb-8"
        >
          Young Entrepreneurs · Technology
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 max-w-5xl"
        >
          We Build the
          <br />
          <span className="italic font-light">Future</span> of Tech.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed mb-12"
        >
          From software development and digital transformation to immersive AR
          and advanced 3D — we help businesses and individuals not just adapt to
          the future, but shape it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-black text-black text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
          >
            Learn More
          </motion.a>
        </motion.div>
      </section>

      {/* Thin divider line with label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center gap-6 px-6 sm:px-12 pb-12"
      >
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs tracking-widest text-gray-300 uppercase whitespace-nowrap">
          Est. Nepal
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </motion.div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-wood-beams.jpg"
          alt="Modern mass timber architecture with geometric wooden beam interior"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a]/85 via-[#2d5016]/75 to-[#1e3a0e]/80" />

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Mass Timber Market Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            We identify mass timber projects{" "}
            <span className="text-green-300">before your competitors do.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-2xl"
          >
            Deep research. Early identification. Strategic positioning. We source
            and track mass timber projects from the moment they gain approval
            &mdash; giving you the intelligence to win.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-base text-white/60 mb-10 max-w-2xl"
          >
            Backed by 30+ years of senior executive leadership with the
            world&apos;s leading mass timber and engineered wood companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded text-base hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              Schedule a Consultation
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

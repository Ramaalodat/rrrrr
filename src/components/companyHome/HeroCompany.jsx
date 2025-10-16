import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroCompany() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Welcome to Your Company Space – Where Opportunities Begin.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-white/80 text-base md:text-lg max-w-prose">
              Manage your job posts, discover top talent, and update your company info — all in one place.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/company-home/ads" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] shadow-gold transition transform hover:scale-105">
                Add New Job Post
              </a>
              <a href="/company-home/suggested" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border border-[#FFD700]/70 text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] transition transform hover:scale-105">
                View Suggested Candidates
              </a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="order-1 lg:order-2 w-full h-[300px] md:h-[360px] lg:h-[440px] relative">
            <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" />
            <img src="/ro.png" alt="Company" className="absolute inset-0 w-full h-full object-contain object-right p-4 md:p-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function QuickInfo() {
  const cards = [
    { title: 'AI-Powered Talent Matching', emoji: '🧠' },
    { title: 'Flexible Ad Management', emoji: '💼' },
    { title: 'Direct Candidate Contact (Email / WhatsApp)', emoji: '🤝' },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div key={c.title} variants={item} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-7 text-white shadow hover:shadow-gold transition">
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

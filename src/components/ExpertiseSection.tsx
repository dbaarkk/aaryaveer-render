"use client";

import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const expertises = [
    "AI Agents and Chatbots",
    "E-commerce Platforms",
    "Personal Portfolio Sites",
    "Brand & Business Websites",
    "Landing Pages & Sales Funnels",
    "Custom Web Applications",
    "SEO Optimized Blogs",
    "Performance Tuning & Optimization",
    "Responsive Web Design",
    "UI/UX Design & Prototyping",
    "Third-party API Integrations"
  ];

  return (
    <section id="expertise" className="mt-40 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-center uppercase">
          EXPERTISE IN
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto px-4">
        <ol className="space-y-6">
          {expertises.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-baseline group"
            >
              <span className="text-zinc-600 font-mono text-xl">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors uppercase">
                {item}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

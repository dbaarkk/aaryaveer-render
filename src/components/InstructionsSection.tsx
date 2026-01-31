"use client";

import { motion } from "framer-motion";

const instructions = [
  {
    title: "Project Discovery",
    description: "Submit your website description. I determine the complexity and provide a transparent quote within 24 hours.",
  },
  {
    title: "Design & Development",
    description: "I build your vision using modern tech stacks. You get a live preview link to track progress in real-time.",
  },
  {
    title: "Approval & Payment",
    description: "If you love the result, you pay. Your site stays active forever. If not, you pay nothing. Zero risk.",
  },
  {
    title: "Lifetime Support",
    description: "After payment, all future minor changes or additions are provided at no extra cost. I'm your long-term partner.",
  },
  {
    title: "Custom Domains",
    description: "Standard hosting is free. Custom domains (.com, .net) are available for an additional fee.",
  },
  {
    title: "Quick Contact",
    description: "Have questions? Use the contact section below to reach out directly via WhatsApp or Email.",
  }
];

export default function InstructionsSection() {
  return (
    <section id="instructions" className="mt-40 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-center uppercase">
          Process
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
        {instructions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between hover:bg-zinc-900 transition-colors ${
              index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="space-y-4">
              <span className="text-zinc-600 font-mono text-xl block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

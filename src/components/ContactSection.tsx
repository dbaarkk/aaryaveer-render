"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { openExternalUrl } from "@/lib/utils";

export default function ContactSection() {
  const headingClass = "text-5xl md:text-8xl font-bold tracking-tighter text-center uppercase";

    return (
      <section id="contact" className="mt-40 space-y-16">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className={headingClass}>
          Contact Me
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto"
          >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openExternalUrl("mailto:aaryaveersharma16@gmail.com")}
                  className="isolate select-none cursor-pointer w-full md:w-auto bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 text-xl md:text-2xl px-10 py-10 rounded-[2rem] flex items-center justify-between md:justify-center gap-8 group transition-all duration-300"
                >
                  <span className="select-text font-black uppercase tracking-tighter block">Gmail</span>
                  <div className="bg-white text-black p-3 rounded-full group-hover:scale-110 transition-transform select-none">
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full md:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openExternalUrl("https://wa.me/916263288522")}
                  className="isolate select-none cursor-pointer w-full md:w-auto bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 text-xl md:text-2xl px-10 py-10 rounded-[2rem] flex items-center justify-between md:justify-center gap-8 group transition-all duration-300"
                >
                  <span className="select-text font-black uppercase tracking-tighter block">WhatsApp</span>
                  <div className="bg-white text-black p-3 rounded-full group-hover:scale-110 transition-transform select-none">
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
          </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function AdviceSection() {
  const [isAdvice, setIsAdvice] = useState(true);

  const subHeadingClass = "text-4xl md:text-7xl font-black tracking-tighter text-center text-white uppercase inline-block";

    return (
      <section className="mt-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-16 md:h-20 flex items-center justify-center" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              {isAdvice ? (
                  <motion.button
                    key="advice"
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => setIsAdvice(false)}
                    className={`${subHeadingClass} hover:opacity-80 transition-opacity`}
                  >
                    HERE'S A PIECE OF ADVICE
                  </motion.button>
              ) : (
                <motion.button
                  key="dream"
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => setIsAdvice(true)}
                  className={`${subHeadingClass} hover:opacity-80 transition-opacity`}
                >
                  DREAM BIG
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isAdvice && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1 text-zinc-500 text-[10px] uppercase tracking-widest font-medium mt-1"
                >
                <ArrowUp className="w-3 h-3" />
                <span>click</span>
              </motion.div>
            )}
          </AnimatePresence>
  
          <AnimatePresence>
            {!isAdvice && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center px-4 overflow-hidden"
              >
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  A website is the ultimate 24/7 gateway for brands, businesses, and people to build trust and reach a global audience instantly. It's your digital foundation for growth, credibility, and connection. So <span className="text-white font-bold italic">dream big</span>—the digital world is waiting for your vision.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
}

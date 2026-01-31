"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedTitle() {
  const [phase, setPhase] = useState(0); // 0: Full stack website architect, 1: Founder of ...
  const [founderRest, setFounderRest] = useState("of Petalmind AI");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let step = 0;

    const run = () => {
      if (step === 0) {
        // Transition to Founder of Petalmind AI
        setPhase(1);
        setFounderRest("of Petalmind AI");
        step = 1;
        timeout = setTimeout(run, 3000);
      } else if (step === 1) {
        // Transition to Founder of SovereignSites.in (only "of..." flips)
        setFounderRest("of SovereignSites.in");
        step = 2;
        timeout = setTimeout(run, 3000);
      } else {
        // Transition back to Full stack website architect (full line flips)
        setPhase(0);
        step = 0;
        timeout = setTimeout(run, 3000);
      }
    };

    timeout = setTimeout(run, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex justify-center py-4 h-24 items-center">
      <div 
        className="relative inline-flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {phase === 0 ? (
            <motion.span
              key="architect"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="text-xl md:text-4xl font-bold tracking-tight text-white whitespace-nowrap inline-block"
            >
              Full stack website architect
            </motion.span>
          ) : (
            <motion.div
              key="founder-group"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex items-center"
            >
              <span className="text-xl md:text-4xl font-bold tracking-tight text-white whitespace-nowrap">
                Founder&nbsp;
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={founderRest}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="text-xl md:text-4xl font-bold tracking-tight text-white whitespace-nowrap inline-block"
                >
                  {founderRest}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

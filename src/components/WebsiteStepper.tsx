"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Stepper, { Step } from "./Stepper";
import { openExternalUrl } from "@/lib/utils";

const websiteTypes = [
  { id: "ai-chatbot", label: "AI Chatbot / Agent" },
  { id: "ecommerce", label: "E-commerce Website" },
  { id: "portfolio", label: "Personal Portfolio" },
  { id: "brand", label: "Brand / Business Website" },
];

export default function WebsiteStepper() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleWhatsApp = () => {
    const message = selectedType 
      ? `Hi, I'm interested in getting a ${websiteTypes.find(w => w.id === selectedType)?.label} built.`
      : "Hi, I'm interested in getting a website built.";
    openExternalUrl(`https://wa.me/6263288522?text=${encodeURIComponent(message)}`);
  };

  const handleSovereignSites = () => {
    openExternalUrl("https://sovereignsites.in");
  };

  return (
    <section className="mt-20 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-zinc-400 text-lg">
          Let me know what you&apos;re looking for
        </p>
      </motion.div>

      <Stepper
        initialStep={1}
        onStepChange={(step) => console.log("Step:", step)}
        onFinalStepCompleted={() => console.log("Completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">
              What type of website do you want?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {websiteTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedType === type.id
                      ? "bg-white text-black border-white"
                      : "bg-zinc-800/50 text-white border-zinc-700 hover:border-zinc-500"
                  }`}
                >
                  <span className="font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Step>
        <Step>
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold text-white">
              How would you like to proceed?
            </h3>
            <p className="text-zinc-400">
              {selectedType 
                ? `Great choice! You selected: ${websiteTypes.find(w => w.id === selectedType)?.label}`
                : "Choose an option below to continue"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={handleSovereignSites}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all"
                >
                  Visit SovereignSites.in
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition-all"
              >
                Contact on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Step>
      </Stepper>
    </section>
  );
}

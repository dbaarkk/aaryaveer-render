"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExpertiseSection from "@/components/ExpertiseSection";
import AnimatedTitle from "@/components/AnimatedTitle";
import InstructionsSection from "@/components/InstructionsSection";
import ContactSection from "@/components/ContactSection";
import AdviceSection from "@/components/AdviceSection";
import WebsiteStepper from "@/components/WebsiteStepper";
import Navigation from "@/components/Navigation";
import { openExternalUrl } from "@/lib/utils";
import { useAuth } from "@/components/AuthProvider";
import { Download, LogIn, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const { user, session } = useAuth();

  const handleDownload = async () => {
    if (!session) return;
    
    const res = await fetch("/api/download", {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "source-code.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert("Failed to download source code.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative">
      <Navigation />
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
              Aaryaveer Sharma's <br />
              <span className="text-zinc-500">portfolio</span>
            </h1>
            <AnimatedTitle />
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I'm a dedicated website developer with three years of experience crafting clean, functional, and effective digital solutions. My approach is built on a simple, client-focused promise: <span className="text-white font-medium">I build first, you pay only if you love it.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all duration-300 gap-1.5"
            >
              <Link href="#work">
                My Work
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>

            {user?.email === "legend159980@gmail.com" && (
              <Button
                onClick={handleDownload}
                className="bg-zinc-800 text-white hover:bg-zinc-700 text-lg px-8 py-6 rounded-full transition-all duration-300 gap-1.5 border border-zinc-700"
              >
                Download Code
                <Download className="w-5 h-5" />
              </Button>
            )}
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="mt-40 space-y-12">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-6">
            <h2 className="text-3xl font-medium tracking-tight">Recent Projects</h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                onClick={() => openExternalUrl("https://petalmind.vercel.app")}
                data-cursor="VIEW"
                className="select-none group aspect-[16/10] bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 space-y-4 cursor-pointer relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-zinc-50" />
                </div>
                <div className="select-text">
                  <p className="text-zinc-100 font-medium text-xl">Petalmind AI</p>
                  <p className="text-zinc-500 text-sm mt-2">An AI text-based website</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                onClick={() => openExternalUrl("https://docgenius.netlify.app")}
                data-cursor="VIEW"
                className="select-none group aspect-[16/10] bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 space-y-4 cursor-pointer relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-zinc-50" />
                </div>
                <div className="select-text">
                  <p className="text-zinc-100 font-medium text-xl">Docgenius</p>
                  <p className="text-zinc-500 text-sm mt-2">A document generator</p>
                </div>
              </motion.div>
            </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-400">
            To get your website built visit
          </h2>
          <Button
            onClick={() => openExternalUrl("https://sovereignsites.in")}
            className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all duration-300 group gap-1.5"
          >
            SovereignSites.in
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.section>

        {/* Expertise Section */}
        <ExpertiseSection />

        {/* Instructions Section */}
        <InstructionsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Advice Section */}
        <AdviceSection />

        {/* Website Stepper */}
        <WebsiteStepper />

        {/* Footer */}
        <footer className="mt-10 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Aaryaveer Sharma. All rights reserved.
          </p>
          <div className="flex gap-4">
            {user ? (
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-zinc-600 hover:text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3 h-3" />
                Sign Out ({user.email})
              </button>
            ) : (
              <Link
                href="/login"
                className="text-zinc-600 hover:text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <LogIn className="w-3 h-3" />
                Admin
              </Link>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}

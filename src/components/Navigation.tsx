"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { openExternalUrl } from "@/lib/utils";

const navItems = [
  { name: "My work", href: "#work" },
  { name: "SovereignSites.in", href: "https://sovereignsites.in", external: true },
  { name: "Expertise", href: "#expertise" },
  { name: "Instructions", href: "#instructions" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      e.preventDefault();
      openExternalUrl(href);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 120;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const getItemIndexAtPoint = (x: number, y: number): number | null => {
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return i;
        }
      }
    }
    return null;
  };

  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    setActiveIndex(index);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const index = getItemIndexAtPoint(touch.clientX, touch.clientY);
    setActiveIndex(index);
  };

  const handleTouchEnd = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="absolute top-8 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-6 flex justify-center md:justify-end">
        <div 
          ref={navRef}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500"
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              ref={(el) => { itemRefs.current[index] = el; }}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.external)}
              onTouchStart={(e) => handleTouchStart(e, index)}
              className={`cursor-pointer hover:text-white transition-colors whitespace-nowrap ${
                activeIndex === index ? "text-white" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

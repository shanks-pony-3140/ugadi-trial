"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FallingCoconut() {
  const [coconuts, setCoconuts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTreeClick = useCallback((e: React.MouseEvent) => {
    const id = Date.now();
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.closest('.coconut-container')?.getBoundingClientRect();

    const x = e.clientX - (containerRect?.left || 0);
    const y = e.clientY - (containerRect?.top || 0);

    setCoconuts((prev) => [...prev, { id, x, y }]);

    // Remove coconut after animation
    setTimeout(() => {
      setCoconuts((prev) => prev.filter((c) => c.id !== id));
    }, 2000);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center py-12 bg-ugadi-green/5 coconut-container">
      <div className="relative cursor-pointer group" onClick={handleTreeClick}>
        {/* Simple SVG Coconut Tree */}
        <svg
          width="120"
          height="160"
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:shake transition-transform"
        >
          <path d="M55 160C55 160 50 100 60 40" stroke="#5D4037" strokeWidth="8" />
          <path d="M60 40C60 40 10 30 5 10" stroke="#2E7D32" strokeWidth="4" />
          <path d="M60 40C60 40 110 30 115 10" stroke="#2E7D32" strokeWidth="4" />
          <path d="M60 40C60 40 30 0 40 -20" stroke="#2E7D32" strokeWidth="4" />
          <path d="M60 40C60 40 90 0 80 -20" stroke="#2E7D32" strokeWidth="4" />
          <circle cx="58" cy="35" r="5" fill="#5D4037" />
          <circle cx="65" cy="38" r="5" fill="#5D4037" />
          <circle cx="53" cy="40" r="5" fill="#5D4037" />
        </svg>
        <p className="mt-4 text-xs text-ugadi-green/60 font-medium">Click the tree!</p>
      </div>

      <AnimatePresence>
        {coconuts.map((coconut) => (
          <motion.div
            key={coconut.id}
            initial={{ y: coconut.y, x: coconut.x - 15, opacity: 1 }}
            animate={{ y: coconut.y + 500, opacity: [1, 1, 0] }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="absolute pointer-events-none z-50"
          >
             <div className="w-8 h-10 bg-[#5D4037] rounded-full flex items-center justify-center shadow-lg border-2 border-[#3E2723]">
                <div className="w-1 h-1 bg-white/20 rounded-full mb-4"></div>
             </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <style jsx>{`
        .group:hover .group-hover\:shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
}

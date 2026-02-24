"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Coconut = {
  id: number;
  startX: number;
};

export default function FallingCoconut() {
  const [coconuts, setCoconuts] = useState<Coconut[]>([]);

  const coconutPositions = [60, 70, 50];

  const handleTreeClick = useCallback(() => {
    const id = Date.now();
    const randomIndex = Math.floor(Math.random() * coconutPositions.length);
    const startX = coconutPositions[randomIndex];

    setCoconuts((prev) => [...prev, { id, startX }]);

    setTimeout(() => {
      setCoconuts((prev) => prev.filter((c) => c.id !== id));
    }, 2200);
  }, []);

  return (
    <div className="relative w-full flex justify-center py-12 bg-ugadi-green/5 overflow-hidden">
      
      <div className="relative w-[160px] h-[340px] cursor-pointer group" onClick={handleTreeClick}>
        
        <svg
          width="160"
          height="220"
          viewBox="0 0 160 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:shake transition-transform"
        >
          {/* Trunk */}
          <path
            d="M80 220 Q70 170 85 110 Q95 70 80 55"
            stroke="#6D4C41"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* --- CANOPY LAYER BACK --- */}
          <path
            d="M80 55 
               C20 40, 10 0, 70 10
               C90 -10, 150 0, 100 40
               C140 60, 120 90, 80 70
               C40 90, 20 60, 60 40 Z"
            fill="#2E7D32"
          />

          {/* --- CANOPY LAYER FRONT (lighter for depth) --- */}
          <path
            d="M80 60 
               C35 50, 25 15, 75 25
               C95 5, 135 15, 105 50
               C130 65, 105 85, 80 75
               C55 85, 30 65, 55 50 Z"
            fill="#388E3C"
          />

          {/* Coconut cluster inside canopy */}
          <circle cx="80" cy="65" r="7" fill="#5D4037" />
          <circle cx="70" cy="70" r="7" fill="#5D4037" />
          <circle cx="90" cy="70" r="7" fill="#5D4037" />
        </svg>

        {/* Falling Coconuts */}
        <AnimatePresence>
          {coconuts.map((coconut) => {
            const sway = (Math.random() - 0.5) * 30;

            return (
              <motion.div
                key={coconut.id}
                initial={{
                  top: 65,
                  left: coconut.startX + 20,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  top: [65, 270, 250, 270],
                  left: coconut.startX + 20 + sway,
                  rotate: 360,
                  opacity: [1, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.7, 0.85, 1],
                  ease: ["easeIn", "easeOut", "easeIn"],
                }}
                className="absolute pointer-events-none"
              >
                <div className="w-6 h-8 bg-[#5D4037] rounded-full border-2 border-[#3E2723] shadow-md" />
              </motion.div>
            );
          })}
        </AnimatePresence>

        <p className="absolute top-[230px] w-full text-center text-xs text-ugadi-green/60">
          Click the tree!
        </p>
      </div>

      <style jsx>{`
        .group:hover svg {
          animation: shake 0.6s ease-in-out infinite;
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

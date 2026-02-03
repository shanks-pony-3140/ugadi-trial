"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ingredients = [
  {
    name: "Neem Buds/Flowers",
    taste: "Bitter",
    meaning: "Sadness",
    color: "bg-green-100",
    emoji: "🌿",
    desc: "A reminder that life is not always sweet, and we must accept sadness with grace."
  },
  {
    name: "Jaggery",
    taste: "Sweet",
    meaning: "Happiness",
    color: "bg-yellow-100",
    emoji: "🍯",
    desc: "Representing the sweet moments that bring joy and fulfillment to our lives."
  },
  {
    name: "Green Chili",
    taste: "Spicy",
    meaning: "Anger",
    color: "bg-red-100",
    emoji: "🌶️",
    desc: "Symbolizing the flashes of anger and passion that are part of the human experience."
  },
  {
    name: "Salt",
    taste: "Salty",
    meaning: "Fear",
    color: "bg-blue-50",
    emoji: "🧂",
    desc: "Reflecting the fear of the unknown and the salt of the earth that keeps us grounded."
  },
  {
    name: "Tamarind Juice",
    taste: "Sour",
    meaning: "Challenges",
    color: "bg-amber-100",
    emoji: "🥤",
    desc: "Representing the sour moments and challenges that test our character."
  },
  {
    name: "Unripe Mango",
    taste: "Tangy",
    meaning: "Surprises",
    color: "bg-emerald-100",
    emoji: "🥭",
    desc: "The tangy surprises and unexpected turns that make life interesting."
  },
];

export default function UgadiPacchadi() {
  const [selected, setSelected] = useState(ingredients[1]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-maroon mb-4 font-serif">The Ugadi Pacchadi</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">Click on the ingredients to explore the six tastes of life.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Circular Layout for ingredients */}
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-dashed border-ugadi-yellow/20 rounded-full animate-spin-slow"></div>

            {/* Center Bowl */}
            <div className="relative z-10 w-40 h-40 bg-maroon rounded-full flex items-center justify-center shadow-2xl border-4 border-gold">
               <div className="text-6xl animate-bounce">🍲</div>
            </div>

            {/* Ingredients Orbits */}
            {ingredients.map((ing, i) => {
              const angle = (i * 360) / ingredients.length;
              const radius = 160;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.button
                  key={ing.name}
                  onClick={() => setSelected(ing)}
                  className={`absolute w-20 h-20 rounded-full ${ing.color} flex flex-col items-center justify-center shadow-md transition-all border-2 ${selected.name === ing.name ? "border-saffron scale-125 z-20" : "border-transparent"}`}
                  style={{ x, y }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">{ing.emoji}</span>
                  <span className="text-[10px] font-bold uppercase">{ing.taste}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-ugadi-yellow/5 border border-ugadi-yellow/20 p-8 md:p-12 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${selected.color} rounded-2xl flex items-center justify-center text-4xl shadow-sm`}>
                    {selected.emoji}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">{selected.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-maroon text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-widest">{selected.taste}</span>
                      <span className="bg-saffron text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-widest">{selected.meaning}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-foreground/70 leading-relaxed italic mb-4">
                  "{selected.desc}"
                </p>
                <div className="w-12 h-1 bg-saffron rounded-full"></div>
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 text-sm text-foreground/40 text-center lg:text-left">
              The Ugadi Pacchadi teaches us that life is a combination of different experiences, and we should accept them all with equanimity.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

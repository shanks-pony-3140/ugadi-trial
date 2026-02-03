import { Info, Heart, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-ugadi-yellow/20 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles size={48} className="mx-auto mb-6 text-saffron" />
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-maroon mb-6">About Ugadi</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            The festival of Ugadi marks the beginning of the Telugu New Year. It is a time of renewal, joy, and the celebration of life's diverse experiences.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-6 font-serif">Significance & Tradition</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                Ugadi is derived from the Sanskrit words 'Yuga' (age) and 'Adi' (beginning). It is celebrated with great fervor in Andhra Pradesh and Telangana.
              </p>
              <p>
                The day begins with ritual showers and prayers, followed by the consumption of 'Ugadi Pacchadi'—a symbolic dish that combines six different tastes representing the six emotions of life.
              </p>
              <p>
                Homes are decorated with fresh mango leaves (Thoranam) and colorful Rangoli (Muggulu) to welcome the new year with prosperity and hope.
              </p>
            </div>
          </div>
          <div className="bg-background border-4 border-dashed border-ugadi-green/30 rounded-3xl p-8 flex items-center justify-center">
             <div className="text-center">
                <div className="text-8xl mb-4">🌿</div>
                <p className="font-bold text-ugadi-green uppercase tracking-widest">New Beginnings</p>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-serif">The Six Tastes of Life</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { taste: "Sweet", meaning: "Happiness", emoji: "🍯" },
              { taste: "Sour", meaning: "Challenges", emoji: "🍋" },
              { taste: "Tangy", meaning: "Surprises", emoji: "🥭" },
              { taste: "Bitter", meaning: "Sadness", emoji: "🍃" },
              { taste: "Spicy", meaning: "Anger", emoji: "🌶️" },
              { taste: "Salty", meaning: "Fear", emoji: "🧂" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-ugadi-yellow/5 border border-ugadi-yellow/20 hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-maroon">{item.taste}</h4>
                <p className="text-xs text-foreground/50 uppercase font-bold tracking-tighter">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Heart size={40} className="mx-auto mb-6 text-red-500" />
          <h2 className="text-3xl font-bold mb-6 font-serif">The Organizers</h2>
          <p className="text-lg text-foreground/70 mb-8">
            The Ugadi 2026 celebrations are brought to you by the IISER Kolkata Telugu Community. We are a dedicated group of students and faculty committed to preserving and sharing our rich cultural heritage.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-2 bg-maroon/5 rounded-full text-maroon font-bold text-sm">Culture Committee</div>
            <div className="px-6 py-2 bg-maroon/5 rounded-full text-maroon font-bold text-sm">Sports Board</div>
            <div className="px-6 py-2 bg-maroon/5 rounded-full text-maroon font-bold text-sm">Student Council</div>
          </div>
        </div>
      </section>
    </div>
  );
}

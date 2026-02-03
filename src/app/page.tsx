import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Utensils, Music, Trophy } from "lucide-react";
import FallingCoconut from "@/components/EasterEggs/FallingCoconut";
import UgadiPacchadi from "@/components/EasterEggs/UgadiPacchadi";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-[url('https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 to-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-gold text-xl md:text-2xl font-semibold mb-2 drop-shadow-md">
            శ్రీ పరాభవ నామ సంవత్సర ఉగాది శుభాకాంక్షలు
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-lg">
            Ugadi Celebrations <span className="text-saffron">2026</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Join us for a vibrant journey into the Telugu New Year. A day of tradition, feast, and joyous community spirit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/feast"
              className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Get Feast Coupon <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full font-bold transition-all shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white py-8 border-b border-ugadi-yellow/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-saffron/10 rounded-full text-saffron">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">Date</p>
              <p className="font-bold">March 19, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="p-3 bg-ugadi-green/10 rounded-full text-ugadi-green">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">Location</p>
              <p className="font-bold">Main Community Grounds</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="p-3 bg-maroon/10 rounded-full text-maroon">
              <Utensils size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">The Feast</p>
              <p className="font-bold">Authentic Telugu Bhojanam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Easter Egg Section */}
      <FallingCoconut />

      {/* Ugadi Pacchadi Section */}
      <UgadiPacchadi />

      {/* Main Events Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-maroon mb-4 font-serif">Highlights of the Festival</h2>
            <div className="w-24 h-1 bg-saffron mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              From the traditional flavors of Ugadi Pacchadi to the rhythmic beats of cultural dances, experience the essence of our heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Event 1 */}
            <div className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-ugadi-yellow/10">
              <div className="h-48 bg-saffron/20 flex items-center justify-center group-hover:bg-saffron/30 transition-colors">
                <Utensils size={64} className="text-saffron group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Ugadi Feast</h3>
                <p className="text-foreground/70 mb-4">A grand culinary experience featuring traditional delicacies including the 6-taste Pacchadi.</p>
                <Link href="/feast" className="text-maroon font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Book Coupons <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-ugadi-yellow/10">
              <div className="h-48 bg-ugadi-green/20 flex items-center justify-center group-hover:bg-ugadi-green/30 transition-colors">
                <Music size={64} className="text-ugadi-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Culturals</h3>
                <p className="text-foreground/70 mb-4">An evening filled with classical dances, soulful songs, and energetic batch performances.</p>
                <Link href="/culturals" className="text-maroon font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  See Schedule <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-ugadi-yellow/10">
              <div className="h-48 bg-maroon/20 flex items-center justify-center group-hover:bg-maroon/30 transition-colors">
                <Trophy size={64} className="text-maroon group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sports</h3>
                <p className="text-foreground/70 mb-4">Cricket, Volleyball, Throwball and more. Celebrate the spirit of sportsmanship and competition.</p>
                <Link href="/sports" className="text-maroon font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  View Events <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Setting Illustration (Simplified) */}
      <section className="py-20 bg-ugadi-yellow/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6 font-serif">A Tradition of Hope</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Ugadi is not just a festival; it's a reflection of life. The Ugadi Pacchadi, with its six tastes, reminds us that life is a mixture of happiness, sadness, anger, fear, disgust, and surprise.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              We welcome you to be part of this beautiful celebration as we embark on a new year filled with prosperity and light.
            </p>
            <Link href="/about" className="inline-block border-2 border-maroon text-maroon px-8 py-2 rounded-full font-bold hover:bg-maroon hover:text-white transition-all">
              Read Significance
            </Link>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full aspect-square bg-white rounded-full flex items-center justify-center p-8 shadow-inner border-4 border-dashed border-saffron/30">
                {/* Simplified traditional stove illustration */}
                <div className="text-center">
                  <Utensils size={120} className="text-maroon/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">🍲</div>
                    <div className="text-sm font-bold text-maroon uppercase tracking-widest">Tradition in every bite</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

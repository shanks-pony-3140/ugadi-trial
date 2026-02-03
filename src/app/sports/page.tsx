import { Trophy, Users, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

const sports = [
  {
    name: "Cricket Tournament",
    date: "March 19-20",
    type: "Boys & Girls",
    venue: "Main Ground",
    desc: "The classic battle on the pitch. Inter-batch tournament in T10 format."
  },
  {
    name: "Volleyball",
    date: "March 19",
    type: "Boys",
    venue: "Volleyball Court",
    desc: "High-energy spikes and blocks in our annual Ugadi cup."
  },
  {
    name: "Throwball",
    date: "March 19",
    type: "Girls",
    venue: "Sports Complex",
    desc: "Speed and strategy meet in this exciting tournament for girls."
  },
  {
    name: "Badminton",
    date: "March 20",
    type: "Singles & Doubles",
    venue: "Indoor Stadium",
    desc: "Fast-paced action in both men's and women's categories."
  },
  {
    name: "Carroms & Chess",
    date: "March 19-20",
    type: "Open",
    venue: "Student Center",
    desc: "A battle of focus and intellect for those who prefer indoor sports."
  },
];

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-ugadi-green py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Trophy size={48} className="mx-auto mb-6 text-ugadi-yellow" />
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Ugadi Sports Meet</h1>
          <p className="text-xl text-white/80">Compete with spirit. Celebrate with joy.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-foreground font-serif">Tournament Schedule</h2>
            <div className="grid grid-cols-1 gap-6">
              {sports.map((sport, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-ugadi-green/10 text-ugadi-green text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                          {sport.type}
                        </span>
                        <span className="text-foreground/40 text-xs font-bold uppercase flex items-center gap-1">
                          <Calendar size={12} /> {sport.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{sport.name}</h3>
                      <p className="text-foreground/60 text-sm max-w-lg mb-4">{sport.desc}</p>
                      <div className="flex items-center gap-4 text-xs font-medium text-foreground/40">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {sport.venue}</span>
                      </div>
                    </div>
                    <button className="bg-maroon text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-saffron transition-colors">
                      Register Team
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-maroon text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users size={24} /> General Rules
              </h3>
              <ul className="space-y-4">
                {[
                  "Valid student ID is mandatory.",
                  "Teams must report 15 mins before match.",
                  "Referee's decision is final.",
                  "Sportsmanship is paramount."
                ].map((rule, i) => (
                  <li key={i} className="flex gap-3 text-white/80 text-sm items-start">
                    <ChevronRight size={18} className="text-saffron shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ugadi-yellow/5 p-8 rounded-3xl border-2 border-dashed border-ugadi-yellow/30">
              <h3 className="text-xl font-bold text-maroon mb-4">Past Winners</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Cricket 2024</span>
                  <span className="text-xs bg-saffron/20 text-maroon px-2 py-1 rounded">MS20 Batch</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Volleyball 2024</span>
                  <span className="text-xs bg-saffron/20 text-maroon px-2 py-1 rounded">MS22 Batch</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

import { Music, Mic2, Palette, Clock, MapPin } from "lucide-react";

const performances = [
  { time: "06:30 PM", name: "Inaugural Dance (Classical)", batch: "Combined Batches" },
  { time: "06:45 PM", name: "Traditional Song - Ugadi Special", batch: "MS24 Batch" },
  { time: "07:00 PM", name: "Skit: Life in a Telugu Village", batch: "MS23 Batch" },
  { time: "07:20 PM", name: "Folk Dance (Teenmar)", batch: "MS25 Batch" },
  { time: "07:40 PM", name: "Instrumental Performance", batch: "MS21 Batch" },
  { time: "08:00 PM", name: "Group Song", batch: "PhD Batches" },
  { time: "08:15 PM", name: "Contemporary Fusion Dance", batch: "MS22 Batch" },
  { time: "08:35 PM", name: "Solo Performances", batch: "Various" },
  { time: "09:00 PM", name: "Grand Finale", batch: "All Participants" },
  { time: "09:15 PM", name: "Vote of Thanks & Dinner", batch: "Committee" },
];

export default function CulturalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-maroon py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Music size={48} className="mx-auto mb-6 text-saffron" />
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Sangeeth & Culturals</h1>
          <p className="text-xl text-white/80">A celebration of talent, rhythm, and heritage.</p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-ugadi-yellow/10 p-6 rounded-2xl border border-ugadi-yellow/20">
                <h3 className="font-bold text-maroon flex items-center gap-2 mb-4">
                  <Clock size={20} /> Event Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase">Date</p>
                    <p className="font-medium">March 21, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase">Time</p>
                    <p className="font-medium">06:00 PM Onwards</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase">Venue</p>
                    <p className="font-medium">Main Auditorium, IISER-K</p>
                  </div>
                </div>
              </div>

              <div className="bg-ugadi-green/10 p-6 rounded-2xl border border-ugadi-green/20">
                <h3 className="font-bold text-ugadi-green flex items-center gap-2 mb-2">
                  <Palette size={20} /> Note to Performers
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  All performers are requested to report to the green room 30 minutes before their scheduled time. Please submit your tracks to the technical team by March 18th.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-foreground mb-8">Program Schedule</h2>
            <div className="space-y-4">
              {performances.map((perf, i) => (
                <div key={i} className="group flex gap-6 p-4 rounded-xl hover:bg-ugadi-yellow/5 transition-colors border-b border-gray-100 last:border-0">
                  <div className="text-saffron font-bold whitespace-nowrap pt-1">
                    {perf.time}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-maroon transition-colors">{perf.name}</h4>
                    <p className="text-foreground/50 text-sm">By {perf.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Footer Image */}
      <div className="w-full h-40 bg-[url('https://images.unsplash.com/photo-1514525253361-b59a4ee20d88?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale"></div>
    </div>
  );
}

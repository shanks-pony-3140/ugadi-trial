import { Image as ImageIcon, Film, Maximize2 } from "lucide-react";

const pastYears = [
  { year: "2024", count: "45 Photos", video: "1 Video" },
  { year: "2023", count: "32 Photos", video: "1 Video" },
  { year: "2022", count: "28 Photos", video: "None" },
  { year: "2021", count: "Virtual Celebration", video: "2 Videos" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ImageIcon size={48} className="mx-auto mb-6 text-ugadi-green" />
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Past Years Gallery</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A walk down memory lane. Relive the moments of joy, laughter, and tradition from our previous Ugadi celebrations.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastYears.map((item) => (
            <div key={item.year} className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-gray-100">
              <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                <ImageIcon size={64} className="text-gray-400 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full font-bold text-maroon shadow-lg">
                  Ugadi {item.year}
                </div>
                <button className="absolute bottom-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                   <Maximize2 size={20} />
                </button>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Memory Collection</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-foreground/50 flex items-center gap-1"><ImageIcon size={14} /> {item.count}</span>
                    <span className="text-sm text-foreground/50 flex items-center gap-1"><Film size={14} /> {item.video}</span>
                  </div>
                </div>
                <button className="text-maroon font-bold hover:underline">View All</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-maroon/5 rounded-3xl p-12 text-center border-2 border-dashed border-maroon/20">
           <h2 className="text-2xl font-bold text-maroon mb-4">Have photos to share?</h2>
           <p className="text-foreground/70 mb-8">If you have pictures or videos from past celebrations, we'd love to add them to our archive.</p>
           <button className="bg-maroon text-white px-8 py-3 rounded-full font-bold hover:bg-saffron transition-all">
             Upload Media
           </button>
        </div>
      </section>
    </div>
  );
}

import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-maroon py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-4">
          Have questions or want to volunteer? Reach out to the Ugadi 2026 Committee.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 font-serif text-maroon">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-saffron/10 rounded-2xl text-saffron">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-foreground/60">ugadi@iiserkol.ac.in</p>
                  <p className="text-foreground/60">studentscouncil@iiserkol.ac.in</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 bg-ugadi-green/10 rounded-2xl text-ugadi-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-foreground/60">+91 12345 67890 (General Secretary)</p>
                  <p className="text-foreground/60">+91 09876 54321 (Cultural Secretary)</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 bg-maroon/10 rounded-2xl text-maroon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-foreground/60">IISER Kolkata Campus</p>
                  <p className="text-foreground/60">Mohanpur, West Bengal 741246</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="font-bold mb-4">Follow us for updates</h4>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <button key={i} className="p-3 bg-gray-50 rounded-full hover:bg-saffron hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-ugadi-yellow/20">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-saffron hover:bg-saffron/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="h-96 bg-gray-200 w-full flex items-center justify-center grayscale">
         <div className="text-center">
            <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500 font-medium tracking-widest uppercase">IISER Kolkata Campus Map</p>
         </div>
      </div>
    </div>
  );
}

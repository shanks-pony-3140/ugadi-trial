import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-maroon text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4 font-serif">Ugadi 2026</h3>
            <p className="text-white/80 max-w-xs">
              Celebrating the Telugu New Year with joy, hope, and tradition. Join us for a feast of flavors and a celebration of culture.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-saffron mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/feast" className="hover:text-gold transition-colors">Ugadi Feast</Link></li>
              <li><Link href="/culturals" className="hover:text-gold transition-colors">Culturals</Link></li>
              <li><Link href="/sports" className="hover:text-gold transition-colors">Sports</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Ugadi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-saffron mb-4">Venue</h4>
            <p className="text-white/80">
              IISER Kolkata Campus<br />
              Mohanpur, West Bengal<br />
              741246
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© 2026 Ugadi Celebrations Committee. All rights reserved.</p>
          <p className="mt-2 text-gold/60 italic text-xs">May this New Year bring prosperity and happiness to all.</p>
        </div>
      </div>
    </footer>
  );
}

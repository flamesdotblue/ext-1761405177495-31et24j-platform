export default function Footer() {
  return (
    <footer className="mt-16 border-t border-rose-100 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold text-slate-800">Sweet Petals Bakery</div>
          <p className="mt-2 text-slate-600">
            Handcrafted cakes and chocolates baked fresh in our home kitchen.
          </p>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Contact</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Email: hello@sweetpetals.local</li>
            <li>Phone: (555) 123-4567</li>
            <li>Hours: Tue–Sun, 9am–6pm</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Follow</div>
          <div className="mt-2 flex gap-3 text-slate-600">
            <a href="#" className="hover:text-rose-700">Instagram</a>
            <a href="#" className="hover:text-rose-700">Facebook</a>
            <a href="#" className="hover:text-rose-700">TikTok</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sweet Petals Bakery. All rights reserved.
      </div>
    </footer>
  );
}

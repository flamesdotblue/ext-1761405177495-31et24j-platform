import { ArrowRight } from "lucide-react";

export default function Home({ featured }) {
  return (
    <div className="space-y-16">
      <Hero />
      <Featured title="Featured Cakes" items={featured.cakes} linkLabel="Browse all cakes" linkHref="#/cakes" />
      <Featured title="Featured Chocolates" items={featured.chocolates} linkLabel="See chocolates" linkHref="#/chocolates" />
      <About />
    </div>
  );
}

function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-8 md:p-12 shadow-sm border border-rose-200">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Baked with love, crafted for moments
          </h1>
          <p className="mt-4 text-slate-700">
            From elegant celebration cakes to artisan chocolate boxes, we make treats that turn everyday into a celebration.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#/cakes" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-700">
              Explore Cakes
            </a>
            <a href="#/chocolates" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-rose-700 font-semibold border border-rose-200 hover:bg-rose-50">
              Chocolates
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-rose-200">
            <img
              src="https://images.unsplash.com/photo-1612143998244-8e3168bfe1e1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZW1vbiUyMFplc3QlMjBEcml6emxlfGVufDB8MHx8fDE3NjE0MDIwMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              alt="Assorted cakes on a stand"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Featured({ title, items, linkLabel, linkHref }) {
  return (
    <section>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h2>
        <a href={linkHref} className="text-rose-700 hover:text-rose-800 inline-flex items-center gap-1 text-sm font-semibold">
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <a
            key={it.id}
            href={linkHref}
            className="group rounded-xl overflow-hidden bg-white border border-rose-100 hover:border-rose-200 shadow-sm hover:shadow transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.image} alt={it.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4">
              <div className="font-semibold text-slate-800">{it.name}</div>
              <div className="text-rose-700 font-bold">${it.price.toFixed(2)}</div>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">{it.blurb}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about-section" className="scroll-mt-24">
      <div className="rounded-2xl border border-rose-200 bg-white p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">About Us</h2>
        <p className="mt-4 text-slate-700">
          Sweet Petals began as a family tradition—weekend bakes shared with neighbors—now lovingly grown into a home bakery. Our mission is simple: make beautiful, memorable desserts using simple, quality ingredients.
        </p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
          <li className="p-4 rounded-xl bg-rose-50 border border-rose-100">
            • Small-batch, baked fresh
          </li>
          <li className="p-4 rounded-xl bg-rose-50 border border-rose-100">
            • Locally sourced dairy and eggs
          </li>
          <li className="p-4 rounded-xl bg-rose-50 border border-rose-100">
            • Custom designs for every occasion
          </li>
        </ul>
      </div>
    </section>
  );
}

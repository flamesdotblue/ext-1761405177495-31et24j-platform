import { useState } from "react";

export default function Products({ title, items, ctaLabel = "Add" }) {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">{title}</h1>
          <p className="mt-2 text-slate-600">Explore our {title.toLowerCase()} made fresh with premium ingredients.</p>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.id}
            className="group rounded-xl overflow-hidden bg-white border border-rose-100 hover:border-rose-200 shadow-sm hover:shadow transition flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.image} alt={it.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-slate-800">{it.name}</h3>
              <div className="text-rose-700 font-bold">${it.price.toFixed(2)}</div>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">{it.blurb}</p>
              <div className="mt-auto pt-4 flex items-center gap-3">
                <button
                  onClick={() => setSelected(it)}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700"
                >
                  View details
                </button>
                <a
                  href="#/"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white text-rose-700 text-sm font-semibold border border-rose-200 hover:bg-rose-50"
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected ? (
        <DetailsModal item={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}

function DetailsModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-900/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl border border-rose-200">
          <div className="grid sm:grid-cols-2">
            <div className="aspect-video sm:aspect-auto sm:h-full">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
              <div className="mt-1 text-rose-700 font-extrabold text-lg">${item.price.toFixed(2)}</div>
              <p className="mt-4 text-slate-700">{item.details}</p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={onClose}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700"
                >
                  Close
                </button>
                <a
                  href="#/"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white text-rose-700 text-sm font-semibold border border-rose-200 hover:bg-rose-50"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

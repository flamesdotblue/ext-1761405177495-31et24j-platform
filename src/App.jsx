import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";

const cakes = [
  {
    id: "classic-vanilla",
    name: "Classic Vanilla Cake",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1600&auto=format&fit=crop",
    blurb: "Fluffy vanilla sponge with silky buttercream.",
    details:
      "Our signature vanilla cake features Madagascar vanilla beans, layered with whipped vanilla buttercream and finished with white chocolate curls.",
  },
  {
    id: "chocolate-fudge",
    name: "Chocolate Fudge Cake",
    price: 34.0,
    image:
      "https://images.unsplash.com/photo-1703876086193-5d29f099205c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBGdWRnZSUyMENha2V8ZW58MHwwfHx8MTc2MTM3ODI0OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Rich cocoa layers with dark ganache.",
    details:
      "Decadent chocolate layers soaked in espresso syrup, filled and frosted with a glossy 70% dark chocolate ganache.",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWQlMjBWZWx2ZXR8ZW58MHwwfHx8MTc2MTM3ODM0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Tangy cocoa cake with cream cheese frosting.",
    details:
      "A southern classic: tender crumb with a hint of cocoa, layered with our house cream cheese frosting and ruby crumb trim.",
  },
  {
    id: "lemon-zest",
    name: "Lemon Zest Drizzle",
    price: 26.0,
    image:
      "https://images.unsplash.com/photo-1612143998244-8e3168bfe1e1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZW1vbiUyMFplc3QlMjBEcml6emxlfGVufDB8MHx8fDE3NjE0MDIwMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Bright lemon sponge with citrus glaze.",
    details:
      "Zesty lemon sponge soaked with fresh lemon syrup, finished with a thin citrus glaze and candied peel.",
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    price: 36.0,
    image:
      "https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1600&auto=format&fit=crop",
    blurb: "Vanilla layers, cream, and fresh berries.",
    details:
      "Layers of vanilla sponge, lightly sweetened cream, and peak-season strawberries for a fresh, light finish.",
  },
  {
    id: "carrot-walnut",
    name: "Carrot Walnut Cake",
    price: 30.0,
    image:
      "https://images.unsplash.com/photo-1549716680-a9c9bb6037e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJyb3QlMjBXYWxudXQlMjBDYWtlfGVufDB8MHx8fDE3NjE0MDE5Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Spiced carrot cake with cream cheese.",
    details:
      "Moist spiced carrot cake with toasted walnuts and pineapple, finished with tangy cream cheese frosting.",
  },
];

const chocolates = [
  {
    id: "sea-salt-caramel",
    name: "Sea Salt Caramel Truffles",
    price: 16.0,
    image:
      "https://images.unsplash.com/photo-1715663760578-f3081f3c7105?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWElMjBTYWx0JTIwQ2FyYW1lbCUyMFRydWZmbGVzfGVufDB8MHx8fDE3NjE0MDUzNzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Soft caramel centers, dark shell, sea salt.",
    details:
      "Small-batch caramel enrobed in 70% dark chocolate with Maldon sea salt. Box of 8.",
  },
  {
    id: "hazelnut-praline",
    name: "Hazelnut Praliné",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1754426766261-dbb1df0a0f88?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE0MDUzNzF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Roasted hazelnut gianduja, milk chocolate.",
    details:
      "Silky gianduja folded with roasted Piedmont hazelnuts in a creamy milk chocolate shell. Box of 9.",
  },
  {
    id: "matcha-ganache",
    name: "Matcha Ganache Squares",
    price: 15.0,
    image:
      "https://images.unsplash.com/photo-1590845947667-381579052389?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaGElMjBHYW5hY2hlJTIwU3F1YXJlc3xlbnwwfDB8fHwxNzYxNDA1MzcxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "White chocolate matcha ganache.",
    details:
      "Earthy ceremonial-grade matcha blended into velvety white chocolate ganache squares. Box of 6.",
  },
  {
    id: "almond-roc",
    name: "Almond Roca Bites",
    price: 14.0,
    image:
      "https://images.unsplash.com/photo-1659359750150-1fd0d48b61af?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbG1vbmQlMjBSb2NhJTIwQml0ZXN8ZW58MHwwfHx8MTc2MTQwNTM3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "Butter toffee, almonds, milk chocolate.",
    details:
      "Classic butter toffee coated in crushed roasted almonds and creamy milk chocolate. 150g pouch.",
  },
  {
    id: "raspberry-dark",
    name: "Raspberry Dark Bars",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1618440111263-e913c9f5f56d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYXNwYmVycnklMjBEYXJrJTIwQmFyc3xlbnwwfDB8fHwxNzYxNDA1MzcxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    blurb: "70% dark with raspberry shards.",
    details:
      "Tart freeze-dried raspberries scattered through a 70% dark chocolate bar. 2 bars per pack.",
  },
  {
    id: "espresso-beans",
    name: "Chocolate Espresso Beans",
    price: 10.0,
    image:
      "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1600&auto=format&fit=crop",
    blurb: "Crunchy espresso beans in dark chocolate.",
    details:
      "Crisp, roasted espresso beans enrobed in glossy dark chocolate. 120g jar.",
  },
];

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#/");
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const route = useMemo(() => {
    const clean = hash.replace(/^#/, "");
    return clean || "/";
  }, [hash]);
  return [route, (to) => (window.location.hash = to)];
}

export default function App() {
  const [route] = useHashRoute();

  useEffect(() => {
    if (route === "/about") {
      const el = document.getElementById("about-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 text-slate-800">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {route === "/" || route === "/about" ? (
          <Home featured={{ cakes: cakes.slice(0, 3), chocolates: chocolates.slice(0, 3) }} />
        ) : null}
        {route === "/cakes" ? (
          <Products title="Cakes" items={cakes} ctaLabel="Order cake" />
        ) : null}
        {route === "/chocolates" ? (
          <Products title="Chocolates" items={chocolates} ctaLabel="Add to box" />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

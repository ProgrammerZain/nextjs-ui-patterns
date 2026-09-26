import React from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: string;
  badge: string;
  category: string;
}

const shoeProducts: Product[] = [
  {
    id: "shoe-1",
    title: "Air Cushion Stealth Runner",
    price: "$129.00",
    badge: "Bestseller",
    category: "Running",
  },
  {
    id: "shoe-2",
    title: "Pro Leather Court Sneaker",
    price: "$149.00",
    badge: "New Release",
    category: "Casual",
  },
  {
    id: "shoe-3",
    title: "All-Terrain Hiker Trail X",
    price: "$175.00",
    badge: "Outdoor",
    category: "Hiking",
  },
  {
    id: "shoe-4",
    title: "Ultra Light Slip-On Trainer",
    price: "$98.00",
    badge: "Popular",
    category: "Training",
  },
];

export default function ShoesPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-medium border border-cyan-800/50">
            Category Route: /shop/shoes
          </div>
          <span className="text-xs text-slate-500">4 Items</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Footwear Collection</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Explore premium footwear options. Open the Cart Drawer in the top right, then switch to Shirts — notice the cart drawer stays open seamlessly without resetting state!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {shoeProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-500 font-medium">{product.category}</span>
                  <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50 text-[10px] font-semibold">
                    {product.badge}
                  </span>
                </div>
                <h2 className="font-semibold text-slate-200 text-base">
                  {product.title}
                </h2>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-900">
                <span className="font-mono text-slate-100 font-bold">
                  {product.price}
                </span>
                <span className="text-xs font-semibold text-cyan-400">
                  In Stock
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/shop/shirts"
            className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Switch to Shirts Category &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

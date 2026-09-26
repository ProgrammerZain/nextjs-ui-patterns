import React from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: string;
  badge: string;
  category: string;
}

const shirtProducts: Product[] = [
  {
    id: "shirt-1",
    title: "Classic Linen Button-Down Shirt",
    price: "$65.00",
    badge: "Breathable",
    category: "Casual",
  },
  {
    id: "shirt-2",
    title: "Performance Tech Moisture-Wicking Tee",
    price: "$45.00",
    badge: "Best Seller",
    category: "Activewear",
  },
  {
    id: "shirt-3",
    title: "Heavyweight Oversized Streetwear Hoodie",
    price: "$89.00",
    badge: "Trending",
    category: "Outerwear",
  },
  {
    id: "shirt-4",
    title: "Minimalist Organic Cotton Crewneck",
    price: "$38.00",
    badge: "Eco Friendly",
    category: "Basics",
  },
];

export default function ShirtsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-medium border border-cyan-800/50">
            Category Route: /shop/shirts
          </div>
          <span className="text-xs text-slate-500">4 Items</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Apparel & Shirts</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Browse our apparel collection. The Cart Drawer on the right remains open and intact while navigating between categories!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {shirtProducts.map((product) => (
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
            href="/shop/shoes"
            className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            &larr; Switch to Shoes Category
          </Link>
        </div>
      </div>
    </div>
  );
}

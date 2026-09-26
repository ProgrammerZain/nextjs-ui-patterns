export interface Photo {
  id: string;
  title: string;
  author: string;
  location: string;
  gradient: string;
  description: string;
}

export const PHOTOS: Photo[] = [
  {
    id: "1",
    title: "Cyberpunk City Dusk",
    author: "Elena Vance",
    location: "Neo Tokyo",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    description: "Futuristic urban skyline illuminated by towering holographic billboards and neon rain reflection.",
  },
  {
    id: "2",
    title: "Alpine Mist Peaks",
    author: "Julian Croft",
    location: "Swiss Alps",
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    description: "Breathtaking morning mist shrouding snow-capped mountain ridges during early dawn.",
  },
  {
    id: "3",
    title: "Neon Geometric Architecture",
    author: "Maya Lin",
    location: "Singapore",
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    description: "Symmetrical modern architectural facade capturing vibrant sunset reflections across glass panes.",
  },
];

export function getPhotoById(id: string): Photo | undefined {
  return PHOTOS.find((p) => p.id === id);
}

import { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/businessData';

interface DocumentationSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function DocumentationSection({ onOpenImageModal }: DocumentationSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Records' },
    { id: 'product', label: 'Churro Formats' },
    { id: 'preparation', label: 'Kitchen Prep' },
    { id: 'cooking', label: 'Frying Crew' },
    { id: 'campus', label: 'Campus Selling' },
    { id: 'report', label: 'Flyers & Reports' },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Other Website Features</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Photographic Archive</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
              Documentation & Campus Rollout Gallery
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Photographic evidence of formulation, kitchen frying brigade, and student merienda distribution at ESSU.
            </p>
          </div>

          {/* Clean Minimalist Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-stone-200/80 self-start sm:self-end">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#153e26] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimalist Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.imageUrl, photo.title, photo.caption)}
              className="group cursor-pointer rounded-xl bg-white border border-stone-200/80 overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#153e26]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-[#153e26] text-white rounded-md shadow-xs flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5 text-[#facc15]" /> Zoom
                  </span>
                </div>
              </div>

              {/* Minimal Caption */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#153e26] uppercase tracking-wide block mb-0.5">
                    {photo.phase}
                  </span>
                  <h3 className="font-bold text-xs text-stone-900 group-hover:text-[#153e26] transition-colors font-heading truncate">
                    {photo.title}
                  </h3>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

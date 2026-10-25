import { useState } from 'react';
import { ZoomIn, Camera, Layers, CheckCircle2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/businessData';

interface DocumentationSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function DocumentationSection({ onOpenImageModal }: DocumentationSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Evidence' },
    { id: 'product', label: 'Churro Formats' },
    { id: 'preparation', label: 'Kitchen Prep' },
    { id: 'cooking', label: 'Frying Session' },
    { id: 'campus', label: 'Campus Selling' },
    { id: 'report', label: 'Reports & Flyers' },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#fffdf9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Full Project Dossier</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>11 Verified Photographic Records</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight">
              Photographic Documentation & Campus Rollout
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              Live records from initial formulation, banana pureeing, test frying, to direct-to-student distribution on the ESSU Main Campus.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/80 rounded-xl border border-stone-200 self-start md:self-end">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.imageUrl, photo.title, photo.caption)}
              className="group cursor-pointer rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-white/90 backdrop-blur-sm text-stone-800 rounded-md shadow-xs">
                    {photo.phase}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-stone-900 group-hover:text-amber-700 transition-colors font-heading">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="italic">{photo.caption}</span>
                  <span className="font-semibold text-amber-700">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-stone-900">
                Full Academic Submission Archive
              </p>
              <p className="text-xs text-stone-600">
                All photos, receipts, and testing records are cross-referenced in the 23-page formal mini business plan.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-800 whitespace-nowrap">
            Elective 211 · Academic Portfolio
          </span>
        </div>

      </div>
    </section>
  );
}

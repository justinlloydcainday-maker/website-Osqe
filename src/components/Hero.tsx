import { ArrowRight, ShoppingBag, FileText, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function Hero({ onOpenOrderModal, onOpenPdfModal, onOpenImageModal }: HeroProps) {
  const posterImage = getAssetUrl('/assets/aistudio/839064142_1780225249563203_4101194208461935408_n_6605cc29.png');
  const signaturePlated = getAssetUrl('/assets/aistudio/d24bcb86-b988-41f6-94b3-8373bc88adc7_cbe6a9af.jpg');

  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Minimalist Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide">
              <span>Eastern Samar State University</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>The Entrepreneurial Mind (Elective 211)</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span className="text-stone-600 font-normal">Borongan City</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-stone-900 tracking-tight leading-[1.12] text-balance">
              Crispy Banana Churros,{' '}
              <span className="text-[#153e26]">Drizzled to Perfection.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Golden, crispy on the outside and sweet, soft on the inside. Made from ripe local bananas and served hot with sweetened condensed milk drizzle, Bear Brand milk powder, and Milo chocolate.
            </p>

            {/* Minimalist Price & Drizzle Banner inspired by poster */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7ee] border border-[#153e26]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Crimson Price Tag from Poster */}
                <div className="px-3.5 py-2 rounded-xl bg-[#b91c1c] text-white text-center shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider block text-amber-200">
                    Campus Special
                  </span>
                  <span className="text-xl sm:text-2xl font-black font-heading leading-none">
                    3 FOR ₱50
                  </span>
                  <span className="text-[9px] font-bold text-amber-200 uppercase tracking-widest block">
                    ONLY!
                  </span>
                </div>

                <div className="leading-tight">
                  <span className="text-xs font-bold text-[#153e26] block uppercase tracking-wide">
                    Sweet & Creamy!
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    Drizzled with Condensed Milk
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Freshly fried sticks served in lunch packs
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-stone-600 self-start sm:self-center border-t sm:border-t-0 sm:border-l border-stone-200/80 pt-2 sm:pt-0 sm:pl-4">
                <MapPin className="w-3.5 h-3.5 text-[#153e26] shrink-0" />
                <span>ESSU Main Campus Handover</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-[#facc15]" />
                <span>Pre-Order on Campus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300/80 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>23-Page Business Plan</span>
              </button>
            </div>

            {/* Clean Minimal Proof Row */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#153e26]" />
                100% Real Ripe Bananas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#153e26]" />
                Batch 1 (12/12) Sold Out
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#153e26]" />
                ₱50 / 3 Skewers
              </span>
            </div>

          </div>

          {/* Right Column: Clean Visual Showcase */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                onOpenImageModal(
                  posterImage,
                  'OSQE Banana Chorus Official Promotional Poster',
                  'Official menu poster: Banana Churros with Condensed Milk Drizzle — 3 for ₱50 Only!'
                )
              }
              className="group cursor-pointer rounded-3xl bg-white border border-[#153e26]/15 p-2.5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-[#faf7ee]">
                <img
                  src={posterImage}
                  alt="OSQE Banana Churros Official Poster"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Minimalist Zoom Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 text-[11px] font-bold bg-[#153e26] text-white rounded-lg shadow-xs opacity-90 group-hover:opacity-100">
                  Click to View Full Poster
                </div>
              </div>

              {/* Minimal caption below */}
              <div className="p-2.5 flex items-center justify-between text-xs text-stone-600">
                <span className="font-semibold text-[#153e26]">Official Brand Poster</span>
                <span className="text-[11px] text-stone-400">Elective 211 Submission</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist 3-Stat Strip */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#153e26]/10 text-[#153e26] flex items-center justify-center shrink-0 mt-0.5 font-bold font-heading text-sm">
              ₱50
            </div>
            <div>
              <span className="text-sm font-bold text-stone-900 font-heading block">3 Churro Skewers</span>
              <span className="text-xs text-stone-500">Served with condensed milk glaze and powdered toppings</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#153e26]/10 text-[#153e26] flex items-center justify-center shrink-0 mt-0.5 font-bold font-heading text-sm">
              🍌
            </div>
            <div>
              <span className="text-sm font-bold text-stone-900 font-heading block">Local Ripe Bananas</span>
              <span className="text-xs text-stone-500">Naturally sweet fruit puree blended into fresh pastry dough</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#153e26]/10 text-[#153e26] flex items-center justify-center shrink-0 mt-0.5 font-bold font-heading text-sm">
              🏫
            </div>
            <div>
              <span className="text-sm font-bold text-stone-900 font-heading block">ESSU Main Campus</span>
              <span className="text-xs text-stone-500">Direct delivery during class recesses and morning/afternoon breaks</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

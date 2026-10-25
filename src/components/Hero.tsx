import { ArrowRight, ShoppingBag, FileText, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, ACTUAL_BATCH_FINANCIALS } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function Hero({ onOpenOrderModal, onOpenPdfModal, onOpenImageModal }: HeroProps) {
  const heroImage = getAssetUrl('/assets/aistudio/d24bcb86-b988-41f6-94b3-8373bc88adc7_cbe6a9af.jpg');
  const posterThumb = getAssetUrl('/assets/aistudio/839064142_1780225249563203_4101194208461935408_n_6605cc29.png');

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Background ambient warmth */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-900 tracking-wide">
              <span>Eastern Samar State University</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>The Entrepreneurial Mind (Elective 211)</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span className="text-emerald-700 font-bold">Batch 1 Verified</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold font-heading text-stone-900 tracking-tight leading-[1.15] text-balance">
              Crispy & Golden Outside.{' '}
              <span className="text-amber-600 block sm:inline">Sweet Banana Goodness</span>{' '}
              Inside.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Turn your campus break into pure joy. Made from freshly mashed ripe bananas, shaped into golden spiral pastries, fried to a crackling crisp, and drizzled generously with sweet condensed milk, Bear Brand milk powder, and Milo.
            </p>

            {/* Value Callout Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                  Campus Special Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-heading text-amber-700">3 for ₱50</span>
                  <span className="text-xs text-stone-600 font-medium">only (1 pack with skewers)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-700">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>ESSU Main Campus Delivery & Pickup</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now for Merienda</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-stone-500" />
                <span>View 23-Page Business Plan</span>
              </button>
            </div>

            {/* Trust Markers / Proof Points */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-stone-200/80 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Real Ripe Bananas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Freshly Cooked Batch</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Student-Friendly ₱50 Price</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Real Product Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Main Photo Card */}
              <div
                onClick={() =>
                  onOpenImageModal(
                    heroImage,
                    'Signature Plated Banana Churros',
                    'Freshly fried spiral banana churros on sticks drizzled with sweetened condensed milk and dusted with chocolate malt.'
                  )
                }
                className="cursor-pointer overflow-hidden rounded-3xl bg-white p-3 shadow-xl border border-stone-200/80 transition-transform duration-300 group-hover:scale-[1.01]"
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={heroImage}
                    alt="Plated OSQE Banana Churros"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-amber-300">Formulated & Tested at ESSU</p>
                    <p className="text-sm font-bold font-heading">Signature Banana Churros with Sweet Drizzle</p>
                  </div>

                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold bg-amber-400 text-stone-900 rounded-lg shadow-sm">
                    Click to Zoom
                  </span>
                </div>

                {/* Sub-strip with poster thumbnail & quick stat */}
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <img
                      src={posterThumb}
                      alt="Menu flyer thumbnail"
                      className="w-10 h-10 object-cover rounded-lg border border-stone-200"
                    />
                    <div>
                      <span className="font-bold text-stone-900 block">Official Promo Poster</span>
                      <span className="text-stone-500 text-[11px]">3 for ₱50 Only</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[11px] text-stone-500 block">First Batch Outcome</span>
                    <span className="font-bold text-emerald-700">12/12 Sold Out</span>
                  </div>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-4 -left-4 bg-stone-900 text-white px-4 py-2.5 rounded-2xl shadow-lg border border-stone-800 flex items-center gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold block text-white font-heading">Sweet & Crunchy!</span>
                  <span className="text-[11px] text-stone-400">Condensed Milk Drizzle</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Quick Metric Banner */}
        <div className="mt-12 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <span className="text-xs text-stone-500 block">Snack Format</span>
            <span className="text-xl sm:text-2xl font-bold font-heading text-stone-900">3 Sticks / Pack</span>
            <span className="text-[11px] text-amber-700 font-medium block mt-0.5">Hot bamboo skewers</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <span className="text-xs text-stone-500 block">Price Per Serving</span>
            <span className="text-xl sm:text-2xl font-bold font-heading text-stone-900">₱50.00</span>
            <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">Student budget friendly</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <span className="text-xs text-stone-500 block">Turnover Record</span>
            <span className="text-xl sm:text-2xl font-bold font-heading text-stone-900">100% Sold</span>
            <span className="text-[11px] text-stone-500 block mt-0.5">Batch 1: ₱600 Revenue</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <span className="text-xs text-stone-500 block">Class & Campus</span>
            <span className="text-xl sm:text-2xl font-bold font-heading text-stone-900">ESSU Main</span>
            <span className="text-[11px] text-stone-500 block mt-0.5">Elective 211 Group</span>
          </div>
        </div>

      </div>
    </section>
  );
}

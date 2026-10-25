import { ShoppingBag, Check, Sparkles, Flame, Apple, CookingPot, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

interface ProductSectionProps {
  onOpenOrderModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function ProductSection({ onOpenOrderModal, onOpenImageModal }: ProductSectionProps) {
  const platedImg = getAssetUrl('/assets/aistudio/d24bcb86-b988-41f6-94b3-8373bc88adc7_cbe6a9af.jpg');
  const packagedBoxImg = getAssetUrl('/assets/aistudio/f7e6b8da-856e-45c8-8511-643e22263e58_e22c8a9b.jpg');
  const stackImg = getAssetUrl('/assets/aistudio/a90d84c5-7e82-4b50-8980-95caa98499d7_4e86f77c.jpg');

  const steps = [
    {
      num: '01',
      title: 'Peel & Puree Ripe Bananas',
      desc: 'Selected ripe local bananas are sliced and blended into a smooth, naturally sweet puree.',
    },
    {
      num: '02',
      title: 'Fold Soft Pastry Dough',
      desc: 'Pureed bananas are mixed with flour, margarine, sugar, and egg into a pliable dough.',
    },
    {
      num: '03',
      title: 'Shape & Golden Crisp Fry',
      desc: 'Dough is fluted onto sturdy skewers and fried until golden amber with a crackling exterior.',
    },
    {
      num: '04',
      title: 'Drizzle & Powder Dusting',
      desc: 'Drizzled generously with condensed milk and dusted with Bear Brand powder and Milo.',
    },
  ];

  return (
    <section id="product" className="py-16 lg:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-2">
            <span>Menu & Culinary Craft</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Signature Item</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight">
            Banana Churros with Sweet Drizzle
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            A delicious snack crafted specifically for the student and faculty merienda at ESSU Main Campus.
          </p>
        </div>

        {/* 2-Column Split: Product Details & Clean Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Photos Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div
              onClick={() =>
                onOpenImageModal(
                  platedImg,
                  'Plated Signature Banana Churros',
                  'Freshly fried spiral banana churros on skewers, drizzled with sweet condensed milk and powdered dusting.'
                )
              }
              className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xs"
            >
              <div className="relative aspect-4/3">
                <img
                  src={platedImg}
                  alt="Plated Banana Churros"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-[#153e26]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Signature Plating · Click to Zoom
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() =>
                  onOpenImageModal(
                    packagedBoxImg,
                    'Takeaway Lunch Pack',
                    'Banana Churros served hot in clean takeaway lunch containers with skewers.'
                  )
                }
                className="group cursor-pointer rounded-xl overflow-hidden bg-stone-100 border border-stone-200/80 aspect-4/3 relative"
              >
                <img
                  src={packagedBoxImg}
                  alt="Packaged Churros"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                  Lunch Pack
                </span>
              </div>

              <div
                onClick={() =>
                  onOpenImageModal(
                    stackImg,
                    'Fresh Golden Stack',
                    'Tower of hot spiral banana churros displaying crisp golden crust.'
                  )
                }
                className="group cursor-pointer rounded-xl overflow-hidden bg-stone-100 border border-stone-200/80 aspect-4/3 relative"
              >
                <img
                  src={stackImg}
                  alt="Fresh golden stack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                  Golden Stack
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Toppings */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#153e26] bg-[#153e26]/10 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#153e26]" />
                <span>The OSQE Formulation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900">
                Fresh Ripe Bananas + Spanish Churro Crunch
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Unlike ordinary snacks, our banana churros integrate pureed ripe bananas straight into the dough rather than using artificial syrups. This delivers a rich banana aroma with every bite.
              </p>
            </div>

            {/* Toppings Checklist */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <Check className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 font-semibold">Sweetened Condensed Milk Drizzle:</strong> Rich, velvety glaze zigzagged over warm churro ridges.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <Check className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 font-semibold">Bear Brand Powdered Milk:</strong> Classic creamy dusting for a comforting local flavor profile.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <Check className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 font-semibold">Milo Chocolate Malt:</strong> Sweet cocoa malt dust sprinkled generously on top.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <Check className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 font-semibold">Sanitary Bamboo Skewers:</strong> Convenient and clean to enjoy anywhere on campus.
                </div>
              </div>
            </div>

            {/* Price Box & Action */}
            <div className="p-4 rounded-xl bg-[#faf7ee] border border-[#153e26]/15 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#153e26] uppercase tracking-wide block">
                  Campus Serving
                </span>
                <span className="text-2xl font-black font-heading text-stone-900">
                  ₱50.00{' '}
                  <span className="text-xs font-normal text-stone-500">/ 3 skewers</span>
                </span>
              </div>

              <button
                onClick={onOpenOrderModal}
                className="px-4 py-2 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-lg transition-colors cursor-pointer"
              >
                Pre-Order Now
              </button>
            </div>
          </div>

        </div>

        {/* Minimalist 4-Step Process Strip */}
        <div className="pt-8 border-t border-stone-200/80">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#153e26] uppercase tracking-wider block">
              Culinary Method
            </span>
            <h3 className="text-xl font-bold font-heading text-stone-900">
              4-Step Preparation Procedure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-4 rounded-xl bg-[#faf7ee]/70 border border-stone-200/80 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-[#153e26] block">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold font-heading text-stone-900">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

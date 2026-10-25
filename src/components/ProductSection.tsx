import { useState } from 'react';
import { ShoppingBag, Check, Sparkles, Flame, Apple, CookingPot, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCTION_STEPS, BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface ProductSectionProps {
  onOpenOrderModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function ProductSection({ onOpenOrderModal, onOpenImageModal }: ProductSectionProps) {
  const [activeStep, setActiveStep] = useState(1);

  const packagedBoxImg = getAssetUrl('/assets/aistudio/f7e6b8da-856e-45c8-8511-643e22263e58_e22c8a9b.jpg');
  const stackImg = getAssetUrl('/assets/aistudio/a90d84c5-7e82-4b50-8980-95caa98499d7_4e86f77c.jpg');
  const testingBoardImg = getAssetUrl('/assets/aistudio/835978436_1024227617292329_6700806136316719486_n_2bd11091.jpg');

  const currentStepData = PRODUCTION_STEPS.find((s) => s.step === activeStep) || PRODUCTION_STEPS[0];

  return (
    <section id="product" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide mb-2">
            <span>Craft & Formulation</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Natural Ingredients</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Tested & Validated</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight text-balance">
            The Science & Art of Our Banana Churros
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            By infusing naturally sweet ripe bananas directly into our delicate dough, we elevate the humble Filipino banana snack into a crunchy, spiral pastry drizzled with creamy sweetness.
          </p>
        </div>

        {/* 2-Column Product Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div
              onClick={() =>
                onOpenImageModal(
                  packagedBoxImg,
                  'Ready-to-Serve Banana Churros Lunch Pack',
                  'Freshly boxed spiral skewers drizzled with condensed milk in convenient student takeaway packaging.'
                )
              }
              className="cursor-pointer group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm flex-1 min-h-[320px]"
            >
              <img
                src={packagedBoxImg}
                alt="Packaged Banana Churros skewers"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-semibold text-amber-300 block mb-1">
                  Takeaway Ready · 3 for ₱50
                </span>
                <h3 className="text-xl font-bold font-heading">
                  Packaged in Clean Food-Grade Boxes
                </h3>
                <p className="text-xs text-stone-200 mt-1">
                  Mounted on sturdy skewers for mess-free snacking between lectures or walking through campus.
                </p>
              </div>
            </div>

            {/* Thumbnail Pair */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div
                onClick={() =>
                  onOpenImageModal(
                    stackImg,
                    'Fresh Golden Spiral Stack',
                    'Tower of hot fried banana churros displaying crisp ridges and glaze.'
                  )
                }
                className="cursor-pointer group relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200"
              >
                <img
                  src={stackImg}
                  alt="Stack of fried banana churros"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                  Golden Stack
                </span>
              </div>

              <div
                onClick={() =>
                  onOpenImageModal(
                    testingBoardImg,
                    'Product Formulation & Testing Board',
                    'Formal testing objectives and financial evaluation submitted for Elective 211.'
                  )
                }
                className="cursor-pointer group relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200"
              >
                <img
                  src={testingBoardImg}
                  alt="Product testing board"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                  Testing Protocol
                </span>
              </div>
            </div>
          </div>

          {/* Product Deep Dive & Flavor Profile */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-100/70 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>The OSQE Taste Profile</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900">
                Why Students Love OSQE Banana Churros
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Traditional street snacks like turon or banana-cue can sometimes be overly heavy or unevenly cooked. OSQE Banana Churros solves this with a balanced formulation:
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Natural Sweetness & Soft Core</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Real banana pulp blended into the batter provides authentic potassium-rich sweetness without artificial flavorings.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Spiral Ridges for Maximum Crunch</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    The fluted spiral texture maximizes surface area in the fryer, locking in crispiness while capturing luscious drizzle in every grove.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Triple Sweet Topping Symphony</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Warm churros are drizzled with silky condensed milk and dusted with Bear Brand milk powder and Milo chocolate malt.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Order CTA strip */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-600 block">Craving a warm snack right now?</span>
                <span className="text-sm font-bold text-stone-900 font-heading">
                  Available in 3-piece packs for only ₱50
                </span>
              </div>
              <button
                onClick={onOpenOrderModal}
                className="px-4 py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                Order Now
              </button>
            </div>

          </div>
        </div>

        {/* 5-Step Production & Preparation Process */}
        <div className="rounded-3xl bg-stone-900 text-white p-6 sm:p-10 border border-stone-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-1">
              Standardized Culinary Procedure
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              From Farm Fresh Bananas to Golden Churros
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Our 5-step standardized production workflow ensures hygiene, texture consistency, and quality in every single batch.
            </p>
          </div>

          {/* Interactive Step Navigator */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-6 border-b border-stone-800">
            {PRODUCTION_STEPS.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`p-3 text-left rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'bg-stone-800/60 hover:bg-stone-800 text-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-bold ${isActive ? 'text-stone-900' : 'text-amber-400'}`}>
                      Step 0{step.step}
                    </span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs font-bold font-heading block truncate">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Content */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-amber-400/20 text-amber-400">
                  Step 0{currentStepData.step} of 05
                </span>
                <span className="text-xs text-stone-400">Action: {currentStepData.action}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {currentStepData.title}
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                {currentStepData.description}
              </p>
            </div>

            <div className="md:col-span-4 flex items-center justify-center p-6 rounded-2xl bg-stone-950/60 border border-stone-800 text-center">
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
                  {currentStepData.step === 1 && <Apple className="w-6 h-6" />}
                  {currentStepData.step === 2 && <CookingPot className="w-6 h-6" />}
                  {currentStepData.step === 3 && <Sparkles className="w-6 h-6" />}
                  {currentStepData.step === 4 && <Flame className="w-6 h-6" />}
                  {currentStepData.step === 5 && <CheckCircle2 className="w-6 h-6" />}
                </div>
                <span className="text-xs text-amber-400 font-bold block">
                  Quality Audit Checkpoint
                </span>
                <span className="text-[11px] text-stone-400 block mt-1">
                  Monitored by Chef de Cuisine & Team
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

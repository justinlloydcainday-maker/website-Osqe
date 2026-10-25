import { useState } from 'react';
import { Apple, CookingPot, Flame, Sparkles, CheckCircle2, ShieldCheck, AlertCircle, Eye } from 'lucide-react';
import { COMBINED_EXPENSES, ExpenseItem } from '../data/businessData';
import IngredientModal from './IngredientModal';

interface IngredientsSectionProps {
  onOpenOrderModal?: () => void;
}

export default function IngredientsSection({ onOpenOrderModal }: IngredientsSectionProps) {
  const [costMode, setCostMode] = useState<'testing' | 'commercial'>('testing');
  const [selectedIngredient, setSelectedIngredient] = useState<ExpenseItem | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const preparationSteps = [
    {
      num: 1,
      numStr: '01',
      title: 'Select & Puree Fresh Bananas',
      action: 'Peel, Slice & Blend',
      desc: 'Carefully select ripe local bananas for maximum natural sweetness and aroma. Slice into uniform medallions and blend into a silky fruit puree without adding excess water.',
      icon: Apple,
      tips: 'Bananas are harvested from local Eastern Samar groves and inspected for peak sweetness.',
    },
    {
      num: 2,
      numStr: '02',
      title: 'Fold Soft Pastry Dough',
      action: 'Mix, Cream & Knead',
      desc: 'Combine banana puree with sifted flour, margarine, sugar, egg, and a touch of milk. Knead until a smooth, pliable dough forms that holds crisp ridges during piping.',
      icon: CookingPot,
      tips: 'Creaming margarine with sugar first ensures uniform crumb texture and rich buttery mouthfeel.',
    },
    {
      num: 3,
      numStr: '03',
      title: 'Spiral Shape & Deep Fry',
      action: 'Extrude, Skewer & Crisp',
      desc: 'Flute dough onto sanitary skewers and gently immerse in pre-heated oil (175°C–190°C). Fry until the crust turns golden amber with a crackling exterior while remaining tender inside.',
      icon: Flame,
      tips: 'Strict oil temperature calibration prevents grease absorption and ensures an audibly crispy crust.',
    },
    {
      num: 4,
      numStr: '04',
      title: 'Drizzle & Powder Dusting',
      action: 'Glaze, Dust & Pack',
      desc: 'Drain on clean wire racks, box 3 skewers per lunch pack, generously zigzag sweetened condensed milk, and dust with Bear Brand milk powder and Milo chocolate malt.',
      icon: Sparkles,
      tips: 'Applied while churros are hot so the glaze clings to every spiral groove.',
    },
  ];

  return (
    <section id="ingredients" className="py-12 lg:py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-2">
            <span>Recipe & Formulation</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Academic Requirement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight">
            Ingredients & Preparation Procedure
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
            Full itemized raw materials list, batch cost accounting, and the standardized 4-step culinary procedure validated for campus production. Click any ingredient or step for detailed specifications.
          </p>
        </div>

        {/* 2-Column Split: Itemized Table & Culinary Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Column: Complete Ingredient Ledger */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold font-heading text-stone-900 flex items-center gap-2">
                  <span>Itemized Raw Materials & Costing</span>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                    Click row to inspect
                  </span>
                </h3>
                <p className="text-xs text-stone-500">
                  Official ingredient valuation from Elective 211 submission
                </p>
              </div>

              {/* Batch Mode Switch */}
              <div className="flex items-center gap-1 p-0.5 bg-stone-100 rounded-lg text-xs self-start sm:self-auto">
                <button
                  onClick={() => setCostMode('testing')}
                  className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    costMode === 'testing'
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Testing (12 Packs)
                </button>
                <button
                  onClick={() => setCostMode('commercial')}
                  className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    costMode === 'commercial'
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Commercial (24 Packs)
                </button>
              </div>
            </div>

            {/* Clickable Table */}
            <div className="overflow-x-auto rounded-xl border border-stone-200/80 bg-white shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
                    <th className="py-2.5 px-3.5">Ingredient / Material</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Unit / Spec</th>
                    <th className="py-2.5 px-3.5 text-right">Cost (PHP)</th>
                    <th className="py-2.5 px-2 text-center">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMBINED_EXPENSES.map((item, idx) => (
                    <tr
                      key={idx}
                      onClick={() => setSelectedIngredient(item)}
                      className="hover:bg-amber-50/60 transition-colors cursor-pointer group"
                    >
                      <td className="py-2.5 px-3.5">
                        <span className="font-semibold text-stone-900 group-hover:text-[#153e26] transition-colors block">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-stone-500 line-clamp-1">
                          {item.description}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-700 group-hover:bg-white group-hover:border group-hover:border-stone-200">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-600 whitespace-nowrap">{item.unit}</td>
                      <td className="py-2.5 px-3.5 text-right font-mono font-bold text-stone-900 tabular-nums">
                        ₱{(costMode === 'testing' ? item.testingCost : item.commercialCost).toFixed(2)}
                      </td>
                      <td className="py-2.5 px-2 text-center text-stone-400 group-hover:text-[#153e26]">
                        <Eye className="w-3.5 h-3.5 inline-block" />
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#faf7ee] font-bold text-stone-900 border-t border-stone-200">
                    <td colSpan={3} className="py-3 px-3.5">
                      Total Production Cost ({costMode === 'testing' ? '12 Packs / 36 Skewers' : '24 Packs / 72 Skewers'})
                    </td>
                    <td className="py-3 px-3.5 text-right font-mono text-base font-black text-[#153e26] tabular-nums">
                      ₱{(costMode === 'testing' ? 406 : 680).toFixed(2)}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quality Standard Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#faf7ee] border border-stone-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-stone-900 font-bold block">100% Real Farm Bananas</strong>
                  <span className="text-stone-600 text-[11px]">
                    No artificial banana essences or powder flavorings. Only fresh ripe local fruit.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7ee] border border-stone-200/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-stone-900 font-bold block">Sanitary Food-Grade Packaging</strong>
                  <span className="text-stone-600 text-[11px]">
                    Delivered in clean takeaway lunch packs with individual bamboo skewers.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Culinary Process Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-lg font-bold font-heading text-stone-900 flex items-center gap-2">
                <span>4-Step Preparation Procedure</span>
                <span className="text-[10px] font-bold text-[#153e26] bg-[#153e26]/10 px-2 py-0.5 rounded-full">
                  Click steps to view
                </span>
              </h3>
              <p className="text-xs text-stone-500">
                Standardized kitchen brigade flow from peeling to boxing
              </p>
            </div>

            <div className="space-y-3">
              {preparationSteps.map((step) => {
                const IconComponent = step.icon;
                const isStepActive = activeStep === step.num;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(step.num)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isStepActive
                        ? 'bg-[#faf7ee] border-[#153e26] shadow-xs'
                        : 'bg-[#faf8f2] border-stone-200/80 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                            isStepActive
                              ? 'bg-[#153e26] text-white'
                              : 'bg-[#153e26]/10 text-[#153e26]'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold font-mono text-[#153e26]">
                          STEP {step.numStr}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wide bg-white px-2 py-0.5 rounded border border-stone-200/60">
                        {step.action}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold font-heading text-stone-900">
                      {step.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed mt-1">
                      {step.desc}
                    </p>

                    {isStepActive && (
                      <div className="mt-2.5 pt-2 border-t border-[#153e26]/15 text-[11px] text-[#153e26] font-medium flex items-start gap-1.5">
                        <span className="font-bold">Brigade Tip:</span>
                        <span>{step.tips}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mandatory Allergen & Safety Note */}
            <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60 flex items-start gap-2.5 text-xs text-stone-700 shadow-2xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 font-bold block text-[11px] uppercase tracking-wide">
                  Allergen Advisory (RA 7394 Compliance)
                </strong>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Contains Dairy (Sweetened Condensed Milk, Powdered Milk) and Gluten (Wheat Flour). Prepared in a sanitized student kitchen facility.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Ingredient Inspection Modal */}
      <IngredientModal
        isOpen={selectedIngredient !== null}
        onClose={() => setSelectedIngredient(null)}
        item={selectedIngredient}
      />
    </section>
  );
}

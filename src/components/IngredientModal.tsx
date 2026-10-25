import { X, CheckCircle2, AlertCircle, MapPin, DollarSign } from 'lucide-react';
import { ExpenseItem } from '../data/businessData';

interface IngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExpenseItem | null;
}

export default function IngredientModal({ isOpen, onClose, item }: IngredientModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#faf7ee] border-b border-stone-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#153e26] tracking-wider block">
              Ingredient Specification · {item.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold font-heading text-stone-900">
              {item.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block">
              Culinary Function & Role
            </span>
            <p className="text-stone-800 leading-relaxed text-xs sm:text-sm">
              {item.description}
            </p>
          </div>

          {/* Sourcing & Specs */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Batch Unit / Spec
              </span>
              <span className="font-semibold text-stone-800 text-xs block">
                {item.unit}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Sourcing Market
              </span>
              <span className="font-semibold text-stone-800 text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#153e26]" />
                Borongan City, E. Samar
              </span>
            </div>
          </div>

          {/* Itemized Cost Breakdown */}
          <div className="p-3.5 rounded-xl bg-[#faf7ee] border border-[#153e26]/15 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#153e26] tracking-wider block flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              Batch Valuation Comparison
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200/80">
                <span className="text-stone-500 block text-[11px]">Testing Batch (12 Packs)</span>
                <span className="font-mono font-bold text-stone-900 text-sm">
                  ₱{item.testingCost.toFixed(2)}
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-stone-200/80">
                <span className="text-stone-500 block text-[11px]">Commercial Batch (24 Packs)</span>
                <span className="font-mono font-bold text-[#153e26] text-sm">
                  ₱{item.commercialCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Quality Assurance Note */}
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700 flex items-start gap-2">
            {item.name.toLowerCase().includes('milk') || item.name.toLowerCase().includes('flour') || item.name.toLowerCase().includes('egg') ? (
              <>
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-bold text-[11px]">Allergen Notice (RA 7394)</strong>
                  <span>Contains key allergen component tracked in official food safety audit.</span>
                </div>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-bold text-[11px]">Quality Inspection Passed</strong>
                  <span>Meets freshness, hygiene, and storage requirements under PD 856 Sanitation Code.</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

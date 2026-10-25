import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, CheckCircle2, AlertTriangle, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { COMBINED_EXPENSES, SWOT_DATA, BUSINESS_INFO } from '../data/businessData';

interface FinancialSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function FinancialSection({ onOpenImageModal }: FinancialSectionProps) {
  const [simulatedPacks, setSimulatedPacks] = useState<number>(12);
  const [costMode, setCostMode] = useState<'testing' | 'commercial'>('testing');

  const pricePerPack = BUSINESS_INFO.pricePerPack; // 50
  const totalRevenue = simulatedPacks * pricePerPack;
  const unitCost = costMode === 'testing' ? 406 / 12 : 680 / 24;
  const totalCost = simulatedPacks * unitCost;
  const netProfit = totalRevenue - totalCost;
  const profitMargin = (netProfit / totalRevenue) * 100;

  return (
    <section id="financials" className="py-16 lg:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-1">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Financial Statement</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Elective 211 Requirement</span>
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
            Unit Costing & Batch Economics
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Transparent pricing validated by actual ingredient receipts and campus sales records.
          </p>
        </div>

        {/* 4 Minimalist Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block">
              Selling Price
            </span>
            <span className="text-2xl font-black font-heading text-stone-900 block mt-0.5">
              ₱50.00
            </span>
            <span className="text-[11px] text-stone-500">Per pack of 3 skewers</span>
          </div>

          <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block">
              Base Unit Cost
            </span>
            <span className="text-2xl font-black font-heading text-stone-900 block mt-0.5">
              ₱33.83
            </span>
            <span className="text-[11px] text-stone-500">Ingredients & toppings</span>
          </div>

          <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80">
            <span className="text-[11px] font-bold text-[#153e26] uppercase tracking-wide block">
              Net Profit / Pack
            </span>
            <span className="text-2xl font-black font-heading text-[#153e26] block mt-0.5">
              ₱16.17
            </span>
            <span className="text-[11px] text-emerald-700 font-medium">32.3% net profit margin</span>
          </div>

          <div className="p-4 rounded-xl bg-[#153e26] text-white border border-[#153e26]">
            <span className="text-[11px] font-bold text-[#facc15] uppercase tracking-wide block">
              Batch 1 Realized Profit
            </span>
            <span className="text-2xl font-black font-heading text-white block mt-0.5">
              ₱194.00
            </span>
            <span className="text-[11px] text-stone-300">12 of 12 sold out</span>
          </div>
        </div>

        {/* 2-Column Split: Clean Table & Clean Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Table */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold font-heading text-stone-900">
                Itemized Ingredient Ledger
              </h3>
              
              <div className="flex items-center gap-1 p-0.5 bg-stone-100 rounded-md text-[11px]">
                <button
                  onClick={() => setCostMode('testing')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                    costMode === 'testing' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500'
                  }`}
                >
                  Testing (12 packs)
                </button>
                <button
                  onClick={() => setCostMode('commercial')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                    costMode === 'commercial' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500'
                  }`}
                >
                  Commercial (24 packs)
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200/80">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
                    <th className="py-2.5 px-3">Item</th>
                    <th className="py-2.5 px-3">Quantity</th>
                    <th className="py-2.5 px-3 text-right">Cost (PHP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMBINED_EXPENSES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="py-2 px-3">
                        <span className="font-semibold text-stone-900 block">{item.name}</span>
                        <span className="text-[10px] text-stone-500">{item.description}</span>
                      </td>
                      <td className="py-2 px-3 text-stone-600">{item.unit}</td>
                      <td className="py-2 px-3 text-right font-mono font-bold text-stone-900 tabular-nums">
                        ₱{(costMode === 'testing' ? item.testingCost : item.commercialCost).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#faf7ee] font-bold text-stone-900 border-t border-stone-200">
                    <td colSpan={2} className="py-2.5 px-3">
                      Total Cost ({costMode === 'testing' ? '12 Packs' : '24 Packs'})
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-sm font-black text-[#153e26] tabular-nums">
                      ₱{(costMode === 'testing' ? 406 : 680).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Calculator */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#faf7ee] border border-[#153e26]/15 p-5 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#153e26]" />
                <h3 className="text-base font-bold font-heading text-stone-900">
                  Batch Simulator
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-600 font-medium">Batch Size</span>
                  <span className="font-bold text-[#153e26] font-mono text-sm">
                    {simulatedPacks} Packs ({simulatedPacks * 3} skewers)
                  </span>
                </div>

                <input
                  type="range"
                  min="6"
                  max="100"
                  step="6"
                  value={simulatedPacks}
                  onChange={(e) => setSimulatedPacks(Number(e.target.value))}
                  className="w-full accent-[#153e26] cursor-pointer"
                />

                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-stone-500">Presets:</span>
                  {[12, 24, 48, 72].map((p) => (
                    <button
                      key={p}
                      onClick={() => setSimulatedPacks(p)}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                        simulatedPacks === p
                          ? 'bg-[#153e26] text-white'
                          : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Totals */}
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Gross Sales:</span>
                  <span className="font-mono font-bold text-stone-900 tabular-nums">
                    ₱{totalRevenue.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Ingredient Expenses:</span>
                  <span className="font-mono text-stone-500 tabular-nums">
                    -₱{totalCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-[#153e26] border-t border-stone-100 pt-1.5">
                  <span>Net Student Profit:</span>
                  <span className="font-mono text-sm font-black tabular-nums">
                    +₱{netProfit.toFixed(2)} ({profitMargin.toFixed(1)}%)
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500">
                Requires approx. {Math.ceil(simulatedPacks * 1.5)} ripe bananas, {(simulatedPacks * 0.08).toFixed(1)} kg flour, and {Math.ceil(simulatedPacks / 12)} can(s) condensed milk.
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist SWOT Grid */}
        <div className="pt-6 border-t border-stone-200/80">
          <h3 className="text-lg font-bold font-heading text-stone-900 mb-4">
            SWOT Analysis Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80 space-y-2">
              <span className="font-bold text-[#153e26] uppercase tracking-wide block text-[11px]">
                Strengths
              </span>
              <p className="text-stone-700">
                ₱50 student-friendly price, fresh local bananas, unique crispy pastry format with condensed milk drizzle.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80 space-y-2">
              <span className="font-bold text-stone-700 uppercase tracking-wide block text-[11px]">
                Weaknesses
              </span>
              <p className="text-stone-700">
                Short shelf life (best served warm), small initial student production batch limits.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80 space-y-2">
              <span className="font-bold text-blue-900 uppercase tracking-wide block text-[11px]">
                Opportunities
              </span>
              <p className="text-stone-700">
                High campus demand at ESSU during morning and afternoon recesses; online pre-order system.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#faf7ee] border border-stone-200/80 space-y-2">
              <span className="font-bold text-red-900 uppercase tracking-wide block text-[11px]">
                Threats
              </span>
              <p className="text-stone-700">
                Traditional street snack vendors (turon, bananacue); fluctuating cooking oil and sugar prices.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

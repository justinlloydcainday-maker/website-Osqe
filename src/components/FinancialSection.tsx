import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, PieChart, ShieldAlert, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { COMBINED_EXPENSES, SWOT_DATA, ACTUAL_BATCH_FINANCIALS, BUSINESS_INFO } from '../data/businessData';

interface FinancialSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function FinancialSection({ onOpenImageModal }: FinancialSectionProps) {
  const [simulatedPacks, setSimulatedPacks] = useState<number>(12);
  const [costMode, setCostMode] = useState<'testing' | 'commercial'>('testing');

  // Interactive calculations
  const pricePerPack = BUSINESS_INFO.pricePerPack; // 50
  const totalRevenue = simulatedPacks * pricePerPack;

  // Base unit cost per pack from testing batch: 406 / 12 = 33.83 PHP
  const unitCost = costMode === 'testing' ? 406 / 12 : 680 / 24; // ~28.33 for commercial
  const totalCost = simulatedPacks * unitCost;
  const netProfit = totalRevenue - totalCost;
  const profitMargin = (netProfit / totalRevenue) * 100;

  return (
    <section id="financials" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide mb-2">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Unit Economics & Audit</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Academic Financial Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight text-balance">
            Costing, Profitability & Batch Economics
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Transparent pricing validated by actual ingredient receipts and campus sales records from Elective 211 (The Entrepreneurial Mind).
          </p>
        </div>

        {/* 4 Financial KPI Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
              Selling Price
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black font-heading text-stone-900">₱50.00</span>
              <span className="text-xs text-stone-500 font-medium">/ 3 skewers</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              ₱16.67 per skewer. Accessible price point for ESSU student budgets.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
              Base Unit Cost
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black font-heading text-stone-900">₱33.83</span>
              <span className="text-xs text-stone-500 font-medium">/ pack</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Includes bananas, flour, butter, egg, oil, condense, Bear Brand & Milo.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Net Profit Per Pack
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black font-heading text-emerald-800">₱16.17</span>
              <span className="text-xs text-emerald-700 font-medium">/ pack</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Solid 32.3% net profit margin on initial student capital.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900 text-white border border-stone-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Batch 1 Validated
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black font-heading text-white">₱194.00</span>
              <span className="text-xs text-stone-400 font-medium">profit</span>
            </div>
            <p className="text-xs text-stone-300 mt-2">
              12 of 12 packs sold out instantly on ESSU campus grounds.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Itemized Table & Interactive Batch Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Itemized Cost Breakdown Table */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-stone-900">
                  Itemized Ingredient & Materials Ledger
                </h3>
                <p className="text-xs text-stone-500">
                  Documented in the official Elective 211 business plan.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs">
                <button
                  onClick={() => setCostMode('testing')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    costMode === 'testing'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Testing (12 packs)
                </button>
                <button
                  onClick={() => setCostMode('commercial')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    costMode === 'commercial'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Commercial (24 packs)
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-stone-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
                    <th className="py-3 px-4">Item & Role</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Batch Spec</th>
                    <th className="py-3 px-4 text-right">Cost (PHP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMBINED_EXPENSES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-2.5 px-4">
                        <span className="font-bold text-stone-900 block">{item.name}</span>
                        <span className="text-[11px] text-stone-500">{item.description}</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-medium text-stone-600">{item.category}</span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-500">{item.unit}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-stone-900 tabular-nums">
                        ₱{(costMode === 'testing' ? item.testingCost : item.commercialCost).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-stone-100/70 font-bold text-stone-900 border-t-2 border-stone-200">
                    <td colSpan={3} className="py-3 px-4 text-sm font-heading">
                      Total Cost ({costMode === 'testing' ? '12 Packs Production' : '24 Packs Production'})
                    </td>
                    <td className="py-3 px-4 text-right font-mono text-sm font-black text-amber-900 tabular-nums">
                      ₱{(costMode === 'testing' ? 406 : 680).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Interactive Batch Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-stone-900 text-white p-6 sm:p-7 border border-stone-800 shadow-xl space-y-6">
              
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold font-heading text-white">
                  Interactive Batch Simulator
                </h3>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                Adjust the number of packs to forecast real-time production requirements, ingredient expense, gross sales, and net student profits.
              </p>

              {/* Slider & Quick Presets */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-300">Batch Quantity</span>
                  <span className="text-lg font-black font-heading text-amber-400 font-mono">
                    {simulatedPacks} Packs ({simulatedPacks * 3} skewers)
                  </span>
                </div>

                <input
                  type="range"
                  min="6"
                  max="120"
                  step="6"
                  value={simulatedPacks}
                  onChange={(e) => setSimulatedPacks(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />

                {/* Preset Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-stone-400">Presets:</span>
                  {[12, 24, 36, 60, 100].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setSimulatedPacks(preset)}
                      className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                        simulatedPacks === preset
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Results Box */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-stone-800 text-stone-300">
                  <span>Gross Sales (@ ₱50.00/pack):</span>
                  <span className="font-mono font-bold text-white text-sm tabular-nums">
                    ₱{totalRevenue.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-800 text-stone-300">
                  <span>Projected Ingredient Cost:</span>
                  <span className="font-mono font-semibold text-stone-400 tabular-nums">
                    -₱{totalCost.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-emerald-400 font-bold">
                  <span>Projected Net Profit:</span>
                  <span className="font-mono text-base font-black text-emerald-400 tabular-nums">
                    +₱{netProfit.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-amber-300">
                  <span>Return on Capital:</span>
                  <span className="font-mono font-semibold">{profitMargin.toFixed(1)}%</span>
                </div>
              </div>

              {/* Key Resource Demands */}
              <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60 text-xs space-y-1.5 text-stone-300">
                <span className="font-bold text-amber-400 block text-[11px] uppercase tracking-wide">
                  Estimated Ingredient Requirements:
                </span>
                <p>🍌 ~{Math.ceil(simulatedPacks * 1.5)} ripe bananas</p>
                <p>🌾 ~{(simulatedPacks * 0.08).toFixed(1)} kg all-purpose flour</p>
                <p>🥛 ~{Math.ceil(simulatedPacks / 12)} can(s) condensed milk glaze</p>
                <p>🍢 {simulatedPacks * 3} sanitized bamboo skewers & lunch packs</p>
              </div>

            </div>
          </div>

        </div>

        {/* SWOT Analysis Matrix */}
        <div className="mt-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Strategic Evaluation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900">
              SWOT Analysis Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Comprehensive business environment assessment conducted as part of the Elective 211 curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Strengths */}
            <div className="p-6 rounded-2xl bg-[#f7f9f4] border border-emerald-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <h4 className="text-base font-bold font-heading text-emerald-950">
                  Strengths (Internal)
                </h4>
              </div>
              <ul className="space-y-3">
                {SWOT_DATA.strengths.map((item, i) => (
                  <li key={i} className="text-xs text-stone-700">
                    <strong className="text-stone-900 block font-semibold mb-0.5">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-6 rounded-2xl bg-[#fffaf5] border border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <h4 className="text-base font-bold font-heading text-amber-950">
                  Weaknesses (Internal)
                </h4>
              </div>
              <ul className="space-y-3">
                {SWOT_DATA.weaknesses.map((item, i) => (
                  <li key={i} className="text-xs text-stone-700">
                    <strong className="text-stone-900 block font-semibold mb-0.5">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-6 rounded-2xl bg-[#f5f8ff] border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <ArrowUpRight className="w-5 h-5 text-blue-700" />
                <h4 className="text-base font-bold font-heading text-blue-950">
                  Opportunities (External)
                </h4>
              </div>
              <ul className="space-y-3">
                {SWOT_DATA.opportunities.map((item, i) => (
                  <li key={i} className="text-xs text-stone-700">
                    <strong className="text-stone-900 block font-semibold mb-0.5">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-6 rounded-2xl bg-[#faf5f5] border border-rose-200">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-rose-700" />
                <h4 className="text-base font-bold font-heading text-rose-950">
                  Threats (External)
                </h4>
              </div>
              <ul className="space-y-3">
                {SWOT_DATA.threats.map((item, i) => (
                  <li key={i} className="text-xs text-stone-700">
                    <strong className="text-stone-900 block font-semibold mb-0.5">
                      {item.title}
                    </strong>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

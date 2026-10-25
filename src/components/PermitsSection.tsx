import { useState } from 'react';
import { FileText, ShieldAlert, ZoomIn, ExternalLink, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import { LEGAL_DOSSIER_ITEMS, BUSINESS_INFO } from '../data/businessData';
import RepublicActModal from './RepublicActModal';

interface PermitsSectionProps {
  onOpenPdfModal: (initialPage?: number) => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function PermitsSection({
  onOpenPdfModal,
  onOpenImageModal,
}: PermitsSectionProps) {
  const permitImg = getAssetUrl('/business_permit.png');
  const dossierImg = getAssetUrl('/regulatory_dossier.png');

  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [feeDetail, setFeeDetail] = useState<{ name: string; amount: string; desc: string } | null>(null);

  const feeExplanations: Record<string, { name: string; amount: string; desc: string }> = {
    license: {
      name: 'Mayors License Fee',
      amount: '₱1,500.00',
      desc: 'Annual municipal authorization fee assessing commercial snack preparation within Borongan City jurisdiction.',
    },
    tax: {
      name: 'Graduated Business Tax',
      amount: '₱2,200.00',
      desc: 'Local Government Code (RA 7160) initial capitalization and projected sales assessment for food retail kiosks.',
    },
    sanitary: {
      name: 'Sanitary Inspection & Health Clearance',
      amount: '₱800.00',
      desc: 'City Health Office sanitary permit covering food handler medical exams, water safety, and workstation hygiene.',
    },
    fire: {
      name: 'Fire Safety Inspection Certificate (FSIC)',
      amount: '₱500.00',
      desc: 'Bureau of Fire Protection (BFP) clearance verifying portable butane stove safety and Class K fire extinguisher on site.',
    },
  };

  return (
    <section id="permits" className="py-12 lg:py-16 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 mb-3 tracking-wide">
            <FileText className="w-3.5 h-3.5" />
            <span>COMPLIANCE & DOCUMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight">
            Business Permits & Registration
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-2.5 mb-3 rounded-full" />

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Educational compliance dossier simulating local government licensing, sanitary clearance, and food safety standards for student enterprise operations.
          </p>
        </div>

        {/* Academic Curriculum Notice & Disclaimer Banner matching Screenshot 2 */}
        <div className="mb-10 rounded-2xl border border-amber-400 bg-amber-50/70 p-4 sm:p-5 flex items-start gap-3 sm:gap-4 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            <ShieldAlert className="w-4 h-4 text-white" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <h3 className="font-extrabold text-stone-900 uppercase tracking-wide text-xs">
              Academic Curriculum Notice & Disclaimer
            </h3>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-[13px]">
              These documents and mock municipal permits are prepared strictly in partial fulfillment of the course requirement in{' '}
              <strong className="font-bold text-stone-900">Entrepreneurial Mind (ELECTIVE. 211)</strong> under the guidance of instructor{' '}
              <strong className="font-bold text-stone-900">{BUSINESS_INFO.instructor}</strong> at{' '}
              <strong className="font-bold text-stone-900">{BUSINESS_INFO.institution}</strong>. They serve educational simulation purposes for learning regulatory compliance and food safety governance.
            </p>
          </div>
        </div>

        {/* 2 Document Showcase Cards matching Screenshot 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: Mayor's Permit Simulation */}
          <div className="rounded-2xl bg-white border border-stone-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 uppercase tracking-wide mb-1.5">
                    LGU Borongan Simulation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
                    Business Permit (Mayor's Permit)
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Permit No: <span className="font-semibold text-stone-800">{BUSINESS_INFO.permitNumber}</span> • Date: {BUSINESS_INFO.permitDate}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onOpenImageModal(
                      permitImg,
                      "Mayor's Permit (BPLO Simulation)",
                      "Official City Government of Borongan Business Permits and Licensing Office simulation form."
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enlarge Document</span>
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                onClick={() =>
                  onOpenImageModal(
                    permitImg,
                    "Mayor's Permit (BPLO Simulation)",
                    "Permit No: 2026–BPLO–0094821 with itemized municipal tax fee assessment totaling PHP 6,400.00."
                  )
                }
                className="group cursor-pointer rounded-xl border border-stone-200 overflow-hidden bg-stone-50 relative aspect-16/10 mb-3"
              >
                <img
                  src={permitImg}
                  alt="Business Permit Mayor's Permit Simulation"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 rounded-xl bg-stone-900/90 text-white text-xs font-bold shadow-md flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    Click to Enlarge & Inspect Fees
                  </span>
                </div>
              </div>

              <p className="text-center text-[11px] text-stone-500 italic mb-4">
                Click image or fee buttons below to view municipal tax assessment details
              </p>
            </div>

            {/* Clickable Itemized Fee Breakdown Strip */}
            <div className="pt-3 border-t border-stone-100">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-stone-600 font-semibold flex items-center gap-1">
                  <span>Assessed Municipal Fees:</span>
                  <span className="text-[10px] text-amber-800 font-normal">(Click chip to inspect)</span>
                </span>
                <span className="font-mono font-bold text-stone-900">Total: PHP 6,400.00</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-stone-600">
                <button
                  type="button"
                  onClick={() => setFeeDetail(feeExplanations.license)}
                  className="p-2 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-200/80 hover:border-amber-300 text-left transition-colors cursor-pointer group"
                >
                  <span className="block text-stone-400 group-hover:text-amber-800">License Fee</span>
                  <span className="font-semibold text-stone-800">₱1,500.00 ℹ️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFeeDetail(feeExplanations.tax)}
                  className="p-2 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-200/80 hover:border-amber-300 text-left transition-colors cursor-pointer group"
                >
                  <span className="block text-stone-400 group-hover:text-amber-800">Business Tax</span>
                  <span className="font-semibold text-stone-800">₱2,200.00 ℹ️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFeeDetail(feeExplanations.sanitary)}
                  className="p-2 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-200/80 hover:border-amber-300 text-left transition-colors cursor-pointer group"
                >
                  <span className="block text-stone-400 group-hover:text-amber-800">Sanitary/Health</span>
                  <span className="font-semibold text-stone-800">₱800.00 ℹ️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFeeDetail(feeExplanations.fire)}
                  className="p-2 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-200/80 hover:border-amber-300 text-left transition-colors cursor-pointer group"
                >
                  <span className="block text-stone-400 group-hover:text-amber-800">Fire Safety</span>
                  <span className="font-semibold text-stone-800">₱500.00 ℹ️</span>
                </button>
              </div>

              {feeDetail && (
                <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-stone-700 flex items-start justify-between gap-2">
                  <div>
                    <strong className="text-amber-900 font-bold block">{feeDetail.name} ({feeDetail.amount})</strong>
                    <span className="text-[11px] text-stone-600">{feeDetail.desc}</span>
                  </div>
                  <button
                    onClick={() => setFeeDetail(null)}
                    className="text-stone-400 hover:text-stone-700 text-xs font-bold px-1.5 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Regulatory Dossier */}
          <div className="rounded-2xl bg-white border border-stone-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 uppercase tracking-wide mb-1.5">
                    Republic Acts & Codes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
                    Regulatory Dossier
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Documented in Page 18 of Plan
                  </p>
                </div>

                <button
                  onClick={() =>
                    onOpenImageModal(
                      dossierImg,
                      "Legal & Regulatory Dossier (Page 18)",
                      "Summary of Philippine Republic Acts, Sanitation Codes, and Food Safety Standards governing student enterprise."
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shrink-0"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-600" />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                onClick={() =>
                  onOpenImageModal(
                    dossierImg,
                    "Legal & Regulatory Dossier (Page 18)",
                    "Comprehensive legal and regulatory framework: DTI Registration, Food Safety Act, and Sanitation Code."
                  )
                }
                className="group cursor-pointer rounded-xl border border-stone-200 overflow-hidden bg-stone-50 relative aspect-16/10 mb-3"
              >
                <img
                  src={dossierImg}
                  alt="Regulatory Dossier Documented in Page 18"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 rounded-xl bg-stone-900/90 text-white text-xs font-bold shadow-md flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    Click to Enlarge Page 18
                  </span>
                </div>
              </div>

              <p className="text-center text-[11px] text-stone-500 italic mb-4">
                Click above to view high-resolution dossier page or click below to view in full PDF
              </p>
            </div>

            {/* Bottom PDF Button matching Screenshot 1 */}
            <div className="pt-2">
              <button
                onClick={() => onOpenPdfModal(18)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer shadow-2xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full 23-Page Business Plan PDF (Page 18)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Clickable Notice for 6 Republic Acts */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
              6 Philippine Republic Acts & Regulatory Codes
            </span>
            <span className="text-[10px] font-bold text-[#153e26] bg-[#153e26]/10 px-2 py-0.5 rounded-full">
              Click any card for full statutory details
            </span>
          </div>
        </div>

        {/* 6 Republic Acts & Codes Cards matching Screenshot 3 — ALL SEPARATE & CLICKABLE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEGAL_DOSSIER_ITEMS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedBadge(item.badge)}
              className="text-left p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-[#153e26] hover:shadow-md transition-all flex flex-col justify-between space-y-3 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide group-hover:text-amber-900">
                    {item.code}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-stone-600 bg-stone-100 border border-stone-200/60 group-hover:bg-amber-100 group-hover:text-amber-900 group-hover:border-amber-200 transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-sm font-bold font-heading text-stone-900 mt-1.5 group-hover:text-[#153e26] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#153e26] group-hover:text-[#0f2d1a]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#153e26]" />
                  <span>Click for full legal compliance</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Clickable Republic Act Compliance Modal */}
      <RepublicActModal
        isOpen={selectedBadge !== null}
        onClose={() => setSelectedBadge(null)}
        selectedBadge={selectedBadge}
        onOpenPdfModal={onOpenPdfModal}
      />
    </section>
  );
}

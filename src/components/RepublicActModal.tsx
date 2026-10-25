import { X, ShieldCheck, BookOpen, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { LegalDossierItem } from '../data/businessData';

interface DetailedRepublicAct extends LegalDossierItem {
  fullStatute: string;
  enactedBy: string;
  coreRequirements: string[];
  osqeCompliance: string[];
  courseObjective: string;
}

export const DETAILED_REPUBLIC_ACTS: Record<string, DetailedRepublicAct> = {
  'Act 3883': {
    code: 'DTI Registration',
    title: 'Business Name Law & Sole Proprietorship',
    badge: 'Act 3883',
    desc: 'Registration as "OSQE Banana Churros Enterprise" under Sole Proprietorship for formal trade name protection.',
    fullStatute: 'Act No. 3883, as amended by Act No. 4147 and Republic Act No. 863 (The Philippine Business Name Law)',
    enactedBy: 'Department of Trade and Industry (DTI)',
    coreRequirements: [
      'Mandatory registration of all trade names used in commercial transactions differing from the owner\'s birth name.',
      'Protection against misleading, deceptively similar, or duplicate corporate monikers.',
      'Renewable every 5 years with territorial scope registration (Barangay, City, Regional, or National).',
    ],
    osqeCompliance: [
      'Trade name "OSQE Banana Churros Enterprise" formally adopted under sole proprietorship ownership of Ms. Juliana Mae Halop.',
      'Recorded on Page 18 of the official 23-page Business Plan submitted for Elective 211.',
      'Ensures customer recognition and institutional credibility within ESSU Borongan.',
    ],
    courseObjective: 'Teaches students the foundational process of establishing formal legal business identities in the Philippines.',
  },
  'LGU Borongan': {
    code: "Mayor's Permit",
    title: 'City Business Permit & Licensing (BPLO)',
    badge: 'LGU Borongan',
    desc: 'Permit No. 2026–BPLO–0094821 issued for food retail and snack production kiosk operations with all municipal fees recorded.',
    fullStatute: 'Republic Act No. 7160 (Local Government Code of 1991) & City Revenue Code of Borongan',
    enactedBy: 'City Government of Borongan, Eastern Samar – BPLO',
    coreRequirements: [
      'Annual municipal license to operate within the territorial jurisdiction of Borongan City.',
      'Clearance from City Health Office (sanitary inspection) and Bureau of Fire Protection (FSIC).',
      'Assessment of municipal taxes based on gross sales or initial declared capitalization.',
    ],
    osqeCompliance: [
      'Mock Permit No. 2026–BPLO–0094821 simulated with full fee schedule totaling PHP 6,400.00.',
      'Includes itemized breakdown: License Fee (₱1,500), Business Tax (₱2,200), Sanitary/Health (₱800), Fire Safety (₱500), Garbage/Clearance (₱1,400).',
      'Officially documented in compliance simulation photo attachments.',
    ],
    courseObjective: 'Familiarizes student entrepreneurs with local government taxation, municipal licensing, and inter-agency clearances.',
  },
  'RA 10611': {
    code: 'Food Safety Act',
    title: 'Food Safety Act of 2013',
    badge: 'RA 10611',
    desc: 'Strict cold storage of condensed milk, hot oil held between 175°C-190°C, and daily fresh banana quality audits.',
    fullStatute: 'Republic Act No. 10611 (An Act to Strengthen the Philippine Food Safety Regulatory System)',
    enactedBy: 'Department of Health (DOH) & Food and Drug Administration (FDA)',
    coreRequirements: [
      'Implementation of Hazard Analysis and Critical Control Points (HACCP) principles across all food handling stages.',
      'Strict temperature control during storage, preparation, cooking, and hot holding.',
      'Traceability of all perishable agricultural inputs from source to end-consumer.',
    ],
    osqeCompliance: [
      'Fresh local bananas inspected daily for freshness, aroma, and freedom from bruising.',
      'Deep frying oil strictly calibrated between 175°C and 190°C to prevent excessive oil absorption and toxic smoke point degradation.',
      'Sweetened condensed milk stored in sealed containers and chilled until drizzling.',
    ],
    courseObjective: 'Instills clinical food hygiene and consumer safety responsibility in commercial culinary enterprises.',
  },
  'PD 856': {
    code: 'Sanitation Code',
    title: 'Code on Sanitation of the Philippines',
    badge: 'PD 856',
    desc: 'Mandatory personnel food handler health cards, sterile gloves, hairnets, and annual sanitary clearance.',
    fullStatute: 'Presidential Decree No. 856 (Code on Sanitation of the Philippines)',
    enactedBy: 'Department of Health (DOH) & City Health Officer',
    coreRequirements: [
      'Mandatory annual medical examination and Food Handler Health Certificate for all kitchen personnel.',
      'Use of personal protective equipment (PPE): hairnets, face masks, clean aprons, and food-grade disposable gloves.',
      'Sanitary washing facilities, potable water testing, and insect/pest vector control.',
    ],
    osqeCompliance: [
      'Every kitchen brigade member follows mandatory hand sanitation before handling dough skewers.',
      'Clean bamboo skewers sourced from certified hygienic suppliers and used once per serving.',
      'All preparation surfaces sanitized before and after batch production with food-safe cleaning agents.',
    ],
    courseObjective: 'Ensures student food entrepreneurs maintain hospital-grade sanitation to prevent food-borne illnesses.',
  },
  'RA 7394': {
    code: 'Allergen Mandate',
    title: 'Consumer Act & Mandatory Allergen Disclosure',
    badge: 'RA 7394',
    desc: 'Clear consumer notification: Contains Dairy (Condensed Milk, Milk Powder) and Gluten (Wheat Flour). Expiry & manufacturing labeling.',
    fullStatute: 'Republic Act No. 7394 (Consumer Act of the Philippines) & DOH Administrative Order 2014-0030',
    enactedBy: 'Department of Trade and Industry (DTI) & Food and Drug Administration (FDA)',
    coreRequirements: [
      'Truth in advertising and explicit packaging labeling of priority allergens.',
      'Prohibition of deceptive sales tactics, misleading pricing, or unverified claims.',
      'Clear consumer rights notification regarding product return, exchange, or health inquiries.',
    ],
    osqeCompliance: [
      'Packaging lunch packs prominently marked with Allergen Advisory: "Contains Dairy (Condensed Milk, Powdered Milk) and Gluten (Wheat Flour)".',
      'Transparent pricing: Exactly ₱50 for 3 large skewers with no hidden service or packaging fees.',
      'Direct customer phone numbers (09979165844 / 09991966085) printed on promotional materials.',
    ],
    courseObjective: 'Teaches ethical consumer protection, transparent labeling, and allergen risk mitigation.',
  },
  'RA 9514 & RA 9003': {
    code: 'Environmental & Fire',
    title: 'Fire Code & Ecological Solid Waste Management',
    badge: 'RA 9514 & RA 9003',
    desc: 'Certified Class K fire extinguisher for deep frying; used cooking oil captured and processed without public drainage discharge.',
    fullStatute: 'Republic Act No. 9514 (Fire Code of the Philippines) & Republic Act No. 9003 (Ecological Solid Waste Management Act of 2000)',
    enactedBy: 'Bureau of Fire Protection (BFP) & Department of Environment and Natural Resources (DENR)',
    coreRequirements: [
      'Appropriate fire suppression equipment specifically rated for cooking oils and fats (Class K extinguishers).',
      'Safe storage and maintenance of portable butane canisters and stove regulators.',
      'Strict prohibition against disposing fats, oils, and grease (FOG) into municipal storm waterways.',
    ],
    osqeCompliance: [
      'Butane gas cookers operated with safety lock mechanisms and inspected before each frying session.',
      'Waste cooking oil collected in dedicated, sealed plastic jerrycans for safe community recycling, never poured down university sinks.',
      'Biodegradable bamboo skewers and recyclable takeaway packaging prioritized to minimize plastic footprint.',
    ],
    courseObjective: 'Fosters environmental stewardship, eco-friendly waste management, and campus disaster risk reduction.',
  },
};

interface RepublicActModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBadge: string | null;
  onOpenPdfModal?: (page?: number) => void;
}

export default function RepublicActModal({
  isOpen,
  onClose,
  selectedBadge,
  onOpenPdfModal,
}: RepublicActModalProps) {
  if (!isOpen || !selectedBadge) return null;

  const actData = DETAILED_REPUBLIC_ACTS[selectedBadge] || {
    code: 'Legal Compliance',
    title: 'Philippine Regulatory Code',
    badge: selectedBadge,
    desc: 'Statutory compliance mandate for educational enterprise operations.',
    fullStatute: selectedBadge,
    enactedBy: 'Republic of the Philippines',
    coreRequirements: ['Standard regulatory adherence for micro-enterprises.'],
    osqeCompliance: ['Documented on Page 18 of the 23-page Business Plan.'],
    courseObjective: 'Educational simulation under Elective 211.',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wide block">
                {actData.badge} · Philippine Statute
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-stone-900 leading-tight">
                {actData.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-stone-700">
          
          {/* Official Statute Citation */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
              Official Statutory Citation & Regulatory Authority
            </span>
            <p className="font-semibold text-stone-900 text-xs sm:text-[13px]">
              {actData.fullStatute}
            </p>
            <p className="text-[11px] text-stone-600">
              Administered by: <strong>{actData.enactedBy}</strong>
            </p>
          </div>

          {/* Academic Objective */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <BookOpen className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-stone-900 font-bold block">Curriculum Learning Objective</strong>
              <span className="text-stone-600">{actData.courseObjective}</span>
            </div>
          </div>

          {/* Core Mandates */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Core Statutory Requirements for Food Enterprises</span>
            </h4>
            <div className="space-y-2">
              {actData.coreRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                  <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-700 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OSQE Banana Churros Implementation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#153e26] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#153e26]" />
              <span>OSQE Banana Churros Compliance & Safeguards</span>
            </h4>
            <div className="space-y-2">
              {actData.osqeCompliance.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-800 bg-[#faf7ee] p-2.5 rounded-lg border border-[#153e26]/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#153e26] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{comp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page 18 Reference Box */}
          <div className="p-3.5 rounded-xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                Official Submission Reference
              </span>
              <p className="text-xs font-medium text-stone-300">
                Documented in Page 18 of the 23-page Business Plan PDF.
              </p>
            </div>

            {onOpenPdfModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenPdfModal(18);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Page 18 PDF</span>
              </button>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Elective 211 · Compliance Dossier</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-bold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

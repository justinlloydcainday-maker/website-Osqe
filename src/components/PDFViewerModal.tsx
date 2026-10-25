import { useEffect, useState } from 'react';
import { X, FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export default function PDFViewerModal({ isOpen, onClose, initialPage = 1 }: PDFViewerModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = 23;

  useEffect(() => {
    if (initialPage) {
      setCurrentPage(initialPage);
    }
  }, [initialPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(totalPages, p + 1));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(1, p - 1));
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const paddedPage = String(currentPage).padStart(2, '0');
  const pageImagePath = getAssetUrl(`/pdf_pages/page_${paddedPage}.png`);
  const rawPdfUrl = getAssetUrl('/osqe_banana_churros_business_plan.pdf');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh] h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950 border-b border-stone-800 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-heading">
                OSQE Banana Churros — Business Plan & Dossier
              </h3>
              <p className="text-[11px] text-stone-400">
                23-Page Course Requirement · Elective 211 · ESSU Borongan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={rawPdfUrl}
              download="OSQE_Banana_Churros_Business_Plan.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href={rawPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs flex items-center gap-1"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar & Page Navigation */}
        <div className="bg-stone-950/70 border-b border-stone-800/80 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-300 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 cursor-pointer text-white flex items-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[11px] pr-1">Prev</span>
            </button>
            <span className="font-mono text-xs">
              Page <strong className="text-amber-400 font-bold">{currentPage}</strong> of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1 rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 cursor-pointer text-white flex items-center"
            >
              <span className="text-[11px] pl-1">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Jump Shortcuts */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] text-stone-400">
            <span>Jump to:</span>
            <button onClick={() => setCurrentPage(1)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Cover</button>
            <button onClick={() => setCurrentPage(2)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Summary</button>
            <button onClick={() => setCurrentPage(3)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Market</button>
            <button onClick={() => setCurrentPage(5)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">SWOT</button>
            <button onClick={() => setCurrentPage(7)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Marketing</button>
            <button onClick={() => setCurrentPage(9)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Org Chart</button>
            <button onClick={() => setCurrentPage(11)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Financials</button>
            <button onClick={() => setCurrentPage(14)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Testing Photos</button>
            <button onClick={() => setCurrentPage(16)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Resumes</button>
          </div>
        </div>

        {/* Content Viewer: Crisp High-Resolution Page Image */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-stone-950/60 flex items-center justify-center">
          <div className="relative max-h-full shadow-2xl bg-white rounded-lg overflow-hidden border border-stone-700">
            <img
              src={pageImagePath}
              alt={`Page ${currentPage} of OSQE Banana Churros Business Plan`}
              className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-stone-950 border-t border-stone-800 text-stone-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <p>
            Eastern Samar State University – Main Campus · College of Computer Studies & Business
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-stone-500">Instructor: {BUSINESS_INFO.instructor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

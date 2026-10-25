import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { RubricSectionId, RUBRIC_SECTIONS } from '../types/navigation';

interface SectionPaginationProps {
  currentSection: RubricSectionId;
  onSelectSection: (id: RubricSectionId) => void;
  onOpenPdfModal?: () => void;
}

export default function SectionPagination({
  currentSection,
  onSelectSection,
  onOpenPdfModal,
}: SectionPaginationProps) {
  const currentIndex = RUBRIC_SECTIONS.findIndex((s) => s.id === currentSection);
  const prevSection = currentIndex > 0 ? RUBRIC_SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < RUBRIC_SECTIONS.length - 1 ? RUBRIC_SECTIONS[currentIndex + 1] : null;

  return (
    <div className="bg-[#faf8f2] border-t border-stone-200/90 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Previous Section Button */}
          <div className="w-full sm:w-auto">
            {prevSection ? (
              <button
                onClick={() => {
                  onSelectSection(prevSection.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 text-stone-500 group-hover:-translate-x-0.5 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] text-stone-400 font-medium uppercase">Previous Section</span>
                  <span>{prevSection.num}. {prevSection.rubricName}</span>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block w-36" />
            )}
          </div>

          {/* Center: Rubric Page Selector Pills */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {RUBRIC_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  onSelectSection(sec.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                  sec.id === currentSection
                    ? 'bg-[#153e26] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
                title={`Go to Section ${sec.num}: ${sec.rubricName}`}
              >
                {sec.num}
              </button>
            ))}
          </div>

          {/* Next Section Button */}
          <div className="w-full sm:w-auto">
            {nextSection ? (
              <button
                onClick={() => {
                  onSelectSection(nextSection.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#153e26] bg-[#153e26] hover:bg-[#0f2d1a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer group"
              >
                <div className="text-right">
                  <span className="block text-[10px] text-amber-300 font-medium uppercase">Next Section</span>
                  <span>{nextSection.num}. {nextSection.rubricName}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onSelectSection('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                <span>Return to 1. Home</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

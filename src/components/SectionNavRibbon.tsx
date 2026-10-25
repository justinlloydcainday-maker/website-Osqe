import { Layers, CheckCircle2, ChevronRight, BookOpen, ScrollText } from 'lucide-react';
import { RubricSectionId, RUBRIC_SECTIONS } from '../types/navigation';

interface SectionNavRibbonProps {
  currentSection: RubricSectionId;
  onSelectSection: (id: RubricSectionId) => void;
  viewMode: 'separate' | 'continuous';
  onToggleViewMode: (mode: 'separate' | 'continuous') => void;
}

export default function SectionNavRibbon({
  currentSection,
  onSelectSection,
  viewMode,
  onToggleViewMode,
}: SectionNavRibbonProps) {
  const activeMeta = RUBRIC_SECTIONS.find((s) => s.id === currentSection) || RUBRIC_SECTIONS[0];

  return (
    <div className="bg-[#f4efe4] border-b border-stone-300/80 sticky top-16 z-30 shadow-2xs backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Strip: Academic Context & Mode Toggle */}
        <div className="py-2 flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/70 text-xs">
          <div className="flex items-center gap-2 text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold text-[#153e26] bg-[#153e26]/10 border border-[#153e26]/15 uppercase tracking-wide">
              <BookOpen className="w-3 h-3" />
              Website Rubric
            </span>
            <span className="text-stone-500 hidden sm:inline">Format:</span>
            <span className="font-semibold text-stone-800 text-[11px] sm:text-xs">
              Section {activeMeta.num} of 7: <strong className="text-stone-900">{activeMeta.rubricName}</strong>
            </span>
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-1 bg-stone-200/70 p-0.5 rounded-lg text-[11px]">
            <button
              onClick={() => onToggleViewMode('separate')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                viewMode === 'separate'
                  ? 'bg-white text-[#153e26] shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="View each section as an individual separate page"
            >
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Separate Pages</span>
            </button>

            <button
              onClick={() => onToggleViewMode('continuous')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                viewMode === 'continuous'
                  ? 'bg-white text-[#153e26] shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="View all sections on one scrollable page"
            >
              <ScrollText className="w-3.5 h-3.5 text-stone-600" />
              <span className="hidden sm:inline">Continuous</span>
              <span className="sm:hidden">All</span>
            </button>
          </div>
        </div>

        {/* Clickable Numbered Section Tabs Bar */}
        <div className="py-2.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 sm:gap-2">
          {RUBRIC_SECTIONS.map((sec) => {
            const isActive = currentSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`group shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#153e26] text-white border-[#153e26] shadow-xs'
                    : 'bg-white/80 hover:bg-white text-stone-700 hover:text-[#153e26] border-stone-200/90'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-[10px] font-mono flex items-center justify-center font-bold ${
                    isActive
                      ? 'bg-[#facc15] text-[#153e26]'
                      : 'bg-stone-100 text-stone-600 group-hover:bg-[#153e26]/10 group-hover:text-[#153e26]'
                  }`}
                >
                  {sec.num}
                </span>

                <span className="tracking-tight">{sec.rubricName}</span>

                {sec.id === 'permits' && (
                  <span
                    className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-mono font-bold ${
                      isActive ? 'bg-amber-400 text-stone-900' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    Dossier
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

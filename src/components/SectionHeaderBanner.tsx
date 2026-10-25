import { Bookmark, FileCheck, Layers } from 'lucide-react';
import { RubricSectionMeta } from '../types/navigation';

interface SectionHeaderBannerProps {
  meta: RubricSectionMeta;
  totalSections: number;
}

export default function SectionHeaderBanner({ meta, totalSections }: SectionHeaderBannerProps) {
  return (
    <div className="bg-[#faf7ee] border-b border-stone-200/90 py-5 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#153e26]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#153e26]/10 border border-[#153e26]/20 text-[11px]">
                <Bookmark className="w-3 h-3 text-[#153e26]" />
                Course Rubric Section {meta.num} of {totalSections}
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600 font-medium">{meta.rubricName}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
              {meta.title}
            </h1>
            
            <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              <strong className="text-stone-800">Academic Discussion:</strong> {meta.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs">
              <FileCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{meta.badge}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

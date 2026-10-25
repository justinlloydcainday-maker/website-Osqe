import { useState } from 'react';
import { Users, ShieldCheck, GraduationCap, FileText, ZoomIn, Mail, Phone } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface TeamSectionProps {
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function TeamSection({ onOpenPdfModal, onOpenImageModal }: TeamSectionProps) {
  const orgChartImg = getAssetUrl('/pdf_pages/page_09.png');

  return (
    <section id="team" className="py-16 lg:py-20 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>Organizational Structure</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>10 Student Officers</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
              Management & Team Hierarchy
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Operated under Elective 211 at Eastern Samar State University – Main Campus, Borongan.
            </p>
          </div>

          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#153e26] bg-white border border-[#153e26]/30 hover:bg-[#faf7ee] rounded-lg transition-colors cursor-pointer self-start sm:self-end"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open 23-Page Business Plan</span>
          </button>
        </div>

        {/* Minimal Governance Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-xs">
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Sole Proprietorship Ownership</span>
              <p className="text-stone-600 mt-0.5">
                Owned and managed by <strong>Ms. Juliana Mae Halop</strong>, overseeing enterprise operations and governance.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Course Instructor & Adviser</span>
              <p className="text-stone-600 mt-0.5">
                <strong>{BUSINESS_INFO.instructor}</strong>, Instructor for <em>The Entrepreneurial Mind (Elective 211)</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Org Chart Strip */}
        <div
          onClick={() =>
            onOpenImageModal(
              orgChartImg,
              'Official Organizational Structure Chart',
              'Page 9 of the official business plan submitted to Ms. Alexis Oliver Caraga.'
            )
          }
          className="group cursor-pointer mb-10 p-4 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-between gap-4 hover:border-[#153e26]/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <img
              src={orgChartImg}
              alt="Org Chart"
              className="w-14 h-14 object-cover object-top rounded-lg border border-stone-200"
            />
            <div>
              <span className="text-xs font-bold text-[#153e26] uppercase tracking-wide block">
                Organization Chart (Page 9)
              </span>
              <span className="text-sm font-bold font-heading text-stone-900">
                Complete Executive, Kitchen & Finance Tree
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-[#153e26] flex items-center gap-1 group-hover:underline">
            <ZoomIn className="w-3.5 h-3.5" /> Click to Expand Chart
          </span>
        </div>

        {/* Minimalist Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-stone-200/80 hover:border-[#153e26]/30 transition-colors flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-start gap-3">
                  {member.avatarUrl ? (
                    <div
                      onClick={() =>
                        onOpenImageModal(
                          member.avatarUrl!,
                          `${member.name} - Resume`,
                          `Official student resume from Elective 211 submission.`
                        )
                      }
                      className="cursor-pointer group relative w-11 h-13 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shrink-0"
                    >
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-3 h-3" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-lg bg-[#153e26]/10 text-[#153e26] flex items-center justify-center font-bold text-sm shrink-0">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-[#153e26] uppercase tracking-wide block truncate">
                      {member.role}
                    </span>
                    <h4 className="text-sm font-bold font-heading text-stone-900 truncate">
                      {member.name}
                    </h4>
                    <span className="text-[11px] text-stone-500 block truncate">
                      {member.department}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-600 leading-relaxed mt-2.5">
                  {member.responsibilities}
                </p>
              </div>

              {/* Minimal contact if available */}
              {(member.email || member.contact) && (
                <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-500 flex items-center justify-between">
                  <span className="truncate">{member.email || member.contact}</span>
                  {member.avatarUrl && (
                    <button
                      onClick={() => onOpenPdfModal()}
                      className="text-[#153e26] font-semibold hover:underline shrink-0"
                    >
                      Resume →
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

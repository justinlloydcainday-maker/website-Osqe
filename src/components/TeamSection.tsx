import { useState } from 'react';
import { Users, ShieldCheck, GraduationCap, FileText, ZoomIn, Mail, Phone, ArrowRight, UserCheck } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO, TeamMember } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';
import TeamMemberModal from './TeamMemberModal';

interface TeamSectionProps {
  onOpenPdfModal: (page?: number) => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function TeamSection({ onOpenPdfModal, onOpenImageModal }: TeamSectionProps) {
  const orgChartImg = getAssetUrl('/pdf_pages/page_09.png');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="about" className="py-12 lg:py-16 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153e26] tracking-wide mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>About Us</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Student Enterprise Governance</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-stone-900 tracking-tight">
              Management Team & Organizational Structure
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Operated under The Entrepreneurial Mind (Elective 211) at Eastern Samar State University – Main Campus, Borongan. Click any officer card for detailed operational duties.
            </p>
          </div>

          <button
            onClick={() => onOpenPdfModal(9)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#153e26] bg-white border border-[#153e26]/30 hover:bg-[#faf7ee] rounded-lg transition-colors cursor-pointer self-start sm:self-end shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open 23-Page Business Plan (Page 9)</span>
          </button>
        </div>

        {/* Minimal Governance Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-xs">
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Sole Proprietorship Ownership</span>
              <p className="text-stone-600 mt-0.5">
                Owned and managed by <strong>Ms. Juliana Mae Halop</strong>, overseeing enterprise business governance, capital allocation, and compliance.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-2xs">
            <GraduationCap className="w-4 h-4 text-[#153e26] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900 block">Course Instructor & Academic Adviser</span>
              <p className="text-stone-600 mt-0.5">
                <strong>{BUSINESS_INFO.instructor}</strong>, Faculty Instructor for <em>The Entrepreneurial Mind (Elective 211)</em> at ESSU.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Org Chart Strip (Click to Zoom Page 9) */}
        <div
          onClick={() =>
            onOpenImageModal(
              orgChartImg,
              'Official Organizational Structure Chart',
              'Page 9 of the official business plan submitted to Ms. Alexis Oliver Caraga.'
            )
          }
          className="group cursor-pointer mb-8 p-4 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-between gap-4 hover:border-[#153e26]/40 transition-colors shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <img
              src={orgChartImg}
              alt="Org Chart"
              className="w-14 h-14 object-cover object-top rounded-lg border border-stone-200"
            />
            <div>
              <span className="text-xs font-bold text-[#153e26] uppercase tracking-wide block">
                Official Hierarchy Chart (Page 9)
              </span>
              <span className="text-sm font-bold font-heading text-stone-900">
                Complete Executive, Operations, Kitchen & Finance Tree
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-[#153e26] flex items-center gap-1 group-hover:underline shrink-0">
            <ZoomIn className="w-3.5 h-3.5" /> Click to Expand Chart
          </span>
        </div>

        {/* Clickable Officers Section Note */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
            Student Enterprise Officers & Brigade
          </span>
          <span className="text-[10px] font-bold text-[#153e26] bg-[#153e26]/10 px-2 py-0.5 rounded-full">
            Click any officer card for duties & competencies
          </span>
        </div>

        {/* Clean Officer Grid (RESUMES REMOVED, ALL CLICKABLE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedMember(member)}
              className="text-left p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-[#153e26] hover:shadow-md transition-all flex flex-col justify-between shadow-2xs cursor-pointer group"
            >
              <div className="space-y-3 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#153e26] text-amber-300 flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    {member.avatarInitials || member.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-[#153e26] uppercase tracking-wide block truncate">
                      {member.role}
                    </span>
                    <h4 className="text-sm font-bold font-heading text-stone-900 truncate group-hover:text-[#153e26] transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-[11px] text-stone-500 block truncate">
                      {member.department}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {member.responsibilities}
                </p>

                {member.skills && member.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-400">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Click Affordance */}
              <div className="pt-3 mt-3 border-t border-stone-100 w-full flex items-center justify-between text-[11px] font-bold text-[#153e26]">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Click for full profile</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Team Member Profile Modal */}
      <TeamMemberModal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
        onOpenPdfModal={onOpenPdfModal}
      />
    </section>
  );
}

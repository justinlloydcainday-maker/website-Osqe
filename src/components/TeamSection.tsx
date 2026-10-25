import { useState } from 'react';
import { Users, GraduationCap, Award, FileText, ZoomIn, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface TeamSectionProps {
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function TeamSection({ onOpenPdfModal, onOpenImageModal }: TeamSectionProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const departments = [
    { id: 'all', label: 'All Members (10)' },
    { id: 'Executive Governance', label: 'Executive Leadership' },
    { id: 'Kitchen & Production', label: 'Kitchen Brigade' },
    { id: 'Finance & Accounting', label: 'Finance & Audit' },
  ];

  const filteredMembers =
    selectedDepartment === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === selectedDepartment);

  const orgChartImg = getAssetUrl('/pdf_pages/page_09.png');

  return (
    <section id="team" className="py-16 lg:py-24 bg-[#fffdf9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Management & Organization</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Student Entrepreneurs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-900 tracking-tight text-balance">
            Organizational Structure & Governance
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Operated by a dedicated 10-member student entrepreneurial team at Eastern Samar State University under the guidance of our Elective 211 instructor.
          </p>
        </div>

        {/* Academic & Ownership Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="p-5 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block">
                Enterprise Ownership & Legal Form
              </span>
              <h3 className="text-base font-bold font-heading text-stone-900">
                Sole Proprietorship
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Owned and managed by <strong>Ms. Juliana Mae Halop</strong>, overseeing enterprise operations, legal compliance, and strategic growth.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block">
                Academic Faculty Adviser
              </span>
              <h3 className="text-base font-bold font-heading text-stone-900">
                {BUSINESS_INFO.instructor}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Instructor for <em>The Entrepreneurial Mind (Elective 211)</em>, Eastern Samar State University – Main Campus, Borongan.
              </p>
            </div>
          </div>

        </div>

        {/* Org Chart Preview Card */}
        <div className="mb-14 p-6 rounded-3xl bg-amber-50/60 border border-amber-200 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
              Official Hierarchical Tree
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
              Executive & Operational Hierarchy
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Clear division of responsibilities across strategic management, daily operations, kitchen brigade, and treasury accounting.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() =>
                  onOpenImageModal(
                    orgChartImg,
                    'OSQE Banana Churros Organization Chart',
                    'Page 9 of the official business plan showing full organizational tree with officer portraits.'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Zoom Org Chart (Page 9)</span>
              </button>
              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Full Document</span>
              </button>
            </div>
          </div>

          <div
            onClick={() =>
              onOpenImageModal(
                orgChartImg,
                'OSQE Banana Churros Organization Chart',
                'Page 9 of the official business plan showing full organizational tree with officer portraits.'
              )
            }
            className="cursor-pointer group relative w-full lg:w-96 rounded-2xl overflow-hidden bg-white border border-amber-200 shadow-sm"
          >
            <img
              src={orgChartImg}
              alt="Organization Chart from PDF"
              className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center">
              <span className="px-3 py-1 text-xs font-bold bg-white/90 text-stone-900 rounded-lg shadow-sm flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" /> Click to View Chart
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Department Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h3 className="text-xl font-bold font-heading text-stone-900">
            Student Officers & Operational Specialists
          </h3>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200">
            {departments.map((dept) => {
              const isActive = selectedDepartment === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {dept.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with avatar / placeholder and role */}
                <div className="flex items-start gap-3 mb-4">
                  {member.avatarUrl ? (
                    <div
                      onClick={() =>
                        onOpenImageModal(
                          member.avatarUrl!,
                          `${member.name} - Resume & Credentials`,
                          `Official student resume from the Elective 211 submission.`
                        )
                      }
                      className="cursor-pointer group relative w-14 h-16 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0"
                    >
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg font-heading shrink-0">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-amber-700 block uppercase tracking-wider truncate">
                      {member.role}
                    </span>
                    <h4 className="text-base font-bold font-heading text-stone-900 truncate">
                      {member.name}
                    </h4>
                    <span className="text-xs text-stone-500 block truncate">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Core Responsibilities */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {member.responsibilities}
                </p>

                {/* Skills tags */}
                {member.skills && (
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-stone-100 text-stone-700 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact & Meta footer */}
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                {member.email && (
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                )}
                {member.contact && (
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{member.contact}</span>
                  </div>
                )}
                {member.location && (
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{member.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Resumes CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Open All 8 Full Student Resumes in Document Viewer</span>
          </button>
        </div>

      </div>
    </section>
  );
}

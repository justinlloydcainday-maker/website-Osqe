import { X, Mail, Phone, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';
import { TeamMember, BUSINESS_INFO } from '../data/businessData';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
  onOpenPdfModal?: (page?: number) => void;
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  member,
  onOpenPdfModal,
}: TeamMemberModalProps) {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#faf7ee] border-b border-stone-200 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl bg-[#153e26] text-amber-300 flex items-center justify-center text-lg font-bold shadow-xs shrink-0">
              {member.avatarInitials || member.name.charAt(0)}
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#153e26] uppercase tracking-wider block">
                {member.department}
              </span>
              <h3 className="text-lg font-extrabold font-heading text-stone-900 leading-tight">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-amber-900 mt-0.5">
                {member.title || member.role}
              </p>
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

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-stone-700">
          {/* Key Responsibilities */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#153e26]" />
              <span>Operational Duties & Governance Role</span>
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
              {member.responsibilities}
            </p>
          </div>

          {/* Academic Affiliation */}
          <div className="p-3.5 rounded-xl bg-[#faf7ee] border border-[#153e26]/15 space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#153e26] tracking-wider block flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Enrollment
            </span>
            <p className="font-semibold text-stone-900 text-xs">
              {member.education || BUSINESS_INFO.institution}
            </p>
            <p className="text-[11px] text-stone-500">
              Course: {BUSINESS_INFO.course} · Instructor: {BUSINESS_INFO.instructor}
            </p>
          </div>

          {/* Core Competencies & Skills */}
          {member.skills && member.skills.length > 0 && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Core Competencies & Skills</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-medium border border-stone-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact Details */}
          {(member.email || member.contact || member.location) && (
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5 text-xs text-stone-600">
              {member.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{member.location}</span>
                </div>
              )}
              {member.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-mono text-stone-800">{member.email}</span>
                </div>
              )}
              {member.contact && (
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-mono text-stone-800">{member.contact}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          {onOpenPdfModal ? (
            <button
              onClick={() => {
                onClose();
                onOpenPdfModal(9);
              }}
              className="text-[#153e26] font-bold hover:underline cursor-pointer"
            >
              View Hierarchy Chart in PDF (Page 9)
            </button>
          ) : (
            <span>OSQE Student Governance</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

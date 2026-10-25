import { useState } from 'react';
import { Menu, X, ShoppingBag, FileText, Layers, ScrollText } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import { BUSINESS_INFO } from '../data/businessData';
import { RubricSectionId, RUBRIC_SECTIONS } from '../types/navigation';

interface NavbarProps {
  currentSection: RubricSectionId;
  onSelectSection: (id: RubricSectionId) => void;
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
  viewMode: 'separate' | 'continuous';
  onToggleViewMode: (mode: 'separate' | 'continuous') => void;
}

export default function Navbar({
  currentSection,
  onSelectSection,
  onOpenOrderModal,
  onOpenPdfModal,
  viewMode,
  onToggleViewMode,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: RubricSectionId) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
    window.location.hash = `#${id}`;
    if (viewMode === 'continuous') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f2]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 shrink-0 group text-left cursor-pointer"
          >
            <img
              src={getAssetUrl('/logo.png')}
              alt="OSQE Banana Churros"
              className="w-9 h-9 object-contain rounded-full bg-white border border-[#153e26]/20 p-0.5 shadow-2xs group-hover:rotate-6 transition-transform"
            />
            <div className="leading-tight">
              <span className="text-base font-bold font-heading tracking-tight text-[#153e26] block group-hover:text-amber-800 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] text-stone-500 font-medium block">
                ESSU Borongan · Elective 211
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links following rubric format — ALL SEPARATE & CLICKABLE */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold">
            {RUBRIC_SECTIONS.map((sec) => {
              const isActive = currentSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#153e26] text-white font-bold shadow-2xs'
                      : sec.id === 'permits'
                      ? 'text-amber-900 font-bold hover:bg-amber-100/60'
                      : 'text-stone-700 hover:text-[#153e26] hover:bg-stone-200/50'
                  }`}
                >
                  <span>{sec.rubricName}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#153e26]" />
              <span>Business Plan</span>
            </button>

            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-lg shadow-2xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#facc15]" />
              <span>Order · 3 for ₱50</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#153e26] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#faf8f2] px-4 pt-3 pb-5 space-y-3">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2">
            Academic Rubric Sections
          </div>
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {RUBRIC_SECTIONS.map((sec) => {
              const isActive = currentSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#153e26] text-white font-bold'
                      : sec.id === 'permits'
                      ? 'text-amber-900 font-bold bg-amber-50'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[11px] opacity-70">{sec.num}.</span>
                    <span>{sec.rubricName}</span>
                  </span>
                  <span className="text-[10px] opacity-80 uppercase">{sec.badge}</span>
                </button>
              );
            })}

            <div className="pt-2 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full py-2 px-3 text-left text-xs text-[#153e26] font-bold inline-flex items-center gap-2 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#153e26]" />
                <span>View 23-Page Business Plan PDF</span>
              </button>
            </div>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#facc15]" />
            <span>Order Now · 3 for ₱50</span>
          </button>
        </div>
      )}
    </header>
  );
}

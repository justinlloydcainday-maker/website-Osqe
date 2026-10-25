import { useState } from 'react';
import { Menu, X, ShoppingBag, FileText } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
}

export default function Navbar({ onOpenOrderModal, onOpenPdfModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f2]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-6">
          
          {/* Zone 1: Clean Minimalist Brand Wordmark */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <img
              src={getAssetUrl('/logo.png')}
              alt="OSQE Banana Churros"
              className="w-9 h-9 object-contain rounded-full bg-white border border-[#153e26]/20 p-0.5 shadow-2xs"
            />
            <div className="leading-tight">
              <span className="text-base font-bold font-heading tracking-tight text-[#153e26] block group-hover:text-amber-800 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] text-stone-500 font-medium block">
                ESSU Borongan · Elective 211
              </span>
            </div>
          </a>

          {/* Zone 2: Minimalist Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#product" className="hover:text-[#153e26] transition-colors whitespace-nowrap">
              Menu & Recipe
            </a>
            <a href="#gallery" className="hover:text-[#153e26] transition-colors whitespace-nowrap">
              Gallery
            </a>
            <a href="#financials" className="hover:text-[#153e26] transition-colors whitespace-nowrap">
              Economics
            </a>
            <a href="#team" className="hover:text-[#153e26] transition-colors whitespace-nowrap">
              Team
            </a>
            <button
              onClick={onOpenPdfModal}
              className="text-stone-600 hover:text-[#153e26] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#153e26]" />
              <span>Business Plan</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action Button in Poster Colors */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#153e26] hover:bg-[#0f2d1a] rounded-lg shadow-2xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#facc15]" />
              <span>Order · 3 for ₱50</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#153e26] rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#faf8f2] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#153e26]"
            >
              Menu & Recipe
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#153e26]"
            >
              Gallery
            </a>
            <a
              href="#financials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#153e26]"
            >
              Economics & Costing
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#153e26]"
            >
              Team & Structure
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfModal();
              }}
              className="py-1.5 text-left text-[#153e26] font-semibold inline-flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View 23-Page Business Plan</span>
            </button>
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

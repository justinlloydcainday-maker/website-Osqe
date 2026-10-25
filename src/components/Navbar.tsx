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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a href="#home" className="flex items-center gap-2.5 text-stone-900 shrink-0">
            <img
              src={getAssetUrl('/logo.png')}
              alt="OSQE Banana Churros"
              className="w-10 h-10 object-contain rounded-full bg-amber-50 border border-amber-300 p-0.5"
            />
            <div className="leading-tight">
              <span className="text-base sm:text-lg font-bold font-heading tracking-tight block text-stone-900">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] text-amber-800 font-medium block">
                ESSU Borongan · Elective 211
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#product" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Product & Recipe
            </a>
            <a href="#gallery" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Gallery
            </a>
            <a href="#financials" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Financials
            </a>
            <a href="#team" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Team & Structure
            </a>
            <button
              onClick={onOpenPdfModal}
              className="text-stone-600 hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>Business Plan</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Now · 3 for ₱50</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Product & Recipe
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Gallery
            </a>
            <a
              href="#financials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Financials & Economics
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Team & Structure
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfModal();
              }}
              className="py-1.5 text-left text-amber-700 font-semibold inline-flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View 23-Page Business Plan PDF</span>
            </button>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now · 3 for ₱50</span>
          </button>
        </div>
      )}
    </header>
  );
}

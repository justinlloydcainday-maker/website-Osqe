import { ArrowUp, FileText, ShoppingBag, MapPin, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface FooterProps {
  onOpenPdfModal: () => void;
  onOpenOrderModal: () => void;
}

export default function Footer({ onOpenPdfModal, onOpenOrderModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#153e26] text-stone-200 border-t border-black/20 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={getAssetUrl('/logo.png')}
                alt="OSQE Logo"
                className="w-9 h-9 object-contain rounded-full bg-white p-0.5"
              />
              <span className="font-bold text-sm text-white font-heading block">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed">
              Freshly made banana churros drizzled with condensed milk & sweet chocolate malt. Elective 211 student business venture.
            </p>
            <span className="text-[11px] text-amber-300 italic block">
              "Together in Harmony, United in Purpose"
            </span>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Navigation</h4>
            <ul className="space-y-1.5 text-stone-300 text-xs">
              <li>
                <a href="#product" className="hover:text-white transition-colors">Menu & Recipe</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#financials" className="hover:text-white transition-colors">Unit Economics</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">Student Team</a>
              </li>
              <li>
                <button
                  onClick={onOpenPdfModal}
                  className="hover:text-white transition-colors text-left inline-flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-amber-300" />
                  <span>23-Page Business Plan</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Credits */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Academic Info</h4>
            <div className="space-y-1 text-stone-300 text-xs">
              <p>
                <strong className="text-white block">Course:</strong>
                {BUSINESS_INFO.course}
              </p>
              <p>
                <strong className="text-white block">Institution:</strong>
                {BUSINESS_INFO.institution}
              </p>
              <p>
                <strong className="text-white block">Instructor:</strong>
                {BUSINESS_INFO.instructor}
              </p>
            </div>
          </div>

          {/* Col 4: Campus Orders */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Campus Orders</h4>
            <p className="text-stone-300 text-xs">
              Handover available at ESSU Main Campus during morning & afternoon merienda.
            </p>
            <button
              onClick={onOpenOrderModal}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#153e26] bg-[#facc15] hover:bg-amber-300 rounded-lg transition-colors cursor-pointer mt-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pre-Order · 3 for ₱50</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <p>© 2026 OSQE Banana Churros Enterprise · ESSU Borongan</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

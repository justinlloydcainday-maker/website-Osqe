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
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Academic Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl('/logo.png')}
                alt="OSQE Logo"
                className="w-10 h-10 object-contain rounded-full bg-amber-50 p-0.5 border border-amber-300"
              />
              <div>
                <span className="font-bold text-base text-white font-heading block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[11px] text-amber-400 block">
                  {BUSINESS_INFO.motto}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              An entrepreneurial food startup offering freshly made, golden crispy banana churros drizzled with sweet condensed milk, Bear Brand milk powder, and Milo for students, faculty, and merenderos.
            </p>

            <span className="text-[11px] text-stone-500 block">
              Slogan: <em>"{BUSINESS_INFO.slogan}"</em>
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-heading text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#product" className="hover:text-amber-400 transition-colors">
                  Product & Culinary Procedure
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Gallery & Campus Selling
                </a>
              </li>
              <li>
                <a href="#financials" className="hover:text-amber-400 transition-colors">
                  Unit Costing & Batch Economics
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  Student Team & Org Structure
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPdfModal}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>23-Page Business Plan PDF</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Affiliation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-heading text-white">Academic Details</h4>
            <div className="space-y-2 text-stone-400 text-xs">
              <p>
                <strong className="text-stone-300 block">Course Requirement:</strong>
                {BUSINESS_INFO.course}
              </p>
              <p>
                <strong className="text-stone-300 block">Institution:</strong>
                {BUSINESS_INFO.institution}
              </p>
              <p>
                <strong className="text-stone-300 block">Adviser / Instructor:</strong>
                {BUSINESS_INFO.instructor}
              </p>
              <p>
                <strong className="text-stone-300 block">Legal Structure:</strong>
                {BUSINESS_INFO.ownership}
              </p>
            </div>
          </div>

          {/* Col 4: Campus Orders & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-heading text-white">Campus Pre-Orders</h4>
            <div className="space-y-2 text-stone-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.campusAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.contactEmail}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Merienda · 3 for ₱50</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © 2026 OSQE Banana Churros Enterprise · Eastern Samar State University. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

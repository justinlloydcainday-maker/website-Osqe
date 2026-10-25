/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionNavRibbon from './components/SectionNavRibbon';
import SectionHeaderBanner from './components/SectionHeaderBanner';
import SectionPagination from './components/SectionPagination';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import IngredientsSection from './components/IngredientsSection';
import PermitsSection from './components/PermitsSection';
import TeamSection from './components/TeamSection';
import FinancialSection from './components/FinancialSection';
import DocumentationSection from './components/DocumentationSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import PDFViewerModal from './components/PDFViewerModal';
import { RubricSectionId, RUBRIC_SECTIONS } from './types/navigation';

export default function App() {
  const [currentSection, setCurrentSection] = useState<RubricSectionId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as RubricSectionId;
      const valid = RUBRIC_SECTIONS.some((s) => s.id === hash);
      if (valid) return hash;
    }
    return 'home';
  });

  const [viewMode, setViewMode] = useState<'separate' | 'continuous'>('separate');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfInitialPage, setPdfInitialPage] = useState(1);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  // Listen to hash changes (browser back/forward button or external links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as RubricSectionId;
      const match = RUBRIC_SECTIONS.find((s) => s.id === hash);
      if (match) {
        setCurrentSection(match.id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectSection = (id: RubricSectionId) => {
    setCurrentSection(id);
    window.location.hash = `#${id}`;

    if (viewMode === 'separate') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenImageModal = (imageUrl: string, title: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseImageModal = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenPdfModal = (page: number = 1) => {
    setPdfInitialPage(page);
    setPdfModalOpen(true);
  };

  const handleOpenOrder = () => {
    handleSelectSection('contact');
  };

  const activeMeta = RUBRIC_SECTIONS.find((s) => s.id === currentSection) || RUBRIC_SECTIONS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f2] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Sticky Main Navigation */}
      <Navbar
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        onOpenOrderModal={handleOpenOrder}
        onOpenPdfModal={() => handleOpenPdfModal(1)}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {/* Clickable Rubric Section Switcher Ribbon */}
      <SectionNavRibbon
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'separate' ? (
          /* =========================================================================
             SEPARATE PAGES MODE (Default for Academic Evaluation & Course Submission)
             Each rubric section is presented as a dedicated, clickable page view
             ========================================================================= */
          <div className="animate-in fade-in duration-200">
            {/* Section Header with Rubric Discussion */}
            <SectionHeaderBanner
              meta={activeMeta}
              totalSections={RUBRIC_SECTIONS.length}
            />

            {/* Dedicated Active Section View */}
            {currentSection === 'home' && (
              <Hero
                onOpenOrderModal={handleOpenOrder}
                onOpenPdfModal={() => handleOpenPdfModal(1)}
                onOpenImageModal={handleOpenImageModal}
                onNavigateSection={handleSelectSection}
              />
            )}

            {currentSection === 'products' && (
              <ProductSection
                onOpenOrderModal={handleOpenOrder}
                onOpenImageModal={handleOpenImageModal}
                onNavigateSection={handleSelectSection}
              />
            )}

            {currentSection === 'ingredients' && (
              <IngredientsSection
                onOpenOrderModal={handleOpenOrder}
              />
            )}

            {currentSection === 'permits' && (
              <PermitsSection
                onOpenPdfModal={handleOpenPdfModal}
                onOpenImageModal={handleOpenImageModal}
              />
            )}

            {currentSection === 'about' && (
              <TeamSection
                onOpenPdfModal={() => handleOpenPdfModal(9)}
                onOpenImageModal={handleOpenImageModal}
              />
            )}

            {currentSection === 'features' && (
              <div className="space-y-0">
                <FinancialSection
                  onOpenImageModal={handleOpenImageModal}
                />
                <DocumentationSection
                  onOpenImageModal={handleOpenImageModal}
                />
              </div>
            )}

            {currentSection === 'contact' && (
              <OrderSection />
            )}

            {/* Bottom Pagination for stepping sequentially through rubric */}
            <SectionPagination
              currentSection={currentSection}
              onSelectSection={handleSelectSection}
              onOpenPdfModal={() => handleOpenPdfModal(1)}
            />
          </div>
        ) : (
          /* =========================================================================
             CONTINUOUS SCROLL MODE (All-in-One view option)
             ========================================================================= */
          <div>
            <Hero
              onOpenOrderModal={handleOpenOrder}
              onOpenPdfModal={() => handleOpenPdfModal(1)}
              onOpenImageModal={handleOpenImageModal}
              onNavigateSection={handleSelectSection}
            />

            <ProductSection
              onOpenOrderModal={handleOpenOrder}
              onOpenImageModal={handleOpenImageModal}
              onNavigateSection={handleSelectSection}
            />

            <IngredientsSection
              onOpenOrderModal={handleOpenOrder}
            />

            <PermitsSection
              onOpenPdfModal={handleOpenPdfModal}
              onOpenImageModal={handleOpenImageModal}
            />

            <TeamSection
              onOpenPdfModal={() => handleOpenPdfModal(9)}
              onOpenImageModal={handleOpenImageModal}
            />

            <FinancialSection
              onOpenImageModal={handleOpenImageModal}
            />

            <DocumentationSection
              onOpenImageModal={handleOpenImageModal}
            />

            <OrderSection />
          </div>
        )}
      </main>

      {/* Academic Footer with direct clickable links */}
      <Footer
        onOpenPdfModal={() => handleOpenPdfModal(1)}
        onOpenOrderModal={handleOpenOrder}
        onSelectSection={handleSelectSection}
      />

      {/* Photo Zoom Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseImageModal}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />

      {/* 23-Page Academic Submission PDF Viewer */}
      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        initialPage={pdfInitialPage}
      />
    </div>
  );
}

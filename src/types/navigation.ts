export type RubricSectionId =
  | 'home'
  | 'products'
  | 'ingredients'
  | 'permits'
  | 'about'
  | 'features'
  | 'contact';

export interface RubricSectionMeta {
  id: RubricSectionId;
  num: number;
  hash: string;
  title: string;
  shortTitle: string;
  rubricName: string;
  academicObjective: string;
  description: string;
  badge: string;
}

export const RUBRIC_SECTIONS: RubricSectionMeta[] = [
  {
    id: 'home',
    num: 1,
    hash: '#home',
    title: 'Home & Brand Overview',
    shortTitle: '1. Home',
    rubricName: 'Home',
    academicObjective: 'Introductory brand showcase, value proposition, and university course affiliation.',
    description: 'Overview of OSQE Banana Churros Enterprise, formulated for Elective 211 at Eastern Samar State University – Main Campus, Borongan.',
    badge: 'Overview',
  },
  {
    id: 'products',
    num: 2,
    hash: '#products',
    title: 'Products & Formulation',
    shortTitle: '2. Products',
    rubricName: 'Products',
    academicObjective: 'Commercial product formulation, serving presentation, and pricing structure.',
    description: 'Crispy banana churros infused with real ripe bananas, drizzled with sweet condensed milk, and finished with Bear Brand milk powder and Milo malt.',
    badge: '3 for ₱50',
  },
  {
    id: 'ingredients',
    num: 3,
    hash: '#ingredients',
    title: 'Ingredients & Preparation Procedure',
    shortTitle: '3. Ingredients',
    rubricName: 'Ingredients',
    academicObjective: 'Itemized raw materials costing ledger and standardized 4-step kitchen brigade procedure.',
    description: 'Detailed raw material cost valuation comparing testing vs commercial batches, accompanied by step-by-step sanitation and frying protocols.',
    badge: 'Recipe & Costs',
  },
  {
    id: 'permits',
    num: 4,
    hash: '#permits',
    title: 'Business Permits & Legal Registration',
    shortTitle: '4. Permits & Legal',
    rubricName: 'Permits & Registration',
    academicObjective: 'Regulatory compliance simulation: LGU Mayor\'s Permit, DTI registration, and Republic Acts governing food enterprise.',
    description: 'Comprehensive educational compliance dossier replicating Borongan City BPLO permits, Page 18 regulatory framework, and 6 Philippine Republic Acts.',
    badge: 'Legal Dossier',
  },
  {
    id: 'about',
    num: 5,
    hash: '#about',
    title: 'About Us & Management Hierarchy',
    shortTitle: '5. About Us',
    rubricName: 'About Us',
    academicObjective: 'Enterprise governance, organizational structure chart, and operational department division.',
    description: 'Sole proprietorship governance led by Ms. Juliana Mae Halop with complete organizational hierarchy chart from Page 9 and student officer duties.',
    badge: 'Team & Org',
  },
  {
    id: 'features',
    num: 6,
    hash: '#features',
    title: 'Other Website Features',
    shortTitle: '6. Other Features',
    rubricName: 'Other website features',
    academicObjective: 'Financial feasibility statements, batch costing simulator, SWOT strategic analysis, and photo archive.',
    description: 'Interactive financial feasibility statements from Batch 1 testing, interactive profit simulator slider, SWOT matrix, and 11-photo campus documentation archive.',
    badge: 'Financials & Gallery',
  },
  {
    id: 'contact',
    num: 7,
    hash: '#contact',
    title: 'Contact Us & Campus Pre-Order',
    shortTitle: '7. Contact Us',
    rubricName: 'Contact Us',
    academicObjective: 'Customer touchpoints, campus distribution logistics, and pre-order management.',
    description: 'Interactive pre-order system with instant order confirmation receipt, pickup stations at ESSU Main Campus, and direct communication lines.',
    badge: 'Pre-Order System',
  },
];

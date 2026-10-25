import { getAssetUrl } from '../utils/assetHelper';

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  department: string;
  location?: string;
  contact?: string;
  email?: string;
  education?: string;
  skills?: string[];
  responsibilities: string;
  avatarInitials: string;
}

export interface ExpenseItem {
  name: string;
  category: 'Ingredient' | 'Equipment' | 'Packaging' | 'Marketing';
  testingCost: number;
  commercialCost: number;
  unit: string;
  description: string;
}

export interface ProductionStep {
  step: number;
  title: string;
  action: string;
  description: string;
  iconName: string;
}

export interface LegalDossierItem {
  code: string;
  title: string;
  badge: string;
  desc: string;
}

export interface DocumentationPhoto {
  id: string;
  title: string;
  category: 'product' | 'preparation' | 'cooking' | 'campus' | 'report';
  imageUrl: string;
  description: string;
  caption: string;
  phase: string;
}

export const BUSINESS_INFO = {
  name: 'OSQE Banana Churros',
  brandName: 'OSQE banana chorus Company Inc.',
  slogan: 'A Sweet Taste in Every Bite!',
  motto: 'Together in Harmony, United in Purpose',
  tagline: 'Crispy & Sweet! Drizzled to Perfection!',
  course: 'The Entrepreneurial Mind (Elective 211)',
  institution: 'Eastern Samar State University (ESSU) – Main Campus',
  campusAddress: 'Brgy. Maypangdan, Borongan City, Eastern Samar, Philippines',
  instructor: 'Ms. Alexis Oliver Caraga, LPT',
  ownership: 'Sole Proprietorship owned & managed by Ms. Juliana Mae Halop',
  pricePerPack: 50,
  piecesPerPack: 3,
  pricePerPiece: 16.67,
  packaging: 'Food-grade lunch pack with bamboo skewers',
  contactPhone: '09979165844 / 09991966085',
  contactEmail: 'justinlloydcainday@gmail.com',
  orderHours: '7:30 AM – 5:30 PM (School Days)',
  pickupLocation: 'ESSU Main Campus Grounds & Technology Building',
  permitNumber: '2026–BPLO–0094821',
  permitDate: 'January 15, 2026',
};

export const COMBINED_EXPENSES: ExpenseItem[] = [
  {
    name: 'Fresh Ripe Bananas',
    category: 'Ingredient',
    testingCost: 120,
    commercialCost: 240,
    unit: 'Fresh local harvest',
    description: 'Sweet, perfectly ripened bananas blended into the signature pastry dough.',
  },
  {
    name: 'All-Purpose Flour (Harena)',
    category: 'Ingredient',
    testingCost: 40,
    commercialCost: 80,
    unit: 'Packaged premium flour',
    description: 'Forms the smooth, pliable base dough for crunchy churro sticks.',
  },
  {
    name: 'Margarine',
    category: 'Ingredient',
    testingCost: 55,
    commercialCost: 110,
    unit: 'Dairy spread',
    description: 'Imparts rich, buttery flavor and melt-in-the-mouth crumb texture.',
  },
  {
    name: 'Refined Sugar',
    category: 'Ingredient',
    testingCost: 25,
    commercialCost: 50,
    unit: 'Granulated sugar',
    description: 'Enhances the natural banana sweetness and promotes caramelization.',
  },
  {
    name: 'Cooking Oil',
    category: 'Ingredient',
    testingCost: 70,
    commercialCost: 140,
    unit: 'Pure vegetable oil',
    description: 'Provides clean high-smoke point frying for an even golden crunch.',
  },
  {
    name: 'Fresh Eggs',
    category: 'Ingredient',
    testingCost: 36,
    commercialCost: 20,
    unit: '3 pcs (testing)',
    description: 'Binds the banana dough and provides structure during extrusion and frying.',
  },
  {
    name: 'Bear Brand Powdered Milk',
    category: 'Ingredient',
    testingCost: 30,
    commercialCost: 24,
    unit: 'Powder pack',
    description: 'Creamy milk dusting on hot churros for comforting nostalgic flavor.',
  },
  {
    name: 'Milo Chocolate Malt Powder',
    category: 'Ingredient',
    testingCost: 30,
    commercialCost: 16,
    unit: 'Malt chocolate pack',
    description: 'Irresistible chocolate malt dusting sprinkled generously over sweet drizzle.',
  },
  {
    name: 'Condensed Milk Glaze',
    category: 'Ingredient',
    testingCost: 75,
    commercialCost: 75,
    unit: 'Sweet condensed milk',
    description: 'Signature creamy drizzle that coats every spiral crevice to perfection.',
  },
  {
    name: 'Food-Grade Lunch Packs & Skewers',
    category: 'Packaging',
    testingCost: 0,
    commercialCost: 0,
    unit: 'Supplied batch',
    description: 'Convenient takeaway lunch packs with sturdy skewers for student merienda.',
  },
  {
    name: 'Marketing & Label Pack',
    category: 'Marketing',
    testingCost: 50,
    commercialCost: 50,
    unit: 'Printed branding',
    description: 'Official OSQE Banana Chorus flyers, price tags, and table signage.',
  },
];

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    step: 1,
    title: 'Select & Puree Fresh Bananas',
    action: 'Peel, Slice & Blend',
    description:
      'Carefully select ripe local bananas for maximum natural sweetness and aroma. Slice into uniform medallions and blend into a silky fruit puree.',
    iconName: 'Apple',
  },
  {
    step: 2,
    title: 'Mix Soft Pastry Dough',
    action: 'Fold, Cream & Knead',
    description:
      'Combine the banana puree with sifted flour, margarine, sugar, egg, and a touch of milk. Knead until a smooth, pliable dough forms.',
    iconName: 'CookingPot',
  },
  {
    step: 3,
    title: 'Spiral Shape & Skewer',
    action: 'Extrude & Mount',
    description:
      'Portion and flute dough into signature spiral sticks, mounting them snugly onto sturdy skewers so they hold shape and cook evenly.',
    iconName: 'Sparkles',
  },
  {
    step: 4,
    title: 'Golden Deep Frying',
    action: 'Crisp at Controlled Heat',
    description:
      'Immerse skewers in clean, pre-heated oil. Fry until the crust blossoms into a rich golden amber that crackles gently while the inside stays tender.',
    iconName: 'Flame',
  },
  {
    step: 5,
    title: 'Drizzle & Dust to Perfection',
    action: 'Sweet Glaze & Pack',
    description:
      'Drain on clean racks, box 3 hot churros per pack, generously zigzag sweet condensed milk, and dust with Bear Brand milk powder and Milo.',
    iconName: 'CheckCircle2',
  },
];

export const LEGAL_DOSSIER_ITEMS: LegalDossierItem[] = [
  {
    code: 'DTI Registration',
    title: 'Business Name Registration',
    badge: 'Act 3883',
    desc: 'Registration as "OSQE Banana Churros Enterprise" under Sole Proprietorship for formal trade name protection.',
  },
  {
    code: "Mayor's Permit",
    title: 'City Business Permit & Licensing (BPLO)',
    badge: 'LGU Borongan',
    desc: 'Permit No. 2026–BPLO–0094821 issued for food retail and snack production kiosk operations with all municipal fees recorded.',
  },
  {
    code: 'Food Safety Act',
    title: 'Food Safety Compliance & Storage',
    badge: 'RA 10611',
    desc: 'Strict cold storage of condensed milk, hot oil held between 175°C-190°C, and daily fresh banana quality audits.',
  },
  {
    code: 'Sanitation Code',
    title: 'Sanitary Clearance & Food Handlers',
    badge: 'PD 856',
    desc: 'Mandatory personnel food handler health cards, sterile gloves, hairnets, and annual sanitary clearance.',
  },
  {
    code: 'Allergen Mandate',
    title: 'Mandatory Allergen Disclosure',
    badge: 'RA 7394',
    desc: 'Clear consumer notification: Contains Dairy (Condensed Milk, Milk Powder) and Gluten (Wheat Flour). Expiry & manufacturing labeling.',
  },
  {
    code: 'Environmental & Fire',
    title: 'Fire Safety & Waste Management',
    badge: 'RA 9514 & RA 9003',
    desc: 'Certified Class K fire extinguisher for deep frying; used cooking oil captured and processed without public drainage discharge.',
  },
];

export const GALLERY_PHOTOS: DocumentationPhoto[] = [
  {
    id: 'poster-flyer',
    title: 'Official Promotional Flyer & Menu',
    category: 'report',
    imageUrl: getAssetUrl('/assets/aistudio/839064142_1780225249563203_4101194208461935408_n_6605cc29.png'),
    description: 'Official branding poster: Banana Churros with Condensed Milk Drizzle — 3 for ₱50 Only!',
    caption: 'OSQE Banana Chorus promotional flyer and brand launch at ESSU.',
    phase: 'Brand & Marketing Rollout',
  },
  {
    id: 'signature-plated',
    title: 'Signature Plated Banana Churros',
    category: 'product',
    imageUrl: getAssetUrl('/assets/aistudio/d24bcb86-b988-41f6-94b3-8373bc88adc7_cbe6a9af.jpg'),
    description: 'Crisp golden spiral skewers drizzled with rich condensed milk and sprinkled with sweet malt dust.',
    caption: 'Sensory evaluation and final product presentation on vintage plate.',
    phase: 'Product Formulation',
  },
  {
    id: 'boxed-order',
    title: 'Fresh Packaged Order in Lunch Pack',
    category: 'product',
    imageUrl: getAssetUrl('/assets/aistudio/f7e6b8da-856e-45c8-8511-643e22263e58_e22c8a9b.jpg'),
    description: 'Hot Banana Churros packed cleanly in styrofoam takeaway box ready for campus delivery.',
    caption: 'Ready-to-serve customer lunch pack with glistening sweet drizzle.',
    phase: 'Packaging & Delivery',
  },
  {
    id: 'spiral-stack',
    title: 'Freshly Fried Golden Spiral Stack',
    category: 'product',
    imageUrl: getAssetUrl('/assets/aistudio/a90d84c5-7e82-4b50-8980-95caa98499d7_4e86f77c.jpg'),
    description: 'Tower of hot golden banana churros on skewers coated with creamy glaze.',
    caption: 'Batch freshly pulled from the fryer displaying crisp ridged texture.',
    phase: 'Kitchen Quality Audit',
  },
  {
    id: 'expense-report',
    title: 'Expense & Sales Report Board',
    category: 'report',
    imageUrl: getAssetUrl('/assets/aistudio/Copilot_20260930_122818_1__e8774482.png'),
    description: 'Combined Expenses breakdown (₱406) and Final Sales Documentation (12 packs @ ₱50 = ₱600, Net Profit ₱194).',
    caption: 'Documented financial statement submitted for Elective 211 assessment.',
    phase: 'Financial Reporting',
  },
  {
    id: 'testing-board',
    title: 'Product Testing & Objectives Dossier',
    category: 'report',
    imageUrl: getAssetUrl('/assets/aistudio/835978436_1024227617292329_6700806136316719486_n_2bd11091.jpg'),
    description: 'Product description, testing objectives, methodology, and sensory criteria.',
    caption: 'Formal product testing protocol and ingredient valuation documentation.',
    phase: 'Academic Dossier',
  },
  {
    id: 'banana-prep',
    title: 'Banana Slicing & Blending Station',
    category: 'preparation',
    imageUrl: getAssetUrl('/assets/aistudio/ab83b6b7-6716-4d52-a9ad-531b0bf1f2e5_69027462.jpg'),
    description: 'Students peeling and portioning fresh ripe bananas for pureeing in the electric blender.',
    caption: 'First kitchen meeting and raw material processing stage.',
    phase: 'Preparation Phase',
  },
  {
    id: 'dough-skewering',
    title: 'Dough Skewering & Table Assembly',
    category: 'preparation',
    imageUrl: getAssetUrl('/assets/aistudio/0d554933-409e-4bad-907a-8f4077722805_cde5460a.jpg'),
    description: 'Team members assembling raw churro sticks on skewers with powdered coating bowls ready.',
    caption: 'Cooperative assembly line method for rapid batch prep.',
    phase: 'Assembly Phase',
  },
  {
    id: 'cooking-team',
    title: 'Kitchen Frying & Cooking Session',
    category: 'cooking',
    imageUrl: getAssetUrl('/assets/aistudio/869dbfc9-1458-4ea2-8413-ca3a72066471_221ec976.jpg'),
    description: 'The cooking crew monitoring frying pans on the butane stove with smiles and thumbs up.',
    caption: 'Safe food handling and batch cooking under Chef de Cuisine supervision.',
    phase: 'Cooking Phase',
  },
  {
    id: 'campus-delivery',
    title: 'Campus Delivery & Distribution',
    category: 'campus',
    imageUrl: getAssetUrl('/assets/aistudio/7ac45b96-bae9-4448-bcb2-843ca5585fa1_c06d2709.jpg'),
    description: 'Selling freshly cooked Banana Churros packs from the transport box to ESSU students on campus.',
    caption: 'Direct-to-consumer student delivery on ESSU Main Campus grounds.',
    phase: 'Campus Rollout',
  },
  {
    id: 'satisfied-students',
    title: 'Campus Students Enjoying Merienda',
    category: 'campus',
    imageUrl: getAssetUrl('/assets/aistudio/7dcf9963-1ea1-43d0-9958-9be363dabfa9_248a1e8b.jpg'),
    description: 'ESSU college students holding their warm Banana Churros boxes outside the campus pavilion.',
    caption: 'Happy customer feedback confirming high student satisfaction.',
    phase: 'Customer Validation',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Oscar Dulfo III H.',
    role: 'Chief Executive Officer',
    title: 'CEO & Strategic Director',
    department: 'Executive Governance',
    location: 'Brgy. Taboc, Borongan, Eastern Samar',
    contact: '09991966085',
    email: 'dulfooscarhobayanii@gmail.com',
    education: 'Eastern Samar State University (ESSU)',
    skills: ['Strategic Leadership', 'Fast Decision Making', 'Problem Solving', 'Creativity'],
    responsibilities:
      'Provides overarching strategic leadership, drives major business decisions, and guarantees that the enterprise fulfills academic, financial, and operational goals.',
    avatarInitials: 'OD',
  },
  {
    name: 'Justin Lloyd D. Cainday',
    role: 'General Manager',
    title: 'General Manager & Operations Lead',
    department: 'Operations & Management',
    location: 'Brgy. Songco, Borongan, Eastern Samar',
    contact: '09979165844',
    email: 'justinlloydcainday@gmail.com',
    education: 'Eastern Samar State University (ESSU)',
    skills: ['Operations Management', 'Quality Assurance', 'Team Supervision', 'Customer Relations'],
    responsibilities:
      'Directs daily operations, coordinates team workflows, oversees food quality compliance, manages distribution schedules, and drives customer satisfaction.',
    avatarInitials: 'JC',
  },
  {
    name: 'Boyd Benidec C. Operario',
    role: 'Chef de Cuisine',
    title: 'Head Chef & Culinary Director',
    department: 'Kitchen & Production',
    education: 'BS Computer Science, Eastern Samar State University',
    email: 'boydoperario00@gmail.com',
    skills: ['Recipe Standardization', 'Kitchen Supervision', 'Food Safety & Hygiene', 'Portion Control'],
    responsibilities:
      'Supervises the kitchen brigade, oversees dough formulation and frying consistency, and ensures every order is cooked to golden perfection and delivered on time.',
    avatarInitials: 'BO',
  },
  {
    name: 'Jasmine C. Bocton',
    role: 'Head of Finance',
    title: 'Chief Financial Officer',
    department: 'Finance & Accounting',
    location: 'Brgy. Nato, Taft, Eastern Samar',
    contact: '09552990167',
    email: 'boctonjasmine31@gmail.com',
    education: 'BS Computer Science, Eastern Samar State University',
    skills: ['Budget Management', 'Cash Flow Tracking', 'Expense Control', 'Financial Auditing'],
    responsibilities:
      'Stewards the enterprise capital, reconciles daily expenses and revenue receipts, ensures prudent fund allocation, and guarantees financial transparency.',
    avatarInitials: 'JB',
  },
  {
    name: 'Ronniela C. Montana',
    role: 'Financial Manager',
    title: 'Financial Manager & Reporting Lead',
    department: 'Finance & Accounting',
    skills: ['Financial Statement Prep', 'Profit & Loss Analysis', 'Bookkeeping', 'Cost Estimation'],
    responsibilities:
      'Monitors income flows, compiles formal financial reports, assists in pricing evaluations, and maintains organized financial ledgers.',
    avatarInitials: 'RM',
  },
  {
    name: 'Kieth Hierras',
    role: 'Prep Cook',
    title: 'Ingredient Preparation Specialist',
    department: 'Kitchen & Production',
    skills: ['Ingredient Prepping', 'Portion Weighing', 'Sanitation Discipline', 'Equipment Setup'],
    responsibilities:
      'Prepares fresh bananas, measures accurate ingredient proportions, assists in blending and skewering, and upholds impeccable workstation hygiene.',
    avatarInitials: 'KH',
  },
  {
    name: 'James Eman G. Ero (Ero Eman)',
    role: 'Line Cook',
    title: 'Line Cook & Frying Specialist',
    department: 'Kitchen & Production',
    location: 'Maypangdan, Borongan, Eastern Samar',
    contact: '09454395615',
    email: 'eemanjamesero5@gmail.com',
    skills: ['Deep Frying Control', 'Temperature Monitoring', 'Fast Order Pacing', 'Food Presentation'],
    responsibilities:
      'Operates the frying stations, monitors oil heat precision, ensures ideal crisp exterior and tender core, and boxes churros promptly.',
    avatarInitials: 'JE',
  },
  {
    name: 'Anthony T. Moratal (Mark Anthony)',
    role: "Chef's Assistant",
    title: 'Culinary Support & Logistics',
    department: 'Kitchen & Production',
    education: 'Business Administration, ESSU Main',
    email: 'anthonymoratal6@gmail.com',
    skills: ['Prep Assistance', 'Utensil Sanitation', 'Tool Organization', 'Packaging Logistics'],
    responsibilities:
      'Assists the Chef de Cuisine in mixing ingredients, cooking dishes, organizing cooking tools, and maintaining rigorous cleanliness standards.',
    avatarInitials: 'AM',
  },
  {
    name: 'Mark Leander M. Boco',
    role: 'Assistant of Head Finance',
    title: 'Junior Financial Auditor',
    department: 'Finance & Accounting',
    location: 'Jipapad, Eastern Samar',
    contact: '09307397338',
    email: 'markleander25@gmail.com',
    education: 'BS Computer Science, Eastern Samar State University',
    skills: ['Transaction Recording', 'Receipts Filing', 'Cost Tracking', 'Variance Analysis'],
    responsibilities:
      'Assists in tracking itemized ingredient costs, recording sales collections, and archiving receipts for academic audit submission.',
    avatarInitials: 'MB',
  },
  {
    name: 'Renz C. Plaquia',
    role: 'Assistant of Financial Manager',
    title: 'Treasury & Records Associate',
    department: 'Finance & Accounting',
    location: 'Del Pilar, Dolores, Eastern Samar',
    contact: '09067075690',
    email: 'renzplaquia7@gmail.com',
    education: 'BSCS Second Year, Eastern Samar State University',
    skills: ['Spreadsheet Accounting', 'Cash Reconciliation', 'Record Keeping', 'Time Management'],
    responsibilities:
      'Assists in reconciling cash sales with physical pack counts, monitoring inventory usage, and preparing backup ledger documentation.',
    avatarInitials: 'RP',
  },
];

export const SWOT_DATA = {
  strengths: [
    {
      title: 'Pocket-Friendly ₱50 Price Point',
      desc: 'Only ₱50 for 3 delicious churros sticks—perfectly suited for student merienda budgets.',
    },
    {
      title: 'Unique Banana Pastry Fusion',
      desc: 'Combines the natural sweetness of ripe bananas with the classic crispy texture of Spanish churros.',
    },
    {
      title: 'Locally Sourced Farm Bananas',
      desc: 'Abundant supply of farm-fresh bananas in Eastern Samar keeps supply costs low and consistent.',
    },
    {
      title: 'Decadent Multi-Topping Finish',
      desc: 'Generously drizzled with rich sweet condensed milk and dusted with Bear Brand powder and Milo chocolate.',
    },
  ],
  weaknesses: [
    {
      title: 'Short Shelf Life & Best Served Fresh',
      desc: 'Banana churros achieve peak crispiness when warm; requires rapid on-campus delivery pacing.',
    },
    {
      title: 'Initial Batch Capacity Constraints',
      desc: 'Portable cooking setup during student free hours limits maximum output to 20-30 packs per run.',
    },
    {
      title: 'Dependence on Fresh Banana Ripeness',
      desc: 'Requires careful timing so bananas are naturally sweet and fork-tender without over-ripening.',
    },
  ],
  opportunities: [
    {
      title: 'Strong Campus Recess Demand',
      desc: 'Hundreds of students and instructors at ESSU look for warm, sweet merienda between class breaks.',
    },
    {
      title: 'Pre-Order System via Social Media',
      desc: 'Accepting pre-orders online ensures 100% sell-out before frying starts, with zero food waste.',
    },
    {
      title: 'School Events & Sports Intramurals',
      desc: 'Opportunity to set up mobile pop-up stands during ESSU university week, sports events, and festivals.',
    },
    {
      title: 'Flavor & Dip Line Extensions',
      desc: 'Tested potential for Ube Condense, Cinnamon Sugar, and Dark Chocolate dipping cups in future batches.',
    },
  ],
  threats: [
    {
      title: 'Traditional Street Snack Competitors',
      desc: 'Established vendors selling banana-cue, turon, and fried donuts around the campus periphery.',
    },
    {
      title: 'Ingredient Price Fluctuations',
      desc: 'Shifting market prices of cooking oil, sugar, and margarine can affect unit profit margins.',
    },
    {
      title: 'Inclement Weather & Class Suspensions',
      desc: 'Typhoons or sudden rain showers in Samar can temporarily reduce campus foot traffic.',
    },
  ],
};

export const ACTUAL_BATCH_FINANCIALS = {
  batch1: {
    title: 'Batch 1: Product Formulation & Campus Testing',
    packsProduced: 12,
    piecesProduced: 36,
    pricePerPack: 50,
    totalSales: 600,
    totalExpenses: 406,
    netProfit: 194,
    profitMarginPercent: 32.33,
    status: '100% Sold Out',
    date: 'Commercial Validation Run',
  },
  batch2Projection: {
    title: 'Batch 2: Full Commercial Rollout',
    packsProduced: 24,
    piecesProduced: 72,
    pricePerPack: 50,
    totalSales: 1200,
    totalExpenses: 680,
    netProfit: 520,
    profitMarginPercent: 43.33,
    status: 'Projected Commercial Phase',
    date: 'Scaled Campus Batch',
  },
};

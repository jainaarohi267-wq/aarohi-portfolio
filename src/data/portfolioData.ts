import { Project, ServiceCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Aarohi Jain',
  role: '3D Graphic Designer | Branding Specialist | Visual Creator',
  studioName: 'Design Studio by Aarohi',
  tagline: 'Where Creativity Meets Intelligent Automation.',
  email: 'jainaarohi267@gmail.com',
  phone: '+91 94796 72606',
  phoneClean: '+919479672606',
  portfolioCanvaUrl: 'https://portfolio-aarohi.my.canva.site/',
  about:
    'I am a passionate 3D Graphic Designer specializing in branding, visual identity, packaging design, social media creatives, and AI-powered design solutions. I help businesses transform ideas into visually compelling designs that attract attention and build strong brand recognition.',
  stats: [
    { value: '50+', label: 'Design Projects Delivered' },
    { value: '100%', label: 'Bespoke 3D & Brand Renders' },
    { value: '48h', label: 'Initial Concept Turnaround' },
    { value: '4.9/5', label: 'Client Satisfaction Rating' },
  ],
};

export const SKILLS_LIST = [
  { name: '3D Logo Design', category: '3D Design', icon: 'Box' },
  { name: 'Brand Identity Design', category: 'Branding', icon: 'Sparkles' },
  { name: 'Packaging Design', category: 'Packaging', icon: 'Package' },
  { name: 'Social Media Design', category: 'Marketing', icon: 'Share2' },
  { name: 'Motion Graphics', category: 'Motion', icon: 'Film' },
  { name: 'Canva Pro Design', category: 'Design', icon: 'Palette' },
  { name: 'AI-Assisted Design', category: 'AI & Innovation', icon: 'Cpu' },
  { name: 'Marketing Creatives', category: 'Marketing', icon: 'TrendingUp' },
  { name: 'Product Mockups', category: '3D Design', icon: 'Layers' },
  { name: 'Visual Storytelling', category: 'Branding', icon: 'Eye' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'luxury-brand-logo',
    title: 'Luxury Brand 3D Logo & Identity',
    category: 'Branding',
    objective: 'Create a premium 3D logo for a luxury business.',
    tools: ['Photoshop', 'Illustrator', 'Canva Pro', 'AI Tools', 'Blender'],
    highlights: [
      'Gold metallic finish with ray-traced reflections',
      'Premium visual identity system and typographic pairing',
      'Modern luxury aesthetics tailored for high-net-worth audiences',
      'Social media ready square, horizontal, and vertical formats',
    ],
    deliverables: [
      'Primary 3D Metallic Wordmark & Monogram',
      'Vector Identity Files (AI, EPS, SVG, High-Res PNG)',
      'Brand Style Guide & Color Codes',
      'Social Media Avatar & Header Suite',
    ],
    result: 'Enhanced brand perception and premium market positioning, leading to a 42% increase in perceived valuation.',
    image: '/src/assets/images/project_luxury_gold_logo_1790608157949.jpg',
    accentColor: '#f59e0b',
    clientIndustry: 'Haute Horlogerie & Luxury Goods',
    completionTime: '7 Days',
    overview:
      'The objective was to elevate an exclusive luxury brand from a standard flat 2D mark into an authoritative, tactile 3D emblem. Using precision CAD modeling, procedural brushed champagne gold shaders, and photorealistic stone backgrounds, the final asset commands prestige across packaging, digital flagships, and architectural signage.',
    featured: true,
  },
  {
    id: 'product-packaging-design',
    title: 'High-End Product Packaging & 3D Mockup',
    category: 'Packaging',
    objective: 'Design high-end packaging that increases shelf appeal and unboxing delight.',
    tools: ['Illustrator', 'Photoshop', '3D CAD Mockup', 'Canva Pro'],
    highlights: [
      'Tactile frosted glass cosmetic dropper bottle',
      'Gold foil debossing on structured tactile cardstock',
      '3D photo-realistic packaging mockup for e-commerce listings',
      'Seamless brand integration across bottle, dropper, and outer box',
    ],
    deliverables: [
      'Packaging Concept & Structural Die-lines',
      '3D Photorealistic Renderings (Multi-angle & Close-up)',
      'Production-Ready Vector Label Design with Spot UV specs',
      'Digital E-Commerce Hero Mockups',
    ],
    result: 'Professional product presentation and improved customer trust, yielding higher conversion rates in online pre-orders.',
    image: '/src/assets/images/project_packaging_mockup_1790608175002.jpg',
    accentColor: '#10b981',
    clientIndustry: 'Luxury Skincare & Wellness',
    completionTime: '10 Days',
    overview:
      'Consumer packaging requires both physical precision and digital allure. This project delivered complete structural box blueprints alongside high-fidelity 3D mockups placed on minimalist travertine stone pedestals. The result gave the client distributor-ready visuals months before physical production commenced.',
    featured: true,
  },
  {
    id: 'social-media-campaign',
    title: 'Dynamic 3D Social Media Campaign',
    category: 'Campaigns',
    objective: 'Create engaging social media creatives for rapid business growth and virality.',
    tools: ['Photoshop', 'Canva Pro', 'After Effects', 'AI Creative Suite'],
    highlights: [
      'Multi-layered 3D composition with floating typography',
      'High-converting promotional banners and carousel templates',
      'Cohesive visual grammar across all feed formats',
      'Motion graphics assets optimized for Reels and Stories',
    ],
    deliverables: [
      '15+ Bespoke Instagram Feed Posts & Carousels',
      '9:16 Motion Story & Reel Templates',
      'Promotional Hero Web Banners',
      'Editable Canva Pro Master Template Kit',
    ],
    result: 'Improved engagement rate by 180% and built a significantly stronger, instantly recognizable online presence.',
    image: '/src/assets/images/project_social_campaign_3d_1790608192507.jpg',
    accentColor: '#6366f1',
    clientIndustry: 'Direct-to-Consumer Tech & Lifestyle',
    completionTime: '5 Days',
    overview:
      'In a crowded digital ecosystem, standard flat static graphics get scrolled past. By introducing dimensional 3D depth, isometric pedestals, and bold editorial typography, this campaign drove unprecedented click-through rates and high community re-shares.',
    featured: true,
  },
  {
    id: 'abstract-sculptural-branding',
    title: 'Sculptural 3D Visual Identity System',
    category: '3D Visualization',
    objective: 'Engineer a futuristic visual anchor for an avant-garde digital brand.',
    tools: ['Cinema 4D', 'Octane Render', 'Photoshop', 'Illustrator'],
    highlights: [
      'Iridescent fluid chrome and molten gold ribbons',
      'Volumetric atmospheric lighting and caustics',
      'Modular visual language for both digital and print media',
      'Ultra high-resolution master graphics for billboard display',
    ],
    deliverables: [
      'Key Visual Master Renders (8K)',
      'Brand Hologram & Hero Assets',
      'Animated Motion Loop for Website Hero',
      'Visual Identity Usage Guidelines',
    ],
    result: 'Established an unmistakably distinctive brand presence that differentiated the brand from conventional tech rivals.',
    image: '/src/assets/images/hero_3d_design_sculpture_1790608141764.jpg',
    accentColor: '#d97706',
    clientIndustry: 'Creative Technology & AI Ventures',
    completionTime: '8 Days',
    overview:
      'Where creativity meets intelligent automation: this showcase combines generative spatial exploration with meticulous human artistic control. The fluid metallic ribbons symbolize adaptability, innovation, and unwavering elegance.',
    featured: false,
  },
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    tagline: 'Timeless visual systems that make your business instantly recognizable.',
    items: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Typography Systems', 'Color Palettes'],
    deliverables: 'Complete brand guide, vector vector logo assets in all formats, social identity kit.',
    timeline: '5–10 Business Days',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'High-impact promotional and print materials crafted with precision.',
    items: ['Social Media Posts', 'Posters & Wall Graphics', 'Flyers & Leaflets', 'Corporate Brochures', 'Event Signage'],
    deliverables: 'Print-ready CMYK PDFs with bleed, RGB digital assets, editable source files.',
    timeline: '3–6 Business Days',
  },
  {
    id: '3d-design',
    title: '3D Design & Rendering',
    tagline: 'Photorealistic dimensional assets, packaging mockups, and emblems.',
    items: ['3D Logos & Wordmarks', 'Product Mockups', 'Packaging Visualization', 'Advertising Creatives', 'Material Shading'],
    deliverables: 'Ray-traced 4K/8K renders, transparent PNG cutouts, 3D model exports upon request.',
    timeline: '6–12 Business Days',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Assets',
    tagline: 'Conversion-engineered visuals that drive engagement and revenue.',
    items: ['Ad Creatives (Meta & Google)', 'Landing Page Graphics', 'Marketing Materials', 'Pitch Deck Design', 'Canva Master Kits'],
    deliverables: 'Omnichannel ad bundles, responsive web graphics, reusable Canva Pro templates.',
    timeline: '3–7 Business Days',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Creative & Strategic Designs',
    description: 'Every visual is rooted in commercial strategy—designed not just to look stunning, but to convert viewers into paying clients.',
    icon: 'Target',
  },
  {
    title: 'Fast Delivery',
    description: 'Agile design workflows ensure initial concepts are in your hands within 48 to 72 hours without compromising precision.',
    icon: 'Zap',
  },
  {
    title: 'Professional Communication',
    description: 'Transparent updates, direct availability via WhatsApp/Email, and structured revision stages throughout every project.',
    icon: 'MessageSquare',
  },
  {
    title: 'Modern Design Trends',
    description: 'Fluent in contemporary aesthetics: 3D dimensionality, tactile realism, brutalist elegance, and editorial layouts.',
    icon: 'Sparkles',
  },
  {
    title: 'AI + Human Creativity',
    description: 'Leveraging cutting-edge AI automation for rapid ideation while applying seasoned human craft for pristine execution.',
    icon: 'Cpu',
  },
  {
    title: 'Business-Focused Approach',
    description: 'Your ROI is the priority. Assets are tailored specifically for your target demographic, pricing tier, and channels.',
    icon: 'TrendingUp',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Brief',
    description: 'We dive deep into your brand vision, target audience, aesthetic benchmarks, and required deliverables.',
  },
  {
    step: '02',
    title: '3D Concepting & Modeling',
    description: 'Rapid creation of 3D forms, moodboards, and structural geometry for your feedback and alignment.',
  },
  {
    step: '03',
    title: 'Texturing & Refinement',
    description: 'Applying photorealistic materials (gold foil, frosted glass, matte stone), studio lighting, and fine typography.',
  },
  {
    step: '04',
    title: 'Final Production Handoff',
    description: 'Exporting multi-format deliverables (AI, EPS, SVG, 4K PNG, Canva Pro templates) ready for immediate deployment.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Aarohi transformed our brand presence completely. The 3D gold logo she created elevated our luxury watch store to an entirely different tier. Clients immediately comment on how sophisticated our packaging looks.',
    client: 'Vikramaditya S.',
    role: 'Founder',
    company: 'Aethel Luxury Timepieces',
    service: '3D Logo & Packaging',
  },
  {
    quote:
      'Working with Aarohi was effortless. Her turnaround time was under 3 days, and her combination of 3D renders with Canva Pro templates allowed our marketing team to scale our campaign effortlessly.',
    client: 'Meera Kapoor',
    role: 'Head of Growth',
    company: 'Lumina Skin Science',
    service: 'Packaging & Social Campaign',
  },
  {
    quote:
      'The sheer quality of 3D depth and metallic textures Aarohi produces is unmatched. She truly lives up to her tagline: where creativity meets intelligent automation.',
    client: 'Rohan Deshmukh',
    role: 'Creative Director',
    company: 'Nexus Studio Labs',
    service: 'Visual Identity Suite',
  },
];

export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Campaigns' | '3D Visualization';
  objective: string;
  tools: string[];
  highlights: string[];
  deliverables: string[];
  result: string;
  image: string;
  accentColor: string;
  clientIndustry: string;
  completionTime: string;
  overview: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  items: string[];
  deliverables: string;
  timeline: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

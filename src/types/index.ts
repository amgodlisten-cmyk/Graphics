export interface Project {
  id: string;
  title: string;
  category: 'branding' | 'logos' | 'posters' | 'social' | 'packaging';
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  image: string;
  aspectRatio?: string;
  description: string;
  deliverables: string[];
  metrics?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface Pricing {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  timeline: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

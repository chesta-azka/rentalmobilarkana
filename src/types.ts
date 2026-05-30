export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  type: 'MPV' | 'SUV' | 'Luxury' | 'City Car';
  image: string;
  priceSelfDrive: number; // IDR per day
  priceWithDriver: number; // IDR per day
  transmission: 'Manual' | 'Automatic' | 'CVT' | 'A/T';
  capacity: number; // passengers
  fuel: 'Bensin' | 'Diesel' | 'Hybrid' | 'Electric';
  year: string;
  isPopular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'Umum' | 'Persyaratan' | 'Pembayaran' | 'Lainnya';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
}

export interface ClientBrand {
  name: string;
  logoUrl?: string;
  fallbackText: string;
}

export type Language = 'de' | 'en';

export type View = 'home' | 'portfolio' | 'services' | 'contact';

export type PortfolioCategory = 'all' | 'knotless' | 'cornrows' | 'boxbraids' | 'artistic';

export interface PortfolioItem {
  id: string;
  titleDe: string;
  titleEn: string;
  category: PortfolioCategory;
  categoryLabelDe: string;
  categoryLabelEn: string;
  image: string;
  descriptionDe: string;
  descriptionEn: string;
  duration: string;
}

export interface ServiceItem {
  id: string;
  titleDe: string;
  titleEn: string;
  priceStart: number;
  priceLabelDe: string;
  priceLabelEn: string;
  durationDe: string;
  durationEn: string;
  descriptionDe: string;
  descriptionEn: string;
  image?: string;
  featuresDe: string[];
  featuresEn: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  roleDe: string;
  roleEn: string;
  quoteDe: string;
  quoteEn: string;
  rating: number;
  date: string;
}

export interface BookingState {
  selectedService: ServiceItem | null;
  selectedDate: string;
  selectedTime: string;
  hairLength: 'shoulder' | 'mid-back' | 'waist' | 'buttocks';
  lengthAddonPrice: number;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
}

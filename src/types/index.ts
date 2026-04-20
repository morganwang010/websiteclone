export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  href: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  views: number;
  href: string;
}

export interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  number: string;
  unit: string;
  label: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  email: string;
  wechatQR: string;
  douyinQR: string;
}

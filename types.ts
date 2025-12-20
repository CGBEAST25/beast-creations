import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface ServiceTier {
  title: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
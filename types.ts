
export enum Page {
  HOME = 'home',
  TERMS = 'terms',
  PRIVACY = 'privacy',
  CONTACT = 'contact'
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

export interface NavItem {
  label: string;
  page: Page;
}

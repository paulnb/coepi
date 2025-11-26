export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  industry: IndustryType;
  message?: string;
  source?: string;
}

export enum IndustryType {
  RETAIL = 'Retail',
  RESTAURANT = 'Restaurant',
  HVAC_PLUMBING = 'HVAC / Plumbing',
  REAL_ESTATE = 'Real Estate',
  ACCOUNTING = 'Accounting',
  OTHER = 'Other'
}

export interface WebhookResponse {
  success: boolean;
  message: string;
}
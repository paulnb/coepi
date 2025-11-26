import { LeadFormData, WebhookResponse } from '../types';

const WEBHOOK_URL = 'https://autopax.app.n8n.cloud/webhook/form-submission';

export const submitLeadForm = async (data: LeadFormData): Promise<WebhookResponse> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        // Use the source provided in data, or default to generic
        source: data.source || 'website_form_submission'
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Form submitted successfully' };
    } else {
      // Even if n8n returns a weird status, we often want to treat it carefully.
      // For now, assume non-200 is an error.
      return { success: false, message: 'Failed to submit form. Please try again.' };
    }
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, message: 'Network error occurred.' };
  }
};
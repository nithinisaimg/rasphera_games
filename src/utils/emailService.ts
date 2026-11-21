export const TARGET_EMAIL = 'raspheragames@gmail.com';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  experienceType: string;
  message?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  experienceType: string;
  groupSize: string;
  preferredDate?: string;
  notes?: string;
}

export const createGmailComposeUrl = (subject: string, body: string) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const createMailtoUrl = (subject: string, body: string) => {
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function sendContactInquiry(data: ContactFormData): Promise<{ success: boolean; fallbackUrl: string }> {
  const subject = `New Inquiry: ${data.name} (${data.company || 'Individual'}) - ${data.experienceType}`;
  const body = `Full Name: ${data.name}\nWork Email: ${data.email}\nCompany: ${data.company || 'N/A'}\nDesired Experience: ${data.experienceType}\nAdditional Message: ${data.message || 'N/A'}\n\nSubmitted from RASPHERA Games Website`;

  const fallbackUrl = createGmailComposeUrl(subject, body);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Full Name': data.name,
        'Work Email': data.email,
        'Company': data.company || 'Not specified',
        'Desired Experience': data.experienceType,
        'Additional Message': data.message || 'None',
        '_subject': subject,
        '_replyto': data.email,
        '_template': 'table',
        '_captcha': 'false'
      })
    });

    const result = await response.json();
    return {
      success: response.ok && result.success !== 'false',
      fallbackUrl
    };
  } catch (err) {
    console.warn('Network send failed, offering direct Gmail fallback', err);
    return {
      success: false,
      fallbackUrl
    };
  }
}

export async function sendBookingRequest(data: BookingFormData): Promise<{ success: boolean; fallbackUrl: string }> {
  const subject = `Booking Request: ${data.experienceType} - ${data.name} (${data.company || 'Individual'})`;
  const body = `Full Name: ${data.name}\nWork Email: ${data.email}\nPhone/WhatsApp: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nExperience Format: ${data.experienceType}\nEstimated Group Size: ${data.groupSize}\nTarget Date: ${data.preferredDate || 'Flexible'}\nSpecial Notes: ${data.notes || 'None'}\n\nSubmitted from RASPHERA Games Website`;

  const fallbackUrl = createGmailComposeUrl(subject, body);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Full Name': data.name,
        'Work Email': data.email,
        'Phone / WhatsApp': data.phone || 'Not specified',
        'Company': data.company || 'Not specified',
        'Experience Format': data.experienceType,
        'Estimated Group Size': data.groupSize,
        'Target Date': data.preferredDate || 'Flexible / To be discussed',
        'Special Notes': data.notes || 'None',
        '_subject': subject,
        '_replyto': data.email,
        '_template': 'table',
        '_captcha': 'false'
      })
    });

    const result = await response.json();
    return {
      success: response.ok && result.success !== 'false',
      fallbackUrl
    };
  } catch (err) {
    console.warn('Network send failed, offering direct Gmail fallback', err);
    return {
      success: false,
      fallbackUrl
    };
  }
}

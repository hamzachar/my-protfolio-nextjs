'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    const validated = contactSchema.parse(data);

    // TODO: Implement email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'hamzacharafi@gmail.com',
    //   subject: validated.subject,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>From:</strong> ${validated.name} (${validated.email})</p>
    //     <p><strong>Subject:</strong> ${validated.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validated.message}</p>
    //   `,
    // });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Contact form submitted:', validated);

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation failed',
        errors: error.issues,
      };
    }

    console.error('Contact form error:', error);

    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
  }
}

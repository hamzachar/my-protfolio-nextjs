'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

// Server Action compatible with useActionState
export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extract and validate data from FormData
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const validated = contactSchema.parse(data);

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'h.charafi@gmail.com',
      replyTo: validated.email, // Allow direct reply to sender
      subject: `Portfolio Contact: ${validated.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
                📧 New Contact Message
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">
                From your portfolio website
              </p>
            </div>
            
            <!-- Content -->
            <div style="background: #f9fafb; padding: 40px 20px;">
              
              <!-- Contact Details Card -->
              <div style="background: white; padding: 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #667eea; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  Contact Information
                </h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                      <strong style="color: #6b7280; font-size: 14px;">👤 Name</strong>
                    </td>
                    <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                      <span style="color: #111827; font-size: 15px; font-weight: 500;">
                        ${validated.name}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                      <strong style="color: #6b7280; font-size: 14px;">✉️ Email</strong>
                    </td>
                    <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                      <a href="mailto:${validated.email}" style="color: #667eea; text-decoration: none; font-size: 15px; font-weight: 500;">
                        ${validated.email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px 0;">
                      <strong style="color: #6b7280; font-size: 14px;">📝 Subject</strong>
                    </td>
                    <td style="padding: 15px 0; text-align: right;">
                      <span style="color: #111827; font-size: 15px; font-weight: 500;">
                        ${validated.subject}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message Card -->
              <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #667eea; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  💬 Message
                </h2>
                <div style="color: #374151; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${validated.message}
                </div>
              </div>

              <!-- Quick Reply Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${validated.email}?subject=Re: ${encodeURIComponent(validated.subject)}" 
                   style="display: inline-block; background: #667eea; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                  Reply to ${validated.name}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: #111827; padding: 30px 20px; text-align: center;">
              <p style="color: #9ca3af; margin: 0; font-size: 13px;">
                This email was sent from your portfolio contact form
              </p>
              <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">
                © ${new Date().getFullYear()} Hamza CHARAFI
              </p>
            </div>

          </body>
        </html>
      `,
    });

    // Check for errors
    if (error) {
      console.error('❌ Resend error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }

    console.log('✅ Email sent successfully:', emailData);

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errors: ContactFormState['errors'] = {};
      error.issues.forEach(issue => {
        const field = issue.path[0] as keyof typeof errors;
        if (field) {
          if (!errors[field]) {
            errors[field] = [];
          }
          errors[field]!.push(issue.message);
        }
      });

      return {
        success: false,
        message: 'Please check your form inputs.',
        errors,
      };
    }

    // Handle other errors
    console.error('❌ Contact form error:', error);

    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}

'use client';

import { useActionState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  submitContactForm,
  type ContactFormState,
} from '@/lib/actions/contact';

interface ContactFormProps {
  labels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
}

const initialState: ContactFormState = {
  success: undefined,
  message: undefined,
  errors: undefined,
};

export function ContactForm({ labels }: ContactFormProps) {
  // Use React 19's useActionState hook for form handling
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <Card className="p-8">
      <form ref={formRef} action={formAction} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {labels.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={labels.namePlaceholder}
            required
            aria-invalid={state?.errors?.name ? 'true' : 'false'}
            aria-describedby={state?.errors?.name ? 'name-error' : undefined}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          {state?.errors?.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {labels.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={labels.emailPlaceholder}
            required
            aria-invalid={state?.errors?.email ? 'true' : 'false'}
            aria-describedby={state?.errors?.email ? 'email-error' : undefined}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          {state?.errors?.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {labels.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={labels.subjectPlaceholder}
            required
            aria-invalid={state?.errors?.subject ? 'true' : 'false'}
            aria-describedby={
              state?.errors?.subject ? 'subject-error' : undefined
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          {state?.errors?.subject && (
            <p id="subject-error" className="text-red-500 text-sm mt-1">
              {state.errors.subject[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {labels.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={labels.messagePlaceholder}
            required
            aria-invalid={state?.errors?.message ? 'true' : 'false'}
            aria-describedby={
              state?.errors?.message ? 'message-error' : undefined
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
          />
          {state?.errors?.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isPending}>
          {isPending ? labels.sending : labels.send}
        </Button>

        {state?.success && state.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 text-center font-medium"
          >
            {state.message}
          </motion.p>
        )}

        {state?.success === false && state.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-center font-medium"
          >
            {state.message}
          </motion.p>
        )}
      </form>
    </Card>
  );
}

'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

/**
 * Error boundary for the locale route
 * Catches errors during rendering and provides a recovery UI
 *
 * This component must be a Client Component
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Portfolio error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Error illustration */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-red-500/10 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-muted-foreground">
              We encountered an unexpected error while loading the page.
            </p>
          </div>

          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg text-left">
              <p className="text-sm text-red-800 dark:text-red-200 font-mono">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset} size="lg">
              Try Again
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = '/')}
            >
              Go Home
            </Button>
          </div>

          {/* Help text */}
          <p className="text-sm text-muted-foreground">
            If the problem persists, please contact support or try again later.
          </p>
        </div>
      </Container>
    </div>
  );
}

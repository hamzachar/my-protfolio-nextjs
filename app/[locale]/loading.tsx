/**
 * Loading UI for the entire page
 * This is shown while the page is being generated on the server
 *
 * Note: With Suspense boundaries in page.tsx, this might not be visible often
 * as sections load progressively. This is mainly for initial page load.
 */
export default function Loading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <div className="text-center space-y-4">
        {/* Animated logo or spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Loading Portfolio...
          </h2>
          <p className="text-sm text-muted-foreground">Please wait a moment</p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}

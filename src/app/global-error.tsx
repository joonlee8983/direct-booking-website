"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-slate-900">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Something went wrong
            </h1>
            <p className="mt-4 text-slate-400">
              A critical error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

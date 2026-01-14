export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Direct Booking Website
        </h1>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-6 py-3 ring-1 ring-emerald-500/20">
          <span className="text-lg text-emerald-400">Deployment verified</span>
          <svg
            className="h-5 w-5 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mt-4 text-slate-400">
          Foundation ready for production
        </p>
      </main>
    </div>
  );
}

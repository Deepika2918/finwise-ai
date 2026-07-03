export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          🚀 AI Powered Finance Platform
        </span>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          FinWise AI
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Make smarter financial decisions with AI-powered insights,
          real-time stock market analysis, portfolio tracking,
          and expense management — all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800">
            Learn More
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-400">
          <span>📈 Live Market Data</span>
          <span>🤖 AI Financial Advisor</span>
          <span>💼 Portfolio Tracking</span>
          <span>💸 Expense Management</span>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-6xl font-bold text-blue-400">
          FinWise AI
        </h1>

        <p className="mb-8 max-w-2xl text-xl text-gray-300">
          AI Powered Personal Finance Advisor built with Next.js,
          Supabase and real-time market data.
        </p>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-blue-500 px-8 py-4 text-lg font-semibold hover:bg-slate-900"
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-slate-900 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              📈 Live Market Data
            </h3>
            <p className="text-gray-400">
              Track real-time stock prices and market trends.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              🤖 AI Assistant
            </h3>
            <p className="text-gray-400">
              Ask investment and finance related questions.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              💼 Portfolio Tracking
            </h3>
            <p className="text-gray-400">
              Monitor investments and portfolio performance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-gray-500">
        © 2026 FinWise AI • Built with Next.js & Supabase
      </footer>
    </div>
  );
}
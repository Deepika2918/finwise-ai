import { Button } from "@/components/ui/button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:justify-between">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 AI Powered Finance Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            FinWise AI
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Make smarter financial decisions using AI-powered insights,
            real-time stock market analysis, portfolio tracking and
            intelligent expense management.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">
              Get Started
            </Button>
<Button
  variant="outline"
  size="lg"
  className="border-slate-700 bg-transparent text-white hover:bg-slate-800"
>
  Learn More
</Button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            ⭐ Trusted by 5,000+ investors worldwide
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-slate-400">
            <span>📈 Live Market Data</span>
            <span>🤖 AI Advisor</span>
            <span>💼 Portfolio Tracking</span>
            <span>💸 Expense Management</span>
          </div>
        </div>

        {/* Right Side */}
        <DashboardPreview />

      </div>
    </section>
  );
}
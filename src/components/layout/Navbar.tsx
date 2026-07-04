import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Fin<span className="text-blue-500">Wise</span> AI
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-slate-300 transition hover:text-white">
            Features
          </Link>

          <Link href="#" className="text-slate-300 transition hover:text-white">
            AI Advisor
          </Link>

          <Link href="#" className="text-slate-300 transition hover:text-white">
            Pricing
          </Link>

          <Link href="#" className="text-slate-300 transition hover:text-white">
            About
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
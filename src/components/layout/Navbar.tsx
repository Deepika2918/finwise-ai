import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Fin<span className="text-blue-500">Wise</span> AI
        </h1>

        {/* Navigation Links */}
        <div className="hidden gap-8 text-slate-300 md:flex">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">AI Advisor</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">About</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
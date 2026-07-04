export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Fin<span className="text-blue-500">Wise</span> AI
          </h2>

          <p className="mt-2 text-sm">
            AI Powered Personal Finance Platform
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Terms
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>

      </div>

      <p className="mt-8 text-center text-sm">
        © 2026 FinWise AI. All Rights Reserved.
      </p>
    </footer>
  );
}
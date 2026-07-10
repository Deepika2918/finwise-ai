export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        💼 Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Total Investment</h2>
          <p className="text-4xl font-bold mt-3">₹2,00,000</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Current Value</h2>
          <p className="text-4xl font-bold mt-3">₹2,45,000</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Profit</h2>
          <p className="text-4xl font-bold text-green-400 mt-3">
            +₹45,000
          </p>
        </div>

      </div>

      <div className="mt-10 bg-slate-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Holdings
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-slate-700 pb-4">
            <span>AAPL</span>
            <span>10 Shares</span>
            <span className="text-green-400">+$1200</span>
          </div>

          <div className="flex justify-between border-b border-slate-700 pb-4">
            <span>TSLA</span>
            <span>5 Shares</span>
            <span className="text-green-400">+$850</span>
          </div>

          <div className="flex justify-between pb-4">
            <span>MSFT</span>
            <span>8 Shares</span>
            <span className="text-green-400">+$620</span>
          </div>

        </div>
      </div>
    </div>
  );
}
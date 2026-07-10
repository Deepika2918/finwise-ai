"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [stockData, setStockData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  useEffect(() => {
    async function fetchStockData() {
      try {
        const res = await fetch("/api/stocks");
        const data = await res.json();

        setStockData(data["Global Quote"]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchStockData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold text-blue-400">
          FinWise AI
        </h1>

        <nav className="mt-10 space-y-6">
          <p className="cursor-pointer hover:text-blue-400">
            🏠 Dashboard
          </p>

          <p className="cursor-pointer hover:text-blue-400">
            📈 Stocks
          </p>

          <p className="cursor-pointer hover:text-blue-400">
            💼 Portfolio
          </p>

          <p className="cursor-pointer hover:text-blue-400">
            🤖 AI Assistant
          </p>

          <p className="cursor-pointer hover:text-blue-400">
            📰 News
          </p>

          <p className="cursor-pointer hover:text-blue-400">
            ⚙ Settings
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Navbar */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              👋 Welcome Back, Deepika
            </h2>

            <p className="mt-2 text-gray-400">
              Live Market Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* NIFTY */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-400">NIFTY 50</h3>
            <p className="text-4xl font-bold mt-3">25,120</p>
            <p className="text-green-400 mt-2">+1.25%</p>
          </div>

          {/* AAPL Live Data */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-400">AAPL</h3>

            <p className="text-4xl font-bold mt-3">
              {loading
                ? "Loading..."
                : `$${stockData?.["05. price"] || "N/A"}`}
            </p>

            <p className="text-green-400 mt-2">
              {loading
                ? "..."
                : stockData?.["10. change percent"] || "N/A"}
            </p>
          </div>

          {/* BTC */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-400">BTC</h3>
            <p className="text-4xl font-bold mt-3">$109K</p>
            <p className="text-green-400 mt-2">+0.80%</p>
          </div>

          {/* Portfolio */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-400">Portfolio</h3>
            <p className="text-4xl font-bold mt-3">₹2.45L</p>
            <p className="text-green-400 mt-2">+₹12,540</p>
          </div>

        </div>

      </main>
    </div>
  );
}
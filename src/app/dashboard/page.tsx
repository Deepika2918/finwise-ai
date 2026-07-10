"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  const [aaplPrice, setAaplPrice] = useState("Loading...");
  const [aaplChange, setAaplChange] = useState("0%");

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await fetch("/api/stocks");
        const data = await response.json();

        const quote = data["Global Quote"];

        if (quote) {
          setAaplPrice(`$${quote["05. price"]}`);
          setAaplChange(quote["10. change percent"]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchStock();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold text-blue-400">
          FinWise AI
        </h1>

        <nav className="mt-10 space-y-6">

          <Link
            href="/dashboard"
            className="block cursor-pointer hover:text-blue-400"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/stocks"
            className="block cursor-pointer hover:text-blue-400"
          >
            📈 Stocks
          </Link>

          <Link
            href="/portfolio"
            className="block cursor-pointer hover:text-blue-400"
          >
            💼 Portfolio
          </Link>

          <Link
            href="/assistant"
            className="block cursor-pointer hover:text-blue-400"
          >
            🤖 AI Assistant
          </Link>

          <Link
            href="/news"
            className="block cursor-pointer hover:text-blue-400"
          >
            📰 News
          </Link>

          <Link
            href="/settings"
            className="block cursor-pointer hover:text-blue-400"
          >
            ⚙ Settings
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-5xl font-bold">
              👋 Welcome Back, Deepika
            </h2>

            <p className="text-gray-400 mt-2 text-xl">
              Live Market Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-gray-400 text-xl">
              NIFTY 50
            </h3>

            <p className="text-5xl font-bold mt-5">
              25,120
            </p>

            <p className="text-green-400 mt-4 text-2xl">
              +1.25%
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-gray-400 text-xl">
              AAPL
            </h3>

            <p className="text-5xl font-bold mt-5">
              {aaplPrice}
            </p>

            <p className="text-green-400 mt-4 text-2xl">
              {aaplChange}
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-gray-400 text-xl">
              BTC
            </h3>

            <p className="text-5xl font-bold mt-5">
              $109K
            </p>

            <p className="text-green-400 mt-4 text-2xl">
              +0.80%
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-gray-400 text-xl">
              Portfolio
            </h3>

            <p className="text-5xl font-bold mt-5">
              ₹2.45L
            </p>

            <p className="text-green-400 mt-4 text-2xl">
              +₹12,540
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
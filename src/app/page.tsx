"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email to verify your account.");
    }
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          FinWise AI Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signUp}
          className="mb-3 w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
        >
          Sign Up
        </button>

        <button
          onClick={signIn}
          className="w-full rounded-lg bg-green-600 p-3 text-white hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "Is FinWise AI free to use?",
      answer:
        "Yes! You can start with the free plan and upgrade anytime for premium AI features.",
    },
    {
      question: "Which AI model does FinWise AI use?",
      answer:
        "FinWise AI uses Google's Gemini API to provide financial guidance and personalized recommendations.",
    },
    {
      question: "Can I track my expenses?",
      answer:
        "Yes. You can add, edit, categorize and analyze your expenses with AI insights.",
    },
    {
      question: "Does FinWise AI provide live stock prices?",
      answer:
        "Yes. Live stock market data is fetched using financial APIs.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to know about FinWise AI.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {open === index ? "-" : "+"}
                </span>
              </button>

              {open === index && (
                <p className="px-5 pb-5 text-slate-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
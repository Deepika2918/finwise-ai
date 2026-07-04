import { Button } from "@/components/ui/button";

export default function AiDemo() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950 p-10">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            AI Demo
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Talk to FinWise AI
          </h2>

          <p className="mt-4 text-slate-400">
            Get instant financial guidance powered by Artificial Intelligence.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="rounded-xl bg-slate-800 p-4 text-slate-300">
            💬 Can I afford a ₹20,000 smartphone if I earn ₹45,000/month?
          </div>

          <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
            <p className="font-semibold text-blue-300">
              🤖 FinWise AI
            </p>

            <p className="mt-3 leading-7 text-slate-300">
              Based on your monthly income, buying this phone is possible,
              but I recommend keeping at least 20% of your income as savings.
              Consider waiting one month if your recent expenses have been high.
            </p>
          </div>

          <Button className="mt-8 w-full">
            Ask FinWise AI
          </Button>

        </div>

      </div>
    </section>
  );
}
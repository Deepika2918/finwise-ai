import { Button } from "@/components/ui/button";

export default function SavingChallenge() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Monthly Saving Challenge
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Save More with AI Challenges
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Let FinWise AI create personalized monthly saving goals based on
            your income and spending habits.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-2xl font-semibold">
              July Challenge
            </h3>

            <p className="mt-5 text-slate-400">
              Goal
            </p>

            <p className="text-4xl font-bold text-blue-400">
              ₹10,000
            </p>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>42%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[42%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            <p className="mt-6 text-slate-400">
              Saved so far:
              <span className="ml-2 font-semibold text-green-400">
                ₹4,200
              </span>
            </p>

            <Button className="mt-8 w-full">
              Update Progress
            </Button>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

            <p className="text-xl font-semibold text-blue-300">
              🤖 AI Recommendation
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Based on your recent expenses, reducing food delivery by
              twice a week and limiting impulse shopping could help
              you save nearly ₹5,800 this month.
            </p>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li>✅ Skip 2 online food orders weekly</li>
              <li>✅ Save ₹1,500 from shopping</li>
              <li>✅ Invest saved money into SIP</li>
              <li>✅ Stay within your monthly budget</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
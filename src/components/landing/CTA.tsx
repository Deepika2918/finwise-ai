import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-slate-900 p-12 text-center">

        <h2 className="text-4xl font-bold">
          Start Your Financial Journey Today
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          Join thousands of users who are making smarter financial decisions
          using AI-powered insights, expense tracking and portfolio analysis.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg">
            Get Started Free
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
          >
            Contact Us
          </Button>
        </div>

      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white">
        Portfolio Overview
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">Portfolio Value</span>
          <span className="font-semibold text-white">₹1,25,000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Today's Gain</span>
          <span className="font-semibold text-green-400">+2.4%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">AI Confidence</span>
          <span className="font-semibold text-blue-400">92%</span>
        </div>
      </div>

      <Button className="mt-8 w-full">
        View Dashboard
      </Button>
    </div>
  );
}
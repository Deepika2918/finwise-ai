const features = [
  {
    title: "AI Financial Advisor",
    icon: "🤖",
    description:
      "Get personalized financial advice powered by AI based on your income, expenses, and goals.",
  },
  {
    title: "Live Market Data",
    icon: "📈",
    description:
      "Track real-time stock prices and market trends from trusted financial APIs.",
  },
  {
    title: "Expense Tracker",
    icon: "💸",
    description:
      "Monitor daily expenses and understand where your money is going.",
  },
  {
    title: "Finance News",
    icon: "📰",
    description:
      "Stay updated with the latest finance and stock market news.",
  },
  {
    title: "Saving Challenge",
    icon: "🏆",
    description:
      "Complete AI-generated monthly saving challenges and earn achievement badges.",
  },
  {
    title: "Portfolio Tracker",
    icon: "💼",
    description:
      "Manage investments and monitor your portfolio performance in one dashboard.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Why Choose FinWise AI?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Everything you need to manage your money smarter with AI-powered
            financial tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 hover:shadow-xl"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
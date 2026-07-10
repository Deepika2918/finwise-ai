export default function NewsPage() {
  const news = [
    {
      title: "Apple stock rises after strong earnings report",
      source: "Bloomberg",
    },
    {
      title: "Bitcoin crosses $109K for the first time",
      source: "CoinDesk",
    },
    {
      title: "Tesla announces new AI-powered vehicle features",
      source: "Reuters",
    },
    {
      title: "NIFTY 50 closes higher for third consecutive session",
      source: "Economic Times",
    },
    {
      title: "Microsoft expands investment in AI infrastructure",
      source: "CNBC",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        📰 Market News
      </h1>

      <div className="space-y-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-2">
              Source: {item.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
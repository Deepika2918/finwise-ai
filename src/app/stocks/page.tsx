export default function StocksPage() {
  const stocks = [
    {
      name: "Apple",
      symbol: "AAPL",
      price: "$313.39",
      change: "+0.88%",
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      price: "$327.12",
      change: "+1.45%",
    },
    {
      name: "Microsoft",
      symbol: "MSFT",
      price: "$521.40",
      change: "+0.72%",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        📈 Stocks Market
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="bg-slate-900 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {stock.symbol}
            </h2>

            <p className="text-gray-400 mt-2">
              {stock.name}
            </p>

            <p className="text-4xl font-bold mt-4">
              {stock.price}
            </p>

            <p className="text-green-400 mt-2">
              {stock.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
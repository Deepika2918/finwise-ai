const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

export async function getStockPrice(symbol: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );

    const data = await res.json();

    return data["Global Quote"];
  } catch (error) {
    console.error("Error fetching stock:", error);
    return null;
  }
}
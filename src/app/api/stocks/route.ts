import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${API_KEY}`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    );
  }
}
export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      text: "FinWise AI helped me save ₹15,000 in just 3 months. The AI budget suggestions are incredibly useful.",
    },
    {
      name: "Priya Verma",
      role: "Investor",
      text: "The portfolio insights and market analysis make investing much easier.",
    },
    {
      name: "Aman Gupta",
      role: "Student",
      text: "Expense tracking is simple and the saving challenges keep me motivated every month.",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Loved by Thousands of Users
          </h2>

          <p className="mt-4 text-slate-400">
            Here's what our users say about FinWise AI.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="text-yellow-400 text-xl">★★★★★</div>

              <p className="mt-5 text-slate-300 leading-7">
                "{review.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-lg">
                  {review.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
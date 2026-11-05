
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-[#17110e] px-6 pb-24 pt-36 text-[#f5eee5] md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="mb-20 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#c49a62]">
            Our Story
          </p>

          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            More than pizza.
            <br />
            <span className="italic text-[#c49a62]">It's an experience.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/50 md:text-base">
            At Ember & Crust, we believe great pizza brings people together.
            Every pizza is made with carefully selected ingredients,
            passion, and a love for unforgettable flavors.
          </p>
        </div>

        {/* Story */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1200"
              alt="Freshly prepared pizza"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c49a62]">
              The Ember & Crust Philosophy
            </p>

            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Made with passion.
              <br />
              <span className="italic text-[#c49a62]">Served with love.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/50">
              Our philosophy is simple: quality ingredients, authentic
              preparation, and attention to every detail. From the first
              stretch of the dough to the final touch from our oven,
              we want every bite to feel special.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/50">
              Whether you're sharing a meal with friends or enjoying
              a quiet evening, there's always a place for great pizza.
            </p>

            <Link
              to="/menu"
              className="mt-9 inline-flex items-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e]"
            >
              Explore Our Menu
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Values */}
        <section className="mt-28">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c49a62]">
              What Makes Us Different
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Our <span className="italic text-[#c49a62]">Values.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Quality Ingredients",
                description:
                  "We choose fresh ingredients and carefully balance every flavor.",
              },
              {
                number: "02",
                title: "Craft & Passion",
                description:
                  "Every pizza is prepared with attention, care, and passion.",
              },
              {
                number: "03",
                title: "Moments Together",
                description:
                  "We believe good food creates memories worth sharing.",
              },
            ].map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-white/10 bg-[#211915] p-9 transition hover:border-[#c49a62]/50"
              >
                <span className="font-display text-4xl italic text-[#c49a62]">
                  {value.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

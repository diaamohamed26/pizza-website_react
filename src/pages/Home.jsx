
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Flame,
  Leaf,
  Award,
  Clock,
  Star,
  ChefHat,
} from "lucide-react";
import { motion } from "framer-motion";

import Hero from "../components/Hero";

const bestSellers = [
  {
    name: "Pepperoni Royale",
    description: "Premium pepperoni, mozzarella and rich tomato sauce.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=85",
    tag: "BEST SELLER",
  },
  {
    name: "Classic Margherita",
    description: "Fresh basil, mozzarella and homemade tomato sauce.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=85",
    tag: "CLASSIC",
  },
  {
    name: "Truffle Mushroom",
    description: "Earthy mushrooms, creamy cheese and truffle flavor.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85",
    tag: "CHEF'S PICK",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, smoky BBQ sauce and melted cheese.",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=700&q=85",
    tag: "POPULAR",
  },
];

const features = [
  {
    icon: Flame,
    title: "Wood-Fired Flavor",
    description:
      "Every pizza is baked to perfection for that unforgettable crispy crust.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We choose quality ingredients and fresh toppings for every order.",
  },
  {
    icon: ChefHat,
    title: "Crafted with Passion",
    description:
      "Our chefs bring creativity and passion to every pizza they make.",
  },
  {
    icon: Clock,
    title: "Made Fresh Daily",
    description:
      "Fresh dough and carefully prepared ingredients, every single day.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "Absolutely incredible pizza! The crust is perfect, and the ingredients taste so fresh.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    review:
      "Pepperoni Royale is my favorite. Amazing flavors and a beautiful experience.",
    rating: 5,
  },
  {
    name: "Mariam A.",
    review:
      "The atmosphere, food and quality are fantastic. Definitely coming back!",
    rating: 5,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100b08] text-[#f7eee3]">

      {/* HERO */}
      <Hero />

      {/* BEST SELLERS */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-semibold tracking-[4px] text-[#c49a62]">
                OUR FAVORITES
              </span>

              <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                The <span className="italic text-[#d8ad6c]">Best Sellers</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#aa9277]">
                Discover the pizzas everyone is talking about.
                Crafted with passion and served with love.
              </p>
            </div>

            <Link
              to="/menu"
              className="group flex items-center gap-3 text-sm text-[#d8ad6c]"
            >
              Explore Full Menu
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((pizza, index) => (
              <motion.article
                key={pizza.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-xl border border-[#d8ad6c]/10 bg-[#19110c] transition-colors hover:border-[#d8ad6c]/40"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 bg-[#c49a62] px-3 py-2 text-[9px] font-bold tracking-widest text-[#17100b]">
                    {pizza.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-2xl">
                    {pizza.name}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-xs leading-6 text-[#aa9277]">
                    {pizza.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#d8ad6c]/10 pt-5">
                    <span className="font-serif text-xl text-[#d8ad6c]">
                      EGP {pizza.price}
                    </span>

                    <Link
                      to="/menu"
                      aria-label={`Order ${pizza.name}`}
                      className="rounded-full bg-[#c49a62] p-3 text-[#17100b] transition hover:bg-[#f5cd87]"
                    >
                      <ShoppingBag size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#19110c] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1000&q=85"
              alt="Freshly prepared pizza"
              className="h-[450px] w-full rounded-sm object-cover md:h-[550px]"
            />

            <div className="absolute -bottom-6 -right-4 border border-[#d8ad6c]/30 bg-[#100b08] p-6 md:-right-8 md:p-8">
              <p className="font-serif text-4xl text-[#d8ad6c]">
                100%
              </p>
              <p className="mt-2 text-[10px] tracking-[2px] text-[#b49a7c]">
                MADE WITH PASSION
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-[4px] text-[#c49a62]">
              A LITTLE ABOUT US
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
              More Than
              <br />
              Just <span className="italic text-[#d8ad6c]">Pizza.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#b49a7c]">
              At Ember & Crust, we believe great pizza brings people
              together. Every recipe is inspired by our love for
              authentic flavors, quality ingredients and unforgettable
              moments.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#b49a7c]">
              From freshly prepared dough to perfectly melted cheese,
              every detail matters. We don't just make pizza.
              We create experiences worth sharing.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#c49a62] pb-3 text-xs tracking-[2px] text-[#d8ad6c] transition hover:text-white"
            >
              DISCOVER OUR STORY
              <ArrowRight size={17} />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1300px]">

          <div className="mb-16 text-center">
            <span className="text-xs font-semibold tracking-[4px] text-[#c49a62]">
              THE EMBER EXPERIENCE
            </span>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl">
              Why Choose <span className="italic text-[#d8ad6c]">Us?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#aa9277]">
              Great pizza isn't just about ingredients.
              It's about passion, craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="border border-[#d8ad6c]/10 bg-[#19110c] p-8 text-center transition hover:-translate-y-2 hover:border-[#d8ad6c]/40"
                >
                  <Icon
                    size={35}
                    strokeWidth={1.3}
                    className="mx-auto text-[#d8ad6c]"
                  />

                  <h3 className="mt-6 font-serif text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-xs leading-7 text-[#aa9277]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="relative overflow-hidden bg-[#c49a62] px-6 py-20 text-[#17100b] md:px-12">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#17100b]/10" />
        <div className="absolute -right-10 -top-20 h-80 w-80 rounded-full border border-[#17100b]/10" />

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div>
            <span className="text-xs font-bold tracking-[4px]">
              SOMETHING DELICIOUS IS WAITING
            </span>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Make Every Bite
              <br />
              <span className="italic">Count.</span>
            </h2>

            <p className="mt-4 text-sm text-[#17100b]/70">
              Explore our menu and find your next favorite pizza.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-3 rounded-full bg-[#17100b] px-10 py-5 text-sm font-semibold text-[#e9b968] transition hover:bg-[#302015]"
          >
            ORDER YOUR PIZZA
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-[4px] text-[#c49a62]">
              CUSTOMER LOVE
            </span>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl">
              What People <span className="italic text-[#d8ad6c]">Say</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border border-[#d8ad6c]/10 bg-[#19110c] p-8"
              >
                <div className="flex gap-1 text-[#d8ad6c]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-7 font-serif text-lg italic leading-8 text-[#eee0ce]">
                  "{item.review}"
                </p>

                <div className="mt-8 border-t border-[#d8ad6c]/10 pt-5">
                  <p className="text-sm font-semibold text-[#d8ad6c]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[10px] tracking-widest text-[#aa9277]">
                    CUSTOMER REVIEW
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-[1200px] border border-[#d8ad6c]/20 bg-[#19110c] px-6 py-16 text-center md:px-12">

          <span className="text-xs tracking-[4px] text-[#c49a62]">
            YOUR NEXT FAVORITE IS HERE
          </span>

          <h2 className="mt-6 font-serif text-4xl md:text-6xl">
            Ready for a <span className="italic text-[#d8ad6c]">Slice?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#aa9277]">
            Explore our delicious menu, choose your favorite
            and let us take care of the rest.
          </p>

          <Link
            to="/menu"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e9b968] px-10 py-4 text-sm font-bold text-[#21170d] transition hover:bg-[#f5cd87]"
          >
            <ShoppingBag size={19} />
            EXPLORE MENU
          </Link>

        </div>
      </section>

    </main>
  );
}

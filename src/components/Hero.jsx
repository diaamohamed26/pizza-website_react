
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const pizzas = [
  {
    name: "Pepperoni",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=85",
  },
  {
    name: "Margherita",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=85",
  },
  {
    name: "Truffle Mushroom",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=85",
  },
  {
    name: "Four Cheese",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&q=85",
  },
  {
    name: "BBQ Chicken",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=85",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <section className="relative isolate min-h-[790px] overflow-hidden bg-[radial-gradient(ellipse_at_52%_43%,#3b2517_0%,#21150e_35%,#100b08_70%)] px-6 py-12 text-[#f7eee3] md:px-12">

      {/* Decorative Background */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { rotate: 360, scale: [1, 1.08, 1] }
        }
        transition={{
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full border border-[#d5a65e]/10 shadow-[0_0_0_30px_rgba(213,166,94,0.025),0_0_0_60px_rgba(213,166,94,0.015)]"
      />

      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full border border-[#d5a65e]/10"
      />

      {/* Main Hero Grid */}
      <div className="mx-auto grid max-w-[1400px] items-center gap-6 lg:min-h-[570px] lg:grid-cols-[1fr_1.4fr_0.8fr]">

        {/* Left Content */}
        <motion.div
          {...motionProps}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
          className="z-10 order-1"
        >
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[10px] font-semibold tracking-[3px] text-[#c49a5c]"
          >
            FRESH FROM THE OVEN
          </motion.span>

          <h1 className="mt-6 font-serif text-6xl font-medium leading-[1.05] md:text-7xl xl:text-[82px]">
            Great
            <br />
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block font-normal italic text-[#d8ad6c]"
            >
              pizza
            </motion.span>
            <br />
            moments.
          </h1>

          <p className="mt-6 text-sm leading-7 text-[#b69c7c]">
            Made with passion. Baked with fire.
            <br />
            Served to make your day a little better.
          </p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link
              to="/menu"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#c49a5c] pb-2 text-xs uppercase tracking-[2px] text-[#d8ad6c]"
            >
              Explore our menu
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Center Pizza Image */}
        <div className="relative order-2 flex min-h-[330px] items-center justify-center lg:min-h-[570px]">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [0.9, 1.1, 0.9], opacity: [0.15, 0.3, 0.15] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[65%] w-[65%] rounded-full bg-[#d47b35]/20 blur-[100px]"
          />

          <motion.img
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.65, rotate: -20 }
            }
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                    rotate: -6,
                    y: [0, -12, 0],
                  }
            }
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1.2, ease: "easeOut" },
              rotate: { duration: 1.2, ease: "easeOut" },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              },
            }}
            whileHover={
              shouldReduceMotion ? {} : { scale: 1.04, rotate: 0 }
            }
            src={pizzas[0].image.replace("w=400", "w=1200")}
            alt="Pepperoni Royale pizza"
            className="relative h-[350px] w-full max-w-[650px] rounded-full object-cover shadow-2xl [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)] md:h-[480px] lg:h-[550px]"
          />
        </div>

        {/* Featured Pizza */}
        <motion.div
          {...motionProps}
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.9, delay: 0.3 },
            },
          }}
          className="order-3 border-l border-[#c99e61] py-4 pl-6"
        >
          <span className="text-sm text-[#c8a36e]">
            Current Pick
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Pepperoni
            <br />
            Royale
          </h2>

          <p className="mt-4 text-xs leading-7 text-[#b49a7c]">
            Rich tomato sauce, melted mozzarella,
            premium pepperoni and fresh herbs.
          </p>

          <strong className="mt-5 block font-serif text-3xl">
            EGP 249
          </strong>

          <Link
            to="/menu"
            className="group mt-5 inline-flex items-center gap-2 text-xs text-[#d9ad6d] transition"
          >
            Discover more
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>

      {/* Pizza Selection */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
              delayChildren: 0.2,
            },
          },
        }}
        className="mx-auto mt-8 grid max-w-[1250px] grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
      >
        {pizzas.map((pizza) => (
          <motion.div
            key={pizza.name}
            variants={fadeUp}
            whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/menu"
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-28 w-full items-center justify-center">
                <motion.img
                  src={pizza.image}
                  alt={pizza.name}
                  whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-contain drop-shadow-xl"
                />
              </div>

              <span className="mt-2 text-sm text-[#f2e8dc] transition-colors group-hover:text-[#d9b47d]">
                {pizza.name}
              </span>

              <strong className="mt-1 font-serif text-lg font-normal text-[#d9b47d]">
                EGP {pizza.price}
              </strong>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -4 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 rounded-full bg-[#e9b968] px-12 py-4 text-sm font-bold tracking-wide text-[#21170d] shadow-[0_10px_40px_rgba(233,185,104,0.15)] transition hover:bg-[#f5cd87]"
          >
            <ShoppingBag size={20} />
            ORDER NOW
          </Link>
        </motion.div>
      </motion.div>

      <span className="absolute bottom-5 left-6 hidden text-[9px] tracking-[3px] text-[#78634c] md:block md:left-12">
        GOOD PIZZA. GOOD MOMENTS.
      </span>
    </section>
  );
}


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Gift,
  Crown,
  Star,
  Flame,
  ArrowRight,
  Sparkles,
  Pizza,
  Ticket,
  ShoppingBag,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const rewards = [
  {
    id: 1,
    title: "Free Side Dish",
    description: "Enjoy a delicious side on us.",
    points: 150,
    icon: Pizza,
    label: "STARTER REWARD",
  },
  {
    id: 2,
    title: "10% Off Your Order",
    description: "Get 10% off your next pizza order.",
    points: 250,
    icon: Ticket,
    label: "POPULAR",
  },
  {
    id: 3,
    title: "Free Medium Pizza",
    description: "Your favorite medium pizza is on us.",
    points: 500,
    icon: Gift,
    label: "FAN FAVORITE",
  },
  {
    id: 4,
    title: "Free Large Pizza",
    description: "A large pizza made just for you.",
    points: 1000,
    icon: Crown,
    label: "VIP REWARD",
  },
];

const benefits = [
  {
    icon: ShoppingBag,
    title: "Order & Earn",
    description: "Earn 1 point for every EGP 10 you spend.",
  },
  {
    icon: Star,
    title: "Unlock Rewards",
    description: "Use your points to get exclusive treats.",
  },
  {
    icon: Flame,
    title: "Enjoy More",
    description: "The more you order, the more you save.",
  },
];

function Rewards() {
  const { cartTotal } = useCart();

  // Estimated points from the current cart
  const potentialPoints = Math.floor(cartTotal / 10);

  // Demo balance. Real earned points require completed orders.
  const pointsBalance = 0;

  const nextReward = rewards.find(
    (reward) => reward.points > pointsBalance
  );

  const progress = nextReward
    ? Math.min((pointsBalance / nextReward.points) * 100, 100)
    : 100;

  return (
    <main className="min-h-screen overflow-hidden bg-[#17110e] text-[#f5eee5]">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#c49a62]/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#c49a62]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 border border-[#c49a62]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
              <Sparkles size={14} />
              Ember & Crust Loyalty Club
            </span>

            <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
              Good Food.
              <span className="block text-[#c49a62]">
                Great Rewards.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/50 md:text-base">
              Every bite brings you closer to something special.
              Join our rewards club and make every order count.
            </p>

            <Link
              to="/menu"
              className="mt-9 inline-flex items-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e]"
            >
              Start Earning
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Points Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="relative overflow-hidden border border-[#c49a62]/30 bg-[#241a14] p-8 lg:col-span-2">
            <div className="absolute -right-10 -top-10 opacity-10">
              <Crown size={200} />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 text-[#c49a62]">
                <Crown size={20} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Your Rewards Balance
                </span>
              </div>

              <div className="mt-8 flex items-end gap-3">
                <span className="font-display text-7xl text-[#f5eee5]">
                  {pointsBalance}
                </span>
                <span className="mb-3 text-sm text-white/40">
                  Points
                </span>
              </div>

              <p className="mt-3 text-sm text-white/50">
                Your demo membership balance
              </p>

              <div className="mt-10">
                <div className="mb-3 flex justify-between text-xs">
                  <span className="text-white/50">
                    {nextReward
                      ? `Progress to ${nextReward.title}`
                      : "All rewards unlocked"}
                  </span>

                  <span className="text-[#c49a62]">
                    {pointsBalance} / {nextReward?.points ?? 0} points
                  </span>
                </div>

                <div className="h-2 overflow-hidden bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[#c49a62]"
                  />
                </div>

                {nextReward && (
                  <p className="mt-3 text-xs text-white/40">
                    {nextReward.points - pointsBalance} more points
                    to unlock your next reward.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-white/10 bg-[#211812] p-8">
            <div>
              <div className="flex items-center gap-3 text-[#c49a62]">
                <ShoppingBag size={20} />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Your Current Cart
                </span>
              </div>

              <p className="mt-8 font-display text-5xl">
                {potentialPoints}
              </p>

              <p className="mt-2 text-sm text-white/50">
                Potential points from your current cart
              </p>

              <p className="mt-5 text-xs leading-6 text-white/40">
                Your cart total is EGP {cartTotal.toLocaleString("en-EG")}.
                Earn 1 point for every EGP 10 spent after a completed order.
              </p>
            </div>

            <Link
              to="/cart"
              className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-widest text-[#c49a62] transition hover:text-[#e0b77e]"
            >
              View Your Cart
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
            Simple & Delicious
          </span>

          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 text-sm text-white/40">
            Three simple steps to enjoy more.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border border-white/10 bg-[#211812] p-8 text-center transition hover:border-[#c49a62]/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c49a62]/30 text-[#c49a62]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 font-display text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* Rewards Catalog */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
              The Good Stuff
            </span>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Rewards Menu
            </h2>

            <p className="mt-4 text-sm text-white/40">
              Delicious rewards are waiting for you.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#c49a62] hover:text-[#e0b77e]"
          >
            Explore Menu
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rewards.map((reward, index) => {
            const Icon = reward.icon;
            const unlocked = pointsBalance >= reward.points;

            return (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-white/10 bg-[#211812] p-6 transition hover:-translate-y-1 hover:border-[#c49a62]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#c49a62]">
                    {reward.label}
                  </span>

                  {unlocked ? (
                    <CheckCircle2 size={18} className="text-green-500" />
                  ) : (
                    <Lock size={17} className="text-white/30" />
                  )}
                </div>

                <div className="my-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c49a62]/20 bg-[#c49a62]/5 text-[#c49a62] transition group-hover:bg-[#c49a62]/10">
                  <Icon size={34} />
                </div>

                <h3 className="font-display text-2xl">
                  {reward.title}
                </h3>

                <p className="mt-3 min-h-12 text-xs leading-6 text-white/40">
                  {reward.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="font-display text-2xl text-[#c49a62]">
                      {reward.points}
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-white/30">
                      Points Required
                    </p>
                  </div>

                  <span className="text-xs text-white/30">
                    {unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* Final CTA */}
      <section className="mx-6 mb-20 border border-[#c49a62]/30 bg-[#241a14] px-6 py-16 text-center md:mx-auto md:max-w-7xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c49a62]/10 text-[#c49a62]">
          <Gift size={30} />
        </div>

        <h2 className="mt-7 font-display text-4xl md:text-5xl">
          Your Next Reward Starts Here.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          Discover your next favorite pizza, place an order,
          and start earning points.
        </p>

        <Link
          to="/menu"
          className="mt-8 inline-flex items-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e]"
        >
          Order Now
          <ArrowRight size={16} />
        </Link>

      </section>

    </main>
  );
}

export default Rewards;

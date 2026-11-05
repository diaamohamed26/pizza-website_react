
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  Truck,
  ShieldCheck,
  Gift,
  CheckCircle2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const DELIVERY_FEE = 35;
const FREE_DELIVERY_LIMIT = 500;

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const [checkoutMessage, setCheckoutMessage] = useState("");

  const isEmpty = cartItems.length === 0;

  const deliveryFee =
    cartTotal >= FREE_DELIVERY_LIMIT || isEmpty
      ? 0
      : DELIVERY_FEE;

  const grandTotal = cartTotal + deliveryFee;

  const remainingForFreeDelivery = Math.max(
    FREE_DELIVERY_LIMIT - cartTotal,
    0
  );

  const handleCheckout = () => {
    setCheckoutMessage(
      "Checkout is currently a demo. Online ordering will be available soon!"
    );
  };

  return (
    <main className="min-h-screen bg-[#17110e] text-[#f5eee5]">

      {/* Page Header */}
      <section className="border-b border-white/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
            Your Selection
          </span>

          <h1 className="mt-4 font-display text-5xl md:text-6xl">
            Your Shopping
            <span className="text-[#c49a62]"> Cart.</span>
          </h1>

          <p className="mt-4 text-sm text-white/40">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">

        {isEmpty ? (

          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[50vh] flex-col items-center justify-center text-center"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#c49a62]/30 bg-[#c49a62]/5 text-[#c49a62]">
              <ShoppingBag size={42} strokeWidth={1.2} />
            </div>

            <h2 className="mt-8 font-display text-4xl">
              Your Cart Is Empty
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
              Looks like you haven't added anything delicious yet.
              Explore our menu and find your next favorite pizza.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e]"
            >
              Explore Menu
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        ) : (

          /* Cart Content */
          <div className="grid items-start gap-10 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="lg:col-span-2">

              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <h2 className="font-display text-2xl">
                  Order Items
                </h2>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white/40 transition hover:text-red-400"
                >
                  <Trash2 size={14} />
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-5 border border-white/10 bg-[#211812] p-5 sm:flex-row sm:items-center"
                    >
                      {/* Product Image */}
                      <div className="h-28 w-full shrink-0 overflow-hidden bg-[#17110e] sm:w-32">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[#c49a62]">
                            <ShoppingBag size={32} />
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-2xl">
                          {item.name}
                        </h3>

                        {item.category && (
                          <p className="mt-2 text-[10px] uppercase tracking-widest text-[#c49a62]">
                            {item.category}
                          </p>
                        )}

                        <p className="mt-3 text-sm text-white/50">
                          EGP {item.price.toLocaleString("en-EG")}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                        <div className="flex items-center border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                            className="p-3 text-white/50 transition hover:bg-white/5 hover:text-[#c49a62]"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="min-w-9 text-center text-sm">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                            className="p-3 text-white/50 transition hover:bg-white/5 hover:text-[#c49a62]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="flex items-center gap-5">
                          <span className="font-semibold text-[#c49a62]">
                            EGP{" "}
                            {(item.price * item.quantity).toLocaleString("en-EG")}
                          </span>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-white/30 transition hover:text-red-400"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* Continue Shopping */}
              <Link
                to="/menu"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#c49a62] transition hover:text-[#e0b77e]"
              >
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <aside className="border border-white/10 bg-[#211812] p-7">
              <h2 className="font-display text-3xl">
                Order Summary
              </h2>

              <div className="mt-8 space-y-5 border-b border-white/10 pb-7">

                <div className="flex justify-between text-sm">
                  <span className="text-white/50">
                    Subtotal ({cartCount} items)
                  </span>

                  <span>
                    EGP {cartTotal.toLocaleString("en-EG")}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-white/50">
                    Delivery Fee
                  </span>

                  <span className={deliveryFee === 0 ? "text-green-400" : ""}>
                    {deliveryFee === 0
                      ? "FREE"
                      : `EGP ${deliveryFee}`}
                  </span>
                </div>

                {cartTotal > 0 && cartTotal < FREE_DELIVERY_LIMIT && (
                  <div className="border border-[#c49a62]/20 bg-[#c49a62]/5 p-4">
                    <div className="flex items-center gap-2 text-[#c49a62]">
                      <Truck size={16} />
                      <span className="text-[10px] font-semibold uppercase tracking-wider">
                        Free Delivery
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-6 text-white/50">
                      Add EGP{" "}
                      {remainingForFreeDelivery.toLocaleString("en-EG")}
                      {" "}more to unlock free delivery.
                    </p>

                    <div className="mt-3 h-1.5 overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-[#c49a62] transition-all"
                        style={{
                          width: `${Math.min(
                            (cartTotal / FREE_DELIVERY_LIMIT) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {deliveryFee === 0 && (
                  <p className="flex items-center gap-2 text-xs text-green-400">
                    <CheckCircle2 size={15} />
                    You've unlocked free delivery!
                  </p>
                )}
              </div>

              <div className="flex justify-between py-7">
                <span className="font-display text-xl">
                  Total
                </span>

                <span className="font-display text-2xl text-[#c49a62]">
                  EGP {grandTotal.toLocaleString("en-EG")}
                </span>
              </div>

              {checkoutMessage && (
                <p
                  role="status"
                  className="mb-5 border border-[#c49a62]/20 bg-[#c49a62]/5 p-4 text-xs leading-6 text-[#c49a62]"
                >
                  {checkoutMessage}
                </p>
              )}

              <Link
                to="/checkout"
                className="block w-full rounded-xl bg-[#c49a62] px-6 py-4 text-center font-bold text-[#17110e] transition hover:bg-[#e0b77e]"
              >
                Proceed to Checkout →
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/30">
                <ShieldCheck size={15} />
                Secure ordering experience
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  to="/rewards"
                  className="flex items-center gap-3 text-xs text-[#c49a62] transition hover:text-[#e0b77e]"
                >
                  <Gift size={17} />
                  Discover our rewards program
                  <ArrowRight size={14} className="ml-auto" />
                </Link>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;

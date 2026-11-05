
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const DELIVERY_FEE = 35;
const FREE_DELIVERY_LIMIT = 500;

export default function Checkout() {
  const {
    cartItems,
    cartTotal,
    cartCount,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const deliveryFee =
    cartTotal >= FREE_DELIVERY_LIMIT || cartTotal === 0
      ? 0
      : DELIVERY_FEE;

  const grandTotal = cartTotal + deliveryFee;

  const inputClass =
    "w-full rounded-xl border border-[#493629] bg-[#211812] px-4 py-3.5 text-sm text-[#f5eee5] placeholder-[#806d5b] outline-none transition focus:border-[#c49a62] focus:ring-1 focus:ring-[#c49a62]";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-[#c9b9a8]";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setOrderPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Demo confirmation only. No real order is submitted.
  if (orderPlaced) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#17110e] px-5 py-16 text-[#f5eee5]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl rounded-3xl border border-[#493629] bg-[#211812] p-8 text-center sm:p-12"
        >
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#c49a62]/40 bg-[#c49a62]/10 text-4xl text-[#c49a62]">
            ✓
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
            Ember & Crust
          </p>

          <h1 className="mb-4 font-serif text-4xl font-bold">
            Thank You!
          </h1>

          <p className="mb-8 text-sm leading-7 text-[#a99888]">
            Your checkout details have been validated successfully.
            This is a demo confirmation. Your order has not yet been
            submitted to a restaurant or payment service.
          </p>

          <div className="mb-8 rounded-2xl border border-[#493629] bg-[#17110e] p-5 text-left">
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-[#a99888]">Items</span>
              <span>{cartCount}</span>
            </div>

            <div className="mb-3 flex justify-between text-sm">
              <span className="text-[#a99888]">Payment</span>
              <span>
                {paymentMethod === "cash" ? "Cash on Delivery" : "Card"}
              </span>
            </div>

            <div className="flex justify-between border-t border-[#493629] pt-4 font-bold">
              <span>Total</span>
              <span className="text-[#c49a62]">
                EGP {grandTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            to="/menu"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#c49a62] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="mt-5 inline-block text-sm text-[#a99888] transition hover:text-[#c49a62]"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#17110e] px-5 text-center text-[#f5eee5]">
        <div>
          <div className="mb-5 text-6xl">🛒</div>
          <h1 className="mb-3 font-serif text-3xl font-bold">
            Your cart is empty
          </h1>
          <p className="mb-7 text-sm text-[#a99888]">
            Add something delicious before checking out.
          </p>
          <Link
            to="/menu"
            className="inline-block rounded-xl bg-[#c49a62] px-8 py-3.5 text-sm font-bold text-[#17110e] transition hover:bg-[#e0b77e]"
          >
            Explore Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#17110e] px-4 py-12 text-[#f5eee5] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <Link
            to="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm text-[#c49a62] transition hover:text-[#e0b77e]"
          >
            ← Back to Cart
          </Link>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
            Almost There
          </p>

          <h1 className="font-serif text-4xl font-bold sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-[#a99888]">
            Complete your details and get ready for something delicious.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10 flex max-w-md items-center gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#c49a62]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c49a62] font-bold text-[#17110e]">
              1
            </span>
            Checkout
          </div>

          <div className="h-px flex-1 bg-[#493629]" />

          <div className="flex items-center gap-2 text-[#806d5b]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#493629]">
              2
            </span>
            Confirmation
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_400px]">

            {/* Checkout Form */}
            <div className="space-y-7">

              {/* Customer Information */}
              <section className="rounded-2xl border border-[#493629] bg-[#211812] p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c49a62]/10 text-xl text-[#c49a62]">
                    01
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold">
                      Contact Information
                    </h2>
                    <p className="mt-1 text-xs text-[#a99888]">
                      Your personal details
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+20 100 000 0000"
                        autoComplete="tel"
                        className={inputClass}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-xs text-red-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Delivery Information */}
              <section className="rounded-2xl border border-[#493629] bg-[#211812] p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c49a62]/10 text-xl text-[#c49a62]">
                    02
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold">
                      Delivery Address
                    </h2>
                    <p className="mt-1 text-xs text-[#a99888]">
                      Where should we deliver your pizza?
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Building, street, apartment..."
                      autoComplete="street-address"
                      className={inputClass}
                    />
                    {errors.address && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>City / Area *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city or area"
                      autoComplete="address-level2"
                      className={inputClass}
                    />
                    {errors.city && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Delivery Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Landmark, floor, special instructions..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="rounded-2xl border border-[#493629] bg-[#211812] p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c49a62]/10 text-xl text-[#c49a62]">
                    03
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold">
                      Payment Method
                    </h2>
                    <p className="mt-1 text-xs text-[#a99888]">
                      Choose how you want to pay
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-5 transition ${
                      paymentMethod === "cash"
                        ? "border-[#c49a62] bg-[#c49a62]/10"
                        : "border-[#493629] hover:border-[#9f7b4a]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="h-4 w-4 accent-[#c49a62]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Cash on Delivery
                        </p>
                        <p className="mt-1 text-xs text-[#a99888]">
                          Pay when your order arrives
                        </p>
                      </div>
                    </div>

                    <span className="text-2xl">💵</span>
                  </label>

                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-5 transition ${
                      paymentMethod === "card"
                        ? "border-[#c49a62] bg-[#c49a62]/10"
                        : "border-[#493629] hover:border-[#9f7b4a]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="h-4 w-4 accent-[#c49a62]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Credit / Debit Card
                        </p>
                        <p className="mt-1 text-xs text-[#a99888]">
                          Online payment integration required
                        </p>
                      </div>
                    </div>

                    <span className="text-2xl">💳</span>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <p className="mt-4 rounded-xl border border-[#c49a62]/20 bg-[#c49a62]/5 p-4 text-xs leading-6 text-[#c9b9a8]">
                    Card payments are currently a UI preview. No card details
                    are collected or charged. Connect a payment provider to
                    enable online payments.
                  </p>
                )}
              </section>
            </div>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-28">
              <section className="rounded-2xl border border-[#493629] bg-[#211812] p-6 sm:p-7">
                <h2 className="mb-6 font-serif text-2xl font-bold">
                  Your Order
                </h2>

                <div className="mb-6 space-y-5">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[#17110e]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-[#a99888]">
                          Quantity: {item.quantity}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#c49a62]">
                          EGP{" "}
                          {(Number(item.price) * Number(item.quantity)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#493629] pt-5">
                  <div className="mb-4 flex justify-between text-sm">
                    <span className="text-[#a99888]">
                      Subtotal ({cartCount} items)
                    </span>
                    <span>EGP {cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="mb-4 flex justify-between text-sm">
                    <span className="text-[#a99888]">Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-[#c49a62]" : ""}>
                      {deliveryFee === 0
                        ? "FREE"
                        : `EGP ${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>

                  {cartTotal < FREE_DELIVERY_LIMIT && (
                    <p className="mb-5 rounded-lg bg-[#c49a62]/10 p-3 text-xs leading-5 text-[#c49a62]">
                      Add EGP{" "}
                      {(FREE_DELIVERY_LIMIT - cartTotal).toFixed(2)} more
                      to get free delivery.
                    </p>
                  )}

                  <div className="flex items-center justify-between border-t border-[#493629] pt-5">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-[#c49a62]">
                      EGP {grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#c49a62] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
                >
                  Place Order
                  <span>→</span>
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-[#806d5b]">
                  Demo checkout. No real order or payment will be processed.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#a99888]">
                  <span>🔒</span>
                  Your information stays private
                </div>
              </section>

              <Link
                to="/menu"
                className="mt-5 block text-center text-sm text-[#c49a62] transition hover:text-[#e0b77e]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}

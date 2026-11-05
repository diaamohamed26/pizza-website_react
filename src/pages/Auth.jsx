
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required";
      }

      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setMessage(
      isLogin
        ? "Login interface is ready. Connect your authentication API to continue."
        : "Registration interface is ready. Connect your authentication API to create an account."
    );
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setMessage("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const inputClass =
    "w-full rounded-xl border border-[#493629] bg-[#211812] px-4 py-3.5 text-sm text-[#f5eee5] placeholder-[#806d5b] outline-none transition focus:border-[#c49a62] focus:ring-1 focus:ring-[#c49a62]";

  const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-[#c9b9a8]";

  return (
    <main className="min-h-screen bg-[#17110e] px-4 py-12 text-[#f5eee5] sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#493629]/60 bg-[#1d1511] shadow-2xl lg:grid-cols-2">

        {/* Left Side - Image */}
        <div className="relative hidden min-h-[700px] overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1200&q=90"
            alt="Freshly baked pizza"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#17110e] via-[#17110e]/50 to-black/20" />

          <div className="absolute left-10 right-10 top-10">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              EMBER <span className="text-[#c49a62]">&</span> CRUST
            </Link>
          </div>

          <div className="absolute bottom-12 left-10 right-10">
            <span className="mb-5 inline-block rounded-full border border-[#c49a62]/50 bg-[#17110e]/50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#e0b77e] backdrop-blur">
              CRAFTED WITH PASSION
            </span>

            <h2 className="mb-5 max-w-md font-display text-5xl font-bold leading-tight">
              Good food.
              <br />
              Great moments.
              <br />
              <span className="text-[#c49a62]">Made to share.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#e0d3c5]">
              Discover handcrafted pizzas, fresh ingredients, and unforgettable
              flavors. Your table is always waiting.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center px-5 py-8 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">

            <div className="mb-10 lg:hidden">
              <Link to="/" className="text-xl font-bold tracking-tight">
                EMBER <span className="text-[#c49a62]">&</span> CRUST
              </Link>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
                Welcome to Ember & Crust
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? "login" : "signup"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1 className="mb-3 font-display text-4xl font-bold sm:text-5xl">
                    {isLogin ? "Welcome back." : "Join the family."}
                  </h1>

                  <p className="text-sm leading-6 text-[#a99888]">
                    {isLogin
                      ? "Sign in to continue your delicious journey."
                      : "Create an account and enjoy every bite."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mode Switch */}
            <div className="mb-8 grid grid-cols-2 rounded-xl border border-[#493629] bg-[#17110e] p-1">
              <button
                type="button"
                onClick={() => !isLogin && switchMode()}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  isLogin
                    ? "bg-[#c49a62] text-[#17110e]"
                    : "text-[#a99888] hover:text-white"
                }`}
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => isLogin && switchMode()}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  !isLogin
                    ? "bg-[#c49a62] text-[#17110e]"
                    : "text-[#a99888] hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#c9b9a8]">
                    Password
                  </label>

                  {isLogin && (
                    <button
                      type="button"
                      onClick={() =>
                        setMessage("Password reset requires a connected authentication service.")
                      }
                      className="text-xs text-[#c49a62] transition hover:text-[#e0b77e]"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`${inputClass} pr-16`}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#c49a62] hover:text-[#e0b77e]"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-400">{errors.password}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={inputClass}
                    autoComplete="new-password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {!isLogin && (
                <label className="flex items-start gap-3 text-xs leading-5 text-[#a99888]">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#c49a62]"
                  />
                  <span>
                    I agree to the Terms of Service and Privacy Policy.
                  </span>
                </label>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#c49a62] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <span className="transition group-hover:translate-x-1">→</span>
              </button>

              {message && (
                <div
                  role="status"
                  className="rounded-xl border border-[#c49a62]/30 bg-[#c49a62]/10 p-4 text-sm leading-6 text-[#e0b77e]"
                >
                  {message}
                </div>
              )}
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#493629]" />
              <span className="text-xs uppercase tracking-widest text-[#806d5b]">
                Or
              </span>
              <div className="h-px flex-1 bg-[#493629]" />
            </div>

            <p className="text-center text-sm text-[#a99888]">
              {isLogin ? "New to Ember & Crust?" : "Already have an account?"}
              <button
                type="button"
                onClick={switchMode}
                className="ml-2 font-semibold text-[#c49a62] transition hover:text-[#e0b77e]"
              >
                {isLogin ? "Create an account" : "Sign in"}
              </button>
            </p>

            <div className="mt-10 border-t border-[#493629]/70 pt-6 text-center">
              <Link
                to="/"
                className="text-xs font-semibold uppercase tracking-widest text-[#806d5b] transition hover:text-[#c49a62]"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;

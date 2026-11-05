
import { Suspense, useEffect } from "react";

import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rewards from "./pages/Rewards";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

// Scroll to top
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, search]);

  return null;
}

// Loading Component
function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#17110e]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#c49a62]/20 border-t-[#c49a62]" />

        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#c49a62]">
          Loading Ember & Crust
        </p>
      </div>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#17110e] px-6 text-center text-[#f5eee5]">
      <p className="font-display text-8xl text-[#c49a62]">
        404
      </p>

      <h1 className="mt-5 font-display text-3xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
        Sorry, the page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e]"
      >
        Back to Home
      </Link>
    </main>
  );
}

// Main Layout
function AppLayout() {
  return (
    <>
      <ScrollToTop />

      <div
        id="top"
        className="flex min-h-screen flex-col bg-[#17110e]"
      >
        <Navbar />

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rewards" element={<Rewards />} />

              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}

// Main App
function App() {
  return (
    <CartProvider>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </CartProvider>
  );
}

export default App;

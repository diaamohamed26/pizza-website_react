
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Pizza,
  Search,
  ShoppingBag,
  Menu,
  X,
  UserRound,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Our Story", path: "/about" },
  { name: "Rewards", path: "/rewards" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-[13px] font-medium transition-colors duration-300 ${
      isActive
        ? "text-[#e9b968]"
        : "text-[#e7ded3] hover:text-[#e9b968]"
    }`;

  const cartLink = (
    <Link
      to="/cart"
      onClick={closeMenu}
      aria-label={`Shopping cart, ${cartCount} items`}
      className="group relative flex items-center justify-center p-2 text-[#d9ad6d] transition hover:text-white"
    >
      <ShoppingBag
        size={21}
        strokeWidth={1.7}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#e9b968] px-1 text-[10px] font-bold text-[#17100b]">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9b968]/10 bg-[#100b08]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 md:h-[85px] md:px-12">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <Pizza
            size={35}
            className="text-[#e9b968] transition-transform duration-500 group-hover:rotate-12"
            strokeWidth={1.3}
          />

          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-wide text-[#f7eee3] md:text-2xl">
              Ember <span className="text-[#e9b968]">&</span> Crust
            </span>

            <span className="text-[8px] tracking-[2px] text-[#bd955e] sm:text-[9px]">
              CRAFTED FOR PIZZA LOVERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <span className="relative py-2">
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#e9b968] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/search"
            aria-label="Search pizzas"
            className="p-2 text-[#d9ad6d] transition hover:scale-110 hover:text-white"
          >
            <Search size={21} strokeWidth={1.7} />
          </Link>

          <Link
            to="/auth"
            className="flex items-center gap-2 rounded-full border border-[#9f7b4a] px-5 py-2.5 text-sm text-[#e9b968] transition duration-300 hover:border-[#e9b968] hover:bg-[#e9b968] hover:text-[#21170d]"
          >
            <UserRound size={16} />
            Account
          </Link>

          {cartLink}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          {cartLink}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[#e9b968] transition hover:bg-[#e9b968]/10"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] border-t border-[#e9b968]/10 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden bg-[#17100b] px-7">
          <div className="flex flex-col gap-1 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-[#e9b968]/10 text-[#e9b968]"
                      : "text-[#e7ded3] hover:bg-[#e9b968]/5 hover:text-[#e9b968]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-3 flex flex-col gap-1 border-t border-[#e9b968]/10 pt-4">
              <Link
                to="/search"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#e9b968] transition hover:bg-[#e9b968]/10"
              >
                <Search size={18} />
                Search
              </Link>

              <Link
                to="/auth"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#e9b968] transition hover:bg-[#e9b968]/10"
              >
                <UserRound size={18} />
                My Account
              </Link>

              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-[#e9b968] transition hover:bg-[#e9b968]/10"
              >
                <span className="flex items-center gap-3">
                  <ShoppingBag size={18} />
                  Shopping Cart
                </span>

                <span className="rounded-full bg-[#e9b968] px-2 py-0.5 text-xs font-bold text-[#17100b]">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

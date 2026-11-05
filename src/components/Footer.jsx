
import { Link } from "react-router-dom";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[17px] w-[17px]" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.7">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.7">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L7.7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 1.5 2.8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.7">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { name: "Facebook", href: "https://facebook.com", icon: <span className="text-lg font-bold">f</span> },
  { name: "X", href: "https://x.com", icon: <span className="text-base font-bold">𝕏</span> },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Our Menu", path: "/menu" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Shopping Cart", path: "/cart" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#110c09] text-[#f5eee5]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-12">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="font-display text-3xl tracking-wide">
                EMBER <span className="text-[#c49a62]">&</span> CRUST
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Crafted with passion, baked with fire.
              Bringing authentic pizza experiences to your table.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-300 hover:border-[#c49a62] hover:bg-[#c49a62] hover:text-[#17110e]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/55">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition hover:text-[#c49a62]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
              Opening Hours
            </h3>

            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex flex-col gap-1">
                <span>Monday - Thursday</span>
                <span className="text-white">12 PM - 11 PM</span>
              </li>

              <li className="flex flex-col gap-1">
                <span>Friday - Sunday</span>
                <span className="text-white">12 PM - 1 AM</span>
              </li>
            </ul>

            <p className="mt-5 text-xs text-[#c49a62]">
              Fresh pizza, every single day.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a62]">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-[#c49a62]">
                  <LocationIcon />
                </span>
                <span>New Cairo, Egypt</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="shrink-0 text-[#c49a62]">
                  <PhoneIcon />
                </span>
                <a href="tel:+201000000000" className="transition hover:text-[#c49a62]">
                  +20 100 000 0000
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="shrink-0 text-[#c49a62]">
                  <MailIcon />
                </span>
                <a
                  href="mailto:hello@emberandcrust.com"
                  className="break-all transition hover:text-[#c49a62]"
                >
                  hello@emberandcrust.com
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c49a62] transition-all hover:gap-4"
            >
              Contact Us
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Ember & Crust. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/35">
            <Link to="/privacy" className="transition hover:text-[#c49a62]">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-[#c49a62]">
              Terms & Conditions
            </Link>
          </div>

          <a
            href="#top"
            className="text-xs uppercase tracking-widest text-[#c49a62] transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

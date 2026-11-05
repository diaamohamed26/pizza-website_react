
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "New Cairo, Egypt",
    detail: "Come and enjoy the Ember experience.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+20 100 000 0000",
    detail: "We're happy to hear from you.",
    href: "tel:+201000000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@emberandcrust.com",
    detail: "Send us your questions anytime.",
    href: "mailto:hello@emberandcrust.com",
  },
];

const openingHours = [
  { day: "Monday - Thursday", time: "12:00 PM - 11:00 PM" },
  { day: "Friday - Saturday", time: "12:00 PM - 12:00 AM" },
  { day: "Sunday", time: "1:00 PM - 11:00 PM" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Ember & Crust!

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappNumber = "201000000000";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#17110e] text-[#f5eee5]">

      {/* Hero */}
      <section className="relative border-b border-white/10 px-6 py-24 text-center md:py-32">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c49a62]/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c49a62]">
            We'd Love To Hear From You
          </span>

          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            Let's Start a
            <span className="block text-[#c49a62]">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/50 md:text-base">
            Have a question, a suggestion, or just want to say hello?
            Our team is always ready to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border border-white/10 bg-[#211812] p-8 transition hover:border-[#c49a62]/40"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-[#c49a62]/30 text-[#c49a62]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-7 font-display text-2xl">
                  {item.title}
                </h3>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block break-words text-sm text-[#c49a62] hover:text-[#e0b77e]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-[#c49a62]">
                    {item.value}
                  </p>
                )}

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form + Hours */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-5">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-[#211812] p-7 md:p-10 lg:col-span-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
            Get In Touch
          </span>

          <h2 className="mt-4 font-display text-4xl">
            Send Us a Message
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40">
            Fill out the form below and we'll get back to you.
          </p>

          {submitted && (
            <div className="mt-6 flex items-center gap-3 border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
              <CheckCircle2 size={18} />
              Your message is ready in WhatsApp. Please send it there.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-9 space-y-6">

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs text-white/60">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-white/10 bg-[#17110e] px-4 py-4 text-sm outline-none transition placeholder:text-white/20 focus:border-[#c49a62]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs text-white/60">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-white/10 bg-[#17110e] px-4 py-4 text-sm outline-none transition placeholder:text-white/20 focus:border-[#c49a62]"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs text-white/60">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full border border-white/10 bg-[#17110e] px-4 py-4 text-sm outline-none transition placeholder:text-white/20 focus:border-[#c49a62]"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs text-white/60">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                required
                className="w-full resize-none border border-white/10 bg-[#17110e] px-4 py-4 text-sm outline-none transition placeholder:text-white/20 focus:border-[#c49a62]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#c49a62] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#17110e] transition hover:bg-[#e0b77e] sm:w-auto"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </motion.div>

        {/* Opening Hours */}
        <motion.aside
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="border border-white/10 bg-[#211812] p-8">
            <div className="flex items-center gap-3 text-[#c49a62]">
              <Clock size={22} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Opening Hours
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl">
              Come Visit Us
            </h3>

            <div className="mt-8 space-y-5">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-xs text-white/50">
                    {item.day}
                  </span>

                  <span className="text-xs font-medium text-[#c49a62]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-white/30">
              Opening hours are sample information. Please confirm
              the actual schedule before publishing.
            </p>
          </div>

          {/* Quick Support */}
          <div className="border border-[#c49a62]/30 bg-[#241a14] p-8">
            <div className="flex items-center gap-3 text-[#c49a62]">
              <MessageCircle size={22} />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Quick Support
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl">
              Need a Quick Answer?
            </h3>

            <p className="mt-3 text-xs leading-7 text-white/40">
              Reach out to us directly on WhatsApp for quick assistance.
            </p>

            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#c49a62] hover:text-[#e0b77e]"
            >
              Chat With Us
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.aside>
      </section>

      {/* Social Media */}
      <section className="border-t border-white/10 px-6 py-16 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
          Stay Connected
        </span>

        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          Follow the Flavor
        </h2>

        <p className="mt-4 text-sm text-white/40">
          Follow us for fresh updates, offers, and delicious moments.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center border border-white/10 px-6 text-xs font-semibold text-[#c49a62] transition hover:border-[#c49a62] hover:bg-[#c49a62] hover:text-[#17110e]"
          >
            INSTAGRAM
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center border border-white/10 px-6 text-xs font-semibold text-[#c49a62] transition hover:border-[#c49a62] hover:bg-[#c49a62] hover:text-[#17110e]"
          >
            FACEBOOK
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;

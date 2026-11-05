
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Star,
  X,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const pizzas = [
  {
    id: 1,
    name: "Pepperoni Royale",
    description:
      "Premium pepperoni, melted mozzarella, rich tomato sauce and fresh herbs.",
    price: 249,
    category: "Meat",
    tag: "BEST SELLER",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=85",
  },
  {
    id: 2,
    name: "Classic Margherita",
    description:
      "Fresh basil, creamy mozzarella and our signature tomato sauce.",
    price: 199,
    category: "Vegetarian",
    tag: "CLASSIC",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=85",
  },
  {
    id: 3,
    name: "Truffle Mushroom",
    description:
      "Premium mushrooms, creamy cheese and an elegant truffle finish.",
    price: 289,
    category: "Special",
    tag: "CHEF'S CHOICE",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85",
  },
  {
    id: 4,
    name: "Four Cheese",
    description:
      "A delicious combination of four rich cheeses on a crispy crust.",
    price: 269,
    category: "Vegetarian",
    tag: "POPULAR",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&q=85",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    description:
      "Grilled chicken, smoky BBQ sauce, mozzarella and caramelized onions.",
    price: 279,
    category: "Meat",
    tag: "FAVORITE",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=700&q=85",
  },
  {
    id: 6,
    name: "Italian Garden",
    description:
      "Fresh vegetables, olives, mushrooms, basil and mozzarella.",
    price: 229,
    category: "Vegetarian",
    tag: "FRESH",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=85",
  },
  {
    id: 7,
    name: "Spicy Inferno",
    description:
      "Spicy beef, jalapeños, pepperoni and our signature hot sauce.",
    price: 299,
    category: "Meat",
    tag: "HOT",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&q=85",
  },
  {
    id: 8,
    name: "Ember Supreme",
    description:
      "Our signature creation with premium meats, vegetables and special sauce.",
    price: 329,
    category: "Special",
    tag: "SIGNATURE",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85",
  },
];

const categories = [
  "All",
  "Classic",
  "Meat",
  "Vegetarian",
  "Special",
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedPizzaId, setAddedPizzaId] = useState(null);

  const { addToCart, cartCount } = useCart();

  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) => {
      const matchesCategory =
        activeCategory === "All" ||
        pizza.category === activeCategory ||
        (activeCategory === "Classic" && pizza.tag === "CLASSIC");

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        pizza.name.toLowerCase().includes(query) ||
        pizza.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    setAddedPizzaId(pizza.id);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#100b08] text-[#f7eee3]">

      {/* MENU HERO */}
      <section className="relative overflow-hidden border-b border-[#d8ad6c]/10 bg-[radial-gradient(ellipse_at_center,#382316_0%,#17100b_55%,#100b08_100%)] px-6 py-24 text-center md:py-32">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full border border-[#d8ad6c]/10" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#d8ad6c]/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[5px] text-[#c49a62]">
            FRESH FROM OUR KITCHEN
          </span>

          <h1 className="mt-7 font-serif text-5xl leading-tight md:text-7xl">
            Our Delicious
            <br />
            <span className="italic text-[#d8ad6c]">Menu.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#b49a7c]">
            Discover handcrafted pizzas made with passion,
            fresh ingredients and unforgettable flavors.
            Find your perfect slice.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3 text-xs tracking-widest text-[#d8ad6c]">
            <Flame size={17} />
            CRAFTED WITH PASSION
          </div>
        </motion.div>
      </section>

      {/* MENU CONTENT */}
      <section className="mx-auto max-w-[1450px] px-6 py-20 md:px-12 lg:px-16">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[4px] text-[#c49a62]">
              EXPLORE OUR SELECTION
            </span>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Find Your{" "}
              <span className="italic text-[#d8ad6c]">Favorite</span>
            </h2>
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-3 text-sm text-[#d8ad6c] transition hover:text-white"
          >
            <ShoppingBag size={19} />
            View Your Cart
            <span className="rounded-full bg-[#c49a62] px-2 py-1 text-xs font-bold text-[#17100b]">
              {cartCount}
            </span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Search */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#c49a62]"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your favorite pizza..."
              className="w-full rounded-sm border border-[#d8ad6c]/20 bg-[#19110c] py-4 pl-14 pr-12 text-sm text-[#f7eee3] outline-none transition placeholder:text-[#806b55] focus:border-[#d8ad6c]"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c49a62] hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#aa9277]">
            <SlidersHorizontal size={17} />
            FILTER MENU
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-7 py-3 text-xs tracking-wide transition ${
                activeCategory === category
                  ? "border-[#c49a62] bg-[#c49a62] font-semibold text-[#17100b]"
                  : "border-[#d8ad6c]/20 bg-[#19110c] text-[#b49a7c] hover:border-[#c49a62] hover:text-[#d8ad6c]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-[#b49a7c]">
            Showing{" "}
            <span className="text-[#d8ad6c]">
              {filteredPizzas.length}
            </span>{" "}
            delicious pizzas
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPizzas.map((pizza) => (
              <motion.article
                layout
                key={pizza.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-xl border border-[#d8ad6c]/10 bg-[#19110c] transition hover:-translate-y-2 hover:border-[#d8ad6c]/40"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 bg-[#c49a62] px-3 py-2 text-[9px] font-bold tracking-widest text-[#17100b]">
                    {pizza.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-xl">
                      {pizza.name}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-[#d8ad6c]">
                      <Star size={13} fill="currentColor" />
                      {pizza.rating}
                    </div>
                  </div>

                  <p className="mt-3 min-h-[60px] text-xs leading-6 text-[#aa9277]">
                    {pizza.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#d8ad6c]/10 pt-5">
                    <div>
                      <span className="text-[9px] tracking-widest text-[#aa9277]">
                        PRICE
                      </span>

                      <p className="mt-1 font-serif text-2xl text-[#d8ad6c]">
                        EGP {pizza.price}
                      </p>
                    </div>

                    <span className="rounded-full border border-[#d8ad6c]/20 px-3 py-2 text-[10px] text-[#b49a7c]">
                      {pizza.category}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(pizza)}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold tracking-wide transition ${
                      addedPizzaId === pizza.id
                        ? "bg-green-700 text-white"
                        : "bg-[#c49a62] text-[#17100b] hover:bg-[#e9b968]"
                    }`}
                  >
                    {addedPizzaId === pizza.id ? (
                      <>
                        <Check size={16} />
                        ADDED TO CART
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        ADD TO CART
                      </>
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPizzas.length === 0 && (
          <div className="py-24 text-center">
            <Search
              size={45}
              className="mx-auto text-[#c49a62]"
            />

            <h3 className="mt-6 font-serif text-3xl">
              No Pizzas Found
            </h3>

            <p className="mt-3 text-sm text-[#aa9277]">
              Try another search or explore a different category.
            </p>

            <button
              onClick={clearFilters}
              className="mt-7 rounded-full bg-[#c49a62] px-8 py-3 text-xs font-semibold text-[#17100b] transition hover:bg-[#e9b968]"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-[#d8ad6c]/10 bg-[#19110c] px-6 py-20 text-center">
        <span className="text-xs tracking-[4px] text-[#c49a62]">
          GOOD FOOD. GOOD MOMENTS.
        </span>

        <h2 className="mt-5 font-serif text-4xl md:text-6xl">
          Your Table Is{" "}
          <span className="italic text-[#d8ad6c]">Waiting.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#aa9277]">
          Explore our flavors and discover why every slice
          at Ember & Crust is worth sharing.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e9b968] px-10 py-4 text-sm font-bold text-[#21170d] transition hover:bg-[#f5cd87]"
        >
          GET IN TOUCH
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

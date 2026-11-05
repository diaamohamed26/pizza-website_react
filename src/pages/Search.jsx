
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const pizzas = [
  {
    id: 1,
    name: "Pepperoni Royale",
    category: "Meat",
    price: 249,
    description: "Classic pepperoni, mozzarella, rich tomato sauce and fresh herbs.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=85",
  },
  {
    id: 2,
    name: "Classic Margherita",
    category: "Vegetarian",
    price: 199,
    description: "Fresh mozzarella, tomato sauce, basil and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85",
  },
  {
    id: 3,
    name: "Truffle Mushroom",
    category: "Special",
    price: 289,
    description: "Wild mushrooms, creamy truffle sauce and premium mozzarella.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85",
  },
  {
    id: 4,
    name: "Four Cheese",
    category: "Vegetarian",
    price: 269,
    description: "A delicious combination of four premium Italian cheeses.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&q=85",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    category: "Meat",
    price: 279,
    description: "Grilled chicken, smoky BBQ sauce, onions and mozzarella.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85",
  },
  {
    id: 6,
    name: "Italian Garden",
    category: "Vegetarian",
    price: 229,
    description: "Fresh vegetables, olives, mushrooms and Italian herbs.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=85",
  },
  {
    id: 7,
    name: "Spicy Inferno",
    category: "Meat",
    price: 299,
    description: "Spicy beef, jalapeños, chili flakes and signature hot sauce.",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=85",
  },
  {
    id: 8,
    name: "Ember Supreme",
    category: "Special",
    price: 329,
    description: "Our signature pizza with premium toppings and special sauce.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=85",
  },
];

const categories = ["All", "Meat", "Vegetarian", "Special"];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedPizzaId, setAddedPizzaId] = useState(null);

  const { addToCart, cartCount } = useCart();

  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) => {
      const matchesSearch =
        pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pizza.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pizza.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        pizza.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    setAddedPizzaId(pizza.id);
  };

  return (
    <main className="min-h-screen bg-[#17110e] px-4 py-14 text-[#f5eee5] sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
            Find Your Favorite
          </p>

          <h1 className="font-serif text-4xl font-bold sm:text-6xl">
            Search Our <span className="text-[#c49a62]">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#a99888]">
            Looking for something delicious? Discover your next favorite
            pizza from our handcrafted collection.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="mx-auto mb-8 max-w-3xl">
          <div className="group flex items-center gap-4 rounded-2xl border border-[#493629] bg-[#211812] px-5 py-2 transition focus-within:border-[#c49a62]">
            <SearchIcon
              size={23}
              className="flex-shrink-0 text-[#c49a62]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pizza, ingredients, or category..."
              className="h-14 w-full bg-transparent text-sm text-[#f5eee5] outline-none placeholder:text-[#806d5b]"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="text-[#a99888] transition hover:text-[#c49a62]"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-2.5 text-xs font-semibold transition ${
                activeCategory === category
                  ? "border-[#c49a62] bg-[#c49a62] text-[#17110e]"
                  : "border-[#493629] text-[#c9b9a8] hover:border-[#c49a62] hover:text-[#c49a62]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Header */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#493629] pb-5">
          <div>
            <h2 className="font-serif text-2xl font-bold">
              {searchTerm ? "Search Results" : "Explore Our Pizzas"}
            </h2>

            <p className="mt-2 text-xs text-[#a99888]">
              {filteredPizzas.length} delicious{" "}
              {filteredPizzas.length === 1 ? "result" : "results"} found
            </p>
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-sm text-[#c49a62] transition hover:text-[#e0b77e]"
          >
            <ShoppingBag size={17} />
            View Cart ({cartCount})
          </Link>
        </div>

        {/* Pizza Grid */}
        <AnimatePresence mode="wait">
          {filteredPizzas.length > 0 ? (
            <motion.div
              key={`${searchTerm}-${activeCategory}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredPizzas.map((pizza, index) => (
                <motion.article
                  key={pizza.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-2xl border border-[#493629]/70 bg-[#211812] transition duration-300 hover:-translate-y-1 hover:border-[#c49a62]/50"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17110e]/70 to-transparent" />

                    <span className="absolute bottom-4 left-4 rounded-full border border-[#c49a62]/50 bg-[#17110e]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#e0b77e] backdrop-blur">
                      {pizza.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold transition group-hover:text-[#c49a62]">
                      {pizza.name}
                    </h3>

                    <p className="mt-3 min-h-[60px] text-xs leading-6 text-[#a99888]">
                      {pizza.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#493629] pt-4">
                      <span className="text-lg font-bold text-[#c49a62]">
                        EGP {pizza.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(pizza)}
                        className="rounded-lg bg-[#c49a62] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
                      >
                        {addedPizzaId === pizza.id ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-[#493629] bg-[#211812] px-6 py-20 text-center"
            >
              <div className="mb-5 flex justify-center">
                <SearchIcon size={45} className="text-[#806d5b]" />
              </div>

              <h3 className="font-serif text-2xl font-bold">
                No Pizzas Found
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#a99888]">
                We couldn't find anything matching your search.
                Try another name or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-7 rounded-xl bg-[#c49a62] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-[#493629] bg-gradient-to-r from-[#211812] to-[#2b1d13] p-8 text-center sm:p-12">
          <h2 className="font-serif text-3xl font-bold">
            Still <span className="text-[#c49a62]">Hungry?</span>
          </h2>

          <p className="mt-3 text-sm text-[#a99888]">
            Explore our full menu and discover something special.
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#c49a62] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#17110e] transition hover:bg-[#e0b77e]"
          >
            Explore Full Menu
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
}

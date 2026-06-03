import { useState, useMemo } from "react";
const PRODUCTS = [
  // African Food Vendors
  { id: 1, name: "Egusi Melon Seeds (5kg)", vendor: "Lagos Fresh Market", category: "african-food", price: 28, location: "Lagos, NG", rating: 4.8, reviews: 142, badge: "Best Seller", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg" },
  { id: 2, name: "Dried Crayfish Premium Pack", vendor: "Mama's Pantry", category: "african-food", price: 18, location: "Abuja, NG", rating: 4.6, reviews: 87, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg" },
  { id: 3, name: "Ogbono Seeds (2kg)", vendor: "West Africa Goods", category: "african-food", price: 22, location: "Maryland, US", rating: 4.9, reviews: 210, badge: "Top Rated", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg" },
  { id: 4, name: "Palm Oil (Cold Pressed, 5L)", vendor: "Delta Foods Co.", category: "african-food", price: 35, location: "Delta, NG", rating: 4.7, reviews: 193, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg" },
  { id: 5, name: "Eba Garri (Fine Grade, 10kg)", vendor: "Lagos Fresh Market", category: "african-food", price: 15, location: "Lagos, NG", rating: 4.5, reviews: 64, badge: "New Arrival", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg" },
  { id: 6, name: "Locust Beans (Iru) 500g", vendor: "Mama's Pantry", category: "african-food", price: 12, location: "Abuja, NG", rating: 4.4, reviews: 55, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg" },

  // Fashion & Clothing
  { id: 7, name: "Ankara Print Maxi Dress", vendor: "Kente Couture", category: "fashion", price: 65, location: "Accra, GH", rating: 4.9, reviews: 312, badge: "Best Seller", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" },
  { id: 8, name: "Adire Tie-Dye Shirt (Unisex)", vendor: "Yoruba Threads", category: "fashion", price: 42, location: "Lagos, NG", rating: 4.7, reviews: 178, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg" },
  { id: 9, name: "Kente Woven Dashiki Set", vendor: "Kente Couture", category: "fashion", price: 89, location: "Accra, GH", rating: 4.8, reviews: 241, badge: "Top Rated", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg" },
  { id: 10, name: "African Print Headwrap Gele", vendor: "Naija Styles", category: "fashion", price: 24, location: "Lagos, NG", rating: 4.6, reviews: 98, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg" },
  { id: 11, name: "Batik Linen Trousers", vendor: "Yoruba Threads", category: "fashion", price: 55, location: "Lagos, NG", rating: 4.5, reviews: 72, badge: "New Arrival", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" },
  { id: 12, name: "Embroidered Agbada Set", vendor: "Naija Styles", category: "fashion", price: 120, location: "Abuja, NG", rating: 4.9, reviews: 156, badge: "Premium", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg" },

  // Home & Living
  { id: 13, name: "Hand-Carved Wooden Mask", vendor: "African Artisans", category: "home-living", price: 78, location: "Kumasi, GH", rating: 4.8, reviews: 89, badge: "Handcrafted", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg" },
  { id: 14, name: "Woven Sisal Basket Set (3pc)", vendor: "Savannah Crafts", category: "home-living", price: 45, location: "Nairobi, KE", rating: 4.7, reviews: 134, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg" },
  { id: 15, name: "Beaded Throw Cushion Cover", vendor: "Zulu Designs", category: "home-living", price: 32, location: "Durban, ZA", rating: 4.5, reviews: 67, badge: "New Arrival", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg" },
  { id: 16, name: "Terracotta Cooking Pot (Large)", vendor: "African Artisans", category: "home-living", price: 58, location: "Kumasi, GH", rating: 4.6, reviews: 101, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1761835851/QuinnDaisies/165478_jbtjkf.jpg" },

  // Beauty & Wellness
  { id: 17, name: "Shea Butter Raw (500g)", vendor: "Pure Africa Beauty", category: "beauty", price: 19, location: "Maryland, US", rating: 4.9, reviews: 428, badge: "Best Seller", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png" },
  { id: 18, name: "Black Soap Bar (Dudu Osun)", vendor: "Mama's Pantry", category: "beauty", price: 14, location: "Lagos, NG", rating: 4.7, reviews: 306, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1761822587/QuinnDaisies/10382_ixmdn7.jpg" },
  { id: 19, name: "Moringa Leaf Powder (200g)", vendor: "Pure Africa Beauty", category: "beauty", price: 26, location: "Maryland, US", rating: 4.8, reviews: 192, badge: "Top Rated", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1761784412/QuinnDaisies/2_piuplt.jpg" },
  { id: 20, name: "Baobab Oil Serum 50ml", vendor: "Zulu Designs", category: "beauty", price: 38, location: "Durban, ZA", rating: 4.6, reviews: 87, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg" },

  // Electronics & Accessories
  { id: 21, name: "Solar Powered Phone Charger", vendor: "TechAfrica Hub", category: "electronics", price: 49, location: "Maryland, US", rating: 4.5, reviews: 211, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg" },
  { id: 22, name: "Beaded Leather Phone Case", vendor: "Naija Styles", category: "electronics", price: 28, location: "Lagos, NG", rating: 4.4, reviews: 76, badge: "New Arrival", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1729542805/Quinn%20Daisies%20Logistics/logistics-means-transport-together-with-technological-futuristic-holograms_2_lb4ten.jpg" },
  { id: 23, name: "Solar Lantern (Rechargeable)", vendor: "TechAfrica Hub", category: "electronics", price: 62, location: "Maryland, US", rating: 4.7, reviews: 143, badge: "Top Rated", image: "https://res.cloudinary.com/renaissance-images/image/upload/v1730132938/Quinn%20Daisies%20Logistics/transport-logistics-concept_2_thjbc1.jpg" },
  { id: 24, name: "Handwoven Leather Wallet", vendor: "Savannah Crafts", category: "electronics", price: 33, location: "Nairobi, KE", rating: 4.6, reviews: 94, badge: null, image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg" },
];

const CATEGORIES = [
  { id: "all", label: "All Products", icon: "🌍" },
  { id: "african-food", label: "African Food Vendors", icon: "🌾" },
  { id: "fashion", label: "Fashion & Clothing", icon: "👗" },
  { id: "home-living", label: "Home & Living", icon: "🏺" },
  { id: "beauty", label: "Beauty & Wellness", icon: "✨" },
  { id: "electronics", label: "Electronics & Accessories", icon: "⚡" },
];

const LOCATIONS = ["All Locations", "Lagos, NG", "Abuja, NG", "Delta, NG", "Maryland, US", "Accra, GH", "Nairobi, KE", "Durban, ZA", "Kumasi, GH"];

const PRICE_RANGES = [
  { id: "all", label: "Any Price" },
  { id: "0-20", label: "Under $20", min: 0, max: 20 },
  { id: "20-50", label: "$20 – $50", min: 20, max: 50 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "100+", label: "Over $100", min: 100, max: Infinity },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "New Arrivals" },
];

const PER_PAGE = 8;

// ─── STAR RATING ─────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(rating) ? "#f9a144" : "none"} stroke={s <= Math.round(rating) ? "#f9a144" : "#808080"} strokeWidth="1.2">
          <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9.2,11 6,9.2 2.8,11 3.5,7.5 1,5 4.5,4.5" />
        </svg>
      ))}
    </div>
  );
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
function Badge({ text }) {
  const styles = {
    "Best Seller": { bg: "#f9a144", color: "#2b1600" },
    "Top Rated": { bg: "#f9a144", color: "#2b1600" },
    "New Arrival": { bg: "transparent", color: "#f9a144", border: "1px solid #f9a14488" },
    "Premium": { bg: "#2b1600", color: "#f9a144", border: "1px solid #f9a14488" },
    "Handcrafted": { bg: "#1a1a1a", color: "#f9a144", border: "1px solid #f9a14488" },
  };
  const s = styles[text] || { bg: "#2b1600", color: "#f9a144" };
  return (
    <span style={{
      fontSize: "0.6em", fontWeight: 600, textTransform: "uppercase",
      letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 50,
      background: s.bg, color: s.color, border: s.border || "none",
      display: "inline-block", whiteSpace: "nowrap",
    }}>{text}</span>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  const handleCart = (e) => {
    e.stopPropagation();
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 1800);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a1a",
        borderRadius: 25,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: hovered ? "1px solid #f9a14466" : "1px solid #2b2b2b",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{ width: "100%", height: 220, overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          transition: "background 0.3s ease",
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          padding: "16px",
        }}>
          {hovered && (
            <button
              onClick={handleCart}
              style={{
                background: cartAdded ? "#2b1600" : "#f9a144",
                color: cartAdded ? "#f9a144" : "#2b1600",
                border: "none", borderRadius: 50, padding: "8px 22px",
                fontSize: "0.75em", fontWeight: 600, cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "0.06em",
                transition: "all 0.2s ease",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              {cartAdded ? "✓ Added" : "Add to Cart"}
            </button>
          )}
        </div>

        {/* Badge top-left */}
        {product.badge && (
          <div style={{ position: "absolute", top: 12, left: 12 }}>
            <Badge text={product.badge} />
          </div>
        )}

        {/* Wishlist top-right */}
        <button
          style={{
            position: "absolute", top: 12, right: 12,
            background: "rgba(0,0,0,0.6)", border: "none",
            borderRadius: "50%", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 14, color: "#808080",
            backdropFilter: "blur(4px)",
          }}
          aria-label="Add to wishlist"
        >♡</button>
      </div>

      {/* Content */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {/* Location pill */}
        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          fontSize: "0.62em", color: "#808080", textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}>
          <span style={{ color: "#f9a14499" }}>◎</span>
          {product.location}
        </div>

        <p style={{
          fontSize: "0.85em", color: "#ffffff", fontWeight: 500,
          lineHeight: 1.4, margin: 0,
        }}>{product.name}</p>

        <p style={{ fontSize: "0.72em", color: "#808080", margin: 0, lineHeight: 1.4 }}>
          by {product.vendor}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: "0.65em", color: "#808080" }}>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginTop: "auto", paddingTop: 8,
          borderTop: "1px solid #2b2b2b",
        }}>
          <span style={{ fontSize: "1em", fontWeight: 700, color: "#f9a144" }}>
            ${product.price}
          </span>
          <span style={{
            fontSize: "0.62em", color: "#808080",
            padding: "3px 10px", borderRadius: 50,
            background: "#111", border: "1px solid #2b2b2b",
          }}>
            {CATEGORIES.find(c => c.id === product.category)?.icon} {" "}
            {CATEGORIES.find(c => c.id === product.category)?.label.split(" ")[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── PAGINATION ───────────────────────────────────────────────────────────────
function Pagination({ current, total, onPageChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const maxVisible = 5;
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = Math.min(total, start + maxVisible - 1);
  if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);
  const visible = pages.slice(start - 1, end);

  const btnStyle = (active, disabled) => ({
    width: 38, height: 38, borderRadius: 50,
    display: "flex", alignItems: "center", justifyContent: "center",
    border: active ? "1px solid #f9a144" : "1px solid #2b2b2b",
    background: active ? "#f9a144" : "transparent",
    color: active ? "#2b1600" : disabled ? "#444" : "#ffffff",
    fontSize: "0.8em", fontWeight: active ? 700 : 400,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
  });

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 6, paddingTop: 32, paddingBottom: 16, flexWrap: "wrap",
    }}>
      <button style={btnStyle(false, current === 1)} onClick={() => !( current === 1) && onPageChange(current - 1)} disabled={current === 1}>‹</button>
      {start > 1 && (
        <>
          <button style={btnStyle(false, false)} onClick={() => onPageChange(1)}>1</button>
          {start > 2 && <span style={{ color: "#444", fontSize: "0.8em" }}>…</span>}
        </>
      )}
      {visible.map(p => (
        <button key={p} style={btnStyle(p === current, false)} onClick={() => onPageChange(p)}>{p}</button>
      ))}
      {end < total && (
        <>
          {end < total - 1 && <span style={{ color: "#444", fontSize: "0.8em" }}>…</span>}
          <button style={btnStyle(false, false)} onClick={() => onPageChange(total)}>{total}</button>
        </>
      )}
      <button style={btnStyle(false, current === total)} onClick={() => !(current === total) && onPageChange(current + 1)} disabled={current === total}>›</button>
    </div>
  );
}

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCategory !== "all") list = list.filter(p => p.category === activeCategory);

    if (selectedLocation !== "All Locations") list = list.filter(p => p.location === selectedLocation);

    if (selectedPriceRange !== "all") {
      const range = PRICE_RANGES.find(r => r.id === selectedPriceRange);
      if (range) list = list.filter(p => p.price >= range.min && p.price <= range.max);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.vendor.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "newest": list = list.filter(p => p.badge === "New Arrival").concat(list.filter(p => p.badge !== "New Arrival")); break;
      default: break;
    }

    return list;
  }, [activeCategory, selectedLocation, selectedPriceRange, sortBy, searchQuery]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const resetFilters = () => {
    setActiveCategory("all");
    setSelectedLocation("All Locations");
    setSelectedPriceRange("all");
    setSearchQuery("");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const hasActiveFilters = activeCategory !== "all" || selectedLocation !== "All Locations" || selectedPriceRange !== "all" || searchQuery.trim();

  // Reset page when filters change
  const handleCategoryChange = (cat) => { setActiveCategory(cat); setCurrentPage(1); };
  const handleLocationChange = (loc) => { setSelectedLocation(loc); setCurrentPage(1); };
  const handlePriceChange = (p) => { setSelectedPriceRange(p); setCurrentPage(1); };
  const handleSearch = (v) => { setSearchQuery(v); setCurrentPage(1); };

  // ── STYLES ─────────────────────────────────────────────────────────────────
  const sectionLabel = {
    fontSize: "0.6em", fontWeight: 600, letterSpacing: "0.1em",
    textTransform: "uppercase", color: "#f9a144",
    padding: "5px 18px", borderRadius: 50,
    background: "#2b1600", display: "inline-block", marginBottom: 12,
  };

  const selectStyle = {
    width: "100%", padding: "10px 36px 10px 14px", borderRadius: 10,
    background: "#111", color: "#ffffff",
    border: "1px solid #2b2b2b", fontSize: "0.78em",
    outline: "none", appearance: "none", cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f9a144' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
  };

  return (
    <div style={{ background: "#000000", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", color: "#ffffff" }}>

      {/* ─── HERO BANNER ────────────────────────────────────────────────────── */}
      <div style={{
        position: "relative", overflow: "hidden",
        padding: "120px 10% 80px",
        background: "linear-gradient(135deg, #000 60%, #1a0a00 100%)",
        borderBottom: "1px solid #1a1a1a",
      }}>
        {/* Decorative ring */}
        <div style={{
          position: "absolute", right: "-5%", top: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          border: "1px solid #f9a14422",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: "3%", top: "0%",
          width: 320, height: 320, borderRadius: "50%",
          border: "1px solid #f9a14414",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 700 }}>
          <span style={sectionLabel}>Quinn Daisies Marketplace</span>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700,
            lineHeight: 1.1, color: "#ffffff", marginBottom: 16,
            textTransform: "uppercase",
          }}>
            African Goods,<br />
            <span style={{ color: "#f9a144" }}>Delivered Globally</span>
          </h1>
          <p style={{ fontSize: "0.9em", color: "#808080", maxWidth: 520, lineHeight: 1.8, marginBottom: 32 }}>
            Source authentic African food, fashion, home goods, and more — from trusted vendors across Nigeria, Ghana, Kenya, and beyond.
          </p>

          {/* Search bar */}
          <div style={{
            display: "flex", gap: 0, maxWidth: 580,
            background: "#111", borderRadius: 50,
            border: "1px solid #2b2b2b", overflow: "hidden",
          }}>
            <div style={{ padding: "0 16px", display: "flex", alignItems: "center", color: "#808080" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products, vendors…"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                flex: 1, background: "transparent", border: "none",
                outline: "none", color: "#ffffff", fontSize: "0.85em",
                padding: "14px 0",
                fontFamily: "'Poppins', sans-serif",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                style={{
                  background: "transparent", border: "none",
                  color: "#808080", cursor: "pointer",
                  padding: "0 12px", fontSize: 18,
                }}
              >×</button>
            )}
            <button
              style={{
                background: "#f9a144", border: "none", color: "#2b1600",
                fontWeight: 700, fontSize: "0.78em", textTransform: "uppercase",
                letterSpacing: "0.06em", padding: "0 24px", cursor: "pointer",
                borderRadius: "0 50px 50px 0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >Search</button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap",
        }}>
          {[
            { num: "500+", label: "Products Listed" },
            { num: "80+", label: "Verified Vendors" },
            { num: "12", label: "African Countries" },
            { num: "4.8★", label: "Avg. Vendor Rating" },
          ].map(s => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "1.3em", fontWeight: 700, color: "#f9a144" }}>{s.num}</span>
              <span style={{ fontSize: "0.65em", color: "#808080", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CATEGORY TABS ─────────────────────────────────────────────────── */}
      <div style={{
        padding: "0 10%",
        borderBottom: "1px solid #1a1a1a",
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{
          display: "flex", gap: 4, overflowX: "auto", paddingBottom: 1,
          scrollbarWidth: "none",
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                background: activeCategory === cat.id ? "#f9a144" : "transparent",
                color: activeCategory === cat.id ? "#2b1600" : "#808080",
                border: "none", cursor: "pointer",
                padding: "16px 20px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.72em", fontWeight: activeCategory === cat.id ? 700 : 400,
                textTransform: "uppercase", letterSpacing: "0.06em",
                whiteSpace: "nowrap", borderBottom: activeCategory === cat.id ? "2px solid #f9a144" : "2px solid transparent",
                transition: "all 0.2s ease",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div style={{ padding: "40px 10%", display: "flex", gap: "3em", alignItems: "flex-start" }}>

        {/* ── SIDEBAR FILTERS ─────────────────────────────────────────────── */}
        <aside style={{
          width: 260, minWidth: 260, flexShrink: 0,
          display: "flex", flexDirection: "column", gap: 24,
          position: "sticky", top: 80,
        }}>
          {/* Filter header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h3 style={{ fontSize: "0.85em", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
              Filters
            </h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                style={{
                  background: "transparent", border: "1px solid #f9a14466",
                  color: "#f9a144", borderRadius: 50, padding: "3px 12px",
                  fontSize: "0.62em", cursor: "pointer", textTransform: "uppercase",
                  fontFamily: "'Poppins', sans-serif", letterSpacing: "0.06em",
                }}
              >Clear All</button>
            )}
          </div>

          {/* Active filter chips */}
          {hasActiveFilters && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {activeCategory !== "all" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  background: "#2b1600", borderRadius: 50, padding: "4px 10px",
                  fontSize: "0.62em", color: "#f9a144",
                }}>
                  {CATEGORIES.find(c => c.id === activeCategory)?.label}
                  <span style={{ cursor: "pointer", marginLeft: 2 }} onClick={() => handleCategoryChange("all")}>×</span>
                </div>
              )}
              {selectedLocation !== "All Locations" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  background: "#1a1a1a", borderRadius: 50, padding: "4px 10px",
                  fontSize: "0.62em", color: "#ffffff", border: "1px solid #2b2b2b",
                }}>
                  {selectedLocation}
                  <span style={{ cursor: "pointer", marginLeft: 2 }} onClick={() => handleLocationChange("All Locations")}>×</span>
                </div>
              )}
              {selectedPriceRange !== "all" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  background: "#1a1a1a", borderRadius: 50, padding: "4px 10px",
                  fontSize: "0.62em", color: "#ffffff", border: "1px solid #2b2b2b",
                }}>
                  {PRICE_RANGES.find(r => r.id === selectedPriceRange)?.label}
                  <span style={{ cursor: "pointer", marginLeft: 2 }} onClick={() => handlePriceChange("all")}>×</span>
                </div>
              )}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: "#1a1a1a" }} />

          {/* Price Range */}
          <div>
            <p style={{ fontSize: "0.7em", color: "#f9a144", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0", fontWeight: 600 }}>
              Price Range
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {PRICE_RANGES.map(range => (
                <label key={range.id} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  cursor: "pointer", padding: "8px 12px", borderRadius: 10,
                  background: selectedPriceRange === range.id ? "#2b1600" : "transparent",
                  border: selectedPriceRange === range.id ? "1px solid #f9a14455" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%",
                    border: `2px solid ${selectedPriceRange === range.id ? "#f9a144" : "#444"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {selectedPriceRange === range.id && (
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f9a144" }} />
                    )}
                  </div>
                  <input
                    type="radio" name="price" value={range.id}
                    checked={selectedPriceRange === range.id}
                    onChange={() => handlePriceChange(range.id)}
                    style={{ display: "none" }}
                  />
                  <span style={{ fontSize: "0.78em", color: selectedPriceRange === range.id ? "#f9a144" : "#888" }}>
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#1a1a1a" }} />

          {/* Location */}
          <div>
            <p style={{ fontSize: "0.7em", color: "#f9a144", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0", fontWeight: 600 }}>
              Location
            </p>
            <div style={{ position: "relative" }}>
              <select
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
                style={selectStyle}
              >
                {LOCATIONS.map(loc => (
                  <option key={loc} value={loc} style={{ background: "#111", color: "#ffffff" }}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ height: 1, background: "#1a1a1a" }} />

          {/* Category (sidebar version) */}
          <div>
            <p style={{ fontSize: "0.7em", color: "#f9a144", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0", fontWeight: 600 }}>
              Category
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {CATEGORIES.map(cat => {
                const count = cat.id === "all"
                  ? PRODUCTS.length
                  : PRODUCTS.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: activeCategory === cat.id ? "#2b1600" : "transparent",
                      border: activeCategory === cat.id ? "1px solid #f9a14455" : "1px solid transparent",
                      borderRadius: 10, padding: "8px 12px", cursor: "pointer",
                      transition: "all 0.2s ease", width: "100%",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 14 }}>{cat.icon}</span>
                      <span style={{
                        fontSize: "0.75em", textTransform: "uppercase",
                        color: activeCategory === cat.id ? "#f9a144" : "#888",
                        letterSpacing: "0.04em",
                      }}>{cat.label}</span>
                    </div>
                    <span style={{
                      fontSize: "0.62em", padding: "2px 8px", borderRadius: 50,
                      background: activeCategory === cat.id ? "#f9a14422" : "#1a1a1a",
                      color: activeCategory === cat.id ? "#f9a144" : "#555",
                      border: "1px solid #2b2b2b",
                    }}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA block */}
          <div style={{
            background: "#2b1600", borderRadius: 20, padding: 20,
            border: "1px solid #f9a14433",
          }}>
            <p style={{ fontSize: "0.72em", color: "#f9a144", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>
              Become a Vendor
            </p>
            <p style={{ fontSize: "0.7em", color: "#808080", lineHeight: 1.6, margin: "0 0 14px" }}>
              List your African goods and reach customers globally through our logistics network.
            </p>
            <button style={{
              width: "100%", background: "#f9a144", color: "#2b1600",
              border: "none", borderRadius: 50, padding: "9px 0",
              fontSize: "0.72em", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.08em", cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
            }}>
              Apply Now →
            </button>
          </div>
        </aside>

        {/* ── PRODUCT GRID ────────────────────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Results bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 24, flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ fontSize: "0.78em", color: "#808080", margin: 0 }}>
              Showing{" "}
              <span style={{ color: "#f9a144", fontWeight: 600 }}>
                {(currentPage - 1) * PER_PAGE + 1}–{Math.min(currentPage * PER_PAGE, filtered.length)}
              </span>{" "}
              of{" "}
              <span style={{ color: "#ffffff", fontWeight: 600 }}>{filtered.length}</span>{" "}
              products
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: "0.7em", color: "#808080", textTransform: "uppercase", letterSpacing: "0.06em" }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                style={{ ...selectStyle, width: "auto", minWidth: 180 }}
              >
                {SORT_OPTIONS.map(s => (
                  <option key={s.id} value={s.id} style={{ background: "#111", color: "#ffffff" }}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* No results */}
          {paginated.length === 0 && (
            <div style={{
              textAlign: "center", padding: "80px 0",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "#1a1a1a", border: "1px solid #2b2b2b",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32,
              }}>🌍</div>
              <h3 style={{ fontSize: "1em", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em" }}>No Products Found</h3>
              <p style={{ fontSize: "0.8em", color: "#808080" }}>Try adjusting your filters or search query.</p>
              <button onClick={resetFilters} style={{
                background: "#f9a144", color: "#2b1600", border: "none",
                borderRadius: 50, padding: "10px 28px", fontSize: "0.78em",
                fontWeight: 700, cursor: "pointer", textTransform: "uppercase",
                letterSpacing: "0.06em", fontFamily: "'Poppins', sans-serif",
              }}>
                Reset Filters
              </button>
            </div>
          )}

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5em",
          }}>
            {paginated.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              current={currentPage}
              total={totalPages}
              onPageChange={(p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          )}

          {/* Pagination info */}
          {totalPages > 1 && (
            <p style={{ textAlign: "center", fontSize: "0.7em", color: "#555", marginTop: 8 }}>
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
# 🍽️ THE TASTE HOUSE — Premium Reusable Restaurant & Dhaba Website Template

A modern, responsive, high-performance, and client-customizable website template for **Indian Restaurants, Highway Dhabas, Cafes, Family Restaurants, Pure Vegetarian / Non-Vegetarian Outlets, and Food Businesses**.

> **Commercial Objective:** Build once, customize for new clients in **30–60 minutes** without rewriting React code, and sell customized versions to restaurant & dhaba owners.

---

## 🌟 Key Features

- 🎯 **Single Central Configuration File (`src/config/restaurant.config.js`)**: All restaurant names, branding, categories, dishes, prices, photos, WhatsApp numbers, timings, facilities, FSSAI numbers, and Google Maps are controlled in one master file.
- 🌾 **Two Visual Modes**:
  - **Dhaba Mode**: Optimized for highway pit-stops, milestone directions, 70+ vehicle parking, outdoor khatiya/charpai seating, express 5-minute takeaway, and authentic tandoor teas.
  - **Restaurant Mode**: Optimized for fine dining, royal family banquet halls, elegant lighting, and master chef delicacies.
- 🎨 **Three Built-In Themes**:
  - **Theme A (Traditional Dhaba)**: Red (`#C8102E`) + Charcoal Black + Clean White.
  - **Theme B (Premium Dining)**: Slate Black (`#121826`) + Royal Gold (`#C59B27`) + Warm Cream (`#FAF7F2`).
  - **Theme C (Family Restaurant / Pure Veg)**: Warm Saffron Orange (`#EA580C`) + Forest Green (`#15803D`) + Warm White.
- 💬 **WhatsApp Ordering Engine**:
  - Interactive multi-dish cart drawer with quantity selector (`+` / `-`).
  - Supports **Takeaway (Self-Pickup)**, **Home Delivery**, and **Dine-In Table Orders**.
  - Generates perfectly prefilled WhatsApp messages:
    ```
    Hello! I want to place an order from THE TASTE HOUSE.

    Items:
    1. Paneer Butter Masala – 1
    2. Butter Roti – 4
    3. Jeera Rice – 1

    Order type: Takeaway

    Please confirm availability and total price.
    ```
- 🪑 **WhatsApp Table Reservation System**:
  - Validated reservation form (Name, Phone, Date, Time, Guests, Seating preference e.g. AC Family Hall or Outdoor Charpai).
  - Generates prefilled reservation enquiries.
  - Transparent enquiry disclaimer (no false payment claims).
- 📱 **Real Dynamic QR Code Generator (`qrcode.react`)**:
  - Automatically points to the restaurant's digital menu URL.
  - **Download as PNG** (high-res 512px) for social media or print.
  - **Download as clean SVG** for large flex banners and signboards.
  - **Printable Table Tent Standee View** with printer-friendly styling.
- 🇮🇳 **Bilingual Support (English & हिन्दी)**:
  - Instant one-click switch between English and Hindi across navigation, badges, cart labels, and buttons.
- 🔍 **Search & Category Filters**:
  - Real-time search by dish name, Hindi name, or ingredients.
  - Filters for **Pure Veg (Green Dot)**, **Non-Veg (Red Dot)**, **Chef Special**, **Dhaba Special**, and **Popular**.
  - 15 Supported Food Categories.
- 📜 **Download Menu PDF**:
  - Built-in PDF menu trigger for customers who want an offline copy.
- 📸 **Filterable Ambience Gallery & Lightbox**:
  - Food dishes, royal thalis, dining halls, highway charpai seating, live clay tandoor.
  - Responsive lightbox modal with keyboard navigation (Esc, Arrow Left, Arrow Right).
- 📍 **Local Highway SEO & Google Maps**:
  - Google Maps interactive iframe + direct turn-by-turn directions link.
  - Pre-configured Schema.org `Restaurant` & `Menu` JSON-LD structured data for Google Local Search.
  - Support for verified **FSSAI Food Safety Licence Number** in the footer and about section.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Modern restaurant cloche/flame favicon
│   ├── menu.pdf                # Downloadable PDF menu placeholder
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # Complete XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── CartDrawer.jsx          # WhatsApp ordering slide-over drawer
│   │   ├── DishCard.jsx            # Dish card with ₹ price, veg badge, spice level & add-to-cart
│   │   ├── FloatingActions.jsx     # Floating WhatsApp pulse button & quick action menu
│   │   ├── Footer.jsx              # Footer with FSSAI badge, timings, parking & delivery links
│   │   ├── Lightbox.jsx            # Fullscreen photo gallery viewer
│   │   ├── Navbar.jsx              # Responsive header, mode badge, language switcher & cart pill
│   │   ├── QRCodeModal.jsx         # Real QR generator with PNG/SVG download & table standee
│   │   ├── SEOHead.jsx             # Dynamic titles, meta tags & Schema.org JSON-LD
│   │   ├── SocialIcons.jsx         # Clean SVG icons for Instagram, Facebook & YouTube
│   │   ├── ThemePreviewToolbar.jsx # Real-time client preview toolbar (Mode, Theme, Language)
│   │   └── VegBadge.jsx            # Authentic Indian Veg/Non-Veg indicators
│   ├── config/
│   │   └── restaurant.config.js    # ⭐ THE MASTER CLIENT CONFIGURATION FILE ⭐
│   ├── context/
│   │   └── ConfigContext.jsx       # Global context for theme, mode, language, cart & WhatsApp API
│   ├── pages/
│   │   ├── About.jsx               # Page 2: Story, Master Chef, hygiene & ambience
│   │   ├── Contact.jsx             # Page 5: Location, Maps, Form A (Order) & Form B (Reservation)
│   │   ├── Gallery.jsx             # Page 4: Filterable photo grid & signature thali highlights
│   │   ├── Home.jsx                # Page 1: 15 comprehensive sections
│   │   └── Menu.jsx                # Page 3: Digital menu with 15 categories, search & INR prices
│   ├── styles/
│   │   └── index.css               # Tailwind directives & CSS variable definitions for Themes A, B, C
│   ├── App.jsx                     # Route architecture & layout container
│   └── main.jsx                    # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
pnpm install
# or: npm install
```

### 2. Start Development Server
```bash
pnpm run dev
# or: npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
pnpm run build
# or: npm run build
```
The optimized bundle is built into the `dist/` directory, ready to deploy.

---

## 🛠️ How to Customize for a New Client in 30–60 Minutes

You **NEVER** need to edit React page components. Simply open `src/config/restaurant.config.js` and update the sections below:

### Step 1: Business Information & Branding (5 mins)
```javascript
business: {
  name: "SHREE BALAJI DHABA & RESTAURANT",
  tagline: "DESI GHEE KA SHUDDH SWAAD",
  heroHeadline: "GOOD FOOD. GREAT TASTE. MEMORABLE MOMENTS.",
  category: "Highway Dhaba & Pure Veg Family Restaurant",
  establishedYear: "2015",
  fssai: {
    hasLicense: true,
    licenseNumber: "22621038000412", // Replace with client's actual FSSAI number
    label: "FSSAI Food Safety Registered",
  },
}
```

### Step 2: Choose Mode & Theme (2 mins)
```javascript
theme: {
  // 'dhaba' for highway outlets, 'restaurant' for urban fine-dining
  defaultMode: "dhaba",

  // 'theme-dhaba' (Red/Black), 'theme-luxury' (Black/Gold), 'theme-family' (Orange/Green)
  activeTheme: "theme-dhaba",

  // 'en' (English) or 'hi' (Hindi)
  defaultLanguage: "en",

  // Set to false before delivering to client so toolbar is hidden
  showPreviewToolbar: false, 
}
```

### Step 3: Phone, WhatsApp & Address (5 mins)
```javascript
contact: {
  phone: "+91 98765 00000",
  phoneCall: "+919876500000",
  whatsappNumber: "919876500000", // purely digits with 91 country code (no + or spaces)
  whatsappDisplay: "+91 98765 00000",
  email: "info@shreebalajidhaba.com",
  address: {
    line1: "NH-48, Delhi-Jaipur Expressway",
    line2: "Near Milestone 78, Behror Bypass",
    landmark: "Opposite IOCL Petrol Pump",
    city: "Behror",
    state: "Rajasthan",
    pincode: "301701",
    highwayInfo: "Ample bus and car parking, 24x7 clean washrooms & tea counter",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=...", // From Google Maps -> Share -> Embed a map
    directionsUrl: "https://maps.google.com/?q=Shree+Balaji+Dhaba+Behror",
  },
}
```

### Step 4: Social Media, Zomato & Swiggy Links (2 mins)
```javascript
integrations: {
  zomatoUrl: "https://www.zomato.com/restaurant-link",
  swiggyUrl: "https://www.swiggy.com/restaurant-link",
  qrMenuUrl: "https://clientdomain.com/menu",
  pdfMenuUrl: "/menu.pdf", // Place client's PDF into public/menu.pdf
}
```

### Step 5: Menu Categories & Dishes (20–30 mins)
Add, remove, reorder, or update dishes in `menuItems`:
```javascript
{
  id: "dish-01",
  name: "Dal Makhani Handi",
  nameHindi: "दाल मखनी हांडी",
  categoryId: "dal-paneer",
  price: 240,              // INR price in numbers
  description: "Slow-simmered black lentils with churned white butter.",
  image: "https://images.unsplash.com/...", // Or local path /images/dishes/...
  isVeg: true,             // true = Green Veg icon, false = Red Non-Veg
  isPopular: true,
  isChefSpecial: true,
  isDhabaSpecial: true,
  spicyLevel: 1,           // 1 to 3
  isAvailable: true,
}
```

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will auto-detect **Vite**.
5. Build Command: `pnpm run build` (or `npm run build`).
6. Output Directory: `dist`.
7. Click **Deploy**. Your website is live in ~45 seconds with automated HTTPS and CDN caching.

*For single-page client routing on Vercel, a `vercel.json` file can be added if needed:*
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com) and click **"Add new site" -> "Import an existing project"**.
2. Select your Git repository.
3. Build Settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

*For client routing on Netlify, create a `public/_redirects` file:*
```text
/*    /index.html   200
```

---

## 📄 License & Attribution

Designed and engineered as a high-standard, production-ready, reusable commercial template for Indian hospitality businesses. Feel free to customize and rebrand for your restaurant clients!

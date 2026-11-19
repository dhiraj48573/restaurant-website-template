/**
 * ============================================================================
 * THE CENTRAL RESTAURANT CONFIGURATION FILE
 * ============================================================================
 * 
 * WELCOME CLIENT DEVELOPER / DESIGNER!
 * To customize this entire website for a new client (Restaurant, Dhaba, Cafe,
 * Veg/Non-Veg outlet, Family diner), YOU ONLY NEED TO EDIT THIS SINGLE FILE!
 * 
 * Estimated customization time: 30–60 minutes.
 * 
 * Table of Contents:
 * 1. Business Info & Branding
 * 2. Theme & Visual Mode Configuration
 * 3. Highway & Dhaba Specifics
 * 4. Timings, Address & Google Maps
 * 5. Facilities & Amenities
 * 6. Social Media & Delivery Links (Zomato / Swiggy)
 * 7. About Us & Culinary Philosophy
 * 8. Menu Categories (15 supported categories)
 * 9. Digital Menu Items (INR prices, veg/non-veg, spicy levels)
 * 10. Verified Customer Testimonials
 * 11. Ambience & Food Photo Gallery
 * 12. Bilingual Translations (English & Hindi)
 * ============================================================================
 */

export const restaurantConfig = {
  // --------------------------------------------------------------------------
  // 1. BUSINESS INFO & BRANDING
  // --------------------------------------------------------------------------
  business: {
    name: "THE TASTE HOUSE",
    tagline: "AUTHENTIC TASTE. FRESH FOOD. HAPPY MOMENTS.",
    heroHeadline: "GOOD FOOD. GREAT TASTE. MEMORABLE MOMENTS.",
    heroSubheadline: "Experience authentic North Indian culinary traditions, rich tandoori platters, royal thalis, and comforting highway dhaba flavours made with 100% pure ingredients.",
    category: "Highway Dhaba & Family Restaurant",
    categoryType: "Multi-Cuisine & Traditional Indian", // e.g. Pure Veg, Multi-Cuisine, Non-Veg, Cafe
    establishedYear: "2012",
    demoNotice: "Sample demonstration content. Replace with verified owner-approved information.",
    
    // Verified FSSAI Registration (Display in footer & about page when provided by owner)
    fssai: {
      hasLicense: true,
      licenseNumber: "22621038000412",
      label: "FSSAI Food Safety Registered",
    },

    // Logo Configuration
    logo: {
      textPrimary: "THE TASTE",
      textSecondary: "HOUSE",
      tagline: "DHABA & FAMILY RESTAURANT",
      icon: "UtensilsCrossed", // Lucide icon
    },
  },

  // --------------------------------------------------------------------------
  // 2. THEME & VISUAL MODE CONFIGURATION
  // --------------------------------------------------------------------------
  theme: {
    // Default visual mode:
    // 'dhaba'       -> Traditional Indian Highway Dhaba layout, warm rustic feel, highway focus
    // 'restaurant'  -> Refined modern family & fine dining restaurant feel
    defaultMode: "dhaba",

    // Default color theme:
    // 'theme-dhaba'   -> Theme A: Red + Black + White (Traditional Dhaba)
    // 'theme-luxury'  -> Theme B: Black + Gold + Cream (Premium Restaurant)
    // 'theme-family'  -> Theme C: Orange + White + Dark Green (Family Restaurant / Pure Veg)
    activeTheme: "theme-dhaba",

    // Default language ('en' = English, 'hi' = Hindi)
    defaultLanguage: "en",

    // Enable the live client preview toolbar (set to false before client handover if desired)
    showPreviewToolbar: true,
  },

  // --------------------------------------------------------------------------
  // 3. CONTACT & HIGHWAY LOCATION
  // --------------------------------------------------------------------------
  contact: {
    // Phone numbers for direct calling
    phone: "+91 98765 43210",
    phoneSecondary: "+91 98765 43211",
    phoneCall: "+919876543210", // purely digits + country code for tel: link

    // WhatsApp configuration (used for direct order prefill & table booking)
    whatsappNumber: "919876543210", // purely numbers with country code (no + or spaces)
    whatsappDisplay: "+91 98765 43210",

    email: "contact@thetastehouse.in",

    // Physical Address & Highway Landmark
    address: {
      line1: "NH-58, Delhi-Haridwar National Highway",
      line2: "Near Shantikunj Ashram, Haridwar Bypass",
      landmark: "Opposite Milestone 142 (Haridwar Entry)",
      city: "Haridwar",
      state: "Uttarakhand",
      pincode: "249401",
      country: "India",
      highwayInfo: "Direct entry from NH-58 with dedicated slow-lane for heavy buses and family cars.",
    },

    // Timings
    timings: {
      openingHours: "7:00 AM – 11:30 PM",
      weeklyHoliday: "Open 365 Days (No Weekly Off)",
      breakfast: "7:00 AM – 11:00 AM",
      lunch: "12:00 PM – 4:30 PM",
      dinner: "7:00 PM – 11:30 PM",
      midnightTeaAvailable: true,
    },

    // Google Maps Embed & Navigation
    maps: {
      // Direct Google Maps embed link
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110595.68884906596!2d78.07722425!3d29.9456906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0x8249877b0c79f977!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      // Link that opens turn-by-turn directions on Google Maps
      directionsUrl: "https://maps.google.com/?q=Haridwar+Highway+Dhaba",
    },
  },

  // --------------------------------------------------------------------------
  // 4. INTEGRATIONS & DELIVERY PARTNERS
  // --------------------------------------------------------------------------
  integrations: {
    // Online delivery platforms (Leave empty string if not applicable)
    zomatoUrl: "https://www.zomato.com",
    swiggyUrl: "https://www.swiggy.com",

    // Social Media
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    },

    // QR Code Menu Link (URL encoded inside the generated QR code)
    // Points to the online menu page; fallback uses current browser domain
    qrMenuUrl: "https://thetastehouse.in/menu",

    // Downloadable PDF Menu (place file in public/menu.pdf or provide remote URL)
    pdfMenuUrl: "/menu.pdf",
    hasPdfMenu: true,
  },

  // --------------------------------------------------------------------------
  // 5. FACILITIES & SPECIAL HIGHLIGHTS
  // --------------------------------------------------------------------------
  facilities: [
    {
      id: "parking",
      title: "Spacious Free Parking",
      titleHindi: "विशाल मुफ्त पार्किंग",
      description: "Dedicated safe parking for 70+ cars, tourist tempo travelers & highway buses with 24x7 security guard.",
      icon: "Car",
    },
    {
      id: "family-seating",
      title: "AC Family Dining Hall",
      titleHindi: "वातानुकूलित पारिवारिक हॉल",
      description: "Air-conditioned sound-insulated family dining area with comfortable banquet chairs & baby chairs.",
      icon: "Users",
    },
    {
      id: "outdoor-charpai",
      title: "Traditional Dhaba Charpai",
      titleHindi: "पारंपरिक ढाबा चारपाई",
      description: "Authentic woven khatiya / charpai seating in lush outdoor garden setting with fresh highway breeze.",
      icon: "Sun",
    },
    {
      id: "pure-ghee",
      title: "100% Desi Ghee & Pure Spices",
      titleHindi: "100% शुद्ध देसी घी व मसाले",
      description: "All dal makhani, paneer dishes, and royal thalis prepared in certified pure cow desi ghee.",
      icon: "Sparkles",
    },
    {
      id: "express-takeaway",
      title: "5-Min Highway Takeaway",
      titleHindi: "5 मिनट हाईवे टेकअवे",
      description: "Speedy takeaway counter for travelers with tamper-proof food grade leak-safe travel packaging.",
      icon: "Clock",
    },
    {
      id: "clean-restrooms",
      title: "Spotless Sanitized Washrooms",
      titleHindi: "स्वच्छ व स्वच्छ शौचालय",
      description: "Clean, hygienic western & Indian washrooms with continuous running water and baby diaper station.",
      icon: "CheckCircle2",
    },
    {
      id: "party-catering",
      title: "Parties & Bulk Catering",
      titleHindi: "पार्टी व कैटरिंग सुविधा",
      description: "Custom bulk food arrangements, highway tour group meals, birthday gatherings & kitty parties.",
      icon: "Cake",
    },
    {
      id: "highway-directions",
      title: "Prime NH-58 Highway Location",
      titleHindi: "प्रमुख NH-58 हाईवे स्थिति",
      description: "Direct highway entry with clear milestone visibility — zero detour for Delhi-Rishikesh travelers.",
      icon: "MapPin",
    },
  ],

  // --------------------------------------------------------------------------
  // 6. ABOUT US & CULINARY HERITAGE
  // --------------------------------------------------------------------------
  about: {
    headline: "Serving Pure Taste & Highway Hospitality Since 2012",
    headlineHindi: "2012 से शुद्ध स्वाद और हाईवे सेवा की परंपरा",
    storyParagraph1: "Situated along the historic National Highway 58 connecting Delhi to the holy shrines of Haridwar and Rishikesh, THE TASTE HOUSE started with a humble charcoal tandoor and a timeless recipe for slow-cooked Dal Makhani. Over the last decade, we have grown into one of Uttarakhand's most trusted highway havens for pilgrim families, road-trippers, and food lovers.",
    storyParagraph2: "Our kitchen honors ancestral culinary techniques — grinding our signature garam masala every morning, simmering black lentils overnight in clay pots over slow embers, and hand-churning fresh white butter (makkhan) for our stuffed tandoori parathas.",
    
    // Master Chef / Owner Profile (Optional, set showChef: false if client prefers)
    chef: {
      showChef: true,
      name: "Chef Balwant Singh & Family",
      title: "Master Chef & Founder",
      experience: "28+ Years of North Indian Culinary Mastery",
      quote: "When a traveler stops at our doors after hours on the road, our duty is to feed their soul with pure, piping-hot food made just like home.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    },

    // Verified Hygiene & Sourcing Standards
    hygienePillars: [
      {
        title: "RO UV Water System",
        description: "100% of our drinking water and food preparation relies on multi-stage commercial RO filtration.",
      },
      {
        title: "Farm-Fresh Local Produce",
        description: "Fresh vegetables and dairy paneer procured daily from certified local dairy farmers in Roorkee & Haridwar.",
      },
      {
        title: "Open Viewing Kitchen",
        description: "Glass-fronted live tandoor and cooking station allowing guests to inspect cleanliness anytime.",
      },
      {
        title: "Zero Artificial Coloring",
        description: "Natural vibrant colors derived only from slow-roasted Kashmiri chilies, turmeric, and fresh tomatoes.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. MENU CATEGORIES (15 Supported Categories)
  // --------------------------------------------------------------------------
  menuCategories: [
    { id: "all", name: "All Dishes", nameHindi: "सभी व्यंजन", icon: "Utensils", enabled: true },
    { id: "dhaba-specials", name: "Dhaba Specials", nameHindi: "ढाबा स्पेशल", icon: "Flame", enabled: true, highlight: true },
    { id: "thali", name: "Thali Combos", nameHindi: "शाही थाली", icon: "Award", enabled: true, highlight: true },
    { id: "north-indian", name: "North Indian", nameHindi: "उत्तर भारतीय", icon: "Soup", enabled: true },
    { id: "dal-paneer", name: "Dal & Paneer", nameHindi: "दाल व पनीर", icon: "HeartHandshake", enabled: true },
    { id: "tandoori", name: "Tandoori & Kebabs", nameHindi: "तंदूरी व कबाब", icon: "Sparkles", enabled: true },
    { id: "roti-paratha", name: "Roti & Paratha", nameHindi: "रोटी व पराठा", icon: "Disc", enabled: true },
    { id: "biryani-rice", name: "Biryani & Rice", nameHindi: "बिरयानी व चावल", icon: "Wheat", enabled: true },
    { id: "breakfast", name: "Breakfast", nameHindi: "नाश्ता", icon: "Coffee", enabled: true },
    { id: "indian-starters", name: "Indian Starters", nameHindi: "भारतीय स्टार्टर्स", icon: "UtensilsCrossed", enabled: true },
    { id: "chinese-starters", name: "Chinese Starters", nameHindi: "चाइनीज स्टार्टर्स", icon: "CookingPot", enabled: true },
    { id: "main-course", name: "Main Course", nameHindi: "मुख्य भोजन", icon: "ChefHat", enabled: true },
    { id: "south-indian", name: "South Indian", nameHindi: "दक्षिण भारतीय", icon: "CircleDot", enabled: true },
    { id: "snacks", name: "Snacks & Chaat", nameHindi: "चाट व स्नैक्स", icon: "Sandwich", enabled: true },
    { id: "beverages", name: "Beverages & Lassi", nameHindi: "पेय व लस्सी", icon: "CupSoda", enabled: true },
    { id: "desserts", name: "Desserts & Sweets", nameHindi: "मिठाई व डेसर्ट", icon: "IceCream", enabled: true },
  ],

  // --------------------------------------------------------------------------
  // 8. MENU ITEMS (Realistic Indian Dishes with INR ₹ Prices & Photos)
  // --------------------------------------------------------------------------
  menuItems: [
    // --- DHABA SPECIALS ---
    {
      id: "dish-ds-1",
      name: "Special Dal Makhani (Handi Simmered)",
      nameHindi: "स्पेशल दाल मखनी (हांडी धीमी आंच)",
      categoryId: "dhaba-specials",
      price: 240,
      description: "Our signature black urad lentils slow-simmered over charcoal embers for 14 hours with churned white butter and rich dairy cream.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 1, // 1 = mild, 2 = medium, 3 = hot
      isAvailable: true,
    },
    {
      id: "dish-ds-2",
      name: "Amritsari Chole Kulche Platter",
      nameHindi: "अमृतसरी छोले कुलचे थाली",
      categoryId: "dhaba-specials",
      price: 220,
      description: "Tangy slow-cooked kabuli chana spiced with anardana, served with 2 crispy stuffed tandoori kulchas, pickled onions & green chutney.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-ds-3",
      name: "Dhaba Style Paneer Bhurji",
      nameHindi: "ढाबा स्टाइल पनीर भुर्जी",
      categoryId: "dhaba-specials",
      price: 290,
      description: "Freshly crumbled malai paneer wok-tossed with crushed ginger, juicy tomatoes, slit green chilies and generous desi ghee.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-ds-4",
      name: "Highway Murgh Handi (Non-Veg Special)",
      nameHindi: "हाईवे मुर्ग हांडी",
      categoryId: "dhaba-specials",
      price: 380,
      description: "Tender country chicken on the bone braised in a coarse rustic onion-tomato gravy with freshly pounded coriander seeds.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      isVeg: false,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 3,
      isAvailable: true,
    },

    // --- THALI COMBOS ---
    {
      id: "dish-th-1",
      name: "Maharaja Special Royal Thali",
      nameHindi: "महाराजा स्पेशल शाही थाली",
      categoryId: "thali",
      price: 340,
      description: "Paneer Butter Masala, Dal Makhani, Mixed Seasonal Veg, Jeera Rice, 2 Butter Naan or 3 Rotis, Boondi Raita, Salad, Papad, Gulab Jamun.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-th-2",
      name: "Highway Dhaba Express Thali",
      nameHindi: "हाईवे ढाबा एक्सप्रेस थाली",
      categoryId: "thali",
      price: 210,
      description: "Yellow Dal Tadka, Aloo Gobhi Matar, Steamed Basmati Rice, 4 Tandoori Butter Roti, Pickle, Fried Green Chilies & Fresh Buttermilk.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-th-3",
      name: "Special Non-Veg Highway Thali",
      nameHindi: "स्पेशल नॉन-वेज हाईवे थाली",
      categoryId: "thali",
      price: 420,
      description: "Dhaba Chicken Curry, Dal Tadka, Steamed Basmati Rice, 2 Lachha Paratha or 4 Butter Roti, Onion Rings, Mint Raita & Sweet Treat.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: false,
      isPopular: false,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },

    // --- NORTH INDIAN & PANEER ---
    {
      id: "dish-ni-1",
      name: "Paneer Butter Masala",
      nameHindi: "पनीर बटर मसाला",
      categoryId: "north-indian",
      price: 280,
      description: "Soft cottage cheese cubes simmered in a velvety, rich tomato cashew satin gravy infused with dry fenugreek (kasoori methi).",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-ni-2",
      name: "Kadai Paneer",
      nameHindi: "कढ़ाई पनीर",
      categoryId: "north-indian",
      price: 270,
      description: "Cottage cheese sautéed with crisp bell peppers, sweet red onions and freshly ground kadai spices in a thick masala.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-ni-3",
      name: "Palak Paneer (Lehsunia)",
      nameHindi: "पालक पनीर (लहसुनिया)",
      categoryId: "north-indian",
      price: 260,
      description: "Fresh farm spinach puree tempered with burnt garlic and cumin, finished with tender paneer cubes and light cream.",
      image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-ni-4",
      name: "Butter Chicken (Murgh Makhani)",
      nameHindi: "बटर चिकन (मुर्ग मखनी)",
      categoryId: "north-indian",
      price: 390,
      description: "Charcoal roasted chicken pieces simmered in silky butter-cashew tomato satin gravy finished with fresh cream.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
      isVeg: false,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- DAL & PANEER ---
    {
      id: "dish-dp-1",
      name: "Yellow Dal Double Tadka (Desi Ghee)",
      nameHindi: "दाल तड़का (डबल देसी घी तड़का)",
      categoryId: "dal-paneer",
      price: 190,
      description: "Arhar toor dal cooked to perfection and double-tempered with dry red chilies, cumin seeds, minced garlic, and pure desi ghee.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-dp-2",
      name: "Shahi Paneer (White Gravy)",
      nameHindi: "शाही पनीर (व्हाइट ग्रेवी)",
      categoryId: "dal-paneer",
      price: 295,
      description: "Royal preparation of paneer in a luxurious sweet-savory white cashew, melon seed and saffron sauce.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- TANDOORI & KEBABS ---
    {
      id: "dish-tk-1",
      name: "Tandoori Paneer Tikka (Angara)",
      nameHindi: "तंदूरी पनीर टिक्का (अंगारा)",
      categoryId: "tandoori",
      price: 280,
      description: "Chunks of fresh paneer marinated in spiced hung curd, ajwain and mustard oil, roasted over smoky charcoal skewers.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-tk-2",
      name: "Tandoori Soya Malai Chaap",
      nameHindi: "तंदूरी सोया मलाई चाप",
      categoryId: "tandoori",
      price: 260,
      description: "Tender soya chaap marinated in rich cashew cream, cheese, cardamom and mild herbs, clay oven grilled to perfection.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-tk-3",
      name: "Charcoal Tandoori Chicken (Full / Half)",
      nameHindi: "तंदूरी चिकन (चारकोल भुना)",
      categoryId: "tandoori",
      price: 360,
      description: "Traditional spring chicken marinated for 12 hours in Kashmiri red chili paste, lime and garam masala, tandoor charred.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
      isVeg: false,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },

    // --- ROTI & PARATHA ---
    {
      id: "dish-rp-1",
      name: "Stuffed Aloo Pyaaz Tandoori Paratha",
      nameHindi: "आलू प्याज तंदूरी पराठा (मक्खन सहित)",
      categoryId: "roti-paratha",
      price: 80,
      description: "Whole wheat crisp tandoor paratha stuffed with spiced mashed potatoes, green chilies, served with fresh white butter.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-rp-2",
      name: "Paneer Stuffed Amritsari Kulcha",
      nameHindi: "पनीर अमृतसरी कुलचा",
      categoryId: "roti-paratha",
      price: 110,
      description: "Crispy layered leavened bread stuffed with spiced paneer, coriander seeds and crushed black pepper.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-rp-3",
      name: "Garlic Butter Naan",
      nameHindi: "गार्लिक बटर नान",
      categoryId: "roti-paratha",
      price: 70,
      description: "Refined flour clay-oven baked flatbread topped with toasted minced garlic, fresh coriander and salted butter.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-rp-4",
      name: "Laccha Paratha (Desi Ghee)",
      nameHindi: "लच्छा पराठा (देसी घी)",
      categoryId: "roti-paratha",
      price: 60,
      description: "Multi-layered flaky spiral flatbread cooked in pure desi ghee with a crunchy exterior and soft interior.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-rp-5",
      name: "Tandoori Roti (Butter / Plain)",
      nameHindi: "तंदूरी रोटी (बटर / सादा)",
      categoryId: "roti-paratha",
      price: 20,
      description: "Traditional whole wheat bread baked against the clay walls of the high-heat tandoor.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- BIRYANI & RICE ---
    {
      id: "dish-br-1",
      name: "Dum Hyderabadi Veg Biryani (Handi)",
      nameHindi: "दम हैदराबादी वेज बिरयानी",
      categoryId: "biryani-rice",
      price: 260,
      description: "Fragrant long-grain aged Basmati rice cooked on dum with marinated vegetables, mint, saffron milk and whole spices. Served with burani raita.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-br-2",
      name: "Royal Murgh Dum Biryani",
      nameHindi: "शाही मुर्ग दम बिरयानी",
      categoryId: "biryani-rice",
      price: 360,
      description: "Succulent spiced chicken slow-cooked with basmati rice, caramelized onions, kewra water and green cardamom in a sealed handi.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
      isVeg: false,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-br-3",
      name: "Jeera Rice (Basmati)",
      nameHindi: "जीरा राइस (बासमती)",
      categoryId: "biryani-rice",
      price: 150,
      description: "Fluffy steamed long-grain basmati rice tempered with golden roasted cumin seeds and fresh coriander.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- BREAKFAST ---
    {
      id: "dish-bf-1",
      name: "Dhaba Special Mix Veg Paratha Plate",
      nameHindi: "ढाबा स्पेशल मिक्स वेज पराठा प्लेट",
      categoryId: "breakfast",
      price: 130,
      description: "2 giant stuffed parathas filled with paneer, gobi, and potatoes, served with thick curd, pickle & fresh white butter.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 2,
      isAvailable: true,
    },
    {
      id: "dish-bf-2",
      name: "Puri Bhaji (Haridwar Halwai Style)",
      nameHindi: "पूरी भाजी (हरिद्वार हलवाई स्टाइल)",
      categoryId: "breakfast",
      price: 120,
      description: "4 golden crisp puris served with spicy hing-tempered aloo curry, methi chutney and raw mango pickle.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },

    // --- CHINESE STARTERS ---
    {
      id: "dish-cs-1",
      name: "Chilli Paneer Dry",
      nameHindi: "चिली पनीर ड्राई",
      categoryId: "chinese-starters",
      price: 250,
      description: "Crispy fried cottage cheese cubes tossed with garlic, green chilies, spring onions and dark soy sauce.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 3,
      isAvailable: true,
    },
    {
      id: "dish-cs-2",
      name: "Veg Manchurian Gravy / Dry",
      nameHindi: "वेज मंचूरियन ग्रेवी / ड्राई",
      categoryId: "chinese-starters",
      price: 220,
      description: "Minced vegetable dumplings crisp-fried and simmered in a tangy Indo-Chinese ginger-garlic pepper glaze.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: false,
      spicyLevel: 2,
      isAvailable: true,
    },

    // --- SNACKS & CHAAT ---
    {
      id: "dish-sn-1",
      name: "Dhaba Kurkure Paneer Pakora",
      nameHindi: "ढाबा कुरकुरे पनीर पकोड़ा",
      categoryId: "snacks",
      price: 180,
      description: "Thick slabs of malai paneer stuffed with green mint chutney, batter coated in ajwain gram flour and crisp fried.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- BEVERAGES & LASSI ---
    {
      id: "dish-bv-1",
      name: "Kullhad Special Malai Lassi (Sweet / Salted)",
      nameHindi: "कुल्हड़ स्पेशल मलाई लस्सी",
      categoryId: "beverages",
      price: 90,
      description: "Traditional churned thick sweet yogurt served in clay kullhad, crowned with a thick layer of clotted cream, pistachios & saffron.",
      image: "https://images.unsplash.com/photo-1571006687898-7521c7d1e028?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: true,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-bv-2",
      name: "Highway Masala Kadak Chai (Kullhad)",
      nameHindi: "हाईवे मसाला कड़क चाय (कुल्हड़)",
      categoryId: "beverages",
      price: 35,
      description: "Strong Assam tea brewed over slow flame with crushed fresh ginger, green cardamom, cloves, and whole buffalo milk.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 1,
      isAvailable: true,
    },

    // --- DESSERTS ---
    {
      id: "dish-ds-1-dessert",
      name: "Hot Gulab Jamun with Rabri (2 Pcs)",
      nameHindi: "गरमा-गरम गुलाब जामुन मलाईदार रबड़ी सहित",
      categoryId: "desserts",
      price: 110,
      description: "Soft deep-fried mawa spheres soaked in rose cardamom sugar syrup, served piping hot with chilled saffron rabri.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: true,
      isChefSpecial: true,
      isDhabaSpecial: false,
      spicyLevel: 1,
      isAvailable: true,
    },
    {
      id: "dish-ds-2-dessert",
      name: "Moong Dal Halwa (Desi Ghee)",
      nameHindi: "मूंग दाल हलवा (शुद्ध देसी घी)",
      categoryId: "desserts",
      price: 130,
      description: "Slow-roasted yellow lentils cooked patiently with khoya, pure ghee and dry fruits until golden amber.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isVeg: true,
      isPopular: false,
      isChefSpecial: false,
      isDhabaSpecial: true,
      spicyLevel: 1,
      isAvailable: true,
    },
  ],

  // --------------------------------------------------------------------------
  // 9. VERIFIED CUSTOMER TESTIMONIALS (Real-sounding owner-approved reviews)
  // --------------------------------------------------------------------------
  testimonials: [
    {
      id: "rev-1",
      name: "Vikas Sharma",
      location: "Delhi (Traveler to Rishikesh)",
      rating: 5,
      date: "October 2024",
      comment: "Best highway dhaba on NH-58 hands down! We stopped with family during our Char Dham yatra. The Dal Makhani and Tandoori Parathas were piping hot and delicious. The washrooms were spotless, which is super rare on the highway.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      verified: true,
      tag: "Family Traveler",
    },
    {
      id: "rev-2",
      name: "Pooja Verma",
      location: "Dehradun",
      rating: 5,
      date: "November 2024",
      comment: "The Maharaja Special Thali was massive and every dish tasted like genuine homemade feast. Loved the traditional charpai outdoor seating! Service was super fast even during dinner rush.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      verified: true,
      tag: "Local Foodie",
    },
    {
      id: "rev-3",
      name: "Col. Rajesh Rawat (Retd.)",
      location: "Haridwar",
      rating: 5,
      date: "January 2025",
      comment: "We regularly host our family weekend lunches in their AC hall. Their Paneer Tikka and Amritsari Kulcha never disappoint. Consistent quality, pure ghee aroma, and very respectful staff.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      verified: true,
      tag: "Regular Guest",
    },
  ],

  // --------------------------------------------------------------------------
  // 10. AMBIENCE & FOOD PHOTO GALLERY
  // --------------------------------------------------------------------------
  gallery: [
    {
      id: "gal-1",
      category: "food",
      title: "Signature Dal Makhani & Tandoori Naan",
      description: "Charcoal slow-simmered black lentils served with freshly baked butter garlic naan.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-2",
      category: "thali",
      title: "Maharaja Royal Indian Thali",
      description: "Grand traditional platter with three curries, fresh bread, rice, salad, and dessert.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-3",
      category: "dhaba",
      title: "Highway Charpai Seating & Atmosphere",
      description: "Authentic woven khatiya arrangement where families and road-trippers relax under the evening lights.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-4",
      category: "interior",
      title: "Air-Conditioned Family Dining Hall",
      description: "Spacious, elegantly lit interior hall perfect for celebrations, reunions and peaceful dining.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-5",
      category: "food",
      title: "Smoky Charcoal Paneer Tikka",
      description: "Fresh cottage cheese skewers roasted to perfection with capsicum and spiced marinade.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-6",
      category: "kitchen",
      title: "Live Clay Tandoor & Master Chefs",
      description: "Our high-temperature clay oven station baking fluffy naans and rotis continuously.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-7",
      category: "food",
      title: "Chilled Kullhad Malai Lassi",
      description: "Thick curd whipped with sugar, cardamom, and a dollop of fresh clotted cream.",
      image: "https://images.unsplash.com/photo-1571006687898-7521c7d1e028?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-8",
      category: "thali",
      title: "Highway Express Lunch Platter",
      description: "Speedy wholesome thali designed for quick, energizing nourishment on the highway.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // --------------------------------------------------------------------------
  // 11. BILINGUAL TRANSLATIONS (English & Hindi)
  // --------------------------------------------------------------------------
  translations: {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        menu: "Menu & Pricing",
        gallery: "Gallery",
        contact: "Contact & Order",
        bookTable: "Book Table",
        orderWhatsApp: "Order on WhatsApp",
      },
      hero: {
        badge: "Authentic Indian Food & Highway Dining",
        viewMenu: "View Digital Menu",
        orderWhatsApp: "Order on WhatsApp",
        exploreSpecialties: "Explore Specialties",
        established: "Serving Happiness Since",
      },
      menu: {
        title: "Digital Menu & Pricing",
        subtitle: "Freshly prepared to order using pure ingredients, authentic spices, and time-tested recipes.",
        searchPlaceholder: "Search dishes by name, ingredient...",
        all: "All",
        vegOnly: "Pure Veg Only",
        nonVegOnly: "Non-Veg",
        popular: "Popular",
        chefSpecial: "Chef Special",
        dhabaSpecial: "Dhaba Special",
        addToOrder: "Add to Order",
        downloadPdf: "Download Menu PDF",
        scanQr: "Scan Table QR",
        total: "Total",
        viewOrderDrawer: "View Order",
      },
      cart: {
        title: "Your WhatsApp Food Order",
        emptyTitle: "Your plate is empty",
        emptySubtitle: "Browse our delicious menu and add dishes to compose your WhatsApp order enquiry.",
        orderType: "Order Type",
        takeaway: "Takeaway (Self Pickup)",
        delivery: "Home Delivery",
        dineIn: "Dine-In Table Order",
        customerName: "Your Name",
        customerPhone: "Phone Number (Optional)",
        deliveryAddress: "Delivery Address (if delivery)",
        specialNotes: "Special Instructions (e.g. less spicy, extra butter, no onion)",
        sendOrderBtn: "Send Order on WhatsApp",
        disclaimer: "Note: Submitting this order sends a formatted WhatsApp message to our counter. Our manager will confirm dish availability, preparation time, and exact total.",
        clearCart: "Clear Order",
      },
      booking: {
        title: "Reserve a Dining Table",
        subtitle: "Plan your family dinner, highway pit-stop, or group celebration with reserved seats.",
        name: "Full Name",
        phone: "WhatsApp / Phone Number",
        date: "Reservation Date",
        time: "Reservation Time",
        guests: "Number of Guests",
        seatingPreference: "Seating Preference",
        seatingAc: "AC Family Dining Hall",
        seatingOutdoor: "Outdoor Garden / Traditional Charpai",
        specialRequests: "Special Requests or Occasion (Birthday, Anniversary, Travel Group)",
        submitBtn: "Reserve Table via WhatsApp",
        disclaimer: "Reservation requests are confirmed by our manager via WhatsApp message or quick phone call.",
      },
      dhabaMode: {
        badge: "HIGHWAY DHABA SPECIAL",
        highwayBanner: "Direct NH-58 Highway Access • 70+ Vehicle Free Parking • 24x7 Tea & Clean Washrooms",
        takeawayFast: "Express 5-Minute Highway Takeaway Available",
      },
      restaurantMode: {
        badge: "PREMIUM DINING EXPERIENCE",
        luxuryBanner: "Air-Conditioned Royal Family Dining • Banquet Bookings • Master Chef Specialties",
      },
      footer: {
        aboutText: "Serving authentic North Indian, tandoori, and highway dhaba recipes prepared with 100% pure desi ghee and love. Your trusted stop on the Delhi-Haridwar highway.",
        quickLinks: "Quick Navigation",
        timings: "Opening Hours",
        contactUs: "Get In Touch",
        fssaiNotice: "FSSAI Registered Food Outlet",
        allRights: "All Rights Reserved",
        demoNotice: "Customizable Restaurant & Dhaba Website Template",
      },
    },
    hi: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        menu: "मेन्यू व मूल्य",
        gallery: "गैलरी",
        contact: "संपर्क व ऑर्डर",
        bookTable: "टेबल बुक करें",
        orderWhatsApp: "व्हाट्सएप पर ऑर्डर करें",
      },
      hero: {
        badge: "शुद्ध भारतीय स्वाद व हाईवे डाइनिंग",
        viewMenu: "डिजिटल मेन्यू देखें",
        orderWhatsApp: "व्हाट्सएप पर ऑर्डर करें",
        exploreSpecialties: "विशेषताएं देखें",
        established: "स्वाद की सेवा में",
      },
      menu: {
        title: "डिजिटल मेन्यू व कीमतें",
        subtitle: "शुद्ध देसी घी, ताजे मसाले और पारंपरिक विधि से ताजा तैयार किया गया भोजन।",
        searchPlaceholder: "व्यंजन या सामग्री का नाम खोजें...",
        all: "सभी",
        vegOnly: "शुद्ध शाकाहारी",
        nonVegOnly: "नॉन-वेज",
        popular: "पॉपुलर",
        chefSpecial: "शेफ स्पेशल",
        dhabaSpecial: "ढाबा स्पेशल",
        addToOrder: "ऑर्डर में जोड़ें",
        downloadPdf: "मेन्यू PDF डाउनलोड",
        scanQr: "टेबल QR स्कैन करें",
        total: "कुल",
        viewOrderDrawer: "ऑर्डर देखें",
      },
      cart: {
        title: "आपका व्हाट्सएप भोजन ऑर्डर",
        emptyTitle: "आपकी थाली खाली है",
        emptySubtitle: "हमारे मेन्यू से अपने पसंदीदा व्यंजन चुनें और व्हाट्सएप पर तुरंत ऑर्डर भेजें।",
        orderType: "ऑर्डर का प्रकार",
        takeaway: "टेकअवे (स्वयं उठाएं)",
        delivery: "होम डिलीवरी",
        dineIn: "टेबल डाइन-इन",
        customerName: "आपका नाम",
        customerPhone: "फोन नंबर (वैकल्पिक)",
        deliveryAddress: "डिलीवरी का पता",
        specialNotes: "विशेष निर्देश (जैसे कम तीखा, अतिरिक्त मक्खन)",
        sendOrderBtn: "व्हाट्सएप पर ऑर्डर भेजें",
        disclaimer: "सूचना: यह ऑर्डर सीधे हमारे काउंटर पर व्हाट्सएप संदेश के रूप में जाता है। हमारे प्रबंधक उपलब्धता और तैयारी समय की पुष्टि करेंगे।",
        clearCart: "खाली करें",
      },
      booking: {
        title: "डाइनिंग टेबल आरक्षित करें",
        subtitle: "परिवार के साथ भोजन या हाईवे यात्रा में विश्राम हेतु अपनी टेबल पहले से सुरक्षित करें।",
        name: "पूरा नाम",
        phone: "व्हाट्सएप / फोन नंबर",
        date: "तारीख",
        time: "समय",
        guests: "मेहमानों की संख्या",
        seatingPreference: "बैठने की पसंद",
        seatingAc: "वातानुकूलित (AC) फैमिली हॉल",
        seatingOutdoor: "आउटडोर / पारंपरिक चारपाई",
        specialRequests: "विशेष अनुरोध (जन्मदिन, सालगिरह, ग्रुप)",
        submitBtn: "व्हाट्सएप द्वारा टेबल बुक करें",
        disclaimer: "टेबल आरक्षण की पुष्टि हमारे प्रबंधक द्वारा व्हाट्सएप या कॉल पर की जाएगी।",
      },
      dhabaMode: {
        badge: "हाईवे ढाबा स्पेशल",
        highwayBanner: "सीधा NH-58 हाईवे प्रवेश • 70+ गाड़ियों की सुरक्षित पार्किंग • 24 घंटे चाय व स्वच्छ शौचालय",
        takeawayFast: "हाईवे यात्रियों हेतु 5 मिनट एक्सप्रेस टेकअवे",
      },
      restaurantMode: {
        badge: "प्रीमियम डाइनिंग अनुभव",
        luxuryBanner: "शाही वातानुकूलित पारिवारिक माहौल • पार्टी व बैंक्वेट बुकिंग • शेफ के विशेष व्यंजन",
      },
      footer: {
        aboutText: "शुद्ध देसी घी, पारंपरिक मसालों और प्यार से तैयार उत्तर भारतीय, तंदूरी और ढाबा व्यंजनों का स्वाद। दिल्ली-हरिद्वार मार्ग का भरोसेमंद पड़ाव।",
        quickLinks: "त्वरित नेविगेशन",
        timings: "खुलने का समय",
        contactUs: "संपर्क करें",
        fssaiNotice: "FSSAI पंजीकृत खाद्य प्रतिष्ठान",
        allRights: "सर्वाधिकार सुरक्षित",
        demoNotice: "कस्टमाइजेबल रेस्टोरेंट व ढाबा वेबसाइट टेम्पलेट",
      },
    },
  },
};

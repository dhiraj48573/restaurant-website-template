import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import SEOHead from '../components/SEOHead';
import DishCard from '../components/DishCard';
import {
  UtensilsCrossed,
  ArrowRight,
  MessageCircle,
  Clock,
  MapPin,
  Car,
  Award,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
  Compass,
  Phone,
  CheckCircle2,
  Calendar,
  Flame,
  Coffee,
  Heart,
  ChevronRight,
} from 'lucide-react';

export default function Home() {
  const { config, mode, t, formatINR, setIsQrModalOpen } = useConfig();
  const [popularCategoryFilter, setPopularCategoryFilter] = useState('all');

  // Filter popular dishes
  const popularDishes = config.menuItems
    .filter((item) => item.isPopular || item.isChefSpecial || item.isDhabaSpecial)
    .slice(0, 8);

  const displayedDishes =
    popularCategoryFilter === 'all'
      ? popularDishes
      : popularDishes.filter((item) => item.categoryId === popularCategoryFilter);

  return (
    <div className="space-y-16 sm:space-y-24 transition-colors duration-300">
      <SEOHead
        title={config.business.name}
        description={config.business.heroSubheadline}
        path="/"
      />

      {/* =====================================================================
          SECTION 1: HERO SECTION
          Large appetizing background, Headline, Introduction & CTAs
          ===================================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Authentic Indian Restaurant Ambience"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          {/* Badge: Mode Highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/40 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-widest shadow-lg">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span>
              {mode === 'dhaba' ? t('dhabaMode.badge') : t('restaurantMode.badge')}
            </span>
          </div>

          {/* Restaurant Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-serif tracking-tight text-white drop-shadow-md">
              {config.business.name}
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-amber-400">
              {config.business.tagline}
            </p>
          </div>

          {/* Exact User Requested Headline: "GOOD FOOD. GREAT TASTE. MEMORABLE MOMENTS." */}
          <div className="py-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-neutral-100 uppercase border-y border-white/20 inline-block py-2 px-6">
              {config.business.heroHeadline}
            </h2>
          </div>

          {/* Short Introduction */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 leading-relaxed drop-shadow">
            {config.business.heroSubheadline}
          </p>

          {/* CTAs: View Menu and Order on WhatsApp buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <span>{t('hero.viewMenu')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                `Hello! I want to place an order / make an enquiry at ${config.business.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.orderWhatsApp')}</span>
            </a>
          </div>

          {/* Fast Features Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-300 border-t border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Car className="w-4 h-4 text-amber-400 shrink-0" />
              <span>70+ Free Car Parking</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span>AC Family Dining Hall</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Desi Ghee Recipes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{config.contact.timings.openingHours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: DHABA / RESTAURANT MODE HIGHLIGHT BANNER
          Highway milestone, express takeaway, clean restrooms
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-brand-primary to-neutral-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{mode === 'dhaba' ? 'Highway Traveler Landmark' : 'Luxury Dining Experience'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              {mode === 'dhaba'
                ? `${config.contact.address.landmark} • NH-58`
                : 'Host Your Celebrations, Dinners & Family Gatherings'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 max-w-2xl">
              {mode === 'dhaba'
                ? config.contact.address.highwayInfo
                : 'Experience timeless hospitality with authentic tandoor, royal thalis, and spacious banquet facilities.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={config.contact.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow"
            >
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span>Get Directions</span>
            </a>
            <Link
              to="/contact#table-booking"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: POPULAR DISHES & DIGITAL ORDERING PREVIEW
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-primary text-xs font-extrabold uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4" />
              <span>Mouth-Watering Favourites</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
              Popular Dishes & Chef Specialities
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted mt-1">
              Handpicked from our tandoors and handis — freshly prepared with pure desi ghee.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
          >
            <span>View Complete Digital Menu (35+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: FOOD CATEGORIES PREVIEW
          North Indian, Thali, Tandoori, Dhaba Specials, Roti, Beverages
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
            Explore Flavours
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
            Catering to Every Cravings
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted">
            From morning parathas to midnight kadak chai and royal multi-dish thalis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { id: 'dhaba-specials', title: 'Dhaba Specials', count: '4 Items', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
            { id: 'thali', title: 'Royal Thalis', count: '3 Combos', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80' },
            { id: 'north-indian', title: 'North Indian', count: '8 Curries', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80' },
            { id: 'tandoori', title: 'Tandoori Sizzlers', count: '5 Varieties', img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80' },
            { id: 'roti-paratha', title: 'Tandoor Breads', count: '6 Breads', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80' },
            { id: 'beverages', title: 'Kullhad Lassi & Chai', count: '5 Drinks', img: 'https://images.unsplash.com/photo-1571006687898-7521c7d1e028?auto=format&fit=crop&w=400&q=80' },
          ].map((cat) => (
            <Link
              key={cat.id}
              to={`/menu?category=${cat.id}`}
              className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-card-border"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-bold text-sm group-hover:text-amber-400 transition">
                  {cat.title}
                </h3>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider">
                  {cat.count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: WHY CHOOSE US
          Hygiene, Pure Desi Ghee, Spacious Highway Parking, Family Ambience
          ===================================================================== */}
      <section className="bg-brand-card border-y border-brand-card-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
              Our Commitment to You
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
              Why Customers Love {config.business.name}
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted">
              Built on uncompromising culinary standards, hygienic preparation, and warm hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.facilities.slice(0, 4).map((f) => (
              <div
                key={f.id}
                className="p-6 rounded-2xl bg-brand-surface border border-brand-card-border space-y-3 hover:border-brand-primary/40 transition shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-brand-text">
                  {f.title}
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* FSSAI Verified Note in Why Choose Us */}
          {config.business.fssai.hasLicense && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto text-emerald-900 text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-emerald-800 text-sm block">
                    Verified Food Safety Standard (FSSAI)
                  </span>
                  <span>
                    Licence No: <strong className="font-mono">{config.business.fssai.licenseNumber}</strong> • Inspected & Certified for Kitchen Hygiene.
                  </span>
                </div>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider">
                Certified
              </span>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: VERIFIED CUSTOMER TESTIMONIALS
          Owner-approved real-sounding reviews with rating & city
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
            Genuine Guest Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
            What Our Diners Say
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted">
            Verified experiences shared by highway travelers, pilgrims, and local families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-brand-card border border-brand-card-border shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-brand-text leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-brand-card-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-brand-card-border"
                  />
                  <div>
                    <h3 className="font-bold text-xs text-brand-text">{review.name}</h3>
                    <p className="text-[10px] text-brand-text-muted">{review.location}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-700 text-[10px] font-bold">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: GALLERY PREVIEW
          Food, Thali, Ambience, Charpai
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
              Visual Ambience
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
              Atmosphere & Food Gallery
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-muted">
              A glimpse into our open-air garden charpais, AC banquet hall, and sizzling clay tandoors.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
          >
            <span>Explore Full Gallery (8+ Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {config.gallery.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative h-56 rounded-2xl overflow-hidden shadow-sm border border-brand-card-border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold font-serif">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: LOCATION & OPENING HOURS
          Interactive Maps, Milestone, Free Parking, Timings
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-card border border-brand-card-border overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-2">
          {/* Left Details */}
          <div className="p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
                Visit Us Today
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text font-serif">
                Highway Landmark & Daily Hours
              </h2>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                {config.contact.address.highwayInfo}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-text block">Physical Address</span>
                    <span className="text-brand-text-muted">
                      {config.contact.address.line1}, {config.contact.address.line2}, {config.contact.address.city}, {config.contact.address.state} - {config.contact.address.pincode}
                    </span>
                    <span className="text-brand-primary font-bold block mt-0.5">
                      Landmark: {config.contact.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-text block">Service Timings</span>
                    <span className="text-brand-text-muted">
                      {config.contact.timings.openingHours} • {config.contact.timings.weeklyHoliday}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-text block">Parking Facility</span>
                    <span className="text-brand-text-muted">
                      Free parking for 70+ cars, tourist travelers, and highway buses.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={config.contact.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>
              <a
                href={`tel:${config.contact.phoneCall}`}
                className="px-6 py-3 rounded-xl border border-brand-card-border bg-brand-surface hover:bg-brand-card text-brand-text font-bold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>Call {config.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed */}
          <div className="relative min-h-[350px] w-full bg-neutral-200">
            <iframe
              src={config.contact.maps.embedUrl}
              title={`${config.business.name} Google Map Location`}
              className="w-full h-full border-0 min-h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: FINAL ORDER & ENQUIRY CTA BANNER
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border border-neutral-800">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-widest">
              Ready to Experience Authentic Flavours?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
              Order Online via WhatsApp or Reserve Your Table
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Fast WhatsApp communication, custom bulk party catering, and instant confirmations for highway groups.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs sm:text-sm transition shadow-lg flex items-center gap-2"
            >
              <span>Explore Digital Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact#table-booking"
              className="px-8 py-3.5 rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-xs sm:text-sm transition shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-brand-primary" />
              <span>Book Table Reservation</span>
            </Link>

            <button
              onClick={() => setIsQrModalOpen(true)}
              className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
            >
              <span>Digital Table QR</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

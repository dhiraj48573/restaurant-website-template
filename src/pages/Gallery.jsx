import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import SEOHead from '../components/SEOHead';
import Lightbox from '../components/Lightbox';
import { Sparkles, Camera, Eye, Flame, Award, Heart, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const { config } = useConfig();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images
  const filteredGallery =
    activeFilter === 'all'
      ? config.gallery
      : config.gallery.filter((item) => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food & Dishes' },
    { id: 'thali', label: 'Special Thalis' },
    { id: 'dhaba', label: 'Highway & Charpai' },
    { id: 'interior', label: 'Family AC Hall' },
    { id: 'kitchen', label: 'Kitchen & Tandoor' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 transition-colors duration-300">
      <SEOHead
        title="Ambience & Food Gallery"
        description={`Take a visual tour of ${config.business.name}, Haridwar. View photos of our charcoal tandoor, special thalis, air-conditioned family hall, and highway dhaba charpai seating.`}
        path="/gallery"
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>Visual Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text font-serif">
          Ambience, Tandoor & Dish Gallery
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-brand-text-muted leading-relaxed">
          Real glimpse into our food preparation, authentic highway hospitality, and cozy dining spaces.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeFilter === f.id
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-brand-card text-brand-text hover:bg-brand-surface border border-brand-card-border'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid with Lightbox Trigger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-neutral-100 border border-brand-card-border shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </div>
                <h3 className="font-bold text-base font-serif">{item.title}</h3>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Highlights Section: Maharaja Thali, Highway Ambience, Live Kitchen */}
      <section className="bg-brand-card border-y border-brand-card-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Signature Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
              What Makes Dining Here Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-card-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-brand-text font-serif">
                Grand Maharaja Royal Thali
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                An authentic Indian feast on one royal platter — Dal Makhani, Paneer Butter Masala, seasonal sabzi, hot butter naans, jeera rice, cooling raita, and sweet gulab jamun.
              </p>
              <Link
                to="/menu?category=thali"
                className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
              >
                View Thali Combos &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-card-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-brand-text font-serif">
                Live High-Heat Clay Tandoor
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Our clay ovens are fired with genuine wood charcoal, infusing a distinctive smokiness into our Amritsari kulchas, garlic naans, tandoori rotis, and sizzling paneer tikkas.
              </p>
              <Link
                to="/menu?category=tandoori"
                className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
              >
                View Tandoori Items &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-card-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-brand-text font-serif">
                Highway Pitstop Hospitality
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Whether you prefer relaxing outdoors on traditional woven khatiya charpais with a kullhad of hot kadak tea, or enjoying AC family dining, we are open 365 days a year.
              </p>
              <Link
                to="/contact"
                className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
              >
                Find Us on Highway NH-58 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox */}
      <Lightbox
        images={filteredGallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1))
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0))
        }
      />
    </div>
  );
}

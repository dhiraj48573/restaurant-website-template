import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import SEOHead from '../components/SEOHead';
import {
  UtensilsCrossed,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Droplets,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  Flame,
  Leaf,
  Coffee,
} from 'lucide-react';

export default function About() {
  const { config, mode, t } = useConfig();

  return (
    <div className="space-y-16 sm:space-y-24 py-10 transition-colors duration-300">
      <SEOHead
        title="About Us & Our Culinary Heritage"
        description={`Learn the history, master chef secrets, and hygiene standards of ${config.business.name}, Haridwar. Dedicated to serving authentic North Indian cuisine since ${config.business.establishedYear}.`}
        path="/about"
      />

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Culinary Passion</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text font-serif">
          {config.about.headline}
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-brand-text-muted leading-relaxed">
          Celebrating a decade of handcrafted North Indian recipes, slow-fired clay tandoors, and pure desi ghee on the Delhi-Haridwar highway.
        </p>
      </section>

      {/* Story & Establishment Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Collage */}
          <div className="relative">
            <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-brand-card-border">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant dining ambience and warm hospitality"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-left-6 bg-brand-primary text-white p-5 rounded-2xl shadow-xl max-w-xs space-y-1 border-2 border-white">
              <div className="text-2xl font-black font-serif">
                Est. {config.business.establishedYear}
              </div>
              <div className="text-xs text-neutral-200">
                Over 12+ years serving highway pilgrims & food lovers
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Heritage & Establishment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text font-serif">
                From a Humble Tandoor to a Highway Culinary Landmark
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              {config.about.storyParagraph1}
            </p>

            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              {config.about.storyParagraph2}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-card-border">
              <div>
                <div className="text-2xl font-extrabold text-brand-primary font-serif">100%</div>
                <div className="text-[11px] text-brand-text-muted">Desi Cow Ghee</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-brand-primary font-serif">14 Hrs</div>
                <div className="text-[11px] text-brand-text-muted">Dal Slow Simmer</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-brand-primary font-serif">365 Days</div>
                <div className="text-[11px] text-brand-text-muted">Open Non-Stop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Chef & Culinary Philosophy */}
      {config.about.chef.showChef && (
        <section className="bg-brand-card border-y border-brand-card-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    Culinary Leadership
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text font-serif">
                    {config.about.chef.name}
                  </h2>
                  <p className="text-xs font-semibold text-brand-primary">
                    {config.about.chef.title} • {config.about.chef.experience}
                  </p>
                </div>

                <blockquote className="p-4 rounded-xl bg-brand-surface border-l-4 border-brand-primary text-xs sm:text-sm text-brand-text italic leading-relaxed">
                  "{config.about.chef.quote}"
                </blockquote>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Our Unbending Food Philosophy:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">Zero artificial food colouring or additives</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">Fresh daily dairy paneer from Roorkee farms</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">Whole spices ground fresh every morning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Coffee className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">Slow charcoal clay tandoors for smoky authenticity</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-brand-card-border">
                  <img
                    src={config.about.chef.image}
                    alt={config.about.chef.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="font-bold text-lg font-serif">{config.about.chef.name}</div>
                      <div className="text-xs text-neutral-300">{config.about.chef.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Verified Hygiene & Food Preparation Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            Certified Cleanliness
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text font-serif">
            Verified Hygiene & Preparation Standards
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted">
            We adhere strictly to certified food handling procedures, RO water filtration, and spotless kitchen sanitation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.about.hygienePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card border border-brand-card-border space-y-3 shadow-xs hover:border-emerald-500/40 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-brand-text">{pillar.title}</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* FSSAI Verified Box */}
        {config.business.fssai.hasLicense && (
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-card-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-brand-text">
                  Government Verified Food Safety & Standards (FSSAI)
                </h4>
                <p className="text-xs text-brand-text-muted">
                  Official Registration Number:{' '}
                  <span className="font-mono font-bold text-brand-text">
                    {config.business.fssai.licenseNumber}
                  </span>
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-primary-hover transition shrink-0"
            >
              Visit Our Kitchen & Dine
            </Link>
          </div>
        )}
      </section>

      {/* Ambience & Seating Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Diverse Dining Ambience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text font-serif">
            Seating Designed for Every Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden bg-brand-card border border-brand-card-border shadow-sm group">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                alt="AC Family Dining Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-base text-brand-text">AC Family Dining Hall</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Quiet, climate-controlled comfort with cushioned seating, high chairs for toddlers, and rapid tableside service.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-brand-card border border-brand-card-border shadow-sm group">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Outdoor Garden & Charpai Khatiya"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-base text-brand-text">Outdoor Charpai & Lawn</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Experience the romance of highway journeys reclining on traditional woven khatiya under the stars with tea & parathas.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-brand-card border border-brand-card-border shadow-sm group">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                alt="Party & Group Gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-base text-brand-text">Celebrations & Group Meals</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Dedicated banquet setups for birthday parties, tour travel buses, kitty parties, and pilgrimage group dinners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Check Menu */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <h3 className="text-2xl font-bold font-serif text-brand-text">
          Taste the Legacy for Yourself
        </h3>
        <p className="text-xs sm:text-sm text-brand-text-muted">
          Browse our extensive digital menu, order via WhatsApp, or stop by our NH-58 location today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="px-8 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-xs sm:text-sm hover:bg-brand-primary-hover transition shadow-md"
          >
            Explore Digital Menu
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-brand-card-border bg-brand-card text-brand-text font-bold text-xs sm:text-sm hover:bg-brand-surface transition"
          >
            Find Us on Google Maps
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import {
  UtensilsCrossed,
  Phone,
  MessageCircle,
  ShoppingBag,
  QrCode,
  Menu as MenuIcon,
  X,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function Navbar() {
  const { config, mode, language, setLanguage, t, cartCount, setIsCartOpen, setIsQrModalOpen } = useConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-card-border shadow-sm transition-colors duration-300">
      {/* Top Notification / Highway Alert Bar */}
      <div className="bg-brand-primary text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{config.contact.address.line1}, {config.contact.address.city}</span>
            </span>
            <span className="hidden sm:inline-block opacity-40">•</span>
            <span className="hidden md:flex items-center gap-1 opacity-95">
              <Clock className="w-3.5 h-3.5" />
              <span>{config.contact.timings.openingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Quick Call */}
            <a
              href={`tel:${config.contact.phoneCall}`}
              className="flex items-center gap-1 hover:underline font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>{config.contact.phone}</span>
            </a>

            <span className="opacity-40">•</span>

            {/* Language Switch */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 rounded bg-black/20 hover:bg-black/40 font-bold uppercase transition"
              title="Switch Language / भाषा बदलें"
            >
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-brand-text font-serif">
                {config.business.logo.textPrimary}{' '}
                <span className="text-brand-primary">{config.business.logo.textSecondary}</span>
              </span>
            </div>
            <p className="text-[10px] tracking-wider uppercase font-semibold text-brand-text-muted">
              {mode === 'dhaba' ? 'Authentic Highway Dhaba' : config.business.logo.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-brand-primary text-white font-semibold shadow-sm'
                  : 'text-brand-text hover:text-brand-primary hover:bg-brand-primary/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* QR Code Menu Button */}
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-brand-card-border bg-brand-card hover:bg-brand-surface text-brand-text transition shadow-sm"
            title="Scan or Download Table QR Menu"
          >
            <QrCode className="w-4 h-4 text-brand-primary" />
            <span className="hidden xl:inline">Table QR</span>
          </button>

          {/* Cart / WhatsApp Order Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-brand-card border border-brand-card-border hover:border-brand-primary text-brand-text font-medium text-xs sm:text-sm transition shadow-sm"
            title="View Selected Dishes for WhatsApp Order"
          >
            <ShoppingBag className="w-4 h-4 text-brand-primary" />
            <span className="hidden md:inline font-semibold">Your Order</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct Order Button */}
          <a
            href={`https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello! I would like to inquire about food ordering or dining at ${config.business.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm transition-all shadow hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-text hover:bg-brand-card border border-brand-card-border"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface border-b border-brand-card-border px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition ${
                isActive(link.path)
                  ? 'bg-brand-primary text-white font-semibold'
                  : 'text-brand-text hover:bg-brand-card'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-brand-card-border grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQrModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-brand-card-border bg-brand-card text-xs font-semibold text-brand-text"
            >
              <QrCode className="w-4 h-4 text-brand-primary" />
              <span>Digital QR Menu</span>
            </button>
            <a
              href={`https://wa.me/${config.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-green-600 text-white text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

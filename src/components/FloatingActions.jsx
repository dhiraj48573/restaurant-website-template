import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  MessageCircle,
  Phone,
  Calendar,
  MapPin,
  QrCode,
  X,
  ShoppingBag,
  Sparkles,
  ChevronUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingActions() {
  const { config, cartCount, cartTotal, setIsCartOpen, setIsQrModalOpen, formatINR } = useConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNum = config.contact.whatsappNumber;
  const restName = config.business.name;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 select-none">
      {/* Floating Order Cart Pill (visible when items in cart) */}
      {cartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-brand-primary text-white shadow-xl hover:scale-105 active:scale-95 transition-all animate-bounce duration-500 border-2 border-white/40"
          title="View Your Food Order"
        >
          <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
            <ShoppingBag className="w-4 h-4" />
            <span>{cartCount} {cartCount === 1 ? 'Dish' : 'Dishes'}</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
          <span className="font-extrabold text-xs sm:text-sm">
            {formatINR(cartTotal)}
          </span>
        </button>
      )}

      {/* Expanded Quick Action Popover */}
      {isMenuOpen && (
        <div className="bg-brand-surface rounded-2xl border border-brand-card-border p-3 shadow-2xl w-64 space-y-1.5 animate-fadeIn text-xs font-semibold text-brand-text mb-1">
          <div className="p-2 border-b border-brand-card-border flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted">
              Quick Restaurant Actions
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 rounded text-brand-text-muted hover:text-brand-text"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action 1: Order Food via WhatsApp */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(true);
            }}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Order Food</div>
              <div className="text-[10px] text-brand-text-muted">Takeaway & Home Delivery</div>
            </div>
          </button>

          {/* Action 2: Book Table */}
          <Link
            to="/contact#table-booking"
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Book a Table</div>
              <div className="text-[10px] text-brand-text-muted">Family & Group Reservations</div>
            </div>
          </Link>

          {/* Action 3: Catering Enquiry */}
          <a
            href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent(
              `Hello! I want to inquire about bulk catering / party booking at ${restName}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Catering Enquiry</div>
              <div className="text-[10px] text-brand-text-muted">Tour groups & celebrations</div>
            </div>
          </a>

          {/* Action 4: Call Restaurant */}
          <a
            href={`tel:${config.contact.phoneCall}`}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Call Manager</div>
              <div className="text-[10px] text-brand-text-muted">{config.contact.phone}</div>
            </div>
          </a>

          {/* Action 5: Highway Directions */}
          <a
            href={config.contact.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Get Directions</div>
              <div className="text-[10px] text-brand-text-muted">Google Maps turn-by-turn</div>
            </div>
          </a>

          {/* Action 6: Table QR Code */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsQrModalOpen(true);
            }}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-card text-brand-text hover:text-brand-primary transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-500/10 text-neutral-600 flex items-center justify-center shrink-0">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold">Scan / View QR</div>
              <div className="text-[10px] text-brand-text-muted">Dine-in menu standee</div>
            </div>
          </button>
        </div>
      )}

      {/* Main Primary Floating Trigger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all animate-soft-pulse"
        aria-label="Open WhatsApp & Quick Actions Menu"
        title="WhatsApp & Quick Assistance"
      >
        {isMenuOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white/20" />
        )}
      </button>
    </div>
  );
}

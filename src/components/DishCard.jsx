import React from 'react';
import { useConfig } from '../context/ConfigContext';
import VegBadge from './VegBadge';
import { Plus, Minus, MessageCircle, Flame, Sparkles, Award } from 'lucide-react';

export default function DishCard({ dish }) {
  const { cart, addToCart, updateQuantity, formatINR, language, config } = useConfig();

  // Find if this item is in the cart
  const cartItem = cart.find((ci) => ci.item.id === dish.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Single Dish Direct WhatsApp Quick Order
  const handleQuickWhatsAppOrder = (e) => {
    e.stopPropagation();
    const whatsappNum = config.contact.whatsappNumber;
    const restName = config.business.name;
    const message = `Hello! I want to order "${dish.name}" (Qty: 1, ${formatINR(dish.price)}) from ${restName}.\n\nPlease confirm availability and delivery/takeaway timing.`;
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="group bg-brand-card rounded-2xl border border-brand-card-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Dish Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Graceful fallback to food pattern placeholder
              e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80';
            }}
          />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span className="p-1 rounded-md bg-white/95 backdrop-blur-sm shadow-sm">
              <VegBadge isVeg={dish.isVeg} showLabel={false} size="sm" />
            </span>
            {dish.isDhabaSpecial && (
              <span className="px-2 py-0.5 rounded-full bg-red-600/95 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm flex items-center gap-1">
                <Flame className="w-3 h-3" />
                <span>Dhaba Special</span>
              </span>
            )}
            {dish.isChefSpecial && !dish.isDhabaSpecial && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/95 text-neutral-900 text-[10px] font-bold tracking-wider uppercase shadow-sm flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>Chef Special</span>
              </span>
            )}
            {dish.isPopular && !dish.isChefSpecial && !dish.isDhabaSpecial && (
              <span className="px-2 py-0.5 rounded-full bg-neutral-900/90 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                Popular
              </span>
            )}
          </div>

          {/* Spicy Indicator */}
          {dish.spicyLevel > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] text-amber-300 font-medium">
              {'🌶️'.repeat(dish.spicyLevel)}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-brand-text leading-snug">
                {dish.name}
              </h3>
              {dish.nameHindi && (
                <p className="text-xs text-brand-text-muted font-hindi">
                  {dish.nameHindi}
                </p>
              )}
            </div>

            {/* Price Badge */}
            <div className="text-right shrink-0">
              <span className="text-base sm:text-lg font-extrabold text-brand-primary">
                {formatINR(dish.price)}
              </span>
            </div>
          </div>

          <p className="text-xs text-brand-text-muted line-clamp-2 leading-relaxed mb-4">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-brand-card-border/60 flex items-center justify-between gap-2">
        {/* Fast Order on WhatsApp single button */}
        <button
          onClick={handleQuickWhatsAppOrder}
          className="text-xs text-brand-text-muted hover:text-green-600 flex items-center gap-1 font-semibold transition"
          title="Order this dish directly on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-green-600" />
          <span className="hidden sm:inline">Direct WA</span>
        </button>

        {/* Quantity Controls / Add to Order Button */}
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(dish, 1)}
            disabled={!dish.isAvailable}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm ${
              dish.isAvailable
                ? 'bg-brand-primary hover:bg-brand-primary-hover text-white'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{dish.isAvailable ? 'Add to Order' : 'Sold Out'}</span>
          </button>
        ) : (
          <div className="flex items-center bg-brand-primary/10 rounded-lg p-0.5 border border-brand-primary/20">
            <button
              onClick={() => updateQuantity(dish.id, quantity - 1)}
              className="w-7 h-7 rounded-md bg-brand-primary text-white flex items-center justify-center hover:opacity-90 transition font-bold"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-xs font-extrabold text-brand-primary">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(dish.id, quantity + 1)}
              className="w-7 h-7 rounded-md bg-brand-primary text-white flex items-center justify-center hover:opacity-90 transition font-bold"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

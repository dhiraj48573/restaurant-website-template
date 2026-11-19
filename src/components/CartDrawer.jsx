import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  AlertCircle,
  CheckCircle,
  Truck,
  ShoppingBag as BagIcon,
  Utensils,
} from 'lucide-react';
import VegBadge from './VegBadge';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
    formatINR,
    generateWhatsAppOrderUrl,
    t,
    config,
  } = useConfig();

  const [orderType, setOrderType] = useState('Takeaway');
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isCartOpen) return null;

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();
    const url = generateWhatsAppOrderUrl({
      orderType,
      customerName,
      deliveryAddress,
      notes: specialNotes,
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-surface shadow-2xl flex flex-col justify-between border-l border-brand-card-border">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-brand-card-border flex items-center justify-between bg-brand-card">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-base text-brand-text">
                  {t('cart.title')}
                </h2>
                <p className="text-xs text-brand-text-muted">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-brand-text-muted hover:text-brand-text hover:bg-neutral-100 transition"
              aria-label="Close Order Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-base text-brand-text">
                  {t('cart.emptyTitle')}
                </h3>
                <p className="text-xs text-brand-text-muted max-w-xs mx-auto leading-relaxed">
                  {t('cart.emptySubtitle')}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-4 py-2 rounded-lg bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-hover transition"
                  >
                    Explore Menu Dishes
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* List of Ordered Dishes */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-brand-text-muted pb-1 border-b border-brand-card-border">
                    <span className="font-semibold uppercase tracking-wider">Dishes</span>
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>{t('cart.clearCart')}</span>
                    </button>
                  </div>

                  {cart.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3 rounded-xl bg-brand-card border border-brand-card-border flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={ci.item.image}
                          alt={ci.item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <VegBadge isVeg={ci.item.isVeg} size="sm" />
                            <h4 className="font-bold text-xs sm:text-sm text-brand-text truncate">
                              {ci.item.name}
                            </h4>
                          </div>
                          <div className="text-xs font-bold text-brand-primary mt-0.5">
                            {formatINR(ci.item.price * ci.quantity)}{' '}
                            <span className="text-[10px] font-normal text-brand-text-muted">
                              ({formatINR(ci.item.price)} each)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex items-center bg-brand-surface rounded-lg p-0.5 border border-brand-card-border shrink-0">
                        <button
                          onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                          className="w-6 h-6 rounded bg-brand-card text-brand-text hover:bg-brand-primary hover:text-white flex items-center justify-center transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-brand-text">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                          className="w-6 h-6 rounded bg-brand-card text-brand-text hover:bg-brand-primary hover:text-white flex items-center justify-center transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal Banner */}
                <div className="p-3 rounded-xl bg-brand-card border border-brand-card-border flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-text">Estimated Total:</span>
                  <span className="text-lg font-black text-brand-primary">
                    {formatINR(cartTotal)}
                  </span>
                </div>

                {/* Order Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text uppercase tracking-wider">
                    {t('cart.orderType')}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'Takeaway', label: 'Takeaway', icon: BagIcon },
                      { id: 'Home Delivery', label: 'Delivery', icon: Truck },
                      { id: 'Dine-In', label: 'Dine-In', icon: Utensils },
                    ].map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setOrderType(type.id)}
                          className={`p-2 rounded-lg border text-xs font-semibold flex flex-col items-center gap-1 transition ${
                            orderType === type.id
                              ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                              : 'bg-brand-card text-brand-text border-brand-card-border hover:bg-brand-surface'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      {t('cart.customerName')} <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 rounded-lg border border-brand-card-border bg-brand-card text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  {orderType === 'Home Delivery' && (
                    <div className="animate-fadeIn">
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        {t('cart.deliveryAddress')} <span className="text-brand-primary">*</span>
                      </label>
                      <textarea
                        rows={2}
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House / Flat No, Landmark, Sector, Area..."
                        className="w-full px-3 py-2 rounded-lg border border-brand-card-border bg-brand-card text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      {t('cart.specialNotes')}
                    </label>
                    <input
                      type="text"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Mild spicy, extra white butter, pack separately..."
                      className="w-full px-3 py-2 rounded-lg border border-brand-card-border bg-brand-card text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                {/* Disclaimer Note (Crucial requirement) */}
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{t('cart.disclaimer')}</span>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Submit on WhatsApp */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-brand-card-border bg-brand-card space-y-2">
              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('cart.sendOrderBtn')}</span>
              </button>
              <div className="text-center text-[10px] text-brand-text-muted">
                Direct WhatsApp link to {config.contact.whatsappDisplay}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

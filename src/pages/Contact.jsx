import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import SEOHead from '../components/SEOHead';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Car,
  Calendar,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Users,
} from 'lucide-react';

export default function Contact() {
  const { config, t, generateWhatsAppReservationUrl, formatINR } = useConfig();

  // Tab switch between Form A (Food Order) and Form B (Table Booking)
  const [activeFormTab, setActiveFormTab] = useState('order'); // 'order' or 'reservation'

  // --- FORM A: WHATSAPP FOOD ORDER STATE ---
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderType, setOrderType] = useState('Takeaway');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customItemsText, setCustomItemsText] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderError, setOrderError] = useState('');

  // --- FORM B: TABLE RESERVATION STATE ---
  const [reserveName, setReserveName] = useState('');
  const [reservePhone, setReservePhone] = useState('');
  const [reserveDate, setReserveDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [reserveTime, setReserveTime] = useState('19:30');
  const [reserveGuests, setReserveGuests] = useState('4');
  const [reserveSeating, setReserveSeating] = useState('AC Family Dining Hall');
  const [reserveSpecial, setReserveSpecial] = useState('');
  const [reserveError, setReserveError] = useState('');

  // Handle Form A Submit (Food Order via WhatsApp)
  const handleFoodOrderSubmit = (e) => {
    e.preventDefault();
    setOrderError('');

    if (!orderName.trim()) {
      setOrderError('Please enter your name.');
      return;
    }
    if (!customItemsText.trim()) {
      setOrderError('Please specify the food items and quantities you would like to order.');
      return;
    }
    if (orderType === 'Home Delivery' && !deliveryAddress.trim()) {
      setOrderError('Please provide your complete delivery address.');
      return;
    }

    const whatsappNum = config.contact.whatsappNumber;
    const restName = config.business.name;

    let message = `Hello! I want to place an order from ${restName}.\n\n` +
      `Customer Name: ${orderName.trim()}\n` +
      `Contact Phone: ${orderPhone.trim() || 'WhatsApp Number'}\n` +
      `Order Type: ${orderType}\n\n` +
      `Requested Items:\n${customItemsText.trim()}\n`;

    if (orderType === 'Home Delivery' && deliveryAddress.trim()) {
      message += `\nDelivery Address: ${deliveryAddress.trim()}\n`;
    }
    if (orderNotes.trim()) {
      message += `\nSpecial Instructions: ${orderNotes.trim()}\n`;
    }

    message += `\nPlease confirm availability and total price. Thank you!`;

    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Handle Form B Submit (Table Reservation via WhatsApp)
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setReserveError('');

    if (!reserveName.trim()) {
      setReserveError('Please enter your full name.');
      return;
    }
    if (!reservePhone.trim()) {
      setReserveError('Please enter your phone / WhatsApp number.');
      return;
    }
    if (!reserveDate) {
      setReserveError('Please select a reservation date.');
      return;
    }

    const reservationUrl = generateWhatsAppReservationUrl({
      name: reserveName,
      phone: reservePhone,
      date: reserveDate,
      time: reserveTime,
      guests: reserveGuests,
      seatingPreference: reserveSeating,
      specialRequests: reserveSpecial,
    });

    window.open(reservationUrl, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-10 transition-colors duration-300">
      <SEOHead
        title="Contact, WhatsApp Order & Table Enquiry"
        description={`Contact ${config.business.name}, Haridwar. Phone: ${config.contact.phone}, WhatsApp: ${config.contact.whatsappDisplay}. Highway milestone directions, free parking & table bookings.`}
        path="/contact"
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>Highway Location & Orders</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text font-serif">
          Contact Us & Send Enquiry
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-brand-text-muted leading-relaxed">
          Order food on WhatsApp, reserve a family dining table, or navigate directly to our NH-58 highway entrance.
        </p>
      </section>

      {/* Main Grid: Info + Interactive Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Landmark Card */}
            <div className="p-6 rounded-3xl bg-brand-card border border-brand-card-border shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-text">Physical Address</h3>
                  <p className="text-xs text-brand-text-muted">Highway entrance & milestone</p>
                </div>
              </div>

              <div className="text-xs text-brand-text-muted space-y-1 pl-2 border-l-2 border-brand-primary">
                <p className="font-semibold text-brand-text">{config.contact.address.line1}</p>
                <p>{config.contact.address.line2}</p>
                <p>{config.contact.address.city}, {config.contact.address.state} - {config.contact.address.pincode}</p>
                <p className="font-bold text-brand-primary pt-1">
                  Landmark: {config.contact.address.landmark}
                </p>
              </div>

              {/* Highway Parking Note */}
              <div className="p-3 rounded-xl bg-brand-surface border border-brand-card-border flex items-start gap-2 text-xs">
                <Car className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-brand-text-muted leading-relaxed">
                  {config.contact.address.highwayInfo}
                </span>
              </div>
            </div>

            {/* Direct Calling & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-brand-card border border-brand-card-border shadow-xs space-y-4">
              <h3 className="font-bold text-base text-brand-text">
                Direct Contact Channels
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-surface border border-brand-card-border">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <div>
                      <span className="text-[10px] text-brand-text-muted block">Direct Phone</span>
                      <span className="font-bold text-brand-text">{config.contact.phone}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${config.contact.phoneCall}`}
                    className="px-3 py-1 rounded-lg bg-brand-primary text-white font-bold text-[11px]"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-surface border border-brand-card-border">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <div>
                      <span className="text-[10px] text-brand-text-muted block">WhatsApp Orders</span>
                      <span className="font-bold text-brand-text">{config.contact.whatsappDisplay}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${config.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-green-600 text-white font-bold text-[11px]"
                  >
                    Chat
                  </a>
                </div>

                {config.contact.email && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-brand-surface border border-brand-card-border">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-brand-primary" />
                      <div>
                        <span className="text-[10px] text-brand-text-muted block">Email Enquiries</span>
                        <span className="font-semibold text-brand-text">{config.contact.email}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="px-3 py-1 rounded-lg border border-brand-card-border text-brand-text font-bold text-[11px]"
                    >
                      Email
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Operating Hours & Holiday */}
            <div className="p-6 rounded-3xl bg-brand-card border border-brand-card-border shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-text">Restaurant Timings</h3>
                  <p className="text-xs text-brand-text-muted">{config.contact.timings.weeklyHoliday}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-brand-text-muted pt-2 border-t border-brand-card-border">
                <div className="flex justify-between py-1">
                  <span>Daily Operating Hours:</span>
                  <span className="font-bold text-brand-text">{config.contact.timings.openingHours}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Breakfast Service:</span>
                  <span className="font-semibold text-brand-text">{config.contact.timings.breakfast}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Dinner Service:</span>
                  <span className="font-semibold text-brand-text">{config.contact.timings.dinner}</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-600 font-bold">
                  <span>Weekly Holiday:</span>
                  <span>{config.contact.timings.weeklyHoliday}</span>
                </div>
              </div>
            </div>

            {/* Zomato & Swiggy Links */}
            {(config.integrations.zomatoUrl || config.integrations.swiggyUrl) && (
              <div className="p-5 rounded-2xl bg-brand-card border border-brand-card-border space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                  Delivery Partner Apps
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {config.integrations.zomatoUrl && (
                    <a
                      href={config.integrations.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-red-600/10 text-red-600 border border-red-600/20 text-xs font-bold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-1.5"
                    >
                      <span>Zomato</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {config.integrations.swiggyUrl && (
                    <a
                      href={config.integrations.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-orange-600/10 text-orange-600 border border-orange-600/20 text-xs font-bold hover:bg-orange-600 hover:text-white transition flex items-center justify-center gap-1.5"
                    >
                      <span>Swiggy</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Two Enquiry Forms (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-brand-card rounded-3xl border border-brand-card-border p-6 sm:p-8 shadow-sm space-y-6">
              {/* Form Navigation Tabs */}
              <div className="flex items-center bg-brand-surface rounded-2xl p-1.5 border border-brand-card-border">
                <button
                  type="button"
                  onClick={() => setActiveFormTab('order')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                    activeFormTab === 'order'
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-brand-text-muted hover:text-brand-text'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>A. WhatsApp Food Order</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFormTab('reservation')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                    activeFormTab === 'reservation'
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-brand-text-muted hover:text-brand-text'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>B. Table Reservation</span>
                </button>
              </div>

              {/* =============================================================
                  FORM A: WHATSAPP FOOD ORDER ENQUIRY
                  ============================================================= */}
              {activeFormTab === 'order' && (
                <form onSubmit={handleFoodOrderSubmit} className="space-y-4 animate-fadeIn">
                  <div>
                    <h3 className="font-bold text-lg text-brand-text font-serif">
                      Place Food Order via WhatsApp
                    </h3>
                    <p className="text-xs text-brand-text-muted">
                      Enter the dishes you wish to order. We generate a prefilled WhatsApp message directly to our counter.
                    </p>
                  </div>

                  {orderError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{orderError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Your Full Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="text"
                        value={orderName}
                        onChange={(e) => setOrderName(e.target.value)}
                        placeholder="e.g. Aman Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Contact / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={orderPhone}
                        onChange={(e) => setOrderPhone(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>

                  {/* Order Type: Takeaway vs Delivery */}
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      Order Preference <span className="text-brand-primary">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setOrderType('Takeaway')}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                          orderType === 'Takeaway'
                            ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                            : 'bg-brand-surface text-brand-text border-brand-card-border hover:bg-neutral-100'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        <span>Takeaway (Pickup)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType('Home Delivery')}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                          orderType === 'Home Delivery'
                            ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                            : 'bg-brand-surface text-brand-text border-brand-card-border hover:bg-neutral-100'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Home Delivery</span>
                      </button>
                    </div>
                  </div>

                  {/* Food Items & Quantities */}
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      Selected Food Items & Quantities <span className="text-brand-primary">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={customItemsText}
                      onChange={(e) => setCustomItemsText(e.target.value)}
                      placeholder="e.g.&#10;1. Paneer Butter Masala – 1&#10;2. Butter Roti – 4&#10;3. Jeera Rice – 1"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary font-mono"
                      required
                    />
                    <p className="text-[10px] text-brand-text-muted mt-0.5">
                      Tip: You can also use our{' '}
                      <span className="font-bold text-brand-primary">Digital Menu page</span> to select items with 1-click!
                    </p>
                  </div>

                  {/* Delivery Address (if Delivery selected) */}
                  {orderType === 'Home Delivery' && (
                    <div className="animate-fadeIn">
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Complete Delivery Address <span className="text-brand-primary">*</span>
                      </label>
                      <textarea
                        rows={2}
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House/Plot No, Society/Colony, Landmark, City..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required={orderType === 'Home Delivery'}
                      />
                    </div>
                  )}

                  {/* Special Instructions */}
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      Special Cooking / Packing Instructions
                    </label>
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="e.g. Mild spicy, pack pickle separately, travel packing..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  {/* Explicit Mandatory Disclaimer */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 flex items-start gap-2.5 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Notice:</strong> WhatsApp submission is an enquiry. The restaurant counter will verify availability, calculate total, and confirm preparation time before processing. We do not charge online payments automatically.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Order Enquiry on WhatsApp</span>
                  </button>
                </form>
              )}

              {/* =============================================================
                  FORM B: TABLE RESERVATION ENQUIRY
                  ============================================================= */}
              {activeFormTab === 'reservation' && (
                <form id="table-booking" onSubmit={handleReservationSubmit} className="space-y-4 animate-fadeIn">
                  <div>
                    <h3 className="font-bold text-lg text-brand-text font-serif">
                      Table Reservation Enquiry
                    </h3>
                    <p className="text-xs text-brand-text-muted">
                      Book seating for family dinners, highway pit-stops, and special celebrations.
                    </p>
                  </div>

                  {reserveError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{reserveError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Full Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="text"
                        value={reserveName}
                        onChange={(e) => setReserveName(e.target.value)}
                        placeholder="e.g. Rohit Mehra"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Phone / WhatsApp Number <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        value={reservePhone}
                        onChange={(e) => setReservePhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Reservation Date <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="date"
                        value={reserveDate}
                        onChange={(e) => setReserveDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Reservation Time <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="time"
                        value={reserveTime}
                        onChange={(e) => setReserveTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-brand-text block mb-1">
                        Number of Guests <span className="text-brand-primary">*</span>
                      </label>
                      <select
                        value={reserveGuests}
                        onChange={(e) => setReserveGuests(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                      >
                        <option value="1-2 Guests">1-2 Guests</option>
                        <option value="3-4 Guests">3-4 Guests</option>
                        <option value="5-8 Guests (Family Table)">5-8 Guests (Family Table)</option>
                        <option value="10-15 Guests (Group Dining)">10-15 Guests (Group Dining)</option>
                        <option value="20+ Guests (Party / Bus Tour)">20+ Guests (Party / Bus Tour)</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      Seating Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setReserveSeating('AC Family Dining Hall')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                          reserveSeating === 'AC Family Dining Hall'
                            ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                            : 'bg-brand-surface text-brand-text border-brand-card-border'
                        }`}
                      >
                        <Users className="w-4 h-4" />
                        <span>AC Family Hall</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setReserveSeating('Outdoor Garden / Traditional Charpai')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                          reserveSeating === 'Outdoor Garden / Traditional Charpai'
                            ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                            : 'bg-brand-surface text-brand-text border-brand-card-border'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        <span>Outdoor Charpai</span>
                      </button>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-xs font-bold text-brand-text block mb-1">
                      Special Request or Occasion
                    </label>
                    <input
                      type="text"
                      value={reserveSpecial}
                      onChange={(e) => setReserveSpecial(e.target.value)}
                      placeholder="e.g. Birthday celebration, Toddler high-chair, Highway bus arrival..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  {/* Explicit Mandatory Disclaimer */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 flex items-start gap-2.5 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Reservation Policy:</strong> Submitting this request sends an enquiry to our manager. We will confirm table availability and timings via WhatsApp or a quick phone call.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Table Reservation Request via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section with Directions Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-brand-card-border bg-brand-card shadow-md space-y-4 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-xl text-brand-text font-serif">
                Highway Location & Google Map
              </h3>
              <p className="text-xs text-brand-text-muted">
                Zero detours for Delhi-Haridwar-Rishikesh travelers on National Highway 58.
              </p>
            </div>

            <a
              href={config.contact.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-primary-hover transition flex items-center gap-2 shadow shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="h-96 w-full rounded-2xl overflow-hidden border border-brand-card-border bg-neutral-100">
            <iframe
              src={config.contact.maps.embedUrl}
              title={`${config.business.name} Google Map Location`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

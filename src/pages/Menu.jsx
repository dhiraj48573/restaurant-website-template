import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import SEOHead from '../components/SEOHead';
import DishCard from '../components/DishCard';
import VegBadge from '../components/VegBadge';
import {
  Search,
  Download,
  QrCode,
  SlidersHorizontal,
  Flame,
  Award,
  Sparkles,
  Utensils,
  ShoppingBag,
  FileText,
  AlertCircle,
  X,
} from 'lucide-react';

export default function Menu() {
  const { config, t, setIsQrModalOpen, cartCount, setIsCartOpen, formatINR, cartTotal } = useConfig();
  const location = useLocation();

  // Search and Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegFilter, setVegFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [specialFilter, setSpecialFilter] = useState('all'); // 'all', 'popular', 'chef', 'dhaba'

  // Read category query param if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  // Filtered menu items
  const filteredDishes = useMemo(() => {
    return config.menuItems.filter((dish) => {
      // Category filter
      if (selectedCategory !== 'all' && dish.categoryId !== selectedCategory) {
        return false;
      }

      // Veg / Non-Veg filter
      if (vegFilter === 'veg' && !dish.isVeg) return false;
      if (vegFilter === 'non-veg' && dish.isVeg) return false;

      // Special Filter
      if (specialFilter === 'popular' && !dish.isPopular) return false;
      if (specialFilter === 'chef' && !dish.isChefSpecial) return false;
      if (specialFilter === 'dhaba' && !dish.isDhabaSpecial) return false;

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesHindi = dish.nameHindi?.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        if (!matchesName && !matchesHindi && !matchesDesc) return false;
      }

      return true;
    });
  }, [config.menuItems, selectedCategory, vegFilter, specialFilter, searchQuery]);

  // Group dishes by category when "all" is selected
  const categoriesWithDishes = useMemo(() => {
    if (selectedCategory !== 'all') {
      const activeCat = config.menuCategories.find((c) => c.id === selectedCategory);
      return [{ category: activeCat, dishes: filteredDishes }];
    }

    // Grouping by each enabled category
    return config.menuCategories
      .filter((cat) => cat.id !== 'all' && cat.enabled)
      .map((cat) => {
        const dishes = filteredDishes.filter((d) => d.categoryId === cat.id);
        return { category: cat, dishes };
      })
      .filter((group) => group.dishes.length > 0);
  }, [config.menuCategories, selectedCategory, filteredDishes]);

  // Download PDF Menu handler
  const handleDownloadPdf = () => {
    if (config.integrations.hasPdfMenu) {
      const link = document.createElement('a');
      link.href = config.integrations.pdfMenuUrl;
      link.download = `${config.business.name.replace(/\s+/g, '-').toLowerCase()}-menu.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.print();
    }
  };

  return (
    <div className="space-y-10 py-8 min-h-screen transition-colors duration-300">
      <SEOHead
        title="Digital Menu & Prices"
        description={`Explore the full digital menu of ${config.business.name}, Haridwar. Dal Makhani, Royal Thalis, Tandoori Platters, Paneer Specials, Parathas and Kullhad Lassi. Order via WhatsApp.`}
        path="/menu"
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <Utensils className="w-3.5 h-3.5" />
          <span>{config.business.category}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text font-serif">
          {t('menu.title')}
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-brand-text-muted leading-relaxed">
          {t('menu.subtitle')}
        </p>

        {/* Action Buttons: PDF Download & QR Code */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {config.integrations.hasPdfMenu && (
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-card border border-brand-card-border hover:bg-brand-surface text-brand-text text-xs font-bold transition shadow-xs"
              title="Download or Print Menu PDF"
            >
              <FileText className="w-4 h-4 text-brand-primary" />
              <span>{t('menu.downloadPdf')}</span>
            </button>
          )}

          <button
            onClick={() => setIsQrModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white hover:bg-brand-primary-hover text-xs font-bold transition shadow-sm"
            title="Scan or View Table QR Menu"
          >
            <QrCode className="w-4 h-4" />
            <span>{t('menu.scanQr')}</span>
          </button>
        </div>
      </section>

      {/* Search Bar & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-brand-card border border-brand-card-border shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('menu.searchPlaceholder')}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-brand-card-border bg-brand-surface text-xs sm:text-sm text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setVegFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  vegFilter === 'all'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-brand-surface text-brand-text-muted hover:text-brand-text border border-brand-card-border'
                }`}
              >
                {t('menu.all')}
              </button>

              <button
                onClick={() => setVegFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  vegFilter === 'veg'
                    ? 'bg-green-700 text-white shadow-xs'
                    : 'bg-brand-surface text-green-700 hover:bg-green-50 border border-green-200'
                }`}
              >
                <VegBadge isVeg={true} size="sm" />
                <span>{t('menu.vegOnly')}</span>
              </button>

              <button
                onClick={() => setVegFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  vegFilter === 'non-veg'
                    ? 'bg-red-700 text-white shadow-xs'
                    : 'bg-brand-surface text-red-700 hover:bg-red-50 border border-red-200'
                }`}
              >
                <VegBadge isVeg={false} size="sm" />
                <span>{t('menu.nonVegOnly')}</span>
              </button>
            </div>
          </div>

          {/* Quick Tag Pills: Popular, Chef Special, Dhaba Special */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-brand-card-border/60 text-xs">
            <span className="text-[11px] font-bold text-brand-text-muted mr-1">
              Curated Highlights:
            </span>
            <button
              onClick={() => setSpecialFilter(specialFilter === 'dhaba' ? 'all' : 'dhaba')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition flex items-center gap-1 ${
                specialFilter === 'dhaba'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-brand-surface border border-brand-card-border text-brand-text hover:border-red-500'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>Dhaba Specials</span>
            </button>

            <button
              onClick={() => setSpecialFilter(specialFilter === 'chef' ? 'all' : 'chef')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition flex items-center gap-1 ${
                specialFilter === 'chef'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'bg-brand-surface border border-brand-card-border text-brand-text hover:border-amber-500'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Chef Specials</span>
            </button>

            <button
              onClick={() => setSpecialFilter(specialFilter === 'popular' ? 'all' : 'popular')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition flex items-center gap-1 ${
                specialFilter === 'popular'
                  ? 'bg-neutral-800 text-white shadow-xs'
                  : 'bg-brand-surface border border-brand-card-border text-brand-text hover:border-neutral-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Most Popular</span>
            </button>
          </div>
        </div>

        {/* Horizontal Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {config.menuCategories
            .filter((c) => c.enabled)
            .map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'bg-brand-card text-brand-text hover:bg-brand-surface border border-brand-card-border'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.highlight && (
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  )}
                </button>
              );
            })}
        </div>
      </section>

      {/* Dishes Listings by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredDishes.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-brand-card border border-brand-card-border space-y-3">
            <AlertCircle className="w-12 h-12 text-brand-text-muted mx-auto" />
            <h3 className="font-bold text-lg text-brand-text">No dishes matched your filters</h3>
            <p className="text-xs text-brand-text-muted max-w-sm mx-auto">
              Try clearing your search query or switching between Veg / Non-Veg options.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegFilter('all');
                setSpecialFilter('all');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          categoriesWithDishes.map((group) => (
            <div key={group.category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-baseline justify-between border-b-2 border-brand-card-border pb-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl sm:text-2xl font-black text-brand-text font-serif">
                    {group.category.name}
                  </h2>
                  {group.category.nameHindi && (
                    <span className="text-xs text-brand-text-muted font-hindi">
                      ({group.category.nameHindi})
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-brand-text-muted">
                  {group.dishes.length} {group.dishes.length === 1 ? 'dish' : 'dishes'}
                </span>
              </div>

              {/* Grid of Dishes in this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.dishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Floating Bottom Cart Bar if items are added */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[90%] bg-neutral-900 text-white rounded-2xl p-4 shadow-2xl border border-neutral-700 flex items-center justify-between gap-4 animate-fadeIn">
          <div>
            <div className="text-xs font-bold text-neutral-300">
              {cartCount} {cartCount === 1 ? 'Dish' : 'Dishes'} in Your WhatsApp Order
            </div>
            <div className="text-base font-black text-amber-400">
              {formatINR(cartTotal)}
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Review & Order on WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
}

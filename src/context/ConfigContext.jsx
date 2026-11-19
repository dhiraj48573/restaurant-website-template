import React, { createContext, useContext, useState, useEffect } from 'react';
import { restaurantConfig } from '../config/restaurant.config';

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  // Mode state: 'dhaba' or 'restaurant'
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('app_mode') || restaurantConfig.theme.defaultMode;
  });

  // Theme state: 'theme-dhaba', 'theme-luxury', 'theme-family'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || restaurantConfig.theme.activeTheme;
  });

  // Language state: 'en' or 'hi'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_language') || restaurantConfig.theme.defaultLanguage;
  });

  // Cart / WhatsApp Order Drawer state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('app_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Sync mode, theme, language to localStorage and HTML root element
  useEffect(() => {
    localStorage.setItem('app_mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    const root = document.documentElement;
    root.classList.remove('theme-dhaba', 'theme-luxury', 'theme-family');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('app_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Translation helper function
  const t = (path) => {
    const keys = path.split('.');
    let current = restaurantConfig.translations[language] || restaurantConfig.translations.en;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = restaurantConfig.translations.en;
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  // Cart operations
  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prevCart, { item, quantity }];
    });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((ci) => (ci.item.id === itemId ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const cartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  // Generate WhatsApp Order URL exactly matching business guidelines
  const generateWhatsAppOrderUrl = ({ orderType = 'Takeaway', customerName = '', deliveryAddress = '', notes = '' }) => {
    const whatsappNum = restaurantConfig.contact.whatsappNumber;
    const restName = restaurantConfig.business.name;

    if (cart.length === 0) {
      const generalMsg = `Hello! I would like to inquire about ordering food from ${restName}.`;
      return `https://wa.me/${whatsappNum}?text=${encodeURIComponent(generalMsg)}`;
    }

    let itemListStr = cart
      .map((ci, index) => `${index + 1}. ${ci.item.name} – ${ci.quantity}`)
      .join('\n');

    let message = `Hello! I want to place an order from ${restName}.\n\nItems:\n${itemListStr}\n\nOrder type: ${orderType}`;

    if (customerName.trim()) {
      message += `\nCustomer Name: ${customerName.trim()}`;
    }
    if (orderType === 'Home Delivery' && deliveryAddress.trim()) {
      message += `\nDelivery Address: ${deliveryAddress.trim()}`;
    }
    if (notes.trim()) {
      message += `\nSpecial Instructions: ${notes.trim()}`;
    }

    message += `\n\nApprox Total: ₹${cartTotal}\nPlease confirm availability and total price.`;

    return `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
  };

  // Generate WhatsApp Table Reservation URL
  const generateWhatsAppReservationUrl = ({ name, phone, date, time, guests, seatingPreference, specialRequests }) => {
    const whatsappNum = restaurantConfig.contact.whatsappNumber;
    const restName = restaurantConfig.business.name;

    let message = `Hello! I want to reserve a table at ${restName}.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n` +
      `Guests: ${guests}\n` +
      `Seating Preference: ${seatingPreference}\n`;

    if (specialRequests && specialRequests.trim()) {
      message += `Special Requests: ${specialRequests.trim()}\n`;
    }

    message += `\nPlease confirm table availability. Thank you!`;

    return `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
  };

  // Format INR currency
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <ConfigContext.Provider
      value={{
        config: restaurantConfig,
        mode,
        setMode,
        theme,
        setTheme,
        language,
        setLanguage,
        t,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        isQrModalOpen,
        setIsQrModalOpen,
        generateWhatsAppOrderUrl,
        generateWhatsAppReservationUrl,
        formatINR,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}

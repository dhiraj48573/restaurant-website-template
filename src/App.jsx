import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from './context/ConfigContext';

// Components
import ThemePreviewToolbar from './components/ThemePreviewToolbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QRCodeModal from './components/QRCodeModal';
import FloatingActions from './components/FloatingActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-surface text-brand-text font-sans antialiased selection:bg-brand-primary selection:text-white transition-colors duration-300">
          {/* Top Live Preview & Client Customizer Bar */}
          <ThemePreviewToolbar />

          {/* Sticky Modern Navbar */}
          <Navbar />

          {/* Main Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating Actions & Drawers */}
          <FloatingActions />
          <CartDrawer />
          <QRCodeModal />
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

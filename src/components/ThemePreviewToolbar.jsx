import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Sliders, Sparkles, ChevronDown, ChevronUp, Languages, Utensils, Compass } from 'lucide-react';

export default function ThemePreviewToolbar() {
  const { mode, setMode, theme, setTheme, language, setLanguage, config } = useConfig();
  const [isOpen, setIsOpen] = useState(true);

  if (!config.theme.showPreviewToolbar) return null;

  return (
    <div className="relative z-50 bg-neutral-900 text-white text-xs border-b border-neutral-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            Client Customizer Toolbar
          </span>
          <span className="hidden md:inline text-neutral-400">
            Preview any mode & theme in real time:
          </span>
        </div>

        {/* Center / Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Mode Switcher */}
          <div className="flex items-center bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
            <button
              onClick={() => setMode('dhaba')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium ${
                mode === 'dhaba'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Highway Dhaba layout with highway landmarks, parking, and rustic highlights"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Dhaba Mode</span>
            </button>
            <button
              onClick={() => setMode('restaurant')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium ${
                mode === 'restaurant'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Fine Dining / Family Restaurant mode with luxury accents"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Restaurant Mode</span>
            </button>
          </div>

          {/* Theme Palette Switcher */}
          <div className="flex items-center bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
            <button
              onClick={() => setTheme('theme-dhaba')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium ${
                theme === 'theme-dhaba'
                  ? 'bg-red-700 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Theme A: Traditional Red + Black + White"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
              <span className="hidden sm:inline">Theme A:</span> Dhaba Red
            </button>
            <button
              onClick={() => setTheme('theme-luxury')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium ${
                theme === 'theme-luxury'
                  ? 'bg-amber-500 text-black shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Theme B: Black + Gold + Cream"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="hidden sm:inline">Theme B:</span> Luxury Gold
            </button>
            <button
              onClick={() => setTheme('theme-family')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium ${
                theme === 'theme-family'
                  ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Theme C: Orange + White + Green"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
              <span className="hidden sm:inline">Theme C:</span> Family Green
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                language === 'en' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                language === 'hi' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

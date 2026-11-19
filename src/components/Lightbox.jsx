import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null || !images || images.length === 0) return null;

  const currentImage = images[activeIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image and Details */}
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center select-none">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
        />
        <div className="mt-4 text-center text-white max-w-xl">
          <h4 className="font-bold text-lg font-serif">{currentImage.title}</h4>
          {currentImage.description && (
            <p className="text-xs text-neutral-300 mt-1">{currentImage.description}</p>
          )}
          <span className="text-[11px] text-neutral-400 mt-2 inline-block font-mono">
            {activeIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

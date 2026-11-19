import React from 'react';

export default function VegBadge({ isVeg, showLabel = false, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5 p-0.5',
    md: 'w-4 h-4 p-0.5',
    lg: 'w-5 h-5 p-1',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  if (isVeg) {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium select-none" title="Pure Vegetarian">
        <span className={`inline-flex items-center justify-center border-2 border-green-600 rounded-sm bg-white ${sizeClasses[size]}`}>
          <span className={`rounded-full bg-green-600 ${dotSizes[size]}`}></span>
        </span>
        {showLabel && <span className="text-xs font-bold text-green-700 tracking-wider">VEG</span>}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-medium select-none" title="Non-Vegetarian">
      <span className={`inline-flex items-center justify-center border-2 border-red-700 rounded-sm bg-white ${sizeClasses[size]}`}>
        {/* Red triangle or dot for Indian non-veg mark */}
        <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-red-700"></span>
      </span>
      {showLabel && <span className="text-xs font-bold text-red-700 tracking-wider">NON-VEG</span>}
    </span>
  );
}

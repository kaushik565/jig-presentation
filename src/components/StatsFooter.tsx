'use client';

import { useEffect, useState } from 'react';

export function StatsFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 shadow-2xl z-40 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-around items-center text-center">
        <div className="flex-1">
          <p className="text-2xl font-bold">100%</p>
          <p className="text-xs text-red-100">Accuracy</p>
        </div>
        <div className="h-8 w-px bg-red-500"></div>
        <div className="flex-1">
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-red-100">False Rejections</p>
        </div>
        <div className="h-8 w-px bg-red-500"></div>
        <div className="flex-1">
          <p className="text-2xl font-bold">300+</p>
          <p className="text-xs text-red-100">Tested</p>
        </div>
        <div className="h-8 w-px bg-red-500"></div>
        <div className="flex-1">
          <p className="text-2xl font-bold">0 $</p>
          <p className="text-xs text-red-100">Additional Cost</p>
        </div>
      </div>
    </div>
  );
}

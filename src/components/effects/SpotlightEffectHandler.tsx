'use client';

import { useEffect } from 'react';

const SpotlightEffectHandler = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const spotlightElement = target.closest('[data-spotlight-hover="true"]') as HTMLElement | null;

      if (spotlightElement) {
        const rect = spotlightElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        spotlightElement.style.setProperty('--mouse-x-local', `${x}px`);
        spotlightElement.style.setProperty('--mouse-y-local', `${y}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default SpotlightEffectHandler;

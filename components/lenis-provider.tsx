'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';

interface LenisProviderProps {
  children: ReactNode;
  scrollEnabled?: boolean;
}

function LenisController({ scrollEnabled }: { scrollEnabled: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      if (scrollEnabled) {
        lenis.start();
      } else {
        lenis.stop();
      }
    }
  }, [lenis, scrollEnabled]);

  return null;
}

export function LenisProvider({
  children,
  scrollEnabled = true,
}: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

'use client';

import IntroComponent from '@/components/intro';
import { LenisProvider } from '@/components/lenis-provider';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Page() {

  return (
    <LenisProvider>
      <div>
        <IntroComponent />
      </div>
    </LenisProvider>
  );
}

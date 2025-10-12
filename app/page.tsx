'use client';

import IntroComponent from '@/components/intro';
import { LenisProvider } from '@/components/lenis-provider';

export default function Page() {

  return (
    <LenisProvider>
      <div className='relative'>
        <IntroComponent />
		<div className='h-[100vh] bg-black z-2 relative'></div>
		<div className='h-[100vh] bg-gray z-3 relative'></div>
      </div>
    </LenisProvider>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  {
    src: '/imgs/img-7.png',
    alt: 'Image 7',
    className: 'absolute top-[34%] left-[5%]',
    size: '4',
  },
  {
    src: '/imgs/img-8.png',
    alt: 'Image 8',
    className: 'absolute top-[80%] left-[15%]',
    size: '4',
  },
  {
    src: '/imgs/img-9.png',
    alt: 'Image 9',
    className: 'absolute top-[0] left-[33%]',
    size: '4',
  },
  {
    src: '/imgs/img-13.png',
    alt: 'Image 13',
    className: 'absolute top-[85%] left-[53%]',
    size: '4',
  },
  {
    src: '/imgs/img-10.png',
    alt: 'Image 10',
    className: 'absolute top-[5%] left-[5%]',
    size: '4',
  },
  {
    src: '/imgs/img-1.png',
    alt: 'Image 1',
    className: 'absolute top-[5%] left-[50%]',
    size: '8',
  },
  {
    src: '/imgs/img-3.png',
    alt: 'Image 3',
    className: 'absolute top-[14%] left-[86%]',
    size: '8',
  },
  {
    src: '/imgs/img-6.png',
    alt: 'Image 6',
    className: 'absolute bottom-[15%] right-[10%]',
    size: '8',
  },
  {
    src: '/imgs/img-5.png',
    alt: 'Image 5',
    className: 'absolute bottom-[10%] left-[65%]',
    size: '10',
  },
  {
    src: '/imgs/img-2.png',
    alt: 'Image 2',
    className: 'absolute top-[15%] left-[25%]',
    size: '12',
  },
  {
    src: '/imgs/img-4.png',
    alt: 'Image 4',
    className: 'absolute top-[32%] left-[75%]',
    size: '12',
  },
  {
    src: '/imgs/img-11.png',
    alt: 'Image 11',
    className: 'absolute top-[52%] left-[15%]',
    size: '14',
  },
  {
    src: '/imgs/img-12.png',
    alt: 'Image 12',
    className: 'absolute top-[62%] left-[35%]',
    size: '14',
  },
];

// Animation variants for each image - they start at different Z positions and animate to 0
const positions = [
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -500, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -350, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -350, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -400, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -450, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -450, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
  {
    initial: { translateZ: -450, opacity: 0 },
    animate: { translateZ: 0, opacity: 1 },
  },
];

function TimelineAnimationOnly() {
  const [completedAnimations, setCompletedAnimations] = useState<Set<number>>(
    new Set()
  );

  const handleImageAnimationComplete = (index: number) => {
    setCompletedAnimations(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const allAnimationsComplete = completedAnimations.size === images.length;

  return (
    <div className='relative h-screen w-full bg-gray-100'>
      <div
        style={{ perspective: '1000px' }}
        className='absolute top-0 h-full w-full overflow-hidden'
      >
        {images.map((image, idx) => (
          <Image
            key={idx}
            src={image.src}
            alt={image.alt}
            className={`${image.className} pointer-events-none`}
            index={idx}
            onAnimationComplete={() => handleImageAnimationComplete(idx)}
            size={image.size}
          />
        ))}
      </div>

      {/* Status indicator */}
      <div className='absolute top-4 left-4 z-10 rounded bg-black/50 px-4 py-2 text-white'>
        <p>
          Animations completed: {completedAnimations.size} / {images.length}
        </p>
        {allAnimationsComplete && (
          <p className='text-green-400'>All animations complete!</p>
        )}
      </div>

      {/* Reset button */}
      <button
        onClick={() => window.location.reload()}
        className='absolute top-4 right-4 z-10 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
      >
        Reset Animation
      </button>
    </div>
  );
}

const Image = ({
  src,
  alt,
  index,
  className,
  size,
  onAnimationComplete,
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
  size: string;
  onAnimationComplete: () => void;
}) => {
  return (
    <motion.div
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        width: 'fit-content',
      }}
      variants={positions[index]}
      initial='initial'
      animate='animate'
      transition={{
        duration: 1.5,
        ease: [0, 0.55, 0.45, 1],
        delay: Math.random() * 0.5,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: `${size}rem`, height: `${size}rem` }}
        className=''
      />
    </motion.div>
  );
};

export default TimelineAnimationOnly;

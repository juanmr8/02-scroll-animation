'use client';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const images = [
  {
    src: '/imgs/img-1.png',
    alt: 'Image 1',
    className: 'absolute top-[5%] left-[50%]',
    size: '8',
  },
  {
    src: '/imgs/img-2.png',
    alt: 'Image 2',
    className: 'absolute top-[15%] left-[25%]',
    size: '12',
  },
  {
    src: '/imgs/img-3.png',
    alt: 'Image 3',
    className: 'absolute top-[14%] left-[86%]',
    size: '8',
  },
  {
    src: '/imgs/img-4.png',
    alt: 'Image 4',
    className: 'absolute top-[32%] left-[75%]',
    size: '12',
  },
  {
    src: '/imgs/img-5.png',
    alt: 'Image 5',
    className: 'absolute bottom-[10%] left-[65%]',
    size: '10',
  },
  {
    src: '/imgs/img-6.png',
    alt: 'Image 1',
    className: 'absolute bottom-[15%] right-[10%]',
    size: '8',
  },
  {
    src: '/imgs/img-7.png',
    alt: 'Image 2',
    className: 'absolute top-[34%] left-[5%]',
    size: '4',
  },
  {
    src: '/imgs/img-8.png',
    alt: 'Image 3',
    className: 'absolute top-[80%] left-[15%]',
    size: '4',
  },
  {
    src: '/imgs/img-9.png',
    alt: 'Image 4',
    className: 'absolute top-[0] left-[33%]',
    size: '4',
  },
  {
    src: '/imgs/img-10.png',
    alt: 'Image 5',
    className: 'absolute top-[5%] left-[5%]',
    size: '4',
  },
];

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
];

function IntroComponent() {
  const ref = useRef(null);
  const [completedAnimations, setCompletedAnimations] = useState<Set<number>>(
    new Set()
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', '200vh'],
  });

  const animationComplete =
    completedAnimations.size === images.length && completedAnimations.size > 0;

  const handleImageAnimationComplete = (index: number) => {
    setCompletedAnimations(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  return (
    <div
      ref={ref}
      className='relative min-h-screen w-full'
      style={{
        height: animationComplete ? '400vh' : '100vh',
      }}
    >
      <Text scrollYProgress={scrollYProgress} />
      <div
        style={{ perspective: '1000px' }}
        className='fixed h-full max-h-screen min-h-screen w-full overflow-hidden'
      >
        {images.map((image, idx) => (
          <Image
            key={idx}
            src={image.src}
            alt={image.alt}
            className={`${image.className} pointer-events-none`}
            index={idx}
            scrollYProgress={scrollYProgress}
            onAnimationComplete={() => handleImageAnimationComplete(idx)}
            size={image.size}
          />
        ))}
      </div>
    </div>
  );
}

const Text = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const p1 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const scale0 = useTransform(scrollYProgress, [0.55, 0.99], [0.1, 1]);
  const scale1 = useTransform(scrollYProgress, [0.55, 0.97], [1 / 6, 1]);
  const scale2 = useTransform(scrollYProgress, [0.55, 0.96], [2 / 6, 1]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.95], [3 / 6, 1]);
  const scale4 = useTransform(scrollYProgress, [0.55, 0.94], [4 / 6, 1]);
  const scale5 = useTransform(scrollYProgress, [0.55, 0.93], [5 / 6, 1]);
  const scales = [scale0, scale1, scale2, scale3, scale4, scale5];

  return (
    <motion.div
      className='fixed top-0 left-0 h-full w-full overflow-hidden'
      style={
        {
          '--p1': p1,
        } as any
      }
    >
      {/* Container for the image - centered and scaled */}
      <motion.div
        className='relative top-1/2 left-1/2 flex h-screen w-full items-center justify-center'
        style={{
          transform: 'translate(-50%, -50%) scale(var(--p1))',
        }}
      >
        <img
          src={'/imgs/main-img.jpg'}
          alt='Image 1'
          className='main-image h-screen w-screen object-cover'
        />
        {scales.reverse().map((scale, idx) => (
          <motion.img
            key={idx}
            src={`/imgs/cropped.png`}
            alt={`Cropped Image ${idx}`}
            className='absolute top-0 right-0 bottom-0 left-0 h-screen w-screen object-cover'
            style={{
              scale,
            }}
          />
        ))}
      </motion.div>

      {/* Left text - "To live" */}
      <motion.p
        className='absolute top-1/2 left-1/2 z-10 text-2xl font-bold whitespace-nowrap text-black'
        style={{
          transform:
            'translateY(-50%) translateX(calc(-100% - 0.2rem - 55vw * var(--p1))) translateZ(0)',
        }}
      >
        To Live
      </motion.p>

      {/* Right text - "with no Regrets" */}
      <motion.p
        className='absolute top-1/2 left-1/2 z-10 text-2xl font-bold whitespace-nowrap text-black'
        style={{
          transform:
            'translateY(-50%) translateX(calc(0.5rem + 55vw * var(--p1))) translateZ(0)',
        }}
      >
        with no Regrets
      </motion.p>
    </motion.div>
  );
};

const Image = ({
  src,
  alt,
  index,
  className,
  scrollYProgress,
  size,
  onAnimationComplete,
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
  scrollYProgress: MotionValue<number>;
  size: string;
  onAnimationComplete: () => void;
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const z = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    onAnimationComplete();
  };

  return (
    <motion.div
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        width: 'fit-content',
      }}
      // Use variants for initial animation, then switch to style-based control
      {...(!animationComplete
        ? {
            variants: positions[index],
            initial: 'initial',
            animate: 'animate',
            transition: {
              duration: 1.5,
              ease: [0.25, 1, 0.5, 1],
              delay: Math.random(),
            },
          }
        : {
            style: {
              transformStyle: 'preserve-3d',
              width: 'fit-content',
              translateZ: z,
            },
          })}
      onAnimationComplete={handleAnimationComplete}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: `${size}rem`, height: `${size}rem` }}
      />
    </motion.div>
  );
};

export default IntroComponent;

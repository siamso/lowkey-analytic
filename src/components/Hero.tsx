/**
 * @copyright 2025 siamso
 * @license Apache-2.0
 */

import React, { useRef } from 'react';
import { heroData } from '@/constants';
import { Button } from '@/components/ui/button';
import { heroBanner } from '@/assets';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CirclePlay } from 'lucide-react';
import ReactPlayer from 'react-player/youtube';
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const heroBannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ['start 1080px', '50% start'],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className='section'>
      <motion.div
        variants={heroVariant}
        initial='start'
        animate='end'
        className='container text-center'
      >
        <div className='max-w-screen-md mx-auto'>
          <motion.p
            variants={heroChildVariant}
            initial='start'
            animate='end'
            className='text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10'
          >
            {heroData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={heroChildVariant}
            initial='start'
            animate='end'
            className='text-4xl font-semibold leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl'
          >
            {heroData.sectionTitle}

            <span className='relative isolate ms-4'>
              {heroData.decoTitle}
              <span className='absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2'></span>
            </span>
          </motion.h2>
          <motion.p
            variants={heroChildVariant}
            initial='start'
            animate='end'
            className='text-muted-foreground md:text-xl'
          >
            {heroData.sectionText}
          </motion.p>
          <div className='flex justify-center gap-2 mt-6 md:mt-10'>
            <Button>Start Free Trial</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='ghost'>
                  <CirclePlay /> Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[500px] lg:max-w-[1000px] md:max-w-[725px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://youtu.be/xK0pl1EGz70?si=Dpnp6irb2YxeRPtS'
                    style={{
                      minHeight: '100%',
                      maxHeight: '100%',
                      minWidth: '100%',
                      maxWidth: '100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className='relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16'>
          <motion.figure
            initial={{ y: 120, opacity: 0, filter: 'blur(5px)' }}
            animate={{
              y: 0,
              opacity: 1,
              filter: 'blur(0)',
            }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'backInOut' }}
            className='bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden'
            ref={heroBannerRef}
            style={{ scale }}
          >
            <img
              className='w-full select-none'
              src={heroBanner}
              height={1468}
              width={815}
              alt='lowkey analytic dashboard'
            />
          </motion.figure>

          {/** blurry glow effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'backInOut' }}
            className='absolute bg-primary inset-5 blur-[50px] -z-10'
          ></motion.div>
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: 'backOut' }}
            className='absolute inset-0 bg-primary blur-[200px] rounded-full scale-y-75 scale-x-125 -z-10'
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

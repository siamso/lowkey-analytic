/**
 * @copyright 2025 siamso
 * @license Apache-2.0
 */

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import { ReactLenis } from 'lenis/react';
import Feature from '@/components/Feature';
import Process from '@/components/Process';

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;

/**
 * @copyright 2025 siamso
 * @license Apache-2.0
 */

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import { ReactLenis } from 'lenis/react';

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;

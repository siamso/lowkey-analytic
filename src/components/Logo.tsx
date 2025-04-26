/**
 * @copyright 2025 siamso
 * @license Apache-2.0
 */

import React from 'react';
import { logo, favicon } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a
      href=''
      className='select-none'
    >
      {variant === 'default' && (
        <img
          src={logo}
          alt='lowkey analytic'
          height={35}
          width={200}
        />
      )}
      {variant === 'icon' && (
        <img
          src={favicon}
          alt='lowkey analytic'
          width={32}
          height={32}
        />
      )}
    </a>
  );
};

export default Logo;

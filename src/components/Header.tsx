/**
 * @copyright 2025 siamso
 * @license Apache-2.0
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { navMenu } from '@/constants';

const Header = () => {
  return (
    <header className='grid grid-cols-1 items-center h-16 md:20 lg:24'>
      <div className='container flex justify-between'>
        <Logo variant='icon' />

        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid grid-cols-2 gap-2 p-2 w-[640px]'>
                        {submenu?.map(({ href, icon, label, desc }, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                href={href}
                                className='flex flex-row gap-3 items-start select-none p-2 rounded-sm transition-colors hover:bg-foreground/5'
                              >
                                <div className='h-10 w-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 grid place-items-center shrink-0'>
                                  {icon}
                                </div>
                                <div>
                                  <div className='text-[14px] leading-normal mb-1'>
                                    {label}
                                  </div>
                                  <p className='text-[13px] leading-normal text-muted-foreground'>
                                    {desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2 justify-end max-lg:hidden'>
          <Button
            variant='ghost'
            className='w-1/2'
          >
            <a href='/'>Sign Up</a>
          </Button>
          <Button className='w-1/2'>
            <a href='/'>Log In</a>
          </Button>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden cursor-pointer'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/10 border-x-0 border-b-0 rounded-lg overflow-hidden lg:hidden'
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
export default Header;

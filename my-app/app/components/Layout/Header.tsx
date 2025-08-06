"use client"

import { FacebookIcon, InstagramIcon, LinkedinIcon, Menu } from 'lucide-react';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState, useEffect } from 'react';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/nossas-solucoes', label: 'Nossas Soluções' },
  { href: '/contato', label: 'Contato' },
];


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <div className=' bg-slate-300'>
        <section className='flex justify-center sm:justify-end gap-6 px-6 max-w-6xl mx-auto py-4'>
          <Link href='/'>
            <FacebookIcon />
          </Link>
          <Link href='/'>
            <InstagramIcon />
          </Link>
          <Link href='/'>
            <LinkedinIcon />
          </Link>
        </section>
      </div>
      <div className='bg-red-400'>
        <header className='flex flex-row gap-4 md:gap-0 justify-between items-center p-6 max-w-6xl mx-auto'>
          <Link href='/' className='font-bold text-lg md:text-xl'>
            Webimob
          </Link>
          <div className='sm:hidden'>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger className='p-2'>
                <Menu size={24} />
              </PopoverTrigger>
              <PopoverContent className='w-screen max-w-none rounded-none my-5'>
                <nav>
                  <ul className='flex flex-col gap-3'>
                    {navigationLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className='block py-2'>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </PopoverContent>
            </Popover>
          </div>
          <nav className='hidden sm:block'>
            <ul className='flex flex-col sm:flex-row gap-2 md:gap-4 items-center'>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

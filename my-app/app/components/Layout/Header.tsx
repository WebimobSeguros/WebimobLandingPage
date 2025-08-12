'use client';

import { FacebookIcon, InstagramIcon, LinkedinIcon, Menu } from 'lucide-react';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
      <section className=' bg-[#0d2d3e]'>
        <div className='flex justify-center sm:justify-end gap-6 px-6 max-w-6xl mx-auto py-4'>
          <Link href='/'>
            <FacebookIcon size={16} color='white' fill='white' />
          </Link>
          <Link href='/'>
            <InstagramIcon size={16} color='white' />
          </Link>
          <Link href='/'>
            <LinkedinIcon size={16} color='white' fill='white' />
          </Link>
        </div>
      </section>
      <header className=' sticky top-0 px-4 z-50 bg-white border-b-4 py-4'>
        <div className='flex flex-row gap-4 md:gap-0 justify-between items-center max-w-6xl mx-auto '>
          <Link href='/' className='font-bold text-lg md:text-xl '>
            <Image
              src='/Images/logo.png'
              alt='Webimob Favicon'
              width={250}
              height={100}
              className='w-[180px] h-[72px] sm:w-[250px] sm:h-[100px]'
            />
          </Link>
          <div className='sm:hidden'>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger className='p-2'>
                <Menu size={24} />
              </PopoverTrigger>
              <PopoverContent className='w-screen max-w-none rounded-none my-5'>
                <nav>
                  <ul className='flex flex-col gap-3'>
                    {navigationLinks.map(link => (
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
            <ul className='flex flex-col sm:flex-row gap-2 md:gap-10 items-center'>
              {navigationLinks.map(link => (
                <li
                  className='hover:scale-105 transition duration-200 hover:text-[#0d2d3e]'
                  key={link.href}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

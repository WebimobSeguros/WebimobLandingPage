// Next
import { Inter } from 'next/font/google';
// CSS
import './globals.css';
// Components
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title:{ 
    template: 'Webimob - %s',
    default:'Webimob',
  },
  description: 'Corretora de Seguros Imobiliários',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='pt-br'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Link
          href='https://api.whatsapp.com/send?phone=5531983323971&text=Olá!%20Tudo%20bem%3F%0A%0AA%20Webimob%20despertou%20meu%20interesse!'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Entre em contato via WhatsApp'
          title='Contato via WhatsApp'
          className='fixed bottom-0 right-0 px-4 py-18 lg:p-4 w-fit z-60'
        >
          <div className='bg-green-400 rounded-4xl p-3'>
            <Image
              src='/Images/whatsapp-logo-1.png'
              alt='Botão com icone do WhatsApp para entrar contato'
              width={30}
              height={30}
            />
          </div>
        </Link>
      </body>
    </html>
  );
}

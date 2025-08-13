import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {

  const linkClass = 'hover:text-white transition ease-in-out duration-300 hover:translate-x-1';

  return (
    <footer
      className='relative bg-cover bg-center bg-no-repeat py-10'
      style={{ backgroundImage: 'url(/Images/footer_bg.jpg)' }}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-8 px-4 '>
          <div className='flex flex-col gap-4 sm:flex-1 items-center sm:items-start'>
            <Image
              src='/Images/logo2_footer.png'
              alt='Webimob Favicon'
              width={250}
              height={100}
            />
            <p className='max-w-xs text-center sm:text-left text-slate-200 sm:text-sm md:text-md items-center sm:items-start'>
              Tecnologia e Consultoria Especializada para Seguros Imobiliários
            </p>
          </div>

          <address className='flex flex-col gap-4 text-left not-italic sm:flex-1 text-slate-200 items-center sm:items-start'>
            <h1 className='text-xl font-bold'>+55 (31) 9 8332-3971</h1>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center sm:items-start'>
              <p>operacional@webimob.com.br</p>
              <p>Endereço: Av. Bias Fortes 382</p>
              <p>12 andar - Lourdes</p>
              <p>Belo Horizonte/MG</p>
            </div>
          </address>

          <div className='flex flex-col gap-4 text-left text-gray-400  items-center sm:items-start'>
            <Link className={linkClass} href='/'>Home</Link>
            <Link  className={linkClass} href='/sobre'>Sobre Nós</Link>
            <Link  className={linkClass} href='/nossas-solucoes'>Nossas Soluções</Link>
            <Link  className={linkClass} href='/'>Blog</Link>
            <Link  className={linkClass} href='/contato'>Contato</Link>
            <Link  className={linkClass} href='/'>Política de Privacidade</Link>
          </div>
        </div>

        <div className='w-full h-px bg-slate-700 my-6' />
        <div className='max-w-6xl mx-auto flex justify-between items-center text-slate-200'>
          <p className='text-sm'>
            Copyright ©2025 Todos os direitos reservados
          </p>
          <section className='flex gap-6'>
            <Link href='/'>
              <FacebookIcon size={14} />
            </Link>
            <Link href='/'>
              <InstagramIcon size={14} />
            </Link>
            <Link href='/'>
              <LinkedinIcon size={14} />
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
}

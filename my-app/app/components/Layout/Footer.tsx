import { InstagramIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const linkClass =
    'hover:text-white transition ease-in-out duration-300 hover:translate-x-1';

  return (
    <footer
      className='relative bg-cover bg-center bg-no-repeat py-6'
      style={{ backgroundImage: 'url(/Images/footer_bg.jpg)' }}
    >
      <div className='max-w-6xl mx-auto px-4 '>
        <section className='flex flex-col sm:flex-row gap-8 sm:gap-8 px-4 pt-4'>
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

          <address className='not-italic sm:flex-1'>
            <ul className='space-y-4 text-sm text-gray-400 items-center sm:items-start list-none text-center sm:text-left'>
              <li className='text-xl font-bold text-white'>
                +55 (31) 9 8332-3971
              </li>
              <li>operacional@webimob.com.br</li>
              <li>Endereço: Av. Bias Fortes 382</li>
              <li>12 andar - Lourdes</li>
              <li>Belo Horizonte/MG</li>
            </ul>
          </address>

          <ul className='list-none flex flex-col gap-4 text-center sm:text-left text-gray-400'>
            <li className={linkClass}>
              <Link href='/' title='Pagina inicial da Webimob'>
                Home
              </Link>
            </li>
            <li className={linkClass}>
              <Link href='/sobre' title='Saiba mais sobre a Webimob'>
                Sobre Nós
              </Link>
            </li>
            <li className={linkClass}>
              <Link
                href='/nossas-solucoes'
                title='Explore nossos produtos e serviços'
              >
                Nossas Soluções
              </Link>
            </li>
            <li className={linkClass}>
              <Link href='/contato' title='Entre em contato conosco'>
                Contato
              </Link>
            </li>
            <li className={linkClass}>
              <Link href='/' title='Nossa política de privacidade'>
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </section>

        <hr className='w-full h-px bg-slate-700 my-6 border-0' />
        <section className='max-w-6xl mx-auto flex justify-between items-center text-slate-200'>
          <small className='text-sm'>
            Copyright ©2025 Todos os direitos reservados
          </small>
          <div className='flex gap-6'>
            <Link
              href='https://www.instagram.com/webimob_seguros/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Siga-nos no Instagram'
              title='Instagram da Webimob'
              className='hover:scale-110 transition duration-150'
            >
              <InstagramIcon size={16} />
            </Link>
            <Link
              href='https://www.linkedin.com/company/webimob-seguros-imobili%C3%A1rios/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Conecte-se conosco no LinkedIn'
              title='LinkedIn da Webimob'
              className='hover:scale-110 transition duration-150'
            >
              <LinkedinIcon size={16} />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

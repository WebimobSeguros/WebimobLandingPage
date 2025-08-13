import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { InfoSection } from '../components/PageSections/InfoSection';
import { TitleSection } from '../components/PageSections/TitleSection';
import { SendEmailForm } from '../components/SendEmailForm';
import Link from 'next/link';

export default function Contato() {
  return (
    <main>
      <TitleSection title='Contato' image='/Images/5.jpg' />

      <section className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Entre em Contato com a Webimob'
            description='Estamos prontos para ajudar você a transformar sua imobiliária com soluções seguras e ágeis.'
          />
          <h1 className='mx-6 text-2xl sm:text-2xl  text-center text-slate-700'>
            Seja para esclarecer dúvidas, solicitar uma parceria ou obter mais
            informações sobre nossos serviços, entre em contato conosco. Nossa
            equipe está à disposição para atender você.
          </h1>


          <h1 className='font-bold text-3xl mt-8 mx-4 text-[#1E3A5F]'>Envie sua mensagem</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-80 items-start my-4'>
            <div className='lg:min-w-2xl md:min-w-lg'>
              <SendEmailForm />
            </div>
            <div className='md:mx-auto mx-4'>
              <h2 className='sm:text-xl lg:text-2xl font-semibold'>
                Prefere Falar Diretamente Conosco?
              </h2>
              <div className='grid sm:grid-cols-3 md:grid-cols-1 '>
                <div className='mt-4'>
                  <h3 className='font-medium sm:text-md lg:text-lg'>Endereço</h3>
                  <div className='text-muted-foreground'>
                  <p>Av. Bias Fortes 382</p>
                  <p>12 andar - Lourdes</p>
                  <p>Belo Horizonte/MG</p>
                  </div>
                </div>
                <div className='mt-4'>
                  <h3 className='font-medium sm:text-md lg:text-lg'>Telefone</h3>
                  <div className='text-muted-foreground'>
                  <p>+55 31 99964-2840</p>
                  <p>Seg à Sex - 08h às 18h</p>
                  <p>Sábados: 9h às 13h</p>
                  </div>
                </div>
                <div className='mt-4'>
                  <h3 className='font-medium sm:text-md lg:text-lg'>E-mail</h3>
                  <p className='text-muted-foreground'>contato@webimob.com</p>
                </div>
              </div>
              <h2 className='sm:text-xl lg:text-2xl font-semibold my-4'>
                Conecte-se Conosco
              </h2>
              <div className='flex gap-6 text-muted-foreground'>
                <Link href='/'>
                  <FacebookIcon size={20} />
                </Link>
                <Link href='/'>
                  <InstagramIcon size={20} />
                </Link>
                <Link href='/'>
                  <LinkedinIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <h1 className='mx-6 text-3xl sm:text-2xl mt-8  text-center text-slate-700'>
            Estamos aqui para simplificar a gestão de seguros e trazer mais
            segurança para você e seus clientes. Entre em contato agora e
            descubra como podemos ajudar sua imobiliária a crescer!
          </h1>
        </div>
      </section>
    </main>
  );
}

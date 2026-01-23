import { InstagramIcon, LinkedinIcon } from 'lucide-react';
import { InfoSection } from '../components/PageSections/InfoSection';
import { TitleSection } from '../components/PageSections/TitleSection';
import { SendEmailForm } from '../components/SendEmailForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contato', 
};

export default function Contato() {
  return (
    <main>
      <TitleSection title='Contato' image='/Images/contato.jpg' />

      <section className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Entre em Contato com a Webimob'
            description='Estamos prontos para ajudar você a transformar sua imobiliária com soluções seguras e ágeis.'
          />
          <h2 className='mx-10 text-2xl sm:text-2xl  text-center sm:text-left text-slate-700'>
            Seja para esclarecer dúvidas, solicitar uma parceria ou obter mais
            informações sobre nossos serviços, entre em contato conosco. Nossa
            equipe está à disposição para atender você.
          </h2>

          <h3 className='font-bold text-3xl text-center sm:text-left mt-8 mx-4 text-[#1E3A5F]'>
            Envie sua mensagem
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-80 items-start my-4'>
            <div className='lg:min-w-2xl md:min-w-lg'>
              <SendEmailForm />
            </div>
            <div className='md:mx-auto mx-4'>
              <h4 className='sm:text-xl text-center sm:text-left lg:text-2xl font-semibold'>
                Prefere Falar Diretamente Conosco?
              </h4>
              <address className='not-italic mt-4'>
                <ul className='grid sm:grid-cols-3 md:grid-cols-1 gap-4 text-center sm:text-left'>
                  <li>
                    <h4 className='font-medium sm:text-md lg:text-lg'>
                      Endereço
                    </h4>
                    <div className='text-muted-foreground'>
                      <ul>
                        <li>Av. Bias Fortes 382</li>
                        <li>12 andar - Lourdes</li>
                        <li>Belo Horizonte/MG</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h4 className='font-medium sm:text-md lg:text-lg'>
                      Telefone
                    </h4>
                    <div className='text-muted-foreground'>
                      <ul>
                        <li className='underline'>+55 31 99964-2840</li>
                        <li>Seg à Sex - 08:30h às 17:30h</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h4 className='font-medium sm:text-md lg:text-lg'>
                      E-mail
                    </h4>
                    <p className='text-muted-foreground underline'>
                      operacional@webimob.com.br
                    </p>
                  </li>
                  <li>
                    <h4 className='font-medium sm:text-md lg:text-lg'>
                      Conecte-se Conosco
                    </h4>
                    <ul className='flex gap-6 text-muted-foreground mt-2 justify-center sm:justify-start'>
                      <li className='hover:scale-105 hover:text-[#1E3A5F] transition duration-150'>
                        <Link
                          href='https://www.instagram.com/webimob_seguros/'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label='Siga-nos no Instagram'
                          title='Instagram da Webimob'
                        >
                          <InstagramIcon size={20} />
                        </Link>
                      </li>
                      <li className='hover:scale-105 hover:text-[#1E3A5F] transition duration-150'>
                        <Link
                          href='https://www.linkedin.com/company/webimob-seguros-imobili%C3%A1rios/'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label='Conecte-se conosco no LinkedIn'
                          title='LinkedIn da Webimob'
                        >
                          <LinkedinIcon size={20} />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <h2 className='mx-10 text-2xl sm:text-2xl text-center sm:text-left text-slate-700'>
            Estamos aqui para simplificar a gestão de seguros e trazer mais
            segurança para você e seus clientes. Entre em contato agora e
            descubra como podemos ajudar sua imobiliária a crescer!
          </h2>
        </div>
      </section>
    </main>
  );
}

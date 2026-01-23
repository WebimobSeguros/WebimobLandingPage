// Components
import { Button } from '@/components/ui/button';
import { ProdutoCard } from './components/Cards/ProdutoCard';
import { InfoCard } from './components/Cards/InfoCard';
import { ConecteSeSection } from './components/PageSections/ConecteSeSection';
import { InfoSection } from './components/PageSections/InfoSection';
import Link from 'next/link';
import { FileTextIcon, HandshakeIcon, SearchCheckIcon } from 'lucide-react';
import Image from 'next/image';
import { produtosData } from '@/utils/produtosArray';

export default function Home() {
  const infoCardData = [
    {
      title: 'Análise rápida e precisa:',
      description:
        'Analisamos diversas opções de seguradoras simultaneamente para encontrar a melhor solução para o seu cliente em menos de 60 segundos.',
      icon: <SearchCheckIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
    {
      title: 'Consultoria especializada:',
      description:
        'Nossa equipe de especialistas está sempre pronta para tirar suas dúvidas e oferecer o suporte necessário para você alugar mais e melhor.',
      icon: <FileTextIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
    {
      title: 'Eficiência e segurança:',
      description:
        'Processos digitais simplificados e intuitivos, otimizando seu tempo e elevando a produtividade imobiliária.',
      icon: <HandshakeIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
  ];

  return (
    <main>
      <section
        className='relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url(/Images/londres.jpg)' }}
      >
        <div className='absolute inset-0 bg-black/30'></div>

        <div className='relative z-10 max-w-6xl mx-auto px-4'>
          <div className='flex flex-col py-32 gap-4 '>
            <h1 className='font-bold text-center sm:text-left text-4xl sm:text-6xl max-w-3xl text-white'>
              Webimob: Tecnologia para Seguros Imobiliários
            </h1>
            <h3 className='py-4 text-xl text-center sm:text-left sm:text-2xl text-white drop-shadow-xl'>
              Alugue Mais e Melhor! Agilidade e Segurança para suas Locações
            </h3>
            <div className='flex justify-center sm:justify-start w-full'>
              <Link href='/contato' className='w-fit'>
                <Button
                  aria-label='Ir para a página de contato da Webimob'
                  className='cursor-pointer w-fit py-8 sm:p-8 sm:text-lg relative overflow-hidden group transition-all duration-300'
                >
                  <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
                  <span className='relative z-10'>
                    SOLICITE UMA CONSULTORIA GRATUITA
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 flex my-8'>
        <InfoSection
          title='Tecnologia e atendimento humanizado, para você alugar mais e
                melhor.'
          description='Na Webimob, o uso da tecnologia somado ao atendimento realizado
              por especialistas em seguros imobiliários, aumenta sua
              competitividade e a segurança nos processos.'
        >
          <div className='flex justify-center sm:justify-start w-full'>
            <Link href='/contato' className='w-fit'>
              <Button
                aria-label='Ir para a página de contato da Webimob'
                className='w-fit px-6 cursor-pointer py-4 sm:p-8 sm:text-lg relative overflow-hidden group transition-all duration-300'
              >
                <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
                <span className='relative z-10'>
                  FALE COM NOSSOS ESPECIALISTAS
                </span>
              </Button>
            </Link>
          </div>
        </InfoSection>
      </section>

      <section className='bg-slate-100 py-8'>
        <div className='max-w-6xl mx-auto px-4 flex items-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-center mb-8 mx-6 text-[#1E3A5F]'>
            Agilidade, Segurança e Tranquilidade
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto p-4 gap-6'>
          {produtosData.map(item => (
            <ProdutoCard
              key={item.link}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </section>

      <section className='bg-[#0d2d3e] py-8'>
        <div className='max-w-6xl mx-auto px-4 flex items-center flex-col gap-3'>
          <h2 className='text-4xl sm:text-5xl font-bold text-center flex text-white'>
            Webimob: A Tecnologia que Transforma a Sua Locação
          </h2>
          <h3 className='text-white mx-6 text-center'>
            Nossa plataforma foi desenvolvida para otimizar o seu tempo e
            aumentar a sua produtividade. Com a Webimob, você:
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-4 py-10'>
            {infoCardData.map(item => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-100'>
        <article className='max-w-6xl mx-auto px-4 flex justify-center'>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 my-8 items-center'>
            <li className='flex justify-center items-center'>
              <Image
                src='/Images/tokio-marine-seguradora.png'
                alt='Tokio Marine'
                width={300}
                height={150}
              />
            </li>
            <li className='flex justify-center items-center'>
              <Image
                src='/Images/porto-seguro.png'
                alt='Porto Seguro'
                width={200}
                height={100}
              />
            </li>
            <li className='flex justify-center items-center'>
              <Image
                src='/Images/pottencial.png'
                alt='Pottencial'
                width={200}
                height={100}
              />
            </li>
            <li className='flex justify-center items-center'>
              <Image src='/Images/too.png' alt='Too' width={150} height={75} />
            </li>
          </ul>
        </article>
      </section>

      <ConecteSeSection />
    </main>
  );
}

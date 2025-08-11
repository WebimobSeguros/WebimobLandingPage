// Components
import { Button } from '@/components/ui/button';
import { ProdutoCard } from './components/Cards/ProdutoCard';
import { InfoCard } from './components/Cards/InfoCard';
import { ConecteSeSection } from './components/PageSections/ConecteSeSection';
import { InfoSection } from './components/PageSections/InfoSection';
import Link from 'next/link';

export default function Home() {
  const data = [
    {
      title: 'Seguro Fiança: Sem Fiador, Sem Burocracia, Sem Preocupações',
      link: '/produtos/seguro-fianca',
      image: '/Images/2.jpg',
      description:
        'Locadores e Imobiliária têm a certeza de que os pagamentos são garantidos, enquanto locatários não precisam mais de fiador, sem burocracia.',
    },
    {
      title: 'Seguro Incêndio: Proteção e Tranquilidade para Todos',
      link: '/produtos/seguro-incendio',
      image: '/Images/1.jpg',
      description:
        'O seguro Incêndio imobiliário garante a proteção essencial para os imóveis locados, cobrindo as exigências previstas na "Lei do inquilinato". Uma solução que protege o patrimônio e traz tranquilidade para todas as partes.',
    },
    {
      title: 'Título de Capitalização: Garantia Locatícia com Resgate Total',
      link: '/produtos/titulo-capitalizacao',
      image: '/Images/3.jpg',
      description:
        'Excelente opção para garantia dos contratos de locação, e dispensa análise do inquilino. Prático e sem burocracia, permite ao locatário resgatar até 100% do valor determiando ao fim do contrato, caso não seja utilizado. *Consulte condições.',
    },
  ];

  const infoCardData = [
    {
      title: 'Análise rápida e precisa:',
      description:
        'Analisamos diversas opções de seguradoras simultaneamente para encontrar a melhor solução para o seu cliente em menos de 60 segundos.',
      image: '/favicon.ico',
    },
    {
      title: 'Consultoria especializada:',
      description:
        'Nossa equipe de especialistas está sempre pronta para tirar suas dúvidas e oferecer o suporte necessário para você alugar mais e melhor.',
      image: '/favicon.ico',
    },
    {
      title: 'Eficiência e segurança:',
      description:
        'Processos digitais simplificados e intuitivos, otimizando seu tempo e elevando a produtividade imobiliária.',
      image: '/favicon.ico',
    },
  ];

  return (
    <>
      <main>
        <section
          className='relative bg-cover bg-center bg-no-repeat '
          style={{ backgroundImage: 'url(/Images/londres.jpg)' }}
        >
          <div className='absolute inset-0 bg-black/30'></div>

          <div className='relative z-10 max-w-6xl mx-auto px-4'>
            <div className='flex flex-col py-60 gap-4 '>
              <h1
                className='font-bold text-4xl sm:text-6xl max-w-3xl text-white'
                
              >
                Webimob: Tecnologia para Seguros Imobiliários
              </h1>
              <h3
                className='py-4 text-xl sm:text-2xl text-white drop-shadow-xl'
              >
                Alugue Mais e Melhor! Agilidade e Segurança para suas Locações
              </h3>
              <Link href='/contato' className='w-fit'>
                <Button className='cursor-pointer w-fit py-8 sm:p-8 sm:text-lg relative overflow-hidden group transition-all duration-300'>
                  <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
                  <span className='relative z-10'>
                    SOLICITE UMA CONSULTORIA GRATUITA
                  </span>
                </Button>
              </Link>
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
            <Link href='/contato' className='w-fit'>
              <Button className='w-fit px-6 cursor-pointer py-4 sm:p-8 sm:text-lg relative overflow-hidden group transition-all duration-300'>
                <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
                <span className='relative z-10'>
                  FALE COM NOSSOS ESPECIALISTAS
                </span>
              </Button>
            </Link>
          </InfoSection>
        </section>

        <section className='bg-slate-100 py-8'>
          <div className='max-w-6xl mx-auto px-4 flex items-center'>
            <h1 className='text-4xl sm:text-5xl font-bold text-center mb-8 mx-6 text-[#1E3A5F]'>
              Soluções Completas para Locação de Imóveis: Agilidade, Segurança e
              Tranquilidade
            </h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto p-4 gap-6'>
            {data.map(item => (
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

        <section className='bg-slate-700 py-8'>
          <div className='max-w-6xl mx-auto px-4 flex items-center flex-col gap-3'>
            <h1 className='text-4xl sm:text-5xl font-bold text-center flex text-white'>
              Webimob: A Tecnologia que Transforma a Sua Locação
            </h1>
            <h3 className='text-white mx-6'>
              Nossa plataforma foi desenvolvida para otimizar o seu tempo e
              aumentar a sua produtividade. Com a Webimob, você:
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-4 py-10'>
              {infoCardData.map(item => (
                <InfoCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        <section className='bg-slate-300'>
          <article className='max-w-6xl mx-auto px-4 flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 my-8'>
              <h1 className='bg-white p-8'>Porto Seguro</h1>
              <h1 className='bg-white p-8'>Porto Seguro</h1>
              <h1 className='bg-white p-8'>Porto Seguro</h1>
              <h1 className='bg-white p-8'>Porto Seguro</h1>
            </div>
          </article>
        </section>

        <ConecteSeSection />
      </main>
    </>
  );
}

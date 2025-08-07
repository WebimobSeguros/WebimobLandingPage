// Components
import { Button } from '@/components/ui/button';
import { ProdutoCard } from './components/Cards/ProdutoCard';
import { InfoCard } from './components/Cards/InfoCard';
import { ConecteSeSection } from './components/PageSections/ConecteSeSection';
import { InfoSection } from './components/PageSections/InfoSection';

export default function Home() {
  const data = [
    {
      title: 'Seguro Fiança: Sem Fiador, Sem Burocracia, Sem Preocupações',
      link: '/produtos/seguro-fianca',
      image: '/favicon.ico',
      description:
        'Locadores e Imobiliária têm a certeza de que os pagamentos são garantidos, enquanto locatários não precisam mais de fiador, sem burocracia.',
    },
    {
      title: 'Seguro Incêndio: Proteção e Tranquilidade para Todos',
      link: '/produtos/seguro-incendio',
      image: '/favicon.ico',
      description:
        'O seguro Incêndio imobiliário garante a proteção essencial para os imóveis locados, cobrindo as exigências previstas na "Lei do inquilinato". Uma solução que protege o patrimônio e traz tranquilidade para todas as partes.',
    },
    {
      title: 'Título de Capitalização: Garantia Locatícia com Resgate Total',
      link: '/produtos/titulo-capitalizacao',
      image: '/favicon.ico',
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
        <section className='bg-amber-400'>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='flex flex-col py-60 gap-4 '>
              <h1 className='font-bold text-4xl sm:text-6xl max-w-3xl'>
                Webimob: Tecnologia para Seguros Imobiliários
              </h1>
              <h3 className='py-4 sm:text-2xl '>
                Alugue Mais e Melhor! Agilidade e Segurança para suas Locações
              </h3>
              <Button className='w-fit px-6 py-4'>
                SOLICITE UMA CONSULTORIA GRATUITA
              </Button>
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
            <Button className='w-fit px-6'>
              FALE COM NOSSOS ESPECIALISTAS
            </Button>
          </InfoSection>
        </section>

        <section className='bg-slate-100 py-8'>
          <div className='max-w-6xl mx-auto px-4 flex items-center'>
            <h1 className='text-4xl sm:text-5xl font-bold text-center mb-8 mx-6'>
              Soluções Completas para Locação de Imóveis: Agilidade, Segurança e
              Tranquilidade
            </h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto p-4 gap-3'>
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

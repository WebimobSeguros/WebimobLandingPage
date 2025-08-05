// Components
import { Button } from '@/components/ui/button';
import { ProdutoCard } from './components/Cards/ProdutoCard';

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

  return (
    <main>
      <section className='bg-amber-400'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex flex-col py-60 gap-4 '>
            <h1 className='font-bold text-4xl max-w-xl'>
              WebiMob: Tecnologia para Seguros Imobiliários
            </h1>
            <h3 className='py-4'>
              Alugue Mais e Melhor! Agilidade e Segurança para suas Locações
            </h3>
            <Button className='w-fit px-6 py-4'>
              SOLICITE UMA CONSULTORIA GRATUITA
            </Button>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 flex items-center my-8 '>
        <div className='flex flex-col gap-6 ml-20'>
          <div className='flex items-center'>
            <span className='block w-10 h-0.5 bg-black mr-4 '></span>
            <h2 className='text-2xl max-w-xl'>
              Tecnologia e atendimento humanizado, para você alugar mais e
              melhor.
            </h2>
          </div>
          <h3 className='text-sm max-w-3xl'>
            Na Webimob, o uso da tecnologia somado ao atendimento realizado por
            especialistas em seguros imobiliários, aumenta sua competitividade e
            a segurança nos processos.
          </h3>
          <Button className='w-fit px-6'>FALE COM NOSSOS ESPECIALISTAS</Button>
        </div>
      </section>

      <section className='bg-slate-100 my-8 py-8'>
        <div className='max-w-6xl mx-auto px-4 flex items-center'>
          <h1 className='text-5xl font-bold text-center'>
            Soluções Completas para Locação de Imóveis: Agilidade, Segurança e
            Tranquilidade
          </h1>
        </div>

        <div className='grid grid-cols-3 max-w-5xl mx-auto  '>
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
    </main>
  );
}

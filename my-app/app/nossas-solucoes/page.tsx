import { ProdutoCard } from '../components/Cards/ProdutoCard';
import { ConecteSeSection } from '../components/PageSections/ConecteSeSection';
import { TitleSection } from '../components/PageSections/TitleSection';

export default function NossasSolucoes() {
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
      <TitleSection title='Nossas soluções' image='/Images/5.jpg' />

      <section className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='mx-6 text-2xl sm:text-3xl  text-center text-slate-700'>
            Entregamos todas as possibilidades de aprovação de seguro fiança
            disponíveis no mercado, simultaneamente e de forma imediata,
            juntamente como o orçamento do seguro incêndio, aumentando a
            produtividade da imobiliária.
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto p-4 gap-10 my-4'>
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

      <ConecteSeSection />
    </main>
  );
}

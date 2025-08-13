import { produtosData } from '@/utils/produtosArray';
import { ProdutoCard } from '../components/Cards/ProdutoCard';
import { ConecteSeSection } from '../components/PageSections/ConecteSeSection';
import { TitleSection } from '../components/PageSections/TitleSection';

export default function NossasSolucoes() {
  return (
    <main>
      <TitleSection title='Nossas soluções' image='/Images/5.jpg' />

      <section className='py-8 bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='mx-6 text-2xl sm:text-2xl  text-center text-slate-700'>
            Entregamos <span className='font-bold'>todas as possibilidades de aprovação de seguro fiança</span> disponíveis no mercado, simultaneamente e de forma imediata,
            juntamente como o orçamento do seguro incêndio, <span className='font-bold'>aumentando a
            produtividade</span> da imobiliária.
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto p-4 gap-10 my-4'>
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

      <ConecteSeSection />
    </main>
  );
}

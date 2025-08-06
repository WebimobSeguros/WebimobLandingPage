import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';

export default function SeguroFianca() {
  return (
    <main>
      <TitleSection
        title='Seguro fiança'
        image='/Images/5.jpg'
        description='Alugue com Segurança e Liberdade'
      />
      <section className='bg-slate-200'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Seguro Fiança Locatícia: Sua Garantia na Locação'
            description='O seguro fiança é uma garantia locatícia que traz segurança na locação de imóveis. Ele substitui a necessidade de fiador ou caução, oferecendo garantia de recebimento dos aluguéis para o locador e liberdade para o locatário escolher o imóvel ideal.'
          />
          <InfoSection
            title='Processo Simples e Rápido'
            description='O locatário contrata o Seguro Fiança Locatícia diretamente com a Webimob, de forma simples e online. A aprovação é rápida e sem burocracia, e a garantia é válida por toda a duração do contrato de locação.'
          />
        </div>
      </section>

      <section className='bg-slate-200'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Alugue Sem Limitações'
            description='Com o Seguro Fiança Locatícia da Webimob, você elimina a burocracia e a dependência de fiadores ou caução. Tenha a liberdade de escolher o imóvel que mais se adapta às suas necessidades e alugue com tranquilidade.'
          />
          <div className='sm:ml-20 gap-6 py-8 mx-6'>
            <div className='flex items-center'>
              <span className='block w-10 h-0.5 bg-black flex-shrink-0'></span>
              <h2 className='text-3xl max-w-2xl font-bold ml-4'>
                Contrate Seu Seguro Fiança Locatícia Agora
              </h2>
            </div>
            <Button className='w-fit px-6 p-8 text-xl my-8'>
              FALE COM UM ESPECIALISTAS
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

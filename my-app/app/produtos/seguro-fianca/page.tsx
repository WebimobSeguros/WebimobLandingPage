import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { SobreProdutoSection } from '@/app/components/PageSections/SobreProdutoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SeguroFianca() {
  const produtoInfo = [
    {
      title: 'Para Imobiliárias',
      topicos: [
        {
          index: 'Agilidade',
          info: 'Maior agilidade na aprovação de contratos.',
        },
        {
          index: 'Garantia',
          info: 'Garantia de recebimento de aluguéis, reduzindo a inadimplência.',
        },
        {
          index: 'Diferencial',
          info: 'Diferencial competitivo para atrair mais clientes.',
        },
      ],
    },
    {
      title: 'Para Locadores',
      topicos: [
        {
          index: 'GarantiaRecebimento',
          info: 'Garantia de recebimento dos aluguéis, mesmo em caso de inadimplência.',
        },
        {
          index: 'ProcessoRapido',
          info: 'Processo de locação mais rápido e seguro.',
        },
        {
          index: 'TranquilidadeLocador',
          info: 'Tranquilidade e segurança durante todo o contrato.',
        },
      ],
    },
    {
      title: 'Para Locatários',
      topicos: [
        {
          index: 'Dispensa',
          info: 'Dispensa de fiador ou caução.',
        },
        {
          index: 'ProcessoDeLocacao',
          info: 'Processo de locação simplificado e rápido.',
        },
        {
          index: 'LiberdadeParaEscolher',
          info: 'Liberdade para escolher o imóvel ideal, sem depender de terceiros.',
        },
        {
          index: 'Tranquilidade',
          info: 'Tranquilidade durante toda a locação.',
        },
      ],
    },
  ];

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

      <SobreProdutoSection title='Vantagens para Imobiliárias, Locadores e Locatários' image='/favicon.ico' produtoInfo={produtoInfo}/>

      <section className='bg-slate-200'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Alugue Sem Limitações'
            description='Com o Seguro Fiança Locatícia da Webimob, você elimina a burocracia e a dependência de fiadores ou caução. Tenha a liberdade de escolher o imóvel que mais se adapta às suas necessidades e alugue com tranquilidade.'
          />
          <div className='mx-6 sm:mx-20 py-8'>
            <div className='flex items-center'>
              <span className='block w-10 h-0.5 bg-black flex-shrink-0'></span>
              <h2 className='text-3xl max-w-2xl font-bold ml-4'>
                Contrate Seu Seguro Fiança Locatícia Agora
              </h2>
            </div>
            <Button className='w-fit p-8 text-md sm:text-xl my-8'>
              FALE COM UM ESPECIALISTAS
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

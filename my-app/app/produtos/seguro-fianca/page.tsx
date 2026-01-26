import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { SobreProdutoSection } from '@/app/components/PageSections/SobreProdutoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import { CircleUserIcon, HouseIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Seguro Fiança', 
};


export default function SeguroFianca() {
  const produtoInfo = [
    {
      title: 'Para Imobiliárias',
      icon: <HouseIcon />,
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
      icon: <UsersIcon />,
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
      icon: <CircleUserIcon />,
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
        image='/Images/hero2.jpg'
        description='Alugue com Segurança e Liberdade'
      />
      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Seguro Fiança Locatícia: Sua Garantia na Locação'
            description='O seguro fiança é uma garantia locatícia que traz segurança na locação de imóveis. Ele substitui a necessidade de fiador ou caução, oferecendo garantia de recebimento dos aluguéis para o locador e liberdade para o locatário escolher o imóvel ideal.'
          />
          <InfoSection
            title='Processo Simples e Rápido'
            description='A análise é rápida e sem burocracia e a garantia é válida por toda a vigência do contrato de locação.'
          />
        </div>
      </section>

      <SobreProdutoSection
        title='Vantagens para Imobiliárias, Locadores e Locatários'
        image='/Images/seguro-fianca.jpg'
        produtoInfo={produtoInfo}
      />

      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Alugue Sem Limitações'
            description='Com o Seguro Fiança Locatícia da Webimob, você elimina a burocracia e a dependência de fiadores ou caução. Tenha a liberdade de escolher o imóvel que mais se adapta às suas necessidades e alugue com tranquilidade.'
          />
          <InfoSection title='Contrate Seu Seguro Fiança Locatícia Agora'>
            <div className='mt-4'>
              <Link href='/contato' className='w-fit'>
                <Button aria-label='Ir para a página de contato da Webimob' className='w-fit px-6 cursor-pointer py-4 sm:p-8 sm:text-lg relative overflow-hidden group transition-all duration-300'>
                  <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
                  <span className='relative z-10'>
                    FALE COM UM ESPECIALISTA
                  </span>
                </Button>
              </Link>
            </div>
          </InfoSection>
        </div>
      </section>
    </main>
  );
}

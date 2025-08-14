import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { SobreProdutoSection } from '@/app/components/PageSections/SobreProdutoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import { CircleUserIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Título de Capitalização', 
};

export default function TituloCapitalizacao() {
  const produtoInfo = [
    {
      title: 'Para Locatários',
      icon: <CircleUserIcon/>,
      topicos: [
        {
          index: 'SemAnalise',
          info: 'Não exige análise de crédito ou comprovação de renda.',
        },
        {
          index: 'Resgate100',
          info: 'Resgate de até 100% do valor ao final do contrato.',
        },
        {
          index: 'ProcessoFacil',
          info: 'Processo de contratação fácil e rápido.',
        },
        {
          index: 'AlternativaPratica',
          info: 'Alternativa prática e segura ao fiador ou caução.',
        },
      ],
    },
    {
      title: 'Para Imobiliárias',
      icon:<HouseIcon/>,
      topicos: [
        {
          index: 'GarantiaRapida',
          info:'Garantia rápida e segura para o contrato de locação.'
        },
        {
          index: 'ReducaoDeProcessos',
          info: 'Redução de processos complexos e burocráticos.',
        },
        {
          index: 'AtracaoClientes',
          info: 'Atração de mais clientes com uma opção de garantia acessível.',
        },
      ],
    },
    
  ];

  return (
    <main>
      <TitleSection
        title='Título de Capitalização'
        image='/Images/hero3.jpg'
        description='A Garantia Inteligente para sua Locação'
      />
      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Título de Capitalização: Sua Reserva Financeira para Locação'
            description='Um título de capitalização é uma reserva financeira com valor predefinido entre o inquilino e o proprietário, usada como garantia no processo de locação de um imóvel. Além disso, a contratação do título é fácil e rápida, uma vez que não exige análise de crédito ou comprovação de renda. Por fim, o inquilino pode resgatar até 100% do valor da garantia ao final do contrato.'
          />
          <InfoSection
            title='Processo Simples e Sem Burocracia'
            description='O locatário adquire o título, que serve como garantia para o contrato de locação. Ao final do contrato, se não houver inadimplência, o locatário pode resgatar até 100% do valor investido'
          />
        </div>
      </section>

      <SobreProdutoSection
        title='Vantagens para Imobiliárias, Locadores e Locatários'
        image='/Images/capitalizacao.jpg'
        produtoInfo={produtoInfo}
      />

      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection title='Garanta sua Locação com o Título de Capitalização'>
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

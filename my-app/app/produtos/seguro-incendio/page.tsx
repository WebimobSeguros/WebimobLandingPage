import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { SobreProdutoSection } from '@/app/components/PageSections/SobreProdutoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import { HouseIcon, SquarePlusIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Seguro Incêndio', 
};

export default function SeguroIncendio() {
  const produtoInfo = [
    {
      title: 'Coberturas Principais',
      icon: <SquarePlusIcon />,
      topicos: [
        {
          index: 'Incendios',
          info: 'Incêndios e explosões.',
        },
        {
          index: 'DanosEletricos',
          info: 'Danos elétricos.',
        },
        {
          index: 'AssistenciaEmergencial',
          info: 'Assistência emergencial 24 horas.',
        },
      ],
    },
    {
      title: 'Benefícios para Imobiliárias e Locatários',
      icon: <HouseIcon />,
      topicos: [
        {
          index: 'Garantia',
          info: 'Garantia de segurança para o imóvel.',
        },
        {
          index: 'FacilidadeNaResolução',
          info: 'Facilidade na resolução de incidentes.',
        },
        {
          index: 'ValorizaçãoDoServiço',
          info: 'Valorização do serviço imobiliário.',
        },
      ],
    },
  ];

  return (
    <main>
      <TitleSection
        title='Seguro Incêndio'
        image='/Images/hero2.jpg'
        description='Proteção Completa para sua Locação'
      />
      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Seguro Incêndio'
            description='A cobertura contra incêndio é obrigatório para um contrato de aluguel. Portanto, o seguro incêndio é uma proteção essencial que, além de proteger o imóvel de danos causados por incêndio, raio ou explosão, também oferece coberturas que amparam danos elétricos, quebra de vidros e muito mais! Por último, o seguro incêndio oferece assistência técnica 24h para uma variedade de serviços.'
          />
          <InfoSection
            title='Como Funciona'
            description='O seguro cobre reparos e indenizações em casos de incêndios e outros incidentes como raio ou explosão, também oferece coberturas que amparam danos elétricos, quebra de vidros e muito mais, garantindo segurança e agilidade na resolução de problemas.'
          />
        </div>
      </section>

      <SobreProdutoSection
        title='Coberturas e Benefícios do Seguro Incêndio'
        image='/Images/seguro-incendio.jpg'
        produtoInfo={produtoInfo}
      />

      <section className='bg-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Exemplo Prático'
            description='Após um incidente elétrico em um apartamento, o Seguro Incêndio garantiu o reparo completo, preservando a segurança do imóvel e a confiança do locatário.'
          >
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
/* Proteja seu imóvel com o seguro incêndio */

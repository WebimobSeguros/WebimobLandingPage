import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SeguroIncendio() {
  return (
    <main>
      <TitleSection
        title='Seguro Incêndio'
        image='/Images/5.jpg'
        description='Proteção Completa para sua Locação'
      />
      <section className='bg-slate-200'>
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

      <section className='flex relative bg-pink-500'>
        <div className='absolute hidden lg:block bg-amber-500 top-0 left-0 h-full w-1/4'></div>
        <div className=' py-8 mx-8 lg:pl-30 flex flex-col lg:flex-row z-20 items-center'>
          <div className='bg-white mx-8'>
            <Image
              src='/favicon.ico'
              alt='Webimob Favicon'
              width={450}
              height={300}
              className=' '
            />
          </div>

          <div className='my-8 lg:my-0'>
            <h1 className='text-3xl sm:text-5xl font-bold text-left mx-8'>
              Coberturas e Benefícios do Seguro Incêndio
            </h1>

            <div className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>Coberturas Principais</h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                <li>Incêndios e explosões.</li>
                <li>Danos elétricos.</li>
                <li>Assistência emergencial 24 horas.</li>
              </ul>
            </div>

            <div className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>
                Benefícios para Imobiliárias e Locatários
              </h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                <li>Garantia de segurança para o imóvel.</li>
                <li>Facilidade na resolução de incidentes.</li>
                <li>Valorização do serviço imobiliário.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-200'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Exemplo Prático'
            description='Após um incidente elétrico em um apartamento, o Seguro Incêndio garantiu o reparo completo, preservando a segurança do imóvel e a confiança do locatário.'
          />
          <div className='mx-6 sm:mx-20'>
            <Button className='sm:p-8 p-3 text-xs sm:text-xl mb-8'>
              Proteja seu imóvel com o seguro incêndio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

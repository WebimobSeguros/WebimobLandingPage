import { InfoSection } from '@/app/components/PageSections/InfoSection';
import { TitleSection } from '@/app/components/PageSections/TitleSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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

          <div className='my-8 lg:my-0' >
            <h1 className='text-3xl sm:text-5xl font-bold text-left mx-8'>
              Vantagens para Imobiliárias, Locadores e Locatários
            </h1>

            <div className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>Para Imobiliárias</h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                <li>Maior agilidade na aprovação de contratos.</li>
                <li>
                  Garantia de recebimento de aluguéis, reduzindo a
                  inadimplência.
                </li>
                <li>Diferencial competitivo para atrair mais clientes</li>
              </ul>
            </div>

            <div className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>Para Locadores</h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                <li>
                  Garantia de recebimento dos aluguéis, mesmo em caso de
                  inadimplência.
                </li>
                <li>Processo de locação mais rápido e seguro.</li>
                <li>Tranquilidade e segurança durante todo o contrato.</li>
              </ul>
            </div>

            <div className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>Para Locatários</h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                <li>Dispensa de fiador ou caução.</li>
                <li>Processo de locação simplificado e rápido.</li>
                <li>
                  Liberdade para escolher o imóvel ideal, sem depender de
                  terceiros.
                </li>
                <li>Tranquilidade durante toda a locação.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

import { CloudIcon, FastForwardIcon, StarIcon, UserIcon } from 'lucide-react';
import { InfoCard } from '../components/Cards/InfoCard';
import { ConecteSeSection } from '../components/PageSections/ConecteSeSection';
import { InfoSection } from '../components/PageSections/InfoSection';
import { TitleSection } from '../components/PageSections/TitleSection';

export const metadata = {
  title: 'Sobre Nós', 
};

export default function Sobre() {
  const infoCardData = [
    {
      title: 'Inovação',
      description:
        'Buscamos constantemente novas tecnologias e soluções para aprimorar nossos serviços e atender às necessidades do mercado.',
      icon: <CloudIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
    {
      title: 'Agilidade',
      description:
        'Oferecemos soluções rápidas, inovadoras e eficientes, assim você pode focar no que realmente importa: o crescimento do seu negócio.',
      icon: <FastForwardIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
    {
      title: 'Atendimento Humanizado',
      description:
        'Acreditamos que a tecnologia deve ser aliada ao atendimento personalizado, oferecendo suporte e consultoria especializada para cada cliente.',
      icon: <UserIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
    {
      title: 'Compromisso',
      description:
        'Estamos comprometidos com o sucesso dos nossos parceiros, oferecendo soluções que geram resultados e superam expectativas.',
      icon: <StarIcon size={64} strokeWidth={1} color='#72BDA3' />,
    },
  ];

  return (
    <main>
      <TitleSection title='Sobre Nós' image='/Images/5.jpg' />
      <section className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='mx-6 text-3xl  text-center text-slate-700'>
            Somos uma parceira confiável que entende as necessidades das
            imobiliárias. Trabalhamos lado a lado com as imobiliárias para
            oferecer soluções que tragam tranquilidade tanto para os negócios
            quanto para os clientes.
          </h2>

          <InfoSection
            title='Nossa Missão: Simplificar e Proteger Seus Negócios'
            description='Na Webimob, nossa missão é clara: ser a parceira confiável que impulsiona o sucesso da sua imobiliária. Entendemos as necessidades do mercado e oferecemos soluções inovadoras em seguros imobiliários, combinando tecnologia de ponta com atendimento especializado. Nosso objetivo é proporcionar tranquilidade e segurança para você e seus clientes, simplificando os processos de locação e protegendo seus negócios.'
          />
          <InfoSection
            title='Nossa Trajetória: Inovação e Compromisso com a Excelência'
            description='A Webimob nasceu da visão de criar soluções seguras e ágeis, associando a tecnologia ao atendimento humano. Hoje, somos conhecidos pela confiança que construímos com nossos parceiros e pelo impacto positivo que geramos para milhares de clientes em todo o país.'
          />
        </div>
      </section>

      <section className='py-8 bg-slate-100'>
        <div className='max-w-6xl mx-auto '>
          <div className='flex items-center mx-6'>
            <span className='block w-10 h-0.5 bg-[#72BDA3] mr-4 '></span>
            <h2 className='text-xl max-w-2xl font-bold text-[#000a2d]'>
              NOSSOS VALORES
            </h2>
          </div>
          <h3 className='text-5xl font-bold my-6 mx-6 text-[#000a2d]'>
            A Base da Nossa Parceria
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-10 py-10'>
            {infoCardData.map(item => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Nosso Compromisso: Seu Sucesso é Nosso Objetivo'
            description='Na Webimob, acreditamos que o sucesso da sua imobiliária é o nosso sucesso. Por isso, trabalhamos lado a lado com você, oferecendo soluções personalizadas e suporte completo para que você possa alcançar seus objetivos. Conte conosco para simplificar seus processos, proteger seus negócios e alugar mais e melhor.'
          />
        </div>
      </section>
      <ConecteSeSection />
    </main>
  );
}

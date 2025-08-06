import { InfoSection } from '../components/PageSections/InfoSection';
import { TitleSection } from '../components/PageSections/TitleSection';

export default function Contato() {
  return (
    <main>
      <TitleSection title='Contato' image='/Images/5.jpg' />

      <section className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <InfoSection
            title='Entre em Contato com a Webimob'
            description='Estamos prontos para ajudar você a transformar sua imobiliária com soluções seguras e ágeis.'
          />
          <h1 className='mx-6 text-2xl sm:text-2xl  text-center text-slate-700'>
            Seja para esclarecer dúvidas, solicitar uma parceria ou obter mais informações sobre nossos serviços, entre em contato conosco. Nossa equipe está à disposição para atender você.
          </h1>
          <h1 className='mx-6 text-2xl sm:text-2xl  text-center text-slate-700'>
            Estamos aqui para simplificar a gestão de seguros e trazer mais segurança para você e seus clientes. Entre em contato agora e descubra como podemos ajudar sua imobiliária a crescer!
          </h1>
        </div>
      </section>
    </main>
  );
}

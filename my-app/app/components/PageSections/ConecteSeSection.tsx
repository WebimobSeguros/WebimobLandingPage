import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ConecteSeSection() {
  return (
    <section className='bg-slate-800'>
      <article className='max-w-6xl mx-auto px-4 flex justify-center'>
        <div className='flex flex-col sm:flex-row gap-6 p-6 my-8'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-white text-2xl'>Alugue Mais e Melhor</h1>
            <h3 className='text-white text-sm w-fit'>
              Quer saber como a Webimob pode transformar a sua empresa? Fale
              conosco e descubra como nossas soluções podem transformar seus
              processos e trazer mais tranquilidade para você e seus clientes!
            </h3>
          </div>
          <Link href='/contato' className='w-fit'>
            <Button className='w-fit my-6 p-6 cursor-pointer relative overflow-hidden group transition-all duration-300'>
              <span className='absolute inset-0 bg-[#72BDA3] transform -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
              <span className='relative z-10'>CONECTE-SE COM A WEBIMOB</span>
            </Button>
          </Link>
        </div>
      </article>
    </section>
  );
}

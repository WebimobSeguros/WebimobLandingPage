import { Button } from '@/components/ui/button';

export function ConecteSeSection() {
  return (
    <section className='bg-slate-800'>
      <article className='max-w-6xl mx-auto px-4 flex justify-center'>
        <div className='flex flex-col sm:flex-row gap-6 p-6 my-8'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-white text-2xl text-center'>
              Alugue Mais e Melhor
            </h1>
            <h3 className='text-white text-sm w-fit'>
              Quer saber como a Webimob pode transformar a sua empresa? Fale
              conosco e descubra como nossas soluções podem transformar seus
              processos e trazer mais tranquilidade para você e seus clientes!
            </h3>
          </div>
          <Button className='my-6 p-6'>CONECTE-SE COM A WEBIMOB</Button>
        </div>
      </article>
    </section>
  );
}

import Image from "next/image";

type TopicoProp = {
  index: string;
  info: string;
};

type ProdutoInfoType = {
  title: string;
  topicos: TopicoProp[];
};

type SobreProdutoSectionProps = {
  image: string;
  title: string;
  produtoInfo: ProdutoInfoType[];
};

export function SobreProdutoSection({title, image, produtoInfo}: SobreProdutoSectionProps) {
  return (
    <section className='flex relative bg-pink-500'>
      <div className='absolute hidden lg:block bg-amber-500 top-0 left-0 h-full w-1/4'></div>
      <div className=' py-8 mx-8 lg:pl-30 flex flex-col lg:flex-row z-20 items-center'>
        <div className='bg-white mx-8'>
          <Image
            src={image}
            alt='Webimob Favicon'
            width={450}
            height={300}
            className=' '
          />
        </div>

        <div className='my-8 lg:my-0'>
          <h1 className='text-3xl sm:text-5xl font-bold text-left mx-8'>
            {title}
          </h1>

          {produtoInfo.map(item => (
            <div key={item.title} className='my-4 mx-8'>
              <h1 className='font-bold text-2xl'>{item.title}</h1>
              <ul className='list-disc pt-2 ml-4 text-left inline-block'>
                {item.topicos.map(topico => (
                  <li key={topico.index}>{topico.info}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

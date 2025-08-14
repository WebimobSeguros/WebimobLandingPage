import Image from 'next/image';

type TopicoProp = {
  index: string;
  info: string;
};

type ProdutoInfoType = {
  icon?: React.ReactNode;
  title: string;
  topicos: TopicoProp[];
};

type SobreProdutoSectionProps = {
  image: string;
  title: string;
  produtoInfo: ProdutoInfoType[];
};

export function SobreProdutoSection({
  title,
  image,
  produtoInfo,
}: SobreProdutoSectionProps) {
  return (
    <section className='flex relative bg-[#1b4961]'>
      <div className='absolute hidden lg:block bg-[#73cebd] top-0 left-0 h-full w-1/4'></div>
      <div className=' py-8 mx-auto lg:ml-20 flex flex-col lg:flex-row z-20 items-center'>
        <div className='bg-white mx-8 border-4 rounded-md'>
          <Image
            src={image}
            alt={title}
            width={450}
            height={300}
            className='w-full h-full rounded-sm'
          />
        </div>

        <div className='my-8 lg:my-0 text-white'>
          <h2 className='text-2xl sm:text-3xl md:text-left font-bold text-center mx-8'>
            {title}
          </h2>

          {produtoInfo.map(item => (
            <div key={item.title} className='my-4 mx-8'>
              <h3 className='font-bold text-xl md:text-2xl flex items-center gap-2'>{item.icon}{item.title}</h3>
              <ul className='list-disc pt-2 ml-6 text-left inline-block'>
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

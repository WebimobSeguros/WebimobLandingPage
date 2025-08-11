import Image from 'next/image';
import Link from 'next/link';

type ProdutoCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export function ProdutoCard({
  title,
  description,
  link,
  image,
}: ProdutoCardProps) {
  return (
    <div className='flex justify-center hover:text-white'>
      <div className='relative bg-white p-6 flex flex-col items-center cursor-pointer overflow-hidden group transition-all duration-500 hover:scale-105'>
        <span className='absolute inset-0 bg-[#72BDA3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></span>
        <Link className='relative z-10 flex flex-col items-center' href={link}>
          <div className='flex justify-center'>
            <Image
              src={image}
              alt='Webimob Favicon'
              width={268}
              height={268}
              className='bg-slate-500'
            />
          </div>
          <div className='w-full mt-4 text-center '>
            <h1 className='text-2xl font-bold text-[#1c165c] group-hover:text-white transition-colors duration-600'>
              {title}
            </h1>
            <h4 className='sm:text-md mt-2 '>{description}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

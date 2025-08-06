

type TitleSectionProps = {
  title: string;
  description?: string;
  image: string;
};

export function TitleSection({ title, description, image }: TitleSectionProps) {
  const backgroundStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <section 
      className="bg-cover bg-center bg-no-repeat relative"
      style={backgroundStyle}
    >
      <div className='bg-cyan-900/40'>
        <div className='max-w-6xl mx-auto'>
          <div className='py-30 sm:py-40 md:py-50 text-white'>
            <h1 className='font-bold text-5xl sm:text-7xl text-center'>
              {title}
            </h1>
            {description && (
              <h2 className='text-xl sm:text-2xl text-center mt-4'>
                {description}
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

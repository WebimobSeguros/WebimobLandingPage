type InfoSectionProps = {
  title: string;
  description: string;
  children?: React.ReactNode
};

export function InfoSection({ title, description, children }: InfoSectionProps) {
  return (
    
      <div className='flex flex-col sm:ml-20 gap-6 py-8 mx-6'>
    
      <div className='flex items-center'>
        <span className='hidden sm:block w-10 h-0.5 bg-[#72BDA3] flex-shrink-0'></span>
        <h2 className='text-center sm:text-start text-3xl max-w-2xl font-bold ml-4 text-[#000a2d]'>{title}</h2>
      </div>
      <h3 className='text-center sm:text-start text-md max-w-3xl'>{description}</h3>
      {children}
    </div>

  );
}

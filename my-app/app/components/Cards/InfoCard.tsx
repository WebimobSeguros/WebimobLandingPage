type InfoCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <div className='flex justify-center mb-6 mx-6 md:mx-3'>
      <article className='relative border-4 rounded-lg p-6 flex flex-col items-center w-sm bg-white overflow-hidden group transition-all duration-500 '>
        <div className='relative z-10'>
          <div className='flex flex-col items-center'>
            <span aria-hidden='true'>{icon}</span>
          </div>
          <div className='w-full mt-4 text-center'>
            <h3 className='text-lg font-bold text-[#0d2d3e]'>{title}</h3>
            <p className='text-sm mt-2 text-muted-foreground'>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

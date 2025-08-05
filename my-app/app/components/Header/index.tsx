import Link from 'next/link';

export function Header() {
  return (
    <>
      <div className=' bg-slate-300'>
        <section className='flex justify-center sm:justify-end gap-6 px-6 max-w-6xl mx-auto '>
          <Link href='/facebook'>facebook</Link>
          <Link href='/instagram'>instagram</Link>
          <Link href='/linkedin'>linkedin</Link>
        </section>
      </div>
    <div className="bg-red-400">
      <header className="flex flex-col sm:flex-row gap-4 md:gap-0 justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-lg md:text-xl">
        Webimob
        </Link>
        <nav>
        <ul className="flex flex-col sm:flex-row gap-2 md:gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/nossas-solucoes">Nossas Soluções</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
        </nav>
      </header>
    </div>
    </>
  );
}

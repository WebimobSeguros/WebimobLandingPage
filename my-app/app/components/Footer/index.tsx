import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return(
        <footer className='bg-slate-600 py-8'>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='flex flex-col sm:flex-row gap-8 sm:gap-0'>

              <div className='flex flex-col gap-4 sm:flex-1'>
                <Image
                  src='/favicon.ico'
                  alt='Webimob Favicon'
                  width={128}
                  height={128}
                  className='bg-slate-500'
                />
                <p className='max-w-xs text-left'>
                  Tecnologia e Consultoria Especializada para Seguros Imobiliários
                </p>
              </div>

              <address className='flex flex-col gap-4 text-left not-italic sm:flex-1'>
                <h1 className="text-xl font-bold">+55 (31) 9 8332-3971</h1>
                <p>imobiliario@webimob.com.br</p>
                <p>Endereço: Av. Bias Fortes 382</p>
                <p>12 andar - Lourdes</p>
                <p>Belo Horizonte/MG</p>
              </address>

              <div className='flex flex-col gap-4 text-left'>
                <Link href='/'>Home</Link>
                <Link href='/sobre'>Quem Somos</Link>
                <Link href='/nossas-solucoes'>Nossas Soluções</Link>
                <Link href='/'>Blog</Link>
                <Link href='/contato'>Contato</Link>
                <Link href='/'>Política de Privacidade</Link>
              </div>
            </div>
          </div>
        </footer>
    )
}
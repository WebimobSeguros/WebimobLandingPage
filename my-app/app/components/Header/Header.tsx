import Link from "next/link";

export function Header() {
    return (
        <>
        <div className="max-w-6xl mx-auto ">
        <section className="bg-slate-300 flex justify-end gap-6 px-6">
            <Link href='/facebook'>facebook</Link>
            <Link href='/instagram'>instagram</Link>
            <Link href='/linkedin'>linkedin</Link>
        </section>

        <header className="flex gap-4 justify-between p-6 bg-red-400">    
            <Link href='/' className="font-bold">Webimob</Link>
            <nav className=" ">
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/sobre">Sobre Nós</Link></li>
                    <li><Link href="/nossas-solucoes">Nossas Soluções</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
        </div>
        </>
    )
}



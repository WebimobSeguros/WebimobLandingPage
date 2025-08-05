import Image from "next/image";
import Link from "next/link";

type ProdutoCardProps ={
    title: string
    description: string
    link: string
    image: string
}

export function ProdutoCard({title, description, link, image}: ProdutoCardProps){
    return(
            <div className="flex justify-center ">
              <div className="relative border-4 p-6 flex flex-col items-center w-xs">
                <Link href={link}>
                <Image
                  src={image}
                  alt="Webimob Favicon"
                  width={268}
                  height={268}
                  className="bg-slate-500"
                />
                <div className="w-full mt-4 text-center">
                  <h1 className="text-xl font-bold">
                    {title}
                  </h1>
                  <h4 className="text-sm mt-2">
                    {description}
                  </h4>
                </div>
                </Link>
              </div>
            </div>   
    )

}
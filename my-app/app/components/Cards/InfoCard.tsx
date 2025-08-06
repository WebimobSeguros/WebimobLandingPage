import Image from "next/image"

type InfoCardProps ={
    title: string
    description: string
    image: string
}

export function InfoCard({title, description, image}: InfoCardProps){
    return (
        <>  
            <div className="flex justify-center mb-6 mx-6 md:mx-3">
              <div className=" border-4 p-6 flex flex-col items-center w-sm bg-white">
                <Image
                  src={image}
                  alt="Webimob Favicon"
                  width={100}
                  height={100}
                  className="bg-slate-500"
                />
                <div className="w-full mt-4 text-center">
                  <h1 className="text-lg font-bold">
                    {title}
                  </h1>
                  <h4 className="text-sm mt-2">
                    {description}
                  </h4>
                </div>
              </div>
            </div>  

        </>
    )
}
import { fetchCategory } from "@/action/fetchCategory";
import Image from "next/image";

interface Params {
  name: string;
}
  const page = async ({ params }: { params: Params }
  ) => {
 const {name}=params
 const lol= await fetchCategory(name)

  return (
    <div className="font-extrabold bg-red-500">

      <h1>Hello there your search topic is {name }</h1>
      {lol?.products.map(({imageurl})=>(
        <Image src={imageurl} alt="lol" key={imageurl} width={500} height={500} />
      ))}
    </div>  
  )
}

export default page
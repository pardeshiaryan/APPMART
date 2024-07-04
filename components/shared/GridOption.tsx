import { cn } from "@/lib/utils"
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url"
import Image from "next/image"
import Link from "next/link"


const GridOption = ({title,className,image}:{title:string,className?:string,image?:string}) => {
   const urltitle= title
    .replace(/\s+/g, '-') // Replace spaces with dashes (or another character)
    .replace(/[^a-zA-Z0-9\-]/g, '') // Remove all non-alphanumeric characters except for dashes
    .toLowerCase();
  return (
    <Link
    className={cn('relative grid-option',className)}
    href={
        `fruits/${urltitle}`
    } >
        <h2 className="text-xl font-bold ">{title}</h2>

        {image && 
        <Image 
        src={image}
        alt={title}
        layout="fill"
        className="object-cover opacity-20 rounded-md "
        />
        }
    </Link>
  )
}

export default GridOption
import prisma from '@/helper/db'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { freshFruit } from '@/action/fetchFruit'
import FruitCard from './FruitCard'
import { Card, CardContent } from '../ui/card'
import { redirect } from 'next/dist/server/api-utils'
// import { useRouter } from 'next/navigation'



const Featured = async () => {

  const responce = await freshFruit();
  return (
    <div >
        <Pagination>
  <PaginationContent className='flex md:flex-row  gap-10 m-auto pt-6 font-bold'>
    {/* <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem> */}
{
    responce.map(({name})=>(

    <PaginationItem>
      <PaginationLink href={`/fruits/${name}`} >
{name}
      </PaginationLink>
    </PaginationItem>
    )) }
{/* 
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem> */}

    {/* <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem> */}

  </PaginationContent>
</Pagination>



<Carousel className="w-full ">
      <CarouselContent className="flex justify-center   ">
        {responce.map((fruit, index) => (
          <CarouselItem key={index}>
            <FruitCard
              name={fruit.name}
              description={fruit.description}
              category={fruit.category}
              kgPrice={fruit.kgPrice}
              stock={fruit.stock}
              imageUrl={fruit.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


  
    </div>
  )
}

export default Featured
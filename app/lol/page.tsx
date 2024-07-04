"use client"
import { Button } from '@/components/ui/button'
import { useBearStore } from '@/store'
import React from 'react'

const page = () => {

   const lol= useBearStore()
    return (
    <div className='flex m-auto  items-center justify-center gap-10 mt-10'>
    <Button onClick={()=>lol.decrease(1)}> Sub it </Button>
  {lol.bears}
    <Button onClick={()=>lol.increase(1)}> Add it </Button>
    </div>
  )
}

export default page
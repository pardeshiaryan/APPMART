"use server"
import prisma from "@/helper/db"

export const freshFruit=async ()=>{
  return  await prisma.fruits.findMany(
   
  )
}
"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function CreateUser({username,email,password}:{username:string,email:string,password:string}) {
  // ... you will write your Prisma Client queries here
  
 const responce= await prisma.user.create({
    data:{
  
name:username,
email,
password,
    }
  })

  if(!responce){

    return Response.json({
      message:"Error"
    })
  }
  return Response.json({
    message:"Success"
  })
}

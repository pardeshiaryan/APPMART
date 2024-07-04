import prisma from "@/helper/db";
import { Prisma } from '@prisma/client';

const specificFruit = async ({ name }:{name:string} ) => {
  try {
   const fruit=await prisma.fruits.findMany({
    where:{
        name:name
    }
   })

    return fruit[0]; // Returns null if no fruit found with the given name
  } catch (error) {
    console.error('Error fetching specific fruit:', error);
    throw error; // You can handle errors as per your application's needs
  }
};

export default specificFruit;

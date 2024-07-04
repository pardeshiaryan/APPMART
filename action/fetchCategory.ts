import prisma from "@/helper/db";

export const fetchCategory = async (name: string) => {
  return await prisma.category.findFirst({
    where: {
      name: name,
    },
    select: {
      products: true,
    },
  });
};

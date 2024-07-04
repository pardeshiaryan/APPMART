import prisma from "@/helper/db";

// Define the parameter types for the insertIntoCart function





export const fetchCartData = async ({ userId }: { userId: string }) => {
  try {
    // Fetch the user with their cart and cart items including fruits
    const userWithCart = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        cart: {
          include: {
            items: {
              include: {
                fruit: true,
              },
            },
          },
        },
      },
    });

    return userWithCart?.cart?.items ;
  } catch (error) {
    console.error('Error fetching cart data:');
    throw error;
  }
};

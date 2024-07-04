import prisma from "@/helper/db";

// Define the parameter types for the insertIntoCart function
interface InsertIntoCartParams {
  quantity: number;
  fruitId: string;
  userId: string; // Now we use userId instead of cartId
}

export async function POST({ quantity, fruitId, userId }: InsertIntoCartParams) {
// export const insertIntoCart = async ({ quantity, fruitId, userId }: InsertIntoCartParams) => {
  try {
    // Validate if the userId exists and find the associated cart
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cart: true },
    });

    if (!user) {
      throw new Error(`User with ID ${userId} does not exist`);
    }

    const cart = user.cart;

    if (!cart) {
      throw new Error(`Cart for user with ID ${userId} does not exist`);
    }

    // Validate if the fruitId exists
    const fruit = await prisma.fruits.findUnique({
      where: { id: fruitId },
    });

    if (!fruit) {
      throw new Error(`Fruit with ID ${fruitId} does not exist`);
    }

    // Insert into CartItem
    const response = await prisma.cartItem.create({
      data: {
        quantity: quantity,
        cartId: cart.id,
        fruitId: fruitId,
      },
    });

    console.log('Item inserted into cart:', response);
    return response; // Returning the response can be useful for further processing
  } catch (error) {
    console.error('Error inserting item into cart:');
    throw error; // Rethrow the error after logging it
  }
};





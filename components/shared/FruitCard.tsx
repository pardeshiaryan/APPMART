"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

type FruitCardProps = {
  name: string;
  description: string | null;
  category: string | null;
  kgPrice: number;
  stock: number;
  imageUrl: string | null;
  
};

const FruitCard: React.FC<FruitCardProps> = ({
  name,
  description,
  category,
  kgPrice,
  stock,
  imageUrl,
  
}) => {


    const router=useRouter();
  return (
    <div className="bg-white rounded-lg h-[40vh]  md:w-[25vw]  shadow-md p-4  "
    onClick={()=>router.push(`/fruits/${name}`)}
    >
      {/* Fruit Image */}
      <div className="overflow-hidden  rounded-lg mb-4">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Fruit Details */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{category}</p>
        <p className="text-gray-700 mb-4 line-clamp-1 ">{description || 'No description available.'}</p>

        {/* Price and Stock */}
        <div className="flex justify-between text-sm mb-2">
          <p className="text-gray-700">Price: ${kgPrice.toFixed(2)}</p>
          <p className="text-gray-700">Stock: {stock}</p>
        </div>

        {/* Last Updated */}
        {/* <p className="text-xs text-gray-500">Last updated: {updatedAt.toLocaleDateString()}</p> */}
      </div>
    </div>
  );
};

export default FruitCard;

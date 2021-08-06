import React from "react";

const Card = ({card}) => {
  return (
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
      <div class="py-4 flex items-center justify-center text-center">
        <span class="inline-flex items-center h-6 p-6 rounded text-white text-3xl bg-green-500">{card.value}</span>
      </div>
      <span class="text-s font-medium text-gray-500 uppercase">{card.name}</span>
    </div>
  )
}

export default Card;

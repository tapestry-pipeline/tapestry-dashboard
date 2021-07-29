import React from "react";

const Card = ({card}) => {
  return (
    <div class="bg-gradient-to-r flex-auto  w-42 h-42  from-purple-300 to-purple-200    shadow-lg    rounded-lg">
      <div class="md:p-7 p-4">
        <h2 class="text-xl text-center text-gray-600 capitalize">{card.value}</h2>
        <h3 class="text-sm  text-gray-500  text-center">{card.name}</h3>
      </div>
    </div>
  )
}

export default Card;


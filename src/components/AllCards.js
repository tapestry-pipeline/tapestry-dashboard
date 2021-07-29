import React from "react";
import Card from "./Card.js";

const AllCards =() => {
  let cards = [{ name: "test1", value: "running"}, { name: "test2", value: "Health ok"}, { name: "test3", value: "Yay!"}];

  return (
    <>
      <div class="flex items-center h-64 justify-center mx-5">
         <div class="w-full  mb-2 justify-center rounded-lg text-white bg-blue-300">
            <h3 class="text-white p-3 md:text-2xl lg:text-2xl text-lg"></h3>
            <div class="p-5 pt-1 flex-wrap  flex items-center gap-2 justify-center">
            {cards.map(card => {
               return (
                  <Card card={card} />
               )
            })}
            </div>
         </div>
      </div>
    </>
  );
}

export default AllCards; 
import React from "react";
import Card from "./Card.js";

const AllCards =({cards}) => {
  // let cards = [{ name: "test1", value: "running"}, { name: "test2", value: "Health ok"}, { name: "test3", value: "Yay!"}];

  return (
    <>
      <div className="flex items-center h-64 justify-center mx-5">
         <div className="w-full  mb-2 justify-center rounded-lg ">
            <div className="p-5 pt-1 flex-wrap  flex items-center gap-4 justify-center">
            {cards.map((card, index) => {
               return (
                  <Card card={card} key={index}/>
               )
            })}
            </div>
         </div>
      </div>
    </>
  );
}

export default AllCards; 
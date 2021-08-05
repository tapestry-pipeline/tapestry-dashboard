import React from "react";
import Card from "./Card.js";

const AllCards =({cards}) => {
  // let cards = [{ name: "test1", value: "running"}, { name: "test2", value: "Health ok"}, { name: "test3", value: "Yay!"}];
 //flex items-center h-64 justify-center mx-5

//  <div className="w-1/2 float-left">
//       <div className="w-full mb-2 justify-center rounded-lg ">
//         <div className="p-5 pt-1 flex-wrap flex items-center gap-4 justify-center">
//         {cards.map((card, index) => {
//             return (
//               <Card card={card} key={iPndex}/>
//             )
//         })}
//         </div>
//       </div>
//     </div>

  return (
    <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow">
      <header class="border-b border-solid border-gray-300 bg-white">
				<h2 class="p-6">Resource Metrics</h2>
			</header>
      <section class=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
        {cards.map((card, index) => {
            return (
              <Card card={card} key={index}/>
            )
        })}
        </section>
    </section>
  );
}

export default AllCards; 
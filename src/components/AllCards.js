import React from "react";
import Card from "./Card.js";

const AllCards =({cards}) => {
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
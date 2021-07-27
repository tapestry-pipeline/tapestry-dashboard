import React from "react";


const Snowflake = () => {
  return (
    <div className="w-full h-full rounded">
      <div class="aspect-w-16 aspect-h-10 shadow-2xl">
        <iframe is="x-frame-bypass" title="snowflake" src="https://dla27293.us-east-1.snowflakecomputing.com/console" frameborder="0"></iframe>
      </div>
    </div>      
  )
};

export default Snowflake
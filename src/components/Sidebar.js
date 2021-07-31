import React from "react";
import { Link } from "react-router-dom";
import airbyte from "../assets/images/airbyte.png";
import grouparoo from "../assets/images/grouparoo.png";
import snowflake from "../assets/images/snowflake.png";
import dbt from "../assets/images/dbt.png"; 
import tapestry_logo_color from "../assets/images/tapestry_logo_color.png"


const Sidebar = () => {
    return (
    <div className="w-64 absolute sm:relative bg-midnightblue shadow h-full flex-col justify-between hidden sm:flex">
      <div className="px-8">
        <div className="h-16 w-full flex items-center mt-5 m-2.5">
          <img src={tapestry_logo_color} width={144} height={30}></img>
        </div>
      <ul className="mt-12">

      <Link to="/">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">Home</span>
            </div>
        </li>
      </Link>
      <Link to="/airbyte">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
          <div className="flex items-center">
            <img className="icon" width={18} height={18} src={airbyte}></img>
            <span className="text-sm  ml-2">Data Ingestion</span>
          </div>
        </li>
      </Link>
      <Link to="/snowflake">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
            <div className="flex items-center">
            <img className="icon" width={18} height={18} src={snowflake}></img>
                <span className="text-sm  ml-2">Data Warehouse</span>
            </div>
        </li>
      </Link>
      
      <Link to="/grouparoo">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <img className="icon" width={18} height={18} src={grouparoo}></img>
              <span className="text-sm  ml-2">Data Syncing</span>
            </div>
        </li>
      </Link>

      <Link to="/dbt">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <img className="icon" width={18} height={18} src={dbt}></img>
                <span className="text-sm  ml-2">Data Transformation</span>
            </div>
        </li>
      </Link>
      
      <Link to="/documentation">
        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Documentation</span>
            </div>
        </li>
      </Link>  
    </ul>
  </div>
</div>

)
};

// code for number boxes next to tabs 
{/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div> */}

export default Sidebar; 
import React from "react";
import { Link } from "react-router-dom";
import airbyte from "../assets/images/airbyte.png";
import grouparoo from "../assets/images/grouparoo.png";
import snowflake from "../assets/images/snowflake.png";
import dbt from "../assets/images/dbt.png"; 
import tapestry_logo_color from "../assets/images/tapestry_logo_color.png"


const Sidebar = () => {
  return (
    <div className="grid-rows-2 col-span-1 w-80 absolute sm:relative bg-midnightblue shadow h-screen flex-col justify-between hidden sm:flex">
      <div className="px-8">
        <div className="h-16 w-full flex items-center mt-10 m-5">
          <img src={tapestry_logo_color} alt="tapestrylogo" width={160} height={40}></img>
        </div>
        
        <ul className="mt-12">
          <Link to="/">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6 py-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-m font-sans ml-2">Home</span>
              </div>
            </li>
          </Link>

          <Link to="/airbyte">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6 py-4">
              <div className="flex items-center">
                <img className="icon" width={18} height={18} src={airbyte } alt="airbyteicon"></img>
                <span className="text-m font-sans ml-2">Data Ingestion</span>
              </div>
            </li>
          </Link>

          <Link to="/snowflakedbt">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6 py-4">
              <div className="flex items-center">
              <div className="grid grid-cols-1 gap-2">
                <img className="icon" width={18} height={18} src={snowflake} alt="snowflakeicon"></img>
                <img className="icon" width={18} height={18} src={dbt} alt="dbticon"></img>
              </div>
                <span className="text-m font-sans ml-2">
                  <p>Data Warehouse</p>
                  <p>& Data Transformation</p>
                </span>
              </div>
            </li>
          </Link>
      
          <Link to="/grouparoo">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6 py-4">
              <div className="flex items-center">
                <img className="icon" width={18} height={18} src={grouparoo} alt="grouparooeicon"></img>
                <span className="text-m font-sans  ml-2">Data Syncing</span>
              </div>
            </li>
          </Link>
      
          <a href="https://tapestry-pipeline.github.io/documentation/" rel="noreferrer" target="_blank">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6 py-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-m font-sans  ml-2">Documentation</span>
              </div>
            </li>
          </a>  
        </ul>
      </div>
    </div>
  )
};

export default Sidebar; 
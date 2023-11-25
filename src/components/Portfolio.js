import React from "react";
import beersByName from "../assets/portfolio/beersbyname.png";
import budgetPlanner from "../assets/portfolio/budgetPlanner.png";
import calender from "../assets/portfolio/calender.png";
import githubFinder from "../assets/portfolio/githubFinder.png";
import pokemon from "../assets/portfolio/pokemon.png";
import restaurantApp from "../assets/portfolio/restaurantApp.png";
import weatherForecast from "../assets/portfolio/weatherForecast.png";

function Portfolio() {
    const portfolios = [

        {
            id:1,
            src:restaurantApp,
            heading : "Restaurant App"
        },
        {
            id:2,
            src:budgetPlanner,
            heading : "Budget Planner"
        },
        {
            id:3 ,
            src:githubFinder,
            heading : "Github Finder"
        },
        {
            id:4,
            src:weatherForecast,
            heading : "Weather Forecast"
        },
        {
            id:5,
            src:pokemon,
            heading : "Pokemon Finder",
        },
        {
            id:6,
            src:beersByName,
            heading : "Beers Searching App"
        },
        {
            id:7,
            src:calender,
            heading : "Calender"
        },

    ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Checkout some of my Projects</p>
          </div>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
    {portfolios.map(({id, src, heading}) =>(
     
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
              <p className="text-center justify-center m-2">{heading}</p>
              <div className="flex items-center justify-center">
               
              <button  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">Demo</button>
             
              <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
        
       
    ))}    
     </div>
    </div>
    </div>
  );
};

export default Portfolio;

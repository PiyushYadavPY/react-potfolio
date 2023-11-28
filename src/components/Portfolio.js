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
            heading : "Restaurant App",
            demoLink : "https://py-restro.vercel.app/",
            codeLink : "https://github.com/PiyushYadavPY/py-restro"
        },
        {
            id:2,
            src:budgetPlanner,
            heading : "Budget Planner",
            demoLink : "https://budget-planner-pied.vercel.app/",
            codeLink : "https://github.com/PiyushYadavPY/budget-planner"
        
        },
        {
            id:3 ,
            src: githubFinder,
            heading : "Github Finder",
            demoLink : "https://piyushyadavpy.github.io/githubFinder/",
            codeLink : "https://github.com/PiyushYadavPY/githubFinder"
        },
        {
            id:4,
            src:weatherForecast,
            heading : "Weather Forecast",
            demoLink : "https://weather-forecast-sandy-six.vercel.app/",
            codeLink : "https://github.com/PiyushYadavPY/weather-forecast"
        },
        {
            id:5,
            src:pokemon,
            heading : "Pokemon Finder",
            demoLink : "https://piyushyadavpy.github.io/pokemon/",
            codeLink : "https://github.com/PiyushYadavPY/pokemon"
        },
        {
            id:6,
            src:beersByName,
            heading : "Beers Searching App",
            demoLink : "https://piyushyadavpy.github.io/beer-searching-app/",
            codeLink : "https://github.com/PiyushYadavPY/beer-searching-app"
        },
        {
            id:7,
            src:calender,
            heading : "Calender",
            demoLink : "https://piyushyadavpy.github.io/calendar/",
            codeLink : "https://github.com/PiyushYadavPY/calendar"
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
    {portfolios.map(({id, src, heading,demoLink, codeLink}) =>(
     
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
              <p className="text-center justify-center m-2">{heading}</p>
              <div className="flex items-center justify-center">
               
              <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">
               
                <a href={demoLink} target="_blank">Demo</a>
                </button>
             
              <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">
                <a href={codeLink} target="_blank">Code</a> 
                </button>
              </div>
            </div>
        
       
    ))}    
     </div>
    </div>
    </div>
  );
};

export default Portfolio;

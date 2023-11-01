import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl  mt-20 ">
          As a dedicated React web developer, I bring a robust skill set
          encompassing HTML, CSS, JavaScript, and React, along with proficiency
          in Tailwind CSS and Bootstrap for crafting sleek and responsive user
          interfaces. With a passion for creating seamless and intuitive web
          experiences, I combine my technical acumen with a keen eye for design
          to deliver high-quality, scalable, and user-centric applications. My
          commitment to staying updated with the latest trends and technologies
          ensures that I bring innovative and efficient solutions to every
          project I undertake.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;

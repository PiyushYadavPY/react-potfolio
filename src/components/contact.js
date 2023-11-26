import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" 
        style={{ marginTop: "20rem"}}
         >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <div className="pt-8">
            <p>Mobile no: 9193123768</p>
            <p>Email : Piyushyadav4991@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

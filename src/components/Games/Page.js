"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";

function GamesComponent() {
  return (
    <div class="container mx-auto my-auto">
      <div class="lg:m-10">
        <div class="lg:p-5">
          <h1
            class=" lg:text-4xl text-2xl font-extrabold text-white text-center lg:my-0 my-5"
            data-aos="fade-up"
          >
            Our Games
          </h1>
        </div>
      </div>
      <div class="flex justify-center items-center">
  <div class="w-full md:w-1/3 p-2">
    <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
     
      <div class="flex justify-between items-start px-2 pt-2">
        <div class="p-2 flex-grow">
          <h1 class="font-bold text-xl font-poppins">Virtual Cops</h1>
          <p class="text-gray-500 font-nunito">Available on Google Playstore</p>
        </div>
       
      </div>
      <div class="flex justify-center items-center px-2 pb-2">
        <div class="w-1/2 p-2">
          <button class="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
            <svg viewBox="0 0 24 24" class="inline w-4 h-4">
              <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg>Download
          </button>
        </div>
        <div class="w-1/2 p-2">
          <button class="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
    
  )
}

export default GamesComponent
"use client";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

const LearnMore = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div className="container mx-auto my-10">
      <div
        class="lg:text-4xl  text-xl font-extrabold  text-center tracking-wider text-white "
        data-aos="fade-up"
      >
        Get in Touch
      </div>
      <div className="grid grid-rows-1 gap-4 justify-center">
        <div className="p-4">
          <div class="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <Image src="/contact us v2.gif" alt="" width={600} height={600} />
              {/* <p>Let's implement creative and award winning projects</p> */}
            </div>
            <div class="">
              <div class="p-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  class="px-4 w-full py-2 border border-gray-300 bg-transparent  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
              </div>
              <div class="p-2">
                <input
                  type="text"
                  placeholder="Email"
                  class="px-4 w-full py-2 border border-gray-300 bg-transparent	 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
              </div>
              <div class="p-2">
                <input
                  type="text"
                  placeholder="Phone No"
                  class="px-4 w-full py-2 border border-gray-300 bg-transparent	 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
              </div>
              <div class="p-2">
                <textarea
                  type="text"
                  placeholder="Your Message"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md  text-white bg-transparent	focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div class="p-2">
                <button class=" w-full h-16 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

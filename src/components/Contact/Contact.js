"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const ContactComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class="p-5">
        <h1
          class="text-center lg:text-4xl font-extrabold text-white"
          data-aos="fade-up"
        >
          Contact
        </h1>
      </div>
      <div class="grid gap-3 lg:grid-cols-3 my-10 lg:m-0 m-3">
        <div class="box-border text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0">
          <div class=" flex justify-center p-2">
            <Image
              src="/Phone_Email_address-02-01.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <h1 class="text-center text-lg font-bold p-2 text-white ">
            Phone No
          </h1>
          <p class="text-center text-md p-2 text-white font-semibold">
            +97-150-994-9375
          </p>
        </div>
        <div class="box-border  text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0">
          <div class=" flex justify-center p-2">
            <Image
              src="/Phone_Email_address-01-01.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <h1 class="text-center text-lg font-bold p-2 text-white">Email</h1>
          <p class="text-center  text-white p-2 font-semibold">
            info@vzonesolutions.org
          </p>
        </div>
        <div class="box-border  text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0">
          <div class=" flex justify-center p-2">
            <Image
              src="/Phone_Email_address-03-01.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <h1 class="text-center text-lg font-bold p-2 text-white">Address</h1>
          <p class="text-center text-md p-2 text-white font-semibold">
            Office No. 702, Al Saud Building 2 - Al Qusais Industrial Area 4 -
            Dubai - United Arab Emirates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;

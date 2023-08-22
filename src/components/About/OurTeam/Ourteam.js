"use client";
import React from "react";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const OurteamComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class="Lg:m-10 m-5">
        <div class="p-5">
          <h1
            class="text-center lg:text-4xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Our Professional Team
          </h1>
          <p
            class="text-center lg:text-md font-normal text-white my-3"
            data-aos="fade-up"
          >
            We are at your service with our competent staff.
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-4 m-2">
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div class=" ">
            <Image
              class="rounded-t-lg"
              src="/0001.png"
              alt=""
              width={1000}
              height={100}
            />
          </div>
          <div class="m-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Eden Thomas
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Founder
            </h5>
            <p class="mb-3 font-normal text-white">
              Startup Mentor | Industry Expertise | Social Impact Advocate |
              Innovator/Disruptor
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <Image
            class="rounded-t-lg"
            src="/2.png"
            alt=""
            width={1000}
            height={100}
          />

          <div class="m-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Etic metic
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Co-Founder
            </h5>
            <p class="mb-3 font-normal text-white">
              Industry Expertise | Social Impact Advocate | Innovator/Disruptor
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/3.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Ethan Hunt
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              CEO
            </h5>
            <p class="mb-3 font-normal text-white">
              Strategic Leader | Team Builder | Industry Expert
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/4.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Roman Eli
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              COO
            </h5>
            <p class="mb-3 font-normal text-white">
              Cross-Functional Collaboration | Process Improvement Specialist
              | Risk Mitigation
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/5.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Lincoln Miles
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Executive Director
            </h5>
            <p class="mb-3 font-normal text-white">
              Organizational Development | Stakeholder Management | Fundraising
              and Resource Development
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/6.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Jasper Legend
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Technical Project Manager
            </h5>
            <p class="mb-3 font-normal text-white">
              Sr. FullStack | Blockchain | ReactJs | NodeJs | Web3 Consultent
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/7.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Jayden Caleb
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              CTO
            </h5>
            <p class="mb-3 font-normal text-white">
              Technical Leadership | Cloud Computing | Cybersecurity |
              Software Development
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800	 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <a href="#">
            <Image
              class="rounded-t-lg"
              src="/8.png"
              alt=""
              width={1000}
              height={100}
            />
          </a>
          <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Ryan Brooks
            </h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              CFO
            </h5>
            <p class="mb-3 font-normal text-white">
              Financial Strategy | Financial Analysis | Risk Management |
              Mergers and Acquisitions (M&A)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurteamComp;

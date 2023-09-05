"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const MetaverseStats = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    // <div class="bg-cover  bg-[url('/Wave_bg-01.svg')]">
    <div class="container mx-auto">
      <div className="grid grid-rows-1 gap-4 justify-center">
        <div className="p-4">
          <div class="grid lg:grid-cols-2 items-center ">
            <div class="bg-neutral-950 rounded lg:order-1 order-2 ">
              <div class="m-3">
                <h1
                  class="lg:text-4xl text-xl font-extrabold tracking-wider text-white lg:text-left 	"
                  data-aos="fade-up"
                >
                  Our Mission & Vision
                </h1>
                <p
                  class="lg:text-xl font-medium tracking-wider my-5 text-white lg:text-left 	"
                  data-aos="fade-up"
                >
                  At <span class="font-black">VZone Solutions</span>
                  , our vision is to revolutionize the digital landscape by
                  creating an immersive and interconnected Metaverse ecosystem,
                  where individuals can explore, innovate, and thrive in
                  limitless virtual possibilities.
                </p>
                <p
                  class="lg:text-xl  font-medium tracking-wider my-5 text-white lg:text-left 	"
                  data-aos="fade-up"
                >
                  Our mission is to provide cutting-edge technologies and
                  solutions that seamlessly integrate Metaverse technology, Web3
                  payments, P2E opportunities, and decentralized social media
                  platforms, empowering users to shape their digital
                  experiences, unlock economic opportunities, and foster vibrant
                  virtual communities.
                </p>
              </div>
            </div>
            <div class="flex justify-end lg:order-2 order-1">
              <Image
                className=""
                src="/gmail 4.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MetaverseStats;

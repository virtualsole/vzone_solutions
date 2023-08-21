"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const HomeComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <>
      {/* <div class="absolute z-0 top-0 ">
        <img src="/slide222.gif" class="object-cover w-screen h-1/3" alt="" />
      </div> */}
      <div class="	">
        <div class="container mx-auto">
          <div className="grid grid-rows-1 gap-4 justify-center">
            <div className="p-4">
              <div class="grid lg:grid-cols-2 gap-4 items-center">
                <div class="bg-neutral-950 rounded lg:order-1 order-2">
                  <div class="lg:m-5">
                    <h1
                      class="lg:text-base font-semibold  md:text-left text-white"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <span class="font-black	">
                        VZone Solutions
                      </span>
                      &nbsp; is a Powerful Ecosystem of Metaverse, Web3
                      Payments, Smart Contracts, P2E, R2E, U2E & Decentralized
                      Social Media Platforms.
                    </h1>
                    <p
                      class="my-6 lg:text-base font-semibold  text-white"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      We shape the future of digital experiences and paving the
                      way for a more inclusive and dynamic Blockchain world.
                      <br />
                      Vzone Solutions empowers users to explore, create, and
                      connect in a secure and immersive environment, unlocking
                      the full potential of the virtual world.
                    </p>
                  </div>
                </div>
                <div class="lg:order-2 order-1">
                  <Image
                    className="h-auto "
                    src="/ChusInsan.gif"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;

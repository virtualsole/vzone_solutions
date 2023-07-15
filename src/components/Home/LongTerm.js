"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const LongTerm = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto my-10">
      <div className="grid grid-rows-1 gap-4 justify-center">
        <div className="p-4">
          <div class="grid lg:grid-cols-2 items-center">
            <div>
              <h1
                class="lg:text-3xl font-extrabold tracking-wider text-white	"
                data-aos="fade-up"
              >
                What is the long-term plan for VZONE SOLUTIONS?
              </h1>
              <p
                class="text-base font-medium tracking-wider my-5 text-white 	"
                data-aos="fade-up"
              >
                We aim to integrate VZ with e-commerce platforms, especially
                those who start using VRC for their goods or services as a
                potential currency. We will also build FREE of charge e-commerce
                platforms to any client who uses VRC. This will help everyone
                increase their revenues, and in turn increase the value of VRC
                in the process.
              </p>
              {/* <p
                class="lg:text-2xl font-medium tracking-wider my-5 text-white 	"
                data-aos="fade-up"
              >
                Our mission is to provide cutting-edge technologies and
                solutions that seamlessly integrate Metaverse technology, Web3
                payments, P2E opportunities, and decentralized social media
                platforms, empowering users to shape their digital experiences,
                unlock economic opportunities, and foster vibrant
                virtual communities.
              </p> */}
              {/* <div class="grid grid-rows-4 grid-flow-col gap-1 my-5">
                <div
                  class="box-border border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 my-2"
                  data-aos="fade-up-right"
                >
                  <div class=" flex justify-start p-2">
                    <Image
                      src="/superiorprotection.png"
                      alt=""
                      width={80}
                      height={80}
                      class="text-white"
                    />
                    <div class="my-5 mx-5">
                      <h1 class="text-center md:text-left text-lg font-bold text-white ">
                        Metaverse App
                      </h1>
                      <p class="text-center text-md text-white ">
                        Metaverse universe manageable from all devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="box-border border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0"
                  data-aos="fade-up-right"
                >
                  <div class=" flex justify-start p-2">
                    <Image
                      src="/superiorprotection.png"
                      alt=""
                      width={80}
                      height={80}
                      class="text-white"
                    />
                    <div class="my-5 mx-5">
                      <h1 class="text-center md:text-left text-lg font-bold text-white ">
                        Metaverse App
                      </h1>
                      <p class="text-center text-md text-white ">
                        Metaverse universe manageable from all devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="box-border border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 my-2"
                  data-aos="fade-up-right"
                >
                  <div class=" flex justify-start p-2">
                    <Image
                      src="/superiorprotection.png"
                      alt=""
                      width={80}
                      height={80}
                      class="text-white"
                    />
                    <div class="my-5 mx-5">
                      <h1 class="text-center md:text-left text-lg font-bold text-white ">
                        Metaverse App
                      </h1>
                      <p class="text-center text-md text-white ">
                        Metaverse universe manageable from all devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="box-border border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 my-2"
                  data-aos="fade-up-right"
                >
                  <div class=" flex justify-start p-2">
                    <Image
                      src="/superiorprotection.png"
                      alt=""
                      width={80}
                      height={80}
                      class="text-white"
                    />
                    <div class="my-5 mx-5">
                      <h1 class="text-center md:text-left text-lg font-bold text-white ">
                        Metaverse App
                      </h1>
                      <p class="text-center text-md text-white ">
                        Metaverse universe manageable from all devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="flex justify-end">
              <Image
                className="h-auto w-auto"
                src="/dot-11.gif"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            {/* <div class="relative w-64 h-10 bg-gray-200">
              <span class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                Hover to show text
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTerm;

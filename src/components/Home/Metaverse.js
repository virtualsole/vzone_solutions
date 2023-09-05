"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Metaverse = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div className="grid grid-rows-1 gap-4 my-10">
        <div className="">
          <div class="grid lg:grid-cols-2 items-center">
            <div class="flex justify-center items-start ">
              <Image
                class=""
                src="/Why V Zone Solutions v7.gif"
                width={700}
                height={700}
                alt=""
              />
            </div>
            <div class="gird items-center backdrop-blur-sm bg-neutral-950">
              <div class="m-5">
                <p
                  class="text-left lg:text-xl font-medium  text-white m-2"
                  data-aos="fade-up"
                >
                  Choose Vzone Solutions for an unparalleled virtual experience.
                  With its cutting-edge technology, seamless integration of
                  Metaverse, Web3 payments, P2E opportunities, and decentralized
                  social media, Vzone Solutions empowers you to embrace the
                  future and unlock limitless possibilities in the digital
                  realm.
                </p>
                <p
                  class="lg:text-xl font-medium my-4 text-white  lg:text-left m-2"
                  data-aos="fade-up"
                >
                  The blockchain, hospitality and gaming industry are growing by
                  the hour and Vzone aims to be their cryptocurrency which all
                  orbit in the same universe will be more harmonic with their
                  payment methods.
                </p>
                <p
                  class="lg:text-xl font-medium my-4 text-white lg:text-left m-2"
                  data-aos="fade-up"
                >
                  Our goal is to create a unified cryptocurrency for the utility
                  of whole world. We aim to integrate VRC(our native
                  cryptocurrency) with e-commerce platforms, bookings of
                  flights, hotels, restaurants and real estate especially those
                  who start using VRC (our native cryptocurrency) for their
                  goods or services as a potential currency. We will also build
                  FREE of charge e-commerce platforms to any client who uses
                  VRC. This will help everyone increase their revenues, and in
                  turn increase the value of VRC in the process. Vzone will
                  offer a unique interface for investors, supporters and traders
                  coming from different backgrounds and experiences.
                </p>
              </div>
              {/* <div class="grid grid-rows-1 grid-flow-col gap-4 my-5">
                <div
                  class="box-border  text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0"
                  data-aos="zoom-in-right"
                >
                  <div class="flex justify-center">
                    <Image
                      src="/digital assets.png"
                      alt=""
                      class=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="mx-5">
                    <h1 class="text-white text-md font-black my-3">
                      Virtual Land
                    </h1>
                    <h1 class="text-white text-sm font-semibold my-3">
                      Buy virtual land and sail to the new world.
                    </h1>
                  </div>
                </div>
                <div
                  class="box-border text-center  border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0"
                  data-aos="zoom-in-right"
                >
                  <div class="flex justify-center">
                    <Image
                      src="/digital assets.png"
                      alt=""
                      class=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="mx-5">
                    <h1 class="text-white text-md font-black my-3">
                      Virtual Land
                    </h1>
                    <h1 class="text-white text-sm font-semibold my-3">
                      Buy virtual land and sail to the new world.
                    </h1>
                  </div>
                </div>
              </div> */}
              {/* <div class="grid grid-rows-1 grid-flow-col gap-4 my-5">
                <div
                  class="box-border  text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0"
                  data-aos="zoom-in-right"
                >
                  <div class="flex justify-center">
                    <Image
                      src="/digital assets.png"
                      alt=""
                      class=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="mx-5">
                    <h1 class="text-white text-md font-black my-3">
                      Virtual Land
                    </h1>
                    <h1 class="text-white text-sm font-semibold my-3">
                      Buy virtual land and sail to the new world.
                    </h1>
                  </div>
                </div>
                <div
                  class="box-border text-center border p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                  data-aos="zoom-in-right"
                >
                  <div class="flex justify-center">
                    <Image
                      src="/digital assets.png"
                      alt=""
                      class=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="mx-5">
                    <h1 class="text-white text-md font-black my-3">
                      Virtual Land
                    </h1>
                    <h1 class="text-white text-sm font-semibold my-3">
                      Buy virtual land and sail to the new world.
                    </h1>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;

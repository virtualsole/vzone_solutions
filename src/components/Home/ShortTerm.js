"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const ShortTerm = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div className="grid grid-rows-1  gap-4 justify-center">
        <div className="p-4">
          <div class="grid lg:grid-cols-2 items-center">
            <div>
              <Image
                className="h-auto w-auto"
                src="/about-meta-11.gif"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            <div>
              <h1
                class="lg:text-4xl font-extrabold tracking-wider	text-white"
                data-aos="fade-up"
              >
                What is the short-term plan for VZONE ?
              </h1>
              <p
                class="lg:text-2xl font-medium my-4 text-white"
                data-aos="fade-up"
              >
                Our goal is to create a unified cryptocurrency for the
                hospitality and gaming industry. Add to that, bookings of
                flights, hotels, restaurants and real estate, which all orbit in
                the same universe will be more harmonic with their payment
                methods.
              </p>
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

export default ShortTerm;

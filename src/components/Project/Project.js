"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ProjectComp = () => {
  return (
    <div class="container mx-auto my-auto">
      <div class="lg:m-10">
        <div class="lg:p-5">
          <h1
            class=" lg:text-4xl text-2xl font-extrabold text-white text-center lg:my-0 my-5"
            data-aos="fade-up"
          >
            Our Projects
          </h1>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-5  ">
 
          <div
            class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
       
            <div class="">
              <a href="https://virtualtec.org/" target="_blank">
                <Image
                  class="rounded-t-lg"
                  src="/VirtualTech.png"
                  alt=""
                  width={500}
                  height={200}
                />
              </a>
            </div>
            <div>
              <div class="m-5">
                <a href="/https://virtualtec.org/" target="_blank" class="">
                <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white ">
                  Virtual Tech
                </h2>
                <p class=" text-base font-regular tracking-tight text-white ">
                  Revolutionizing fintech with cutting-edge technology and
                  transformative applications, powered by V Zone Solutions.
                </p></a>

                <div class=" mt-4">
                  <a
                    href="https://virtualtec.org/"
                    target="_blank"
                    class="text-white  border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                  >
                    Project Overview
                  </a>
                </div>
              </div>
            </div>
        
          </div>
   
          <div
            class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <div class="">
               <a
                    href="https://vrcscan.com/"
                    target="_blank"
                  >
              <Image
                class="rounded-t-lg"
                src="/VrcScan.png"
                alt=""
                width={500}
                height={200}
              />
              </a>
            </div>
            <div>
              <div class=" m-5">
              <a
                    href="https://vrcscan.com/"
                    target="_blank"
                  >
                <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white ">
                  Virtual Scan
                </h2>
                <p class=" text-base font-regular tracking-tight text-white  ">
                  Where cutting-edge technology defies norms, enabling enhanced
                  connectivity, interaction, and digital asset management.
                </p>
                </a>
                <div class="mt-4">
                  <a
                    href="https://vrcscan.com/"
                    target="_blank"
                    class="text-white  border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                  >
                    Project Overview
                  </a>
                </div>
              </div>
            </div>
          </div>
       
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
            <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualSwap.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Swap
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                Welcome to Virtual Swap, the revolutionary platform that brings
                decentralization, liquidity, and endless possibilities to the
                world of virtual trading and gaming.
              </p>
              </Link>
              <div class="flex">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white  border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualExchange.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-white  ">
                Virtual Exchange
              </h2>
              <p class="mb-5 mt-5 text-base font-regular tracking-tight text-white  ">
                Your centralized, secure, and user-friendly platform for trading
                a wide range of cryptocurrencies, including the native VRC Coin,
                on your digital financial journey.
              </p>
            </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="https://play.google.com/store/apps/developer?id=VZone+Solutions"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualGame.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="https://play.google.com/store/apps/developer?id=VZone+Solutions"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Gaming
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                Experience the future of gaming at Virtual Gaming: a Web3-based
                play-to-earn (P2E) game with endless levels and multiplayer
                functionality.
              </p>
              </Link>
              <div class="flex ">
                <a
                  href="https://play.google.com/store/apps/developer?id=VZone+Solutions"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700 "
                >
                  Project Overview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualBook.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Book
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The blockchain-powered social media platform for unprecedented
                digital connection, creation, and control in the new era of
                communication.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700 "
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualPad.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Pad
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The streamlined platform for IDOs, IEOs, and ITOs, offering
                security and interactivity for creators and investors alike.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualStore.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 MT-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Store
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The blockchain-powered e-commerce platform revolutionizing
                online shopping with enhanced security, transparency, and
                reliability.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualProperty.png"
              alt=""
              width={500}
              height={200}
            />
          </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 MT-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Property
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The groundbreaking blockchain-based platform reshaping real
                estate through seamless, peer-to-peer property transactions
                using cryptocurrency and NFTs.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700 "
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualTube.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Tube
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The decentralized blockchain platform revolutionizing video
                sharing, monetization, and cryptocurrency earnings for creators
                and viewers.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualCafe.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Cafe
              </h2>
              <p class="mb-5 mt-5 text-base font-regular tracking-tight text-white  ">
                The metaverse vibrant community hub, uniting virtual gatherings,
                gaming, movies, and engaging activities for memorable social
                interactions.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualSchool.png"
              alt=""
              width={500}
              height={200}
            />
          </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual School
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                Blending tradition and innovation with specialized courses in
                Islamic Studies, Blockchain Studies, and Crypto Studies for a
                future-focused education.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded  hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
          <Link href="/comingsoon"
                  target="_blank">
            <Image
              class="rounded-t-lg"
              src="/VirtualWallet.png"
              alt=""
              width={500}
              height={200}
            />
            </Link>
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                Virtual Wallet
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                Securely manage cryptocurrencies with unparalleled control and
                seamless transactions using cutting-edge blockchain technology.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700 "
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class=" max-w-sm bg-gradient-to-r from-indigo-500 to-pink-700 border border-violet-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div class="">
            <Image
              class="rounded-t-lg"
              src="/VirtualPay.png"
              alt=""
              width={500}
              height={200}
            />
          </div>
          <div>
            <div class=" m-5">
            <Link href="/comingsoon"
                  target="_blank">
              <h2 class="mb-5 mt-5 text-2xl font-bold tracking-tight text-white  ">
                V Pay
              </h2>
              <p class="mb-2 text-base font-regular tracking-tight text-white  ">
                The future of banking, empowering you to manage digital assets
                securely and conveniently with virtual cards, debit cards, and
                decentralized POS systems.
              </p>
              </Link>
              <div class="flex ">
                <Link
                  href="/comingsoon"
                  target="_blank"
                  class="text-white   border p-2 rounded hover:bg-gradient-to-r from-indigo-500 to-pink-700"
                >
                  Project Overview
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="flex w-full flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <Image
            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
        <div class="flex w-full flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <Image
            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
        <div class="flex w-full flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <Image
            class="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div> */}
        {/* <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Tech
          </h1>
          <p class="mb-4 text-base text-white">
            Revolutionizing fintech with cutting-edge technology and
            transformative applications, powered by V Zone Solutions.
          </p>
          <a
            href="https://virtualtec.org/"
            target="_blank"
            class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 "
          >
            Read More
          </a>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/virtualScan.png"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Scan
          </h1>
          <p class="mb-4 text-base text-white">
          Virtual Scan  Where cutting-edge technology defies norms, enabling enhanced
            connectivity, interaction, and digital asset management.
          </p>
          <a class="rounded-md font-bold border w-100 text-white border- p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </a>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/virtualswap-01.png"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Swap
          </h1>
          <p class="mb-4 text-base text-white">
            Welcome to Virtual Swap, the revolutionary platform that brings
            decentralization, liquidity, and endless possibilities to the world
            of virtual trading and gaming.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg border hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
          <Image
            class="rounded-t-lg"
            src="/virtualExhange.png"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Exchange
          </h1>
          <p class="mb-4 text-base text-white">
            Your centralized, secure, and user-friendly platform for trading a
            wide range of cryptocurrencies, including the native VRC Coin, on
            your digital financial journey.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Gaming
          </h1>
          <p class="mb-4 text-base text-white">
            Experience the future of gaming at Virtual Gaming: a Web3-based
            play-to-earn (P2E) game with endless levels and multiplayer
            functionality.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Book
          </h1>
          <p class="mb-4 text-base text-white">
            The blockchain-powered social media platform for unprecedented
            digital connection, creation, and control in the new era of
            communication.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Pad
          </h1>
          <p class="mb-4 text-base text-white">
            The streamlined platform for IDOs, IEOs, and ITOs, offering security
            and interactivity for creators and investors alike.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Store
          </h1>
          <p class="mb-4 text-base text-white">
            The blockchain-powered e-commerce platform revolutionizing online
            shopping with enhanced security, transparency, and reliability.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Property
          </h1>
          <p class="mb-4 text-base text-white">
            The groundbreaking blockchain-based platform reshaping real estate
            through seamless, peer-to-peer property transactions using
            cryptocurrency and NFTs.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Tube
          </h1>
          <p class="mb-4 text-base text-white">
            The decentralized blockchain platform revolutionizing video sharing,
            monetization, and cryptocurrency earnings for creators and viewers.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Café
          </h1>
          <p class="mb-4 text-base text-white">
            The metaverse's vibrant community hub, uniting virtual gatherings,
            gaming, movies, and engaging activities for memorable social
            interactions.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual School
          </h1>
          <p class="mb-4 text-base text-white">
            Blending tradition and innovation with specialized courses in
            Islamic Studies, Blockchain Studies, and Crypto Studies for a
            future-focused education.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">
            Virtual Wallet
          </h1>
          <p class="mb-4 text-base text-white">
            Securely manage cryptocurrencies with unparalleled control and
            seamless transactions using cutting-edge blockchain technology.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div>
        <div class="block rounded-lg  border  hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:text-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Image
            class="rounded-t-lg"
            src="/team-metan-1.jpg"
            alt=""
            width={1000}
            height={100}
          />
          <h1 className="my-5 text-white text-2xl font-semibold">V Pay</h1>
          <p class="mb-4 text-base text-white">
            The future of banking, empowering you to manage digital assets
            securely and conveniently with virtual cards, debit cards, and
            decentralized POS systems.
          </p>
          <button class="rounded-md font-bold border w-100 text-white border-white p-3 hover:bg-gradient-to-r from-indigo-500 to-pink-700 hover:border-0 ">
            Read More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectComp;

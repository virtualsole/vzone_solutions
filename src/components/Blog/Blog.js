"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

const BlogComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class="m-10">
        <div class="p-5">
          <h1
            class="text-center lg:text-4xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Blog
          </h1>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-4 my-10">
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 400, damping: 10 }}
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </motion.a>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          data-aos="zoom-in-up"
        >
          <a href="#">
            <Image
              class="p-8 rounded-t-lg"
              src="/medium.jpg"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-center dark:text-white text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;

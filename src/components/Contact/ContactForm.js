"use client"
import React from "react";

const ContactForm = () => {
  return (
    <div class="container mx-auto">
      <div class="grid gap-3 lg:grid-cols-3">
        <div class=" p-3">
          <input
            type="text"
            placeholder="Full Name"
            class="px-4 w-full py-2  h-16 border text-white bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div class=" p-3">
          <input
            type="text"
            placeholder="Email Address"
            class="px-4 w-full py-2 h-16 border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div class=" p-3">
          <input
            type="text"
            placeholder="Phone No"
            class="px-4 w-full py-2  h-16  border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
      </div>
      <div class="grid gap-1 lg:grid-cols-1 ">
        <div class=" p-3">
          <textarea
            type="text"
            placeholder="Your Message"
            class="px-4 w-full py-2 h-20  border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
      <div class="grid gap-1 lg:grid-cols-1 ">
        <div class=" p-3">
          <button class="w-full h-16 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
      <div class="grid gap-1 lg:grid-cols-1 my-10 ">
        <div class=" p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1777.868227541733!2d55.40268100000001!3d25.290593!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzI3LjYiTiA1NcKwMjQnMTAuOCJF!5e1!3m2!1sen!2sus!4v1688582188077!5m2!1sen!2sus"
            width="100%"
            height="400"
            title="Embedded Content"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

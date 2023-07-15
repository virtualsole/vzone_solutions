"use client";

import React from "react";
import Access from "../Home/Access";
import LearnMore from "../Home/LearnMore";
import { useEffect } from "react";
import AOS from "aos";

const FeaturesComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class="m-10">
        <div class="p-5">
          <h1 class="text-center lg:text-4xl font-extrabold text-white" data-aos="fade-up">
            Features
          </h1>
        </div>
      </div>
      <div>
        <Access />
      </div>
      <div>
        <LearnMore />
      </div>
    </div>
  );
};

export default FeaturesComp;

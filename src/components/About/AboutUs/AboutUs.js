"use client";

import LearnMore from "@/components/Home/LearnMore";
import Metaverse from "@/components/Home/Metaverse";
import MetaverseStats from "@/components/Home/MetaverseStats";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const AboutUsComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <>
      <div class="container mx-auto m-20">
        <div class="my-10">
          <h1
            class="text-center text-white lg:text-4xl font-extrabold"
            data-aos="fade-up"
          >
            About Us
          </h1>
        </div>
      </div>
      <Metaverse />
      <MetaverseStats />
      <LearnMore />
    </>
  );
};

export default AboutUsComp;

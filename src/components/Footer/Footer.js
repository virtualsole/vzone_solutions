"use client";

import React from "react";
import FooterIcon from "./FooterIcon";
import Image from "next/image";
import Link from "next/link";

const FooterComp = () => {
  return (
    <>
      <div class="container mx-auto">
        <div class="flex justify-center my-5">
          <Image
            src="/VzoneSolutionsLogo.gif"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div class="flex justify-center text-center">
          <div class="grid gap-1 lg:grid-cols-2 text-base	 text-white text-center">
            
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/termAndCondition">Terms and Conditions</Link>
          </div>
        </div>
      </div>
      <FooterIcon />
    </>
  );
};

export default FooterComp;

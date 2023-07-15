"use client";
import React from "react";
import Image from "next/image";

const ComingComp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <Image src="/ComingSoon.png" alt="" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default ComingComp;

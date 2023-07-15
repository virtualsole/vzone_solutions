"use client";

import Image from "next/image";
import Link from "next/link";
import HomeComp from "@/components/Home/Home";
import Metaverse from "@/components/Home/Metaverse";
import Access from "@/components/Home/Access";
import MetaverseStats from "@/components/Home/MetaverseStats";
import CheckOut from "@/components/Home/CheckOut";
import LearnMore from "@/components/Home/LearnMore";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import ShortTerm from "@/components/Home/ShortTerm";
import LongTerm from "@/components/Home/LongTerm";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <HomeComp />
      <Metaverse />
      <MetaverseStats />
      {/* <ShortTerm /> */}
      {/* <LongTerm /> */}
      {/* <Access /> */}
      <CheckOut />
      <LearnMore />
    </div>
  );
}

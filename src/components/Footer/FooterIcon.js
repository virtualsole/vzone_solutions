"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterIcon = () => {
  return (
    <>
      <div class="container mx-auto my-5">
        <div class="justify-center items-center	">
          <div class="flex justify-center  items-center	  lg:grid-cols-5 my-2">
            <div class="box-border  flex items-center justify-center h-10 w-10  ">
              <a href="https://twitter.com/VzoneSolutions" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white opacity-50 text-2xl hover:opacity-100"
                />
              </a>
            </div>
            <div class="box-border  flex items-center justify-center h-10 w-10">
              <a href="https://www.youtube.com/@VZoneSolutions" target="_blank">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white opacity-50 text-2xl hover:opacity-100"
                />
              </a>
            </div>
            <div class="box-border flex items-center justify-center h-10 w-10">
              <a
                href="https://www.linkedin.com/company/vzonesolution/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white opacity-50 text-2xl hover:opacity-100 "
                />
              </a>
            </div>
            <div class="box-border flex items-center justify-center  h-10 w-10">
              <a href="https://www.facebook.com/VZoneSolution/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white opacity-50 text-2xl hover:opacity-100"
                />
              </a>
            </div>
            <div class="box-border flex items-center justify-center h-10 w-10">
              <a
                href="https://www.instagram.com/vzonesloutions/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white opacity-50 text-2xl hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="text-center text-white my-2">
          © 2023 Vzone Solutions - All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default FooterIcon;

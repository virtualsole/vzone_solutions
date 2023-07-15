"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const TermsComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class=" bg-neutral-950 lg:m-10 m:5">
        <div class="lg:m-5 m-3">

       
        <div class="p-5">
          <h1
            class="text-center lg:text-4xl font-extrabold  text-white"
            data-aos="fade-up"
          >
            Terms and Conditions
          </h1>
        </div>
        <div class="my-10">
          <p
            className="text-base font-normal text-justify text-white  my-5"
            data-aos="fade-up"
          >
            Please read these Terms and Conditions carefully before using the
            Vzone Solutions decentralized platform. By accessing or using our
            Platform, you acknowledge and agree to these Terms. If you do not
            accept these terms, please do not use our services.
          </p>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Use of the Platform:
          </h3>
          <ul
            className="lg:text-md font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              You must be of legal age and legally competent to agree to these
              Terms.
            </li>
            <li>
              You agree to use the Platform only for lawful purposes and in
              compliance with all applicable laws and regulations.
            </li>
            <li>
              You are responsible for maintaining the security and
              confidentiality of your account and cryptographic keys.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Intellectual property:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              All intellectual property rights including but not limited to
              trademarks, logos and content belong to Vzone Solutions or its
              licensors.
            </li>
            <li>
              You may not use, reproduce, modify or distribute any Intellectual
              Property without the prior written consent of Vzone Solutions.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Decentralized character:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              Vzone Solutions works as a decentralized platform and uses
              blockchain technology and distributed storage systems.
            </li>
            <li>
              We have no control over the blockchain or decentralized storage
              and therefore cannot be held responsible for any loss, damage or
              inaccuracy of data.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="text-base font-extrabold text-white"
            data-aos="fade-up"
          >
            Third-Party Services and Content:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              Our platform may integrate with third party services or display
              content provided by third parties.
            </li>
            <li>
              We are not responsible for the availability, accuracy or quality
              of any Third party content or services and your interaction with
              them is at your own risk.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Limitation of Liability:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              Vzone Solutions and its affiliates shall not be liable for any
              direct, indirect, incidental, consequential or punitive damages
              arising out of or related to the use of our platform.
            </li>
            <li>
              We do not guarantee the accuracy, reliability or completeness of
              the information or content provided on our platform.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Confidentiality:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              Your privacy is important to us. Please read our Privacy Policy to
              understand how we collect, use, store and disclose your personal
              information on our decentralized platform.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Changes and Cancellation:
          </h3>
          <ul
            className=" text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              We reserve the right to change, suspend or terminate the Platform
              or any part of it at any time without prior notice.
            </li>
            <li>
              We may also update these Terms from time to time. Your continued
              use of the Platform after any changes constitute your acceptance
              of the updated Terms.
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3
            className="lg:text-1xl font-extrabold text-white"
            data-aos="fade-up"
          >
            Applicable law and jurisdiction:
          </h3>
          <ul
            className="text-base font-normal text-justify my-5 text-white list-disc	 
            list-inside"
            data-aos="fade-up"
          >
            <li>
              These Terms shall be governed by and construed in accordance with
              the laws of jurisdiction.
            </li>
            <li>
              Disputes arising out of or in connection with these Terms shall be
              subject to the exclusive jurisdiction of the courts
              of jurisdiction.
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TermsComp;

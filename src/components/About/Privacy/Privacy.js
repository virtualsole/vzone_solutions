"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const PrivacyComp = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after component load to detect new elements
  }, []);
  return (
    <div class="container mx-auto">
      <div class=" bg-neutral-950 rounded">
        <div className="m-10">
          <div class="p-5">
            <h1
              class="text-center lg:text-4xl font-extrabold text-white"
              data-aos="fade-up"
            >
              Privacy Policy
            </h1>
          </div>
          <div class="my-10 ">
            <p
              className="text-base font-normal text-justify  text-white my-5"
              data-aos="fade-up"
            >
              At Vzone Solutions, we are committed to protecting your privacy
              and maintaining the security of your personal information. As a
              decentralized platform, we prioritize your control and ownership
              over your data. This Privacy Policy outlines how we handle your
              data within our decentralized ecosystem. By using our platform,
              you acknowledge and agree to the practices described in this
              policy.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify my-5 text-white"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Data Ownership and Control:
              </span>
              As a decentralized platform, you retain ownership and control over
              your personal information. We do not store or have access to your
              data without your explicit consent. Your data is stored securely
              on the blockchain or distributed storage systems, and you have the
              ability to manage and control access to your data using
              cryptographic keys.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal  text-justify my-5 text-white"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Information Collection:
              </span>
              When you interact with our platform, certain data may be collected
              and stored on the blockchain or decentralized storage systems.
              This may include transactional data, public keys, and other
              information necessary for the functioning of the platform.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify text-white  my-5"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Data Usage:
              </span>
              &nbsp; We use the information collected solely for the purpose of
              providing our decentralized services and improving the
              platform&apos;s functionality. Your data may be used to facilitate
              transactions, enable interactions with other users, and ensure the
              proper functioning and security of the platform. We do not sell or
              share your personal information with third parties without your
              explicit consent.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify text-white  my-5"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Security:
              </span>
              &nbsp; We employ robust security measures to protect your data
              within our decentralized platform. However, please note that as a
              decentralized system, the security of the blockchain and
              distributed storage systems relies on the underlying technology
              and your safeguarding of cryptographic keys. It is your
              responsibility to ensure the security of your keys to prevent
              unauthorized access to your data.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify text-white  my-5"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Transparency and Immutability:
              </span>
              &nbsp; As a decentralized platform, information stored on the
              blockchain is transparent and immutable. Once information is
              recorded at the blockchain, it can not be altered or deleted. It
              is important to consider this aspect when interacting with the
              platform and exercise caution when sharing sensitive or
              confidential information.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify text-white  my-5"
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Third-Party Applications and Services:
              </span>
              &nbsp; Our decentralized platform may integrate with third-party
              applications or services. Please note that this Privacy Policy
              applies solely to our platform, and we are not responsible for the
              privacy practices or policies of any third-party applications or
              services. We encourage you to review the privacy policies of these
              third parties before engaging with them.
            </p>
          </div>
          <div class="my-5">
            <p
              className="text-base font-normal text-justify text-white "
              data-aos="fade-up"
            >
              <span className="lg:text-1xl font-extrabold text-white">
                Changes to the Privacy Policy:
              </span>
              &nbsp; We may update this Privacy Policy from time to time to
              reflect changes in our decentralized platform or legal
              requirements. We will notify you of any significant changes and
              seek your consent if required by applicable laws. We encourage you
              to review this policy periodically to stay informed about how your
              data is handled.We may update this Privacy Policy from time to
              time to reflect changes in our decentralized platform or legal
              requirements. We will notify you of any significant changes and
              seek your consent if required by applicable laws. We encourage you
              to review this policy periodically to stay informed about how your
              data is handled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyComp;

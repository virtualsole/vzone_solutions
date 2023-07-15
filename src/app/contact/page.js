import ContactComp from "@/components/Contact/Contact";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";
import { Suspense } from "react";

const Contact = () => {
  return (
    <>
      <ContactComp />
      <ContactForm />
    </>
  );
};

export default Contact;

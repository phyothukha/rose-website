import Image from "next/image";
import React from "react";
import blacpink from "@/assets/blackpink-page/blackpink-group.jpg";
import SectionCta from "@/components/SectionCta";
import RevealOnScroll from "@/components/RevealOnScroll";

const BlackpinkSection = () => {
  return (
    <section className=" container max-w-6xl mx-auto px-10 md:px-3 ">
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">BLACK PINK</h1>
        <SectionCta href="/blackpink" label="Check More" className="flex" />
      </div>

      <RevealOnScroll className="max-w-4xl bg-red-400 h-[600px] mx-auto">
        <Image
          src={blacpink}
          alt=""
          height={700}
          className="  object-fill w-full h-full  mx-auto my-auto  "
        />
      </RevealOnScroll>
    </section>
  );
};

export default BlackpinkSection;

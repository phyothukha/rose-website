import Image from "next/image";
import Link from "next/link";
import React from "react";
import blacpink from "@/assets/blackpink-page/0eb84ab6-37c5-44bb-98e1-3a6ed02527ea.jpg";

const BlackpinkSection = () => {
  return (
    <section className=" container max-w-7xl mx-auto ">
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">BLACK PINK</h1>
        <Link
          href="/blackpink"
          className=" flex items-center text-[18px] font-twentienty "
        >
          Check More
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 5.75H12.75M12.75 5.75V13.25M12.75 5.75L5.25 13.25"
              stroke="#141414"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className=" max-w-5xl  mx-auto ">
        <Image
          src={blacpink}
          alt=""
          height={500}
          className=" w-full h-full  object-cover"
        />
      </div>
    </section>
  );
};

export default BlackpinkSection;

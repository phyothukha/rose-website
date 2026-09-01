import Image, { StaticImageData } from "next/image";
import React from "react";

import groupPhoto from "@/assets/blackpink-page/blackpink-group.jpg";
import jisoo from "@/assets/blackpink-page/jisoo.jpg";
import jennie from "@/assets/blackpink-page/jennie.jpg";
import rose from "@/assets/blackpink-page/rose (2).jpg";
import lisa from "@/assets/blackpink-page/lisa.jpg";

const members: { name: string; birthday: string; photo: StaticImageData }[] = [
  { name: "JISOO", birthday: "95.01.03", photo: jisoo },
  { name: "JENNIE", birthday: "96.01.16", photo: jennie },
  { name: "ROSÉ", birthday: "97.02.11", photo: rose },
  { name: "LISA", birthday: "97.03.27", photo: lisa },
];

const BlackpinkDetailSection = () => {
  return (
    <div className="mt-20 bg-white text-[#141414]">
      <div className="w-full pt-9 pb-6 flex justify-center">
        <h1 className="font-orpheus font-bold text-[36px]">BLACK PINK</h1>
      </div>

      <div className="relative w-full h-[380px] md:h-[550px] lg:h-[733px]">
        <Image
          src={groupPhoto}
          alt="BLACKPINK"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <section className="container mx-auto max-w-6xl px-10 md:px-3 py-16">
        <h2 className="font-orpheus font-bold text-[28px] text-center mb-10">
          MEMBERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {members.map(({ name, birthday, photo }) => (
            <div key={name} className="text-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-orpheus font-bold text-[20px] mt-4">
                {name}
              </h3>
              <p className="text-[14px] text-black/60">{birthday}</p>
            </div>
          ))}
        </div>

        <h2 className="font-orpheus font-bold text-[28px] mb-4">Background</h2>
        <div className="space-y-4 leading-relaxed mb-20">
          <p>
            Rosé joined YG Entertainment in 2012 after a successful audition and
            trained for four years before debuting with BLACKPINK in 2016. Known
            for her distinctive vocal tone and emotional delivery, Rosé has
            contributed to the group&apos;s worldwide success with hit songs
            like &quot;Ddu-Du Ddu-Du,&quot; &quot;Kill This Love,&quot; and
            &quot;Pink Venom.&quot;
          </p>
          <p>
            In addition to her work with BLACKPINK, Rosé made her solo debut in
            2021 with the single album &quot;R,&quot; featuring the hit tracks
            &quot;On The Ground&quot; and &quot;Gone,&quot; which showcased her
            personal artistry and lyrical depth.
          </p>
          <p>
            She is also recognized for her fashion influence, being a global
            ambassador for luxury brands like Yves Saint Laurent and Tiffany
            &amp; Co.
          </p>
        </div>

        <h2 className="font-orpheus font-bold text-[28px] mb-4">
          Achievement &amp; Reward
        </h2>

        <h3 className="font-semibold text-[20px] mb-2">
          Group Achievements (BLACKPINK):
        </h3>
        <div className="space-y-4 leading-relaxed mb-10">
          <div>
            <p className="font-semibold">1. Guinness World Records</p>
            <p>
              Most-viewed YouTube video in 24 hours for a music video by a K-pop
              group (&quot;How You Like That&quot;).
            </p>
            <p>
              First K-pop group to reach 2 billion views on YouTube with
              &quot;Ddu-Du Ddu-Du.&quot;
            </p>
          </div>
          <div>
            <p className="font-semibold">2. Awards With BLACKPINK</p>
            <p>
              <span className="font-semibold">MTV Video Music Awards:</span>{" "}
              Best Metaverse Performance (2022), Song of the Summer for
              &quot;How You Like That&quot; (2020).
            </p>
            <p>
              <span className="font-semibold">Teen Choice Awards:</span> Choice
              Song: Group for &quot;Ddu-Du Ddu-Du&quot; (2019).
            </p>
            <p>
              <span className="font-semibold">Golden Disc Awards:</span> Digital
              Bonsang for multiple tracks.
            </p>
            <p>
              <span className="font-semibold">
                Mnet Asian Music Awards (MAMA):
              </span>{" "}
              Worldwide Fans&apos; Choice.
            </p>
            <p>
              <span className="font-semibold">Billboard Chart Success:</span>{" "}
              BLACKPINK&apos;s albums have topped the Billboard 200 and global
              streaming charts.
            </p>
          </div>
          <div>
            <p className="font-semibold">3. Cultural Influence</p>
            <p>
              BLACKPINK is recognized as a global ambassador for K-pop and has
              been featured in prominent global events, such as Coachella and
              award shows like the VMAs and Brit Awards.
            </p>
          </div>
        </div>

        <h3 className="font-semibold text-[20px] mb-2">
          Solo Achievements (Rosé):
        </h3>
        <div className="space-y-4 leading-relaxed">
          <div>
            <p className="font-semibold">1. Solo Debut Success</p>
            <p>
              Her debut solo single album, &quot;R,&quot; set records for the
              highest first-week sales by a Korean female soloist (over 448,000
              copies).
            </p>
            <p>
              The lead single, &quot;On The Ground,&quot; debuted at #1 on the
              Billboard Global 200 and Global Excl. U.S. charts.
            </p>
            <p>
              &quot;On The Ground&quot; also became the first song by a Korean
              solo artist to top the Global Billboard chart.
            </p>
          </div>
          <div>
            <p className="font-semibold">2. Awards For Solo Work</p>
            <p>
              Mnet Asian Music Awards (MAMA): Best Female Artist nomination for
              her solo debut.
            </p>
            <p>Bravo Otto Awards (Germany): Best Solo Artist nomination.</p>
          </div>
          <div>
            <p className="font-semibold">3. Guinness World Records</p>
            <p>
              First artist to reach No. 1 on the Billboard Global 200 as both a
              soloist and as a group member.
            </p>
          </div>
          <div>
            <p className="font-semibold">4. Fashion Influence</p>
            <p>
              Named a global ambassador for Saint Laurent (Yves Saint Laurent)
              and Tiffany &amp; Co., Rosé has appeared on numerous prestigious
              fashion magazine covers, including Vogue, Elle, and Harper&apos;s
              Bazaar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackpinkDetailSection;

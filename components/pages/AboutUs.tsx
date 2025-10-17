"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AboutUs() {
  const container = useRef(null);
  const [masterTl, setMasterTl] = useState<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      setMasterTl(master);
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full h-screen relative overflow-hidden">
      {masterTl && (
        <>
          <BackImage masterTl={masterTl} />
          <AboutUsText masterTl={masterTl} />
        </>
      )}
    </div>
  );
}

const BackImage = ({ masterTl }: { masterTl: gsap.core.Timeline }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(container.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      masterTl.add(tl, 0); // add at the start
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full h-full">
      <Image
        className="h-full object-cover object-[20%] md:object-[25%_25%] lg:h-auto"
        src={"/nick-karvounis.png"}
        alt="background image"
        width={1920}
        height={1080}
      />
    </div>
  );
};

const AboutUsText = ({ masterTl }: { masterTl: gsap.core.Timeline }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const splitText = SplitText.create(".text-box", {
        type: "words",
        autoSplit: true,
        mask: "words",
      });

      const tl = gsap.timeline();
      tl.from(container.current, {
        xPercent: -100,
        ease: "expo.inOut",
        duration: 0.9,
      });
      tl.from(splitText.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
      });

      masterTl.add(tl, ">"); // add after BackImage finishes
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="side-box absolute left-0 top-10 bg-secondery bg-[url(/noise.svg)] w-[90%] lg:w-[70%] max-h-[50%]"
    >
      <div className="w-full relative">
        <p className="text-box text-5xl md:text-7xl text-white p-4">
          We Made Your Best Day Of Your Life Perfect
        </p>
      </div>
    </div>
  );
};

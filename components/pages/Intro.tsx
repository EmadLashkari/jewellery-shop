"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

export default function Intro() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Blurs />
      <ScrollDown />
      <Texts />
      <Images />
    </div>
  );
}

const Texts = () => {
  const container = useRef(null);
  const text = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create(text.current, {
        type: "words",
        autoSplit: true,
        mask: "words",
      });
      const tl = gsap.timeline();
      tl.from(split.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
        duration: 0.6,
        delay: 1,
      });
    },
    {
      scope: container,
    }
  );
  return (
    <section className="text-cyan-50 font-italianno text-8xl md:text-[10rem] lg:text-[12rem] flex flex-col gap-5 absolute top-1/2 right-1/2 -translate-y-[50%] translate-x-[20%] lg:-translate-y-[50%] lg:-translate-x-[20%] z-50">
      <p className="flex flex-col" ref={text}>
        <span className="pl-10">Every</span>
        <span className="pl-20">Queen</span>
        <span className="pl-5">Desier</span>
      </p>
    </section>
  );
};

const Images = () => {
  const container = useRef(null);
  const rightImage = useRef(null);
  const leftImage = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(rightImage.current, {
        opacity: 0,
        xPercent: 20,
        delay: 0.5,
        duration: 0.6,
      });
      tl.from(leftImage.current, {
        opacity: 0,
        xPercent: -20,
        duration: 0.6,
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="absolute top-1/2 -translate-y-[20%] right-1/2 translate-x-[40%] md:translate-x-[50%] md:-translate-y-[30%] lg:translate-x-[50%]"
    >
      <Image
        ref={leftImage}
        className="z-40"
        width={500}
        height={800}
        alt="andres-vera"
        src={"/andres-vera.png"}
      />
      <Image
        ref={rightImage}
        className="z-40 absolute -right-30 -top-40 md:-right-60 md:-top-60 lg:-right-80 "
        width={500}
        height={800}
        alt="andres-vera"
        src={"/kateryna-hliznitsova.png"}
      />
    </div>
  );
};

const Blurs = () => {
  return (
    <div className="relative w-full h-full z-0">
      <Image
        className="absolute top-0 -left-32 md:top-0 md:left-0 z-0"
        width={500}
        height={500}
        alt="Blur Left"
        src={"/BlurLeft.png"}
      />
      <Image
        className="absolute bottom-0 -right-32 md:bottom-0 md:right-0 z-0"
        width={500}
        height={500}
        alt="Blur Right"
        src={"/BlurRight.png"}
      />
    </div>
  );
};

const ScrollDown = () => {
  return (
    <div className="absolute bottom-10 right-5 flex flex-col gap-10 md:gap-14 justify-between items-center">
      <h3 className="rotate-90 text-white text-[20px] md:text-[32px] font-cormorantUnicase ">
        SCROLL
      </h3>
      <Image
        className=""
        src={"/Arrow.svg"}
        width={10}
        height={20}
        alt="arrow"
      />
    </div>
  );
};

"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const scroller = scrollerRef.current;
      if (!container || !scroller) return;

      const totalScroll = scroller.scrollWidth - window.innerWidth;
      if (totalScroll <= 0) return;

      // horizontal tween
      const horizontalTween = gsap.to(scroller, {
        x: -totalScroll,
        ease: "none",
      });

      // pin + scroll
      ScrollTrigger.create({
        animation: horizontalTween,
        trigger: container,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true, // debug
      });

      // ⭐ animate each item when near center
      const items = gsap.utils.toArray<HTMLElement>(".product-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 0.8, opacity: 0.4 },
          {
            scale: 1.1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalTween, // tie to horizontal
              start: "center center",
              end: "center center",
              scrub: 2,
              snap: 1 / (items.length - 1),
            },
          }
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
    >
      <div
        ref={scrollerRef}
        className="flex items-center gap-20 h-full px-[50vw]"
      >
        {productMap.map((val) => (
          <div
            key={val.title}
            className="product-item flex flex-col items-center justify-center min-w-[260px] md:min-w-[420px]"
            style={{ transformOrigin: "50% 50%" }}
          >
            <h2 className="text-white mb-3 md:text-2xl lg:text-4xl text-center">
              {val.title}
            </h2>
            <div className="w-52 h-52 md:w-80 md:h-80 lg:w-[25rem] lg:h-[25rem] relative">
              <Image
                src={val.src}
                alt={val.title}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const productMap: { title: string; src: string }[] = [
  { title: "SHINE RING", src: "/sabrianna.png" },
  { title: "NECKBAND", src: "/sabrianna-neckband.png" },
  { title: "LUXURY", src: "/luxurious-golden-ring.png" },
  { title: "CROWN", src: "/queen-crown.png" },
  { title: "WEDDING RING", src: "/saronita-ring.png" },
];

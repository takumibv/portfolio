import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type ParallaxProps = {
  speed?: number;
  isTop?: boolean;
  isBottom?: boolean;
};

const useParallax = (option?: ParallaxProps) => {
  const { speed = 1, isTop = false, isBottom = false } = option || {};
  const ref = useRef(null);

  useEffect(() => {
    const animation = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: isTop ? "top top" : "top bottom",
        end: isBottom ? "top top" : "bottom top",
        scrub: true,
        // markers: true,
      },
    });
    animation.to(ref.current, { y: (innerHeight / 4) * speed });

    return () => {
      animation.kill();
      animation.scrollTrigger?.kill();
    };
  }, []);

  return { ref };
};

export default useParallax;

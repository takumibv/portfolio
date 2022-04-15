import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type ParallaxProps = {
  speed?: number;
  isTop?: boolean;
  isBottom?: boolean;
};

// background-image のパララックスを使用する
const useParallax = (option?: ParallaxProps) => {
  const { speed = 1, isTop = false, isBottom = false } = option || {};
  const [windowHeight, setWindowHeight] = useState(0);
  const ref = useRef(null);

  const onResize = useCallback(function (this: Window, e: UIEvent) {
    setWindowHeight((e.target as Window).innerHeight ?? 0);
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const y = Math.floor(windowHeight / 2) ?? 0;
    const animation = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: isTop ? "top top" : "top bottom",
        end: isBottom ? "top top" : "bottom top",
        scrub: true,
        markers: true,
      },
    });
    animation.fromTo(
      ref.current,
      {
        backgroundPosition: `50% ${isTop ? 0 : -y * speed}px`,
      },
      {
        backgroundPosition: `50% ${isBottom ? 0 : y * speed}px`,
      }
    );

    return () => {
      animation.kill();
      animation.scrollTrigger?.kill();
    };
  }, [windowHeight, isTop, isBottom, speed]);

  return { ref };
};

export default useParallax;

import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

type ParallaxProps = {
  speed?: number;
  isTop?: boolean;
  isBottom?: boolean;
};

const useScrollAnimation = (option?: ParallaxProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      if (!ref.current?.href) return;

      const { href } = ref.current;

      let target = href;

      if (href.match(/^https?:\/\//g)) {
        const { pathname, hash } = new URL(href);
        target = hash;
        pathname !== router.pathname && router.replace(href);
      }

      const q = gsap.utils.selector(document);

      if (!q(target).length) return router.replace(href);

      gsap
        .to(window, {
          scrollTo: target,
          duration: 0.5,
          ease: "power4.out",
        })
        .eventCallback("onComplete", () => {
          router.replace(href);
        });
    },
    [router]
  );

  const props = { ref, onClick };

  return { props };
};

export default useScrollAnimation;

import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

const useScrollAnimation = () => {
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

        // 違う画面であれば遷移する
        pathname !== `${router.basePath}${router.pathname}` && router.push(href);
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

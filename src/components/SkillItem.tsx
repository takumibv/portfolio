import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import classNames from "classnames";

const SkillItem: React.FC<{
  src: string;
  skillScore: number;
  isOrange?: boolean;
  triggerRef: React.RefObject<HTMLElement>;
}> = ({ src, skillScore, isOrange, triggerRef }) => {
  const indicatorRef = useRef(null);
  const circleIndicatorRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // グラフのアニメーション
    const graphAnimation = gsap.to(indicatorRef.current, {
      scaleY: 1,
      delay: gsap.utils.random(0, 0.3),
      scrollTrigger: {
        // markers: true, // マーカーを表示するか（開発用）
        trigger: triggerRef.current, // この要素と交差するとイベントが発火
        start: "top 75%", // ウィンドウのどの位置を発火の基準点にするか
        toggleActions: "restart none none reverse", // スクロールイベントで発火するアニメーションの種
      },
    });
    return () => {
      graphAnimation.kill();
      graphAnimation.scrollTrigger?.kill();
    };
  }, [triggerRef]);

  useEffect(() => {
    const pathLength = circleIndicatorRef.current?.getTotalLength() ?? 0;
    const circleGraphAnimation = gsap.to(circleIndicatorRef.current, {
      delay: gsap.utils.random(0, 0.5),
      strokeDashoffset: pathLength * (1 - skillScore / 100),
      ease: "easeInOut",
      scrollTrigger: {
        // markers: true, // マーカーを表示するか（開発用）
        trigger: triggerRef.current, // この要素と交差するとイベントが発火
        start: "top 75%", // ウィンドウのどの位置を発火の基準点にするか
        toggleActions: "restart none none reverse", // スクロールイベントで発火するアニメーションの種
      },
    });

    return () => {
      circleGraphAnimation.kill();
      circleGraphAnimation.scrollTrigger?.kill();
    };
  }, [triggerRef]);

  return (
    <div className={classNames("skill-item", isOrange && "skill-item--orange")}>
      <div className="skill-item__graph">
        <div
          ref={indicatorRef}
          className="skill-item__graph-indicator"
          style={{ height: `${skillScore}%` }}
        ></div>
      </div>
      <div className="skill-item__icon">
        <Image src={src} alt="" layout="raw" width="70" height="70" />
        <svg
          viewBox="-4 -4 136 136"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          className="skill-item__circle-indicator"
        >
          <path
            ref={circleIndicatorRef}
            d="M64 1 A63 63 0 1 1 64 127 A63 63 0 1 1 64 1"
            stroke={isOrange ? "var(--color-secondary-weak)" : "var(--color-primary)"}
            strokeWidth="8"
            strokeDasharray="396"
            strokeDashoffset="396"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default SkillItem;

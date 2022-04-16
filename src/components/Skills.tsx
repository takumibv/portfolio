import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SkillItem from "./SkillItem";
import { url } from "../utils/config";

const Skills: React.FC = () => {
  const skillItems = [
    { skillScore: 90, src: "/images/skill-react.png", isOrange: false },
    { skillScore: 75, src: "/images/skill-vue.png", isOrange: false },
    { skillScore: 75, src: "/images/skill-js.png", isOrange: false },
    { skillScore: 75, src: "/images/skill-html.png", isOrange: false },
    { skillScore: 90, src: "/images/skill-css.png", isOrange: false },
    { skillScore: 60, src: "/images/skill-java.png", isOrange: false },
    { skillScore: 50, src: "/images/skill-php.png", isOrange: false },
    { skillScore: 50, src: "/images/skill-ps.png", isOrange: true },
    { skillScore: 75, src: "/images/skill-ai.png", isOrange: true },
  ];
  const skillRef = useRef(null);
  const q = gsap.utils.selector(skillRef);

  useEffect(() => {
    // グラフのアニメーション
    const graphAnimation = gsap.to(q(".js-graph-indicator"), {
      scaleY: 1,
      stagger: {
        from: "random", //ランダムに
        amount: 0.3, // 0.3秒おきに
      },
      scrollTrigger: {
        // markers: true, // マーカーを表示するか（開発用）
        trigger: skillRef.current, // この要素と交差するとイベントが発火
        start: "top 75%", // ウィンドウのどの位置を発火の基準点にするか
        toggleActions: "restart none none reverse", // スクロールイベントで発火するアニメーションの種
      },
    });

    return () => {
      graphAnimation.kill();
      graphAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="skills" ref={skillRef}>
      {skillItems.map(({ skillScore, src, isOrange }) => (
        <SkillItem
          key={src}
          src={src}
          skillScore={skillScore}
          isOrange={isOrange}
          triggerRef={skillRef}
        />
      ))}
    </div>
  );
};

export default Skills;

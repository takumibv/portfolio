import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Skills: React.FC = () => {
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
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "80%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-react.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "75%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-vue.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "78%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-js.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "75%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-html.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "85%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-css.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "65%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-java.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "50%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-php.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item skill-item--orange">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "45%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-ps.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
      <div className="skill-item skill-item--orange">
        <div className="skill-item__graph">
          <div
            className="skill-item__graph-indicator js-graph-indicator"
            style={{ height: "70%" }}
          ></div>
        </div>
        <div className="skill-item__icon">
          <Image src="/images/skill-ai.png" alt="" layout="raw" width="70" height="70" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useCallback, useEffect, useRef, useState } from "react";
import SnsLinks from "./SnsLinks";
import { gsap } from "gsap";
import { url } from "../utils/config";

// アイコン角丸のアニメーション
// iconのborder-radius群
const radiusArray = [
  // "85%",
  // "80% 50% 50% 67%",
  // "50% 45% 67% 55%",
  // "50% 67% 33% 67%",
  // "67% 55% 58% 42%",
  // "80% 50% 50% 50%",
  // "80% 50% 80% 50%",
  // "80% 90% 80% 50%",
  // "67% 90% 43% 50%",
  // "90% 55% 50% 60%",
  "90% 80%",
  "60% 30%",
  "30% 60%",
  "40% 50% 50% 50%",
  "50% 40% 50% 50%",
  "50% 50% 40% 50%",
  "50% 50% 50% 40%",
  "80% 50% 50% 50%",
  "50% 80% 50% 50%",
  "50% 50% 80% 50%",
  "50% 50% 50% 80%",
  "30% 75%",
  "30% 85%",
  "75% 50%",
  "50% 75%",
  "85% 30%",
];

const Profile: React.FC<{ showContact?: boolean }> = ({ showContact }) => {
  const [clickCount, setClickCount] = useState(0);
  const iconRef = useRef<HTMLDivElement>(null);

  // アイコン角丸のアニメーション
  const [iconAnimation, setIconAnimation] = useState<gsap.core.Tween>();
  // ホバー時アニメーション
  const [hoverAnimation, setHoverAnimation] = useState<gsap.core.Tween>();
  // クリック時アニメーション
  const [clickAnimation, setClickAnimation] = useState<gsap.core.Tween>();
  // 落ちるアニメーション
  const [fallAnimation, setFallAnimation] = useState<gsap.core.Timeline>();
  // 落ちるアニメーション中かどうか
  const [isFallAnimationRunning, setIsFallAnimationRunning] = useState(false);

  const createBorderRadius = useCallback(() => {
    const randomIndex = () => {
      return Math.floor(Math.random() * radiusArray.length);
    };
    const newindex = randomIndex();
    return radiusArray[newindex];
  }, []);

  // setAnimation
  useEffect(() => {
    setIconAnimation(
      gsap.to(iconRef.current, {
        repeat: -1,
        duration: 1.5,
        repeatRefresh: true,
        yoyo: true,
        ease: "back.inOut(4)",
        borderRadius: createBorderRadius,
      })
    );

    setHoverAnimation(
      gsap.to(iconRef.current, {
        duration: 0.3,
        scale: 1.1,
        paused: true,
      })
    );

    setClickAnimation(
      gsap.to(iconRef.current, {
        duration: 0.6,
        ease: "power4.out",
        rotate: "360deg",
        paused: true,
      })
    );

    setFallAnimation(
      gsap
        .timeline({
          paused: true,
        })
        .to(iconRef.current, {
          duration: 2,
          ease: "back.out(2)",
          rotate: "1440deg",
        })
        .to(
          iconRef.current,
          {
            duration: 1.5,
            y: "150vh",
            ease: "sine.in",
          },
          "-=1.5"
        )
        .set(
          iconRef.current,
          {
            scale: 0,
            y: 0,
          },
          "+=0.5"
        )
        .to(iconRef.current, {
          duration: 1,
          scale: 1,
          ease: "back.out(2)",
        })
    );
  }, []);

  useEffect(() => {
    return () => {
      iconAnimation?.kill();
    };
  }, [iconAnimation]);

  useEffect(() => {
    const mouseEnter = () => !isFallAnimationRunning && hoverAnimation?.play();
    const mouseLeave = () => hoverAnimation?.reverse();

    iconRef.current?.addEventListener("mouseenter", mouseEnter);
    iconRef.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      iconRef.current?.removeEventListener("mouseenter", mouseEnter);
      iconRef.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, [hoverAnimation, isFallAnimationRunning]);

  const onClick = useCallback(() => {
    if (isFallAnimationRunning) return;

    if (clickCount < 4) {
      clickAnimation?.restart();
      setClickCount(clickCount + 1);
    } else {
      setIsFallAnimationRunning(true);
      clickAnimation?.pause();
      fallAnimation?.restart();
      fallAnimation?.eventCallback("onComplete", () => {
        setIsFallAnimationRunning(false);
        setClickCount(0);
      });
    }
  }, [isFallAnimationRunning, clickCount, clickAnimation, fallAnimation]);

  useEffect(() => {
    iconRef.current?.addEventListener("click", onClick);

    return () => {
      iconRef.current?.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return (
    <div className="profile">
      <div className="profile__icon js-icon-animation" ref={iconRef}>
        <img src={url("/images/profile.JPG")} alt="" />
      </div>
      <p className="profile__name">Takumibv</p>
      <SnsLinks showContact={showContact} />
    </div>
  );
};

export default Profile;

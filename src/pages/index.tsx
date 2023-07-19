import React, { ReactElement, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import SnsLinks from "../components/SnsLinks";
import { NextPageWithLayout } from "./_app";
import Skills from "../components/Skills";
import useParallax from "../hooks/useParallax";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Career from "../components/Career";
import { gsap } from "gsap";
import { url } from "../utils/config";
import Hero from "../components/Hero";

const Home: NextPageWithLayout = (props) => {
  const { props: scrollProps } = useScrollAnimation();
  const mainRef = useRef(null);

  const popupArray = [
    {
      message: <>Webのフロントエンド開発やChromeの拡張機能の開発がメインでした！</>,
    },
    {
      message: (
        <>
          強みはReactとCSS。
          <br />
          Adobeのデザインツールも使用経験あり。デザインは勉強中。
        </>
      ),
    },
    {
      message: (
        <>
          フロントエンドエンジニア×デザイナー
          <br />
          としての人材を目指しています！
        </>
      ),
    },
  ];

  const sectionRefs = useRef(popupArray.map(() => React.createRef<HTMLDivElement>()));
  const popupRefs = useRef(popupArray.map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    const animations = popupArray.map((_, i) => {
      const target = popupRefs.current[i].current;
      const trigger = sectionRefs.current[i].current;

      return gsap.fromTo(
        target,
        {
          display: "none",
          y: 50,
          opacity: 0,
        },
        {
          display: "block",
          y: 0,
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger, // この要素と交差するとイベントが発火
            start: "top 50%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 50%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "restart reverse restart reverse", // スクロールイベントで発火するアニメーションの種
          },
        }
      );
    });

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <div ref={mainRef}>
      {/* Hero */}
      <Hero />

      {/* About */}
      <main id="about" className="l-main">
        <a className="l-main__scroll-down" href="#about" {...scrollProps}>
          <img src={url("/images/scroll.svg")} alt="" width={46} height={60} />
        </a>
        <section className="section">
          <div className="container container--sm mx-auto">
            <Profile />
            <p className="profile__text text">
              東京在住のフロントエンドエンジニア。UIデザイン修行中。
              コードを書くのが大好き、どのように設計し実装するかを考えることが楽しいタイプです。
              <br />
              東京工業大学院を卒業。
              <br />
              授業でJavaやC言語を学びプログラミングに興味を持ち、独学でJavaScrptやUIデザインの勉強を始めました。主にWebエンジニアとして、インターン・バイトでプログラミングスキルを身につけました。
              <br />
              研究室では「眼球運動を用いた使い心地の定量評価」というテーマで研究を行いました。
              <br />
              <Link href="/contact">
                <a>お問い合わせはこちら</a>
              </Link>
              からお願いします。
            </p>
          </div>
        </section>
        <section className="section break">
          <div className="break__bg"></div>
          <h3 className="sub-headline break__text">
            『一つのことを、一生やり続けられると確信する日がくる』
          </h3>
        </section>
        <div className="container mx-auto">
          <div className="l-top">
            <div className="l-top__left">
              <div className="l-top__left-sticky">
                <Profile />
                <div className="profile__pop-area">
                  {popupArray.map(({ message }, i) => (
                    <p key={i} className="profile__pop text" ref={popupRefs.current[i]}>
                      {message}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="l-top__right">
              <section id="works" className="section pb-0" ref={sectionRefs.current[0]}>
                <h3 className="section__title">WORKS</h3>
                <Link href="/works">
                  <a className="section__title-link">すべて見る</a>
                </Link>
                <div className="row">
                  <div className="six columns text-center">
                    <Link href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon">
                      <a target="_blank" className="work-item" rel="noreferrer">
                        <img
                          className="w-full"
                          src={url("/images/work_memo.png")}
                          alt=""
                          width={308}
                          height={192}
                        />
                        <div className="work-item__overlay">
                          <p className="work-item__overlay-name">どこでもメモ</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="six columns text-center">
                    <Link href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon">
                      <a target="_blank" className="work-item" rel="noreferrer">
                        <img
                          className="w-full"
                          src={url("/images/work_titech.png")}
                          alt=""
                          width={308}
                          height={192}
                        />
                        <div className="work-item__overlay">
                          <p className="work-item__overlay-name">Titech Portal Login</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="six columns text-center">
                    <Link href="https://social-dog.net/">
                      <a className="work-item" target="_blank" rel="noreferrer">
                        <img
                          className="w-full"
                          src={url("/images/work_autoscale.png")}
                          alt=""
                          width={308}
                          height={192}
                        />
                        <div className="work-item__overlay">
                          <p className="work-item__overlay-name">SocialDog</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              <section id="skills" className="section pb-0" ref={sectionRefs.current[1]}>
                <h3 className="section__title">SKILLS</h3>
                <Skills />
              </section>
              <section id="interest" className="section pb-0" ref={sectionRefs.current[2]}>
                <h3 className="section__title">INTEREST</h3>
                <div className="mt-8">
                  <h4 className="sub-headline">フロントエンド開発 with デザイナー</h4>
                  <p className="mt-4 text">
                    デザイナーと共にユーザの本質的な要求を見出し、
                    <br />
                    フロントエンジニアとして、技術的側面から表現可能な方法で解決策を考えることができるような人材を目指しています。
                    <br />
                    UIデザイナーとフロントエンジニアの両方の立場に立つことで、初めて分かる価値を見いだしていきたいです。
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="sub-headline">UI/UX エンジニア</h4>
                  <p className="mt-4 text">
                    大学で学んだ認知心理学の知見や、プログラミングの経験を活かして、UI/UX
                    エンジニアの力を発揮できます。
                    <br />
                    要件に対して、ユーザインタビューや行動観察などを基に情報設計、骨格、表層を効率的に技術に落とし込むことができると考えています。
                    <br />
                  </p>
                </div>
              </section>
              <section id="career" className="section pb-0">
                <h3 className="section__title">CAREER</h3>
                <Career />
              </section>
            </div>
          </div>
        </div>
      </main>

      <SnsLinks className="tablet:hidden" />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="takumibv" hasProfile={false}>
      {page}
    </Layout>
  );
};

export default Home;

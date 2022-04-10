import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import SnsLinks from "../components/SnsLinks";
import { NextPageWithLayout } from "./_app";
import Skills from "../components/Skills";
import useParallax from "../hooks/useParallax";

const Home: NextPageWithLayout = (props) => {
  const { ref: heroRef } = useParallax({ isTop: true, speed: 0.5 });
  const { ref: footerRef } = useParallax();

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero__bg js-rellax" data-rellax-speed="-5" ref={heroRef}></div>
        <h1 className="hero__main-title saying js-text-animation">
          “the only way to be truly satisfied is to do what you believe is great work.”
        </h1>
        <h2 className="hero__main-name saying js-text-animation">Steve Jobs</h2>
        <p className="hero__main-jp js-text-animation">
          『心の底から満足する唯一の方法は、素晴らしいと信じる仕事をすること。』
        </p>
      </div>

      {/* About */}
      <main id="about" className="l-main">
        <a className="l-main__scroll-down js-scroll" href="#about">
          <Image src="/images/scroll_green.png" alt="" width={46} height={60} />
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
          <div
            className="break__bg js-rellax"
            data-rellax-speed="-3"
            data-rellax-percentage="0.5"
            ref={footerRef}
          ></div>
          <h3 className="sub-headline break__text">
            『一つのことを、一生やり続けられると確信する日がくる』
          </h3>
        </section>
        <div className="container mx-auto bg-white">
          <div className="l-top">
            <div className="l-top__left">
              <div className="l-top__left-sticky">
                <Profile />
                <div className="profile__pop-area">
                  <p className="profile__pop text js-profile__pop" data-target="#works">
                    Webのフロントエンド開発やChromeの拡張機能の開発がメインでした！
                  </p>
                  <p className="profile__pop text js-profile__pop" data-target="#skills">
                    強みはReactとCSS。
                    <br />
                    Adobeのデザインツールも使用経験あり。デザインは勉強中。
                  </p>
                  <p className="profile__pop text js-profile__pop" data-target="#interest">
                    フロントエンドエンジニア×デザイナー
                    <br />
                    としての人材を目指しています！
                  </p>
                </div>
              </div>
            </div>
            <div className="l-top__right">
              <section id="works" className="section pb-0">
                <h3 className="section__title">WORKS</h3>
                <Link href="/works">
                  <a className="section__title-link">すべて見る</a>
                </Link>
                <div className="row">
                  <div className="six columns text-center">
                    <Link href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon">
                      <a target="_blank" className="work-item" rel="noreferrer">
                        <Image
                          className="w-full"
                          src="/images/work_memo.png"
                          alt=""
                          width={308}
                          height={192}
                          layout="raw"
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
                        <Image
                          className="w-full"
                          src="/images/work_titech.png"
                          alt=""
                          width={308}
                          height={192}
                          layout="raw"
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
                        <Image
                          className="w-full"
                          src="/images/work_autoscale.png"
                          alt=""
                          width={308}
                          height={192}
                          layout="raw"
                        />
                        <div className="work-item__overlay">
                          <p className="work-item__overlay-name">SocialDog</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              <section id="skills" className="section pb-0">
                <h3 className="section__title">SKILLS</h3>
                <Skills />
              </section>
              <section id="interest" className="section pb-0">
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
                <div className="career">
                  <div className="career-item">
                    <div className="career-item__left"></div>
                    <div className="career-item__right">
                      <div className="career-item__title sub-headline">ソフトバンク株式会社</div>
                      <div className="career-item__period text">2019/04 -</div>
                      <div className="career-item__text text">
                        業務システムのデザインを行う部署に所属しています。
                        <br />
                        <br />
                        【主な業務】
                        <ul className="list-disc pl-6">
                          <li className="mt-2">業務システムのフロントエンド開発</li>
                          <li className="mt-2">
                            UIデザインのプロトタイプ実装・ユーザーテストの実施
                          </li>
                          <li className="mt-2">デザインシステムの構築</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="career-item">
                    <div className="career-item__left"></div>
                    <div className="career-item__right">
                      <div className="career-item__title sub-headline">東京工業大学</div>
                      <div className="career-item__period text">2013/04 - 2019/03</div>
                      <div className="career-item__text text">
                        情報工学科に所属。
                        <br />
                        大学院の研究では、視線の情報を解析し、画面上のマウスなどのポインター操作をしている際の、使い心地や操作感を推定する研究を行いました。
                        <br />
                        <br />
                        学会発表「個人番号カードを用いた病院の初診受付において必要な基本情報取得システムの提案」電子情報通信学会総合大会ポスターセッション2017年3月
                      </div>
                    </div>
                  </div>
                  <div className="career-item">
                    <div className="career-item__left"></div>
                    <div className="career-item__right">
                      <div className="career-item__title sub-headline">株式会社 AutoScale</div>
                      <div className="career-item__period text">2018/01 - 2019/03</div>
                      <div className="career-item__text text">
                        インターンシップ(フロントエンドエンジニア)
                        <br />
                        ReactによるWebフロント開発、React Nativeによるアプリ開発を行いました。
                        サーバーサイドやサーバー構築など、柔軟に対応しました。
                      </div>
                    </div>
                  </div>
                  <div id="career-collapse" className="career-collapse">
                    <div className="career">
                      <div className="career-item">
                        <div className="career-item__left"></div>
                        <div className="career-item__right">
                          <div className="career-item__title sub-headline">
                            株式会社エメットクリエーション
                          </div>
                          <div className="career-item__period text">2016/12 - 2018/02</div>
                          <div className="career-item__text text">
                            インターンシップ
                            <br />
                            動画キュレーションアプリの管理画面やAPIの機能設計・実装に関する業務を行いました。
                            <br />
                            BigQueryを用いたデータの可視化やデータ分析に携わりました。
                          </div>
                        </div>
                      </div>
                      <div className="career-item">
                        <div className="career-item__left"></div>
                        <div className="career-item__right">
                          <div className="career-item__title sub-headline">freee株式会社</div>
                          <div className="career-item__period text">2016/12 - 2018/02</div>
                          <div className="career-item__text text">
                            インターンシップ
                            <br />
                            人事システムの機能追加に関する要件定義から実装までの業務を行いました。
                          </div>
                        </div>
                      </div>
                      <div className="career-item">
                        <div className="career-item__left"></div>
                        <div className="career-item__right">
                          <div className="career-item__title sub-headline">誕生</div>
                          <div className="career-item__period text">1994</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="career-item career-item--expand">
                    <div className="career-item__left"></div>
                    <div className="career-item__right">
                      <a
                        href="#"
                        className="career-item__expand-link js-toggle-career-collapse"
                        data-target="#career-collapse"
                      >
                        <span className="career-item__collapse-text">過去の経歴を見る</span>
                        <span className="career-item__expand-text">経歴を閉じる</span>
                        <Image src="/images/icon-arrow-down.svg" alt="" width="13" height="8" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <SnsLinks className="tablet:hidden" />
    </>
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

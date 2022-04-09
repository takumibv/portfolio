import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      {/* <div id="loading" className="l-loading">
        <p className="headline">Loading...</p>
      </div> */}
      <div className="l-header">
        <div className="container">
          <div className="l-header__inner">
            <div className="l-header__logo">
              <a href="./index.html">
                <img src="/images/icon.png" alt="" />
              </a>
            </div>
            <div className="l-header__burger">
              <a href="#" className="l-header__burger-button js-toggle-nav">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <ul className="l-header__nav">
              <li className="u-sp l-header__nav-item">
                <a href="./index.html">HOME</a>
              </li>
              <li className="u-pc l-header__nav-item">
                <a href="./index.html#about">ABOUT</a>
              </li>
              <li className="l-header__nav-item l-header__nav-item--active">
                <a href="./works.html">WORKS</a>
              </li>
              <li className="l-header__nav-item">
                <a target="_blank" href="https://qiita.com/takumibv" rel="noreferrer">
                  BLOG
                </a>
              </li>
              <li className="l-header__nav-item">
                <a href="./contact.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main id="about" className="l-main l-main--child">
        <section className="section">
          <div className="container u-mx-auto">
            <h3 className="section__title">WORKS</h3>
          </div>
          <div className="container u-mx-auto">
            <div className="row u-py-40">
              <div className="five columns">
                <a
                  href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="u-w-full" src="/images/work_memo.png" alt="" />
                </a>
              </div>
              <div className="six columns offset-by-one">
                <div className="u-mt-16">
                  <h4 className="sub-headline">どこでもメモ</h4>
                  <p className="u-mt-16 text u-color-gray">
                    制作期間: 2017.12 - 2018.03
                    <br />
                    規模: 個人開発
                    <br />
                    担当: 企画、デザイン、実装
                  </p>
                  <p className="u-mt-16 text">
                    Webページのどこにいてもメモを付箋のように好きな場所に作成できるChrome拡張機能です。
                    作ったメモは再アクセスしたときにも表示され、作成したメモを一覧ページで見ることができるなど、
                    様々な機能を実装しました。
                  </p>
                  <a
                    href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon"
                    target="_blank"
                    className="button-link u-mt-16"
                    rel="noreferrer"
                  >
                    詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="u-bg-base">
            <div className="container u-mx-auto">
              <div className="row u-py-40">
                <div className="six columns u-pc">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">Titech Portal Login</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2015.04
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="u-mt-16 text">
                      大学のポータルサイトに、自動でログインするChrome拡張機能です。
                      ログインのたびに、学生証をいちいち取り出す手間が省けます。
                    </p>
                    <a
                      href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                      target="_blank"
                      className="button-link u-mt-16"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <a
                    href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="u-w-full" src="/images/work_titech.png" alt="" />
                  </a>
                </div>
                <div className="six columns u-sp">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">Titech Portal Login</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2015.04
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="u-mt-16 text">
                      大学のポータルサイトに、自動でログインするChrome拡張機能です。
                      ログインのたびに、学生証をいちいち取り出す手間が省けます。
                    </p>
                    <a
                      href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                      target="_blank"
                      className="button-link u-mt-16"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container u-mx-auto">
            <div className="row u-py-40">
              <div className="five columns">
                <a href="https://social-dog.net/" target="_blank" rel="noreferrer">
                  <img className="u-w-full" src="/images/work_autoscale.png" alt="" />
                </a>
              </div>
              <div className="six columns offset-by-one">
                <div className="u-mt-16">
                  <h4 className="sub-headline">SocialDog</h4>
                  <p className="u-mt-16 text u-color-gray">
                    制作期間: 2018.04 - 2019.03
                    <br />
                    担当: フロントエンド開発
                  </p>
                  <p className="u-mt-16 text">
                    AutoScale,Incが運営するSocialDogのアプリ版です。 React Nativeによる開発を行い、
                    ダッシュボード、受信箱、ユーザ整理画面の１からの実装を担当しました。
                  </p>
                  <a
                    href="https://social-dog.net/"
                    target="_blank"
                    className="button-link u-mt-16"
                    rel="noreferrer"
                  >
                    詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="u-bg-base">
            <div className="container u-mx-auto">
              <div className="row u-py-40">
                <div className="six columns u-pc">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">RunMusic</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2017.07 - 2017.10
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="u-mt-16 text">
                      Androidアプリケーション。
                      <br />
                      走るペースをBPMとして計測し、そのBPMにあったプレイリストを提案してくれるAndroidアプリです。授業で制作しました。ジャンルとBPM(beats
                      per
                      minute)を引数としておすすめのプレイリストを返してくれるAPIをrailsで実装しようとし、アプリ内でそのAPIを叩くようにしました。
                      また、アプリ内では加速度センサーを使用し、走るペースからBPMを測定する機能を実装しました。実際に走ってテストしたところ、9割以上は正しいBPMが取れました。
                    </p>
                    <a
                      href="https://github.com/takumibv/RunMusic"
                      target="_blank"
                      className="button-link u-mt-16"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <a href="https://github.com/takumibv/RunMusic" target="_blank" rel="noreferrer">
                    <img className="u-w-full" src="/images/work_runmusic.jpg" alt="" />
                  </a>
                </div>
                <div className="six columns u-sp">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">RunMusic</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2017.07 - 2017.10
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="u-mt-16 text">
                      Androidアプリケーション。
                      <br />
                      走るペースをBPMとして計測し、そのBPMにあったプレイリストを提案してくれるAndroidアプリです。授業で制作しました。ジャンルとBPM(beats
                      per
                      minute)を引数としておすすめのプレイリストを返してくれるAPIをrailsで実装しようとし、アプリ内でそのAPIを叩くようにしました。
                      また、アプリ内では加速度センサーを使用し、走るペースからBPMを測定する機能を実装しました。実際に走ってテストしたところ、9割以上は正しいBPMが取れました。
                    </p>
                    <a
                      href="https://github.com/takumibv/RunMusic"
                      target="_blank"
                      className="button-link u-mt-16"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container u-mx-auto">
            <div className="row u-py-40">
              <div className="five columns">
                <img className="u-w-full" src="/images/work_groupshare.png" alt="" />
              </div>
              <div className="six columns offset-by-one">
                <div className="u-mt-16">
                  <h4 className="sub-headline">グループ振り分けアプリ</h4>
                  <p className="u-mt-16 text u-color-gray">
                    制作期間: 2017.09 - 2017.12
                    <br />
                    規模: 学生チーム開発
                    <br />
                    担当: サーバーサイド・フロントエンド開発
                  </p>
                  <p className="u-mt-16 text">
                    参加者とグループを登録し、参加者の得点や志望グループ、グループの定員数を元に、自動でグループの振り分けを行うツールです。
                    社員の成績とその人の志望する配属先を第n志望まで選択し、自動配属先振り分けなどに応用することができます。大学の授業で作成しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="u-bg-base">
            <div className="container u-mx-auto">
              <div className="row u-py-40">
                <div className="six columns u-pc">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">イベたん</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2014年
                      <br />
                      担当: 実装担当
                    </p>
                    <p className="u-mt-16 text">
                      スタンプで回答新感覚アンケートツール。 簡単操作でサクサク回答、ラクラク集計。
                      これまでの無機質なアンケートではなく楽しいアンケートを提供します。 使用言語:
                      Html, css, JavaScript, jQuery, PHP, CakePHP
                    </p>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <img className="u-w-full" src="/images/work_evetan.jpg" alt="" />
                </div>
                <div className="six columns u-sp">
                  <div className="u-mt-16">
                    <h4 className="sub-headline">イベたん</h4>
                    <p className="u-mt-16 text u-color-gray">
                      制作期間: 2014年
                      <br />
                      担当: 実装担当
                    </p>
                    <p className="u-mt-16 text">
                      スタンプで回答新感覚アンケートツール。 簡単操作でサクサク回答、ラクラク集計。
                      これまでの無機質なアンケートではなく楽しいアンケートを提供します。 使用言語:
                      Html, css, JavaScript, jQuery, PHP, CakePHP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="container container--sm u-mx-auto u-pt-24 u-overflow-hidden">
        <div className="profile">
          <div className="profile__icon js-icon-animation">
            <img src="/images/profile.JPG" alt="" />
          </div>
          <p className="profile__name">Takumibv</p>
          <div className="sns-links">
            <a
              target="_blank"
              href="https://twitter.com/takumi_bv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="/images/icon-twitter.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://github.com/takumibv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="/images/icon-github.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://qiita.com/takumibv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="/images/icon-qiita.png" alt="" />
            </a>
            <a href="./contact.html" className="sns-links-item">
              <img src="/images/icon-mail.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <footer className="l-footer">
        <div
          className="l-footer__bg js-rellax"
          data-rellax-speed="-3"
          data-rellax-percentage="0.5"
        ></div>
        <div className="container u-mx-auto clearfix">
          <div className="l-footer__left">
            <img src="/images/icon_text.png" alt="" />
          </div>
          <div className="l-footer__right">
            <p className="text u-text-center">Takumi, All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

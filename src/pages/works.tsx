import { ReactElement } from "react";
import Layout from "../components/Layout";
import { url } from "../utils/config";
import { NextPageWithLayout } from "./_app";

const Works: NextPageWithLayout = () => {
  return (
    <>
      <main id="about" className="l-main l-main--child">
        <section className="section pb-0">
          <div className="container mx-auto">
            <h3 className="section__title">WORKS</h3>
          </div>
          <div className="container mx-auto">
            <div className="row py-10">
              <div className="five columns">
                <a
                  className="inline-block w-full"
                  href="https://lp.ai-copywriter.jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full"
                    src={url("/images/work_catchy.png")}
                    alt=""
                    width={308}
                    height={192}
                  />
                </a>
              </div>
              <div className="six columns offset-by-one">
                <div className="mt-4">
                  <h4 className="sub-headline">Catchy</h4>
                  <p className="mt-4 text text-grey">
                    期間: 2022.10 - 2023.07
                    <br />
                    規模: チーム開発
                    <br />
                    担当: 実装
                  </p>
                  <p className="mt-4 text">
                    様々な用途に応じてAIが文章を生成してくれるWebサービスです。
                    <br />
                    副業としてチーム開発に参画し、サーバーサイドとフロントエンドの実装を担当しました。
                  </p>
                  <a
                    href="https://lp.ai-copywriter.jp/"
                    target="_blank"
                    className="button-link mt-4"
                    rel="noreferrer"
                  >
                    詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base dark:bg-base-dark">
            <div className="container mx-auto">
              <div className="row py-10">
                <div className="six columns hidden tablet:block">
                  <div className="mt-4">
                    <h4 className="sub-headline">ポートフォリオ</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2022.04 - 2022.05
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
                      コーディング練習のために作成したサービスサイト群です。
                    </p>
                    <p className="mt-4 text">
                      使用技術
                      <br/>・Next.js
                      <br/>・Framer Motion: アニメーションライブラリ
                      <br/>・headless UI
                      <br/>・TailwindCSS: CSSフレームワーク
                    </p>
                    <a
                      href="https://takumibv.github.io/sample-site-collection/"
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <a
                    className="inline-block w-full"
                    href="https://takumibv.github.io/sample-site-collection/"
                    rel="noreferrer"
                  >
                    <img
                      className="w-full"
                      src={url("/images/sample_pet.png")}
                      alt=""
                      width={308}
                      height={192}
                    />
                  </a>
                </div>
                <div className="six columns tablet:hidden">
                  <div className="mt-4">
                    <h4 className="sub-headline">Titech Portal Login</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2015.04
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
                      大学のポータルサイトに、自動でログインするChrome拡張機能です。
                      ログインのたびに、学生証をいちいち取り出す手間が省けます。
                    </p>
                    <a
                      href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                      target="_blank"
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="row py-10">
              <div className="five columns">
                <a
                  className="inline-block w-full"
                  href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full"
                    src={url("/images/work_memo.png")}
                    alt=""
                    width={308}
                    height={192}
                  />
                </a>
              </div>
              <div className="six columns offset-by-one">
                <div className="mt-4">
                  <h4 className="sub-headline">どこでもメモ</h4>
                  <p className="mt-4 text text-grey">
                    制作期間: 2017.12 - 2018.03
                    <br />
                    規模: 個人開発
                    <br />
                    担当: 企画、デザイン、実装
                  </p>
                  <p className="mt-4 text">
                    Webページのどこにいてもメモを付箋のように好きな場所に作成できるChrome拡張機能です。
                    作ったメモは再アクセスしたときにも表示され、作成したメモを一覧ページで見ることができるなど、
                    様々な機能を実装しました。
                  </p>
                  <a
                    href="https://chrome.google.com/webstore/detail/memo-anywhere/fjfoncfdjhdefjhknbaphionnognbnpl?utm_source=chrome-ntp-icon"
                    target="_blank"
                    className="button-link mt-4"
                    rel="noreferrer"
                  >
                    詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base dark:bg-base-dark">
            <div className="container mx-auto">
              <div className="row py-10">
                <div className="six columns hidden tablet:block">
                  <div className="mt-4">
                    <h4 className="sub-headline">Titech Portal Login</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2015.04
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
                      大学のポータルサイトに、自動でログインするChrome拡張機能です。
                      ログインのたびに、学生証をいちいち取り出す手間が省けます。
                    </p>
                    <a
                      href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                      target="_blank"
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <a
                    className="inline-block w-full"
                    href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-full"
                      src={url("/images/work_titech.png")}
                      alt=""
                      width={308}
                      height={192}
                    />
                  </a>
                </div>
                <div className="six columns tablet:hidden">
                  <div className="mt-4">
                    <h4 className="sub-headline">Titech Portal Login</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2015.04
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
                      大学のポータルサイトに、自動でログインするChrome拡張機能です。
                      ログインのたびに、学生証をいちいち取り出す手間が省けます。
                    </p>
                    <a
                      href="https://chrome.google.com/webstore/detail/titech-portal-login/gakchdgcpjbchncgbflfkajcfpnbhohi?utm_source=chrome-ntp-icon"
                      target="_blank"
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="row py-10">
              <div className="five columns">
                <a
                  className="inline-block w-full"
                  href="https://social-dog.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full"
                    src={url("/images/work_autoscale.png")}
                    alt=""
                    width={308}
                    height={192}
                  />
                </a>
              </div>
              <div className="six columns offset-by-one">
                <div className="mt-4">
                  <h4 className="sub-headline">SocialDog</h4>
                  <p className="mt-4 text text-grey">
                    制作期間: 2018.04 - 2019.03
                    <br />
                    担当: フロントエンド開発
                  </p>
                  <p className="mt-4 text">
                    AutoScale,Incが運営するSocialDogのアプリ版です。 React Nativeによる開発を行い、
                    ダッシュボード、受信箱、ユーザ整理画面の１からの実装を担当しました。
                  </p>
                  <a
                    href="https://social-dog.net/"
                    target="_blank"
                    className="button-link mt-4"
                    rel="noreferrer"
                  >
                    詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base dark:bg-base-dark">
            <div className="container mx-auto">
              <div className="row py-10">
                <div className="six columns hidden tablet:block">
                  <div className="mt-4">
                    <h4 className="sub-headline">RunMusic</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2017.07 - 2017.10
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
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
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <a
                    className="inline-block w-full"
                    href="https://github.com/takumibv/RunMusic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-full"
                      src={url("/images/work_runmusic.jpg")}
                      alt=""
                      width={308}
                      height={192}
                    />
                  </a>
                </div>
                <div className="six columns tablet:hidden">
                  <div className="mt-4">
                    <h4 className="sub-headline">RunMusic</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2017.07 - 2017.10
                      <br />
                      規模: 個人開発
                      <br />
                      担当: 企画、デザイン、実装
                    </p>
                    <p className="mt-4 text">
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
                      className="button-link mt-4"
                      rel="noreferrer"
                    >
                      詳細
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="row py-10">
              <div className="five columns">
                <img
                  className="w-full"
                  src={url("/images/work_groupshare.png")}
                  alt=""
                  width={308}
                  height={192}
                />
              </div>
              <div className="six columns offset-by-one">
                <div className="mt-4">
                  <h4 className="sub-headline">グループ振り分けアプリ</h4>
                  <p className="mt-4 text text-grey">
                    制作期間: 2017.09 - 2017.12
                    <br />
                    規模: 学生チーム開発
                    <br />
                    担当: サーバーサイド・フロントエンド開発
                  </p>
                  <p className="mt-4 text">
                    参加者とグループを登録し、参加者の得点や志望グループ、グループの定員数を元に、自動でグループの振り分けを行うツールです。
                    社員の成績とその人の志望する配属先を第n志望まで選択し、自動配属先振り分けなどに応用することができます。大学の授業で作成しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base dark:bg-base-dark">
            <div className="container mx-auto">
              <div className="row py-10">
                <div className="six columns hidden tablet:block">
                  <div className="mt-4">
                    <h4 className="sub-headline">イベたん</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2014年
                      <br />
                      担当: 実装担当
                    </p>
                    <p className="mt-4 text">
                      スタンプで回答新感覚アンケートツール。 簡単操作でサクサク回答、ラクラク集計。
                      これまでの無機質なアンケートではなく楽しいアンケートを提供します。 使用言語:
                      Html, css, JavaScript, jQuery, PHP, CakePHP
                    </p>
                  </div>
                </div>
                <div className="five columns offset-by-one">
                  <img
                    className="w-full"
                    src={url("/images/work_evetan.jpg")}
                    alt=""
                    width={308}
                    height={192}
                  />
                </div>
                <div className="six columns tablet:hidden">
                  <div className="mt-4">
                    <h4 className="sub-headline">イベたん</h4>
                    <p className="mt-4 text text-grey">
                      制作期間: 2014年
                      <br />
                      担当: 実装担当
                    </p>
                    <p className="mt-4 text">
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
    </>
  );
};

Works.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="works">{page}</Layout>;
};

export default Works;

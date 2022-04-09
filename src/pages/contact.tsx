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
                <img src="assets/images/icon.png" alt="" />
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
              <li className="l-header__nav-item">
                <a href="./works.html">WORKS</a>
              </li>
              <li className="l-header__nav-item">
                <a target="_blank" href="https://qiita.com/takumibv" rel="noreferrer">
                  BLOG
                </a>
              </li>
              <li className="l-header__nav-item l-header__nav-item--active">
                <a href="./contact.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main id="about" className="l-main l-main--child">
        <form
          method="post"
          action="https://docs.google.com/forms/d/1StnTMyI0giSy9R5fYPuJU3n6b0OksjgA0RcdW9C_4Qw/formResponse?"
        >
          <section className="section u-pb-0">
            <div className="container u-mx-auto">
              <h3 className="section__title">CONTACT</h3>
            </div>
            <div className="container u-mx-auto">
              <div className="row u-py-16">
                <div className="four columns">
                  <h4 className="sub-headline u-mb-8">お名前</h4>
                  <input
                    type="text"
                    autoComplete="name"
                    className="input-text"
                    name="entry.1686029864"
                    id="entry.1686029864"
                    required
                  />
                </div>
              </div>
              <div className="row u-py-16">
                <div className="four columns">
                  <h4 className="sub-headline u-mb-8">メールアドレス</h4>
                  <input
                    type="email"
                    autoComplete="email"
                    className="input-text"
                    name="entry.260377274"
                    id="entry.260377274"
                    required
                  />
                </div>
              </div>
              <div className="row u-py-16">
                <div className="twelve columns">
                  <h4 className="sub-headline u-mb-8">お問い合わせ内容</h4>
                  <textarea
                    className="input-textarea"
                    name="entry.173211727"
                    id="entry.173211727"
                    cols={10}
                    rows={8}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="u-py-16">
                <input className="button" type="submit" value="送信" />
              </div>
            </div>
          </section>
        </form>
      </main>
      <div className="container container--sm u-mx-auto u-pt-24 u-overflow-hidden">
        <div className="profile">
          <div className="profile__icon js-icon-animation">
            <img src="assets/images/profile.JPG" alt="" />
          </div>
          <p className="profile__name">Takumibv</p>
          <div className="sns-links">
            <a
              target="_blank"
              href="https://twitter.com/takumi_bv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="assets/images/icon-twitter.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://github.com/takumibv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="assets/images/icon-github.png" alt="" />
            </a>
            <a
              target="_blank"
              href="https://qiita.com/takumibv"
              className="sns-links-item"
              rel="noreferrer"
            >
              <img src="assets/images/icon-qiita.png" alt="" />
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
            <img src="assets/images/icon_text.png" alt="" />
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

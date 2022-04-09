import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Footer: React.FC<{ hasProfile?: boolean }> = ({ hasProfile = true }) => {
  return (
    <>
      <div className="container container--sm mx-auto pt-6 overflow-hidden">
        {hasProfile && (
          <div className="profile">
            <div className="profile__icon js-icon-animation">
              <Image src="/images/profile.JPG" alt="" layout="fill" />
            </div>
            <p className="profile__name">Takumibv</p>
            <div className="sns-links">
              <a
                target="_blank"
                href="https://twitter.com/takumi_bv"
                className="sns-links-item"
                rel="noreferrer"
              >
                <Image src="/images/icon-twitter.png" alt="" width={32} height={32} />
              </a>
              <a
                target="_blank"
                href="https://github.com/takumibv"
                className="sns-links-item"
                rel="noreferrer"
              >
                <Image src="/images/icon-github.png" alt="" width={32} height={32} />
              </a>
              <a
                target="_blank"
                href="https://qiita.com/takumibv"
                className="sns-links-item"
                rel="noreferrer"
              >
                <Image src="/images/icon-qiita.png" alt="" width={32} height={32} />
              </a>
            </div>
          </div>
        )}
      </div>
      <footer className="l-footer">
        <div
          className="l-footer__bg js-rellax"
          data-rellax-speed="-3"
          data-rellax-percentage="0.5"
        ></div>
        <div className="container mx-auto clearfix">
          <div className="l-footer__left">
            <Image src="/images/icon_text.png" alt="" width={60} height={60} />
          </div>
          <div className="l-footer__right">
            <p className="text text-center">Takumi, All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

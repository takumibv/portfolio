import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Header = () => {
  const router = useRouter();
  const [isAbout, setIsAbout] = useState(false);
  const { asPath, pathname, events } = router;

  useEffect(() => {
    setIsAbout(asPath === "/#about");

    const handleUrlChange = (url: string) => {
      setIsAbout(url === "/#about");
    };

    events.on("hashChangeStart", handleUrlChange);
    events.on("routeChangeStart", handleUrlChange);

    return () => {
      events.off("hashChangeStart", handleUrlChange);
      events.off("routeChangeStart", handleUrlChange);
    };
  }, []);

  return (
    <div className="l-header">
      <div className="container">
        <div className="l-header__inner">
          <div className="l-header__logo">
            <Link href="/">
              <a>
                <Image src="/images/icon.png" alt="" layout="fill" />
              </a>
            </Link>
          </div>
          <div className="l-header__burger">
            <a href="#" className="l-header__burger-button js-toggle-nav">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <ul className="l-header__nav">
            <li
              className={classNames(
                "tablet:hidden l-header__nav-item",
                pathname === "/" && "l-header__nav-item--active"
              )}
            >
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li
              className={classNames(
                "hidden tablet:block l-header__nav-item js-nav-about",
                isAbout && "l-header__nav-item--active"
              )}
            >
              <Link href="/#about">
                <a className="js-scroll">ABOUT</a>
              </Link>
            </li>
            <li
              className={classNames(
                "l-header__nav-item",
                pathname === "/works" && "l-header__nav-item--active"
              )}
            >
              <Link href="/works">
                <a>WORKS</a>
              </Link>
            </li>
            <li className={classNames("l-header__nav-item")}>
              <Link href="https://qiita.com/takumibv">
                <a target="_blank" rel="noreferrer">
                  BLOG
                </a>
              </Link>
            </li>
            <li
              className={classNames(
                "l-header__nav-item",
                pathname === "/contact" && "l-header__nav-item--active"
              )}
            >
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Header = () => {
  const router = useRouter();
  const [isAbout, setIsAbout] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { props: scrollProps } = useScrollAnimation();
  const { asPath, pathname, events } = router;

  useEffect(() => {
    setIsAbout(asPath === "/#about");

    const handleUrlChange = (url: string) => {
      setIsAbout(url === "/#about");
      setIsOpenNav(false);
    };

    const handleResize = () => {
      setIsOpenNav(false);
    };

    events.on("hashChangeStart", handleUrlChange);
    events.on("routeChangeStart", handleUrlChange);
    window.addEventListener("resize", handleResize);

    return () => {
      events.off("hashChangeStart", handleUrlChange);
      events.off("routeChangeStart", handleUrlChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="l-header">
      <div className="container">
        <div className="l-header__inner">
          <div className="l-header__logo">
            <Link href="/">
              <a>
                <Image src="/images/logo.svg" alt="" width={32} height={32} />
              </a>
            </Link>
          </div>
          <div className={classNames("l-header__burger", isOpenNav && "l-header__burger--open")}>
            <a
              href="#"
              className="l-header__burger-button"
              onClick={(e) => {
                e.preventDefault();
                setIsOpenNav(!isOpenNav);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="l-header__nav">
            <div className="l-header__nav-overlay" onClick={() => setIsOpenNav(false)}></div>
            <ul>
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
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/#about" {...scrollProps}>
                  ABOUT
                </a>
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
    </div>
  );
};

export default Header;

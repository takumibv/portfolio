import Head from "next/head";
import React, { ReactChildren, ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const SITE_NAME = "takumibv";
export const DEFAULT_DESCRIPTION =
  "フロントエンドエンジニア takumibv のポートフォリオサイト。React・TypeScript を中心としたフロントエンド開発と UI デザインの経歴・スキル・制作実績を紹介しています。";

const Layout: React.FC<{
  /** ページ固有のタイトル。省略時はサイト名のみ */
  title?: string;
  description?: string;
  hasProfile?: boolean;
  children?: ReactNode;
}> = ({ title, description = DEFAULT_DESCRIPTION, hasProfile, children }) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Portfolio`;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <div className="l-page">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <Header setIsDark={setIsDark} isDark={isDark} />
      {children}
      <Footer hasProfile={hasProfile} />
    </div>
  );
};

export default Layout;

import Head from "next/head";
import React, { ReactChildren, ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ title: string; hasProfile?: boolean; children?: ReactNode }> = ({
  title,
  hasProfile,
  children,
}) => {
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
        <title>{title}</title>
      </Head>
      <Header setIsDark={setIsDark} isDark={isDark} />
      {children}
      <Footer hasProfile={hasProfile} />
    </div>
  );
};

export default Layout;

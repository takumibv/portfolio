import Head from "next/head";
import React, { ReactChildren, ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ title: string; hasProfile?: boolean; children?: ReactNode }> = ({
  title,
  hasProfile,
  children,
}) => {
  useEffect(() => {
    console.log(
      "(prefers-color-scheme: dark)::",
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer hasProfile={hasProfile} />
    </>
  );
};

export default Layout;

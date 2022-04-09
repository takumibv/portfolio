import Head from "next/head";
import React, { ReactChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ title: string; hasProfile?: boolean; children?: ReactNode }> = ({
  title,
  hasProfile,
  children,
}) => {
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

import { Html, Head, Main, NextScript } from "next/document";
import { url } from "../utils/config";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/avl8fnj.css" />
        <link rel="icon" href={url("/images/favicon.ico")} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

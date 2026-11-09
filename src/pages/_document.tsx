import { Html, Head, Main, NextScript } from "next/document";
import { url } from "../utils/config";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href={url("/images/favicon.ico")} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

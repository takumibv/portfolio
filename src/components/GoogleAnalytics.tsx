import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

const GoogleAnalytics: React.FC = () => {
  const NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  const router = useRouter()
  const { events } = router || {}
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window) return
      window.gtag('config', `${NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`, {
        page_path: url,
      });
    }
    events.on('routeChangeComplete', handleRouteChange)
    events.on('hashChangeComplete', handleRouteChange)
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
      events.off('hashChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
      />
      <Script strategy="afterInteractive" id="ga">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', '${NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

"use client";

import Script from "next/script";

const AdsArticle = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" && (
        <>
          <div data-type="_mgwidget" data-widget-id="1967940"></div>
          <Script id="mgid-script" strategy="afterInteractive">
            {`(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"]);})(window,"_mgq");`}
          </Script>
        </>
      )}
    </>
  );
};

export default AdsArticle;

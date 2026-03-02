"use client";

import Script from "next/script";

const AdsHeader = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" && (
        <>
          <style jsx>{`
            div[data-widget-id="1967942"] {
              min-height: 300px;
            }
          `}</style>

          <div data-type="_mgwidget" data-widget-id="1967942"></div>
          <Script id="mgid-header-init" strategy="afterInteractive">
            {`
          (function(w,q){
            w[q]=w[q]||[];
            w[q].push(["_mgc.load"]);
          })(window,"_mgq");
        `}
          </Script>
        </>
      )}
    </>
  );
};

export default AdsHeader;

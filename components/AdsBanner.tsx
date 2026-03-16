"use client";

import { useEffect } from "react";


const AdsBanner = () => {
     useEffect(() => {
        if (typeof window !== "undefined") {
          (window as any)._mgq = (window as any)._mgq || [];
          (window as any)._mgq.push(["_mgc.load"]);
        }
      }, []);
    
      if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
       <style jsx>{`
            div[data-widget-id="1978335"] {
              min-height: 300px;
            }
          `}</style>

          <div data-type="_mgwidget" data-widget-id="1978335"></div>
          
    </>
  );
};

export default AdsBanner;

"use client";

import { useEffect } from "react";

const AdsArticle = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any)._mgq = (window as any)._mgq || [];
      (window as any)._mgq.push(["_mgc.load"]);
    }
  }, []);

  if (process.env.NODE_ENV !== "production") return null;

  return (
    <div data-type="_mgwidget" data-widget-id="1967940"></div>
  );
};

export default AdsArticle;
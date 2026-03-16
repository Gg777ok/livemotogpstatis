"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

export default function AdsFloating() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any)._mgq = (window as any)._mgq || [];
      (window as any)._mgq.push(["_mgc.load"]);
    }
  }, []);

  if (process.env.NODE_ENV !== "production") return null;
  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-[9999] md:hidden flex justify-center pointer-events-none transition-all duration-300",
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <Card className="relative w-full max-w-md h-[90px] mx-2 mb-2 bg-white/90 backdrop-blur shadow-xl border pointer-events-auto">
        {/* Close Button */}
        <button
          aria-label="Close Ad"
          onClick={handleClose}
          className="absolute top-1 right-1 p-1 rounded-md hover:bg-gray-100 transition"
        >
          <X size={16} />
        </button>

        {/* Ad Space */}
        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
          <div data-type="_mgwidget" data-widget-id="1978329"></div>
        </div>
      </Card>
    </div>
  );
}

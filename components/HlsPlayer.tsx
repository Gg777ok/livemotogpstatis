"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface Props {
  url: string;
  autoPlay?: boolean;
}

export default function PlyrHlsPlayer({ url, autoPlay = true }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    let hls: Hls | null = null;
    let plyr: any = null;

    const init = async () => {
      const Plyr = (await import("plyr")).default;

      if (!videoRef.current) return;

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          plyr = new Plyr(videoRef.current!, {});
        });
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = url;
        plyr = new Plyr(videoRef.current, {});
      }
    };

    init();

    return () => {
      if (hls) hls.destroy();
      if (plyr) plyr.destroy();
    };
  }, [url]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay={autoPlay}
      playsInline
      className="w-full aspect-video rounded-2xl"
    />
  );
}
"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import "plyr/dist/plyr.css";

interface Props {
  url: string;
  autoPlay?: boolean;
}

export default function PlyrHlsPlayer({
  url,
  autoPlay = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    let hls: Hls | null = null;
    let plyr: any = null;

    const init = async () => {
      const Plyr = (await import("plyr")).default;

      if (!videoRef.current) return;

      const video = videoRef.current;

      const defaultOptions: any = {
        ratio: "16:9",

        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],

        settings: ["quality", "speed"],

        quality: {
          default: 0,
          options: [],
          forced: true,
          onChange: (quality: number) => {},
        },
      };

      if (Hls.isSupported()) {
        hls = new Hls();

        hls.loadSource(url);

        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          const qualities = hls!.levels
            .map((level) => level.height)
            .filter(Boolean);

          defaultOptions.quality = {
            default: Math.max(...qualities),

            options: qualities,

            forced: true,

            onChange: (quality: number) => {
              hls!.levels.forEach((level, index) => {
                if (level.height === quality) {
                  hls!.currentLevel = index;
                }
              });
            },
          };

          plyr = new Plyr(video, defaultOptions);

          if (autoPlay) {
            video.play().catch(() => {});
          }
        });
      } else if (
        video.canPlayType("application/vnd.apple.mpegurl")
      ) {
        video.src = url;

        plyr = new Plyr(video, defaultOptions);
      }
    };

    init();

    return () => {
      if (hls) hls.destroy();
      if (plyr) plyr.destroy();
    };
  }, [url, autoPlay]);

  return (
  <>
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-black">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        className="block w-full h-full"
      />
    </div>

    <style jsx global>{`
      .plyr {
        width: 100%;
        height: 100%;
      }

      .plyr video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `}</style>
  </>
);
}
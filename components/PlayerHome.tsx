"use client";

import { useMemo, useState } from "react";
import PlyrHlsPlayer from "./HlsPlayer";
import ClapprPlayer from "./ClapprPlayer";
import AlertInfo from "./AlertInfo";
import { Button } from "@/components/ui/button";
import { DataStreams } from "../lib/streams";

const servers = [
  {
    name: "SERVER UTAMA",
    type: "hls",
    url: "https://s1.strea.ru/index.m3u8",
  },
  {
    name: "SERVER IOS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
    id: "7eea72d6075245a99ee3255603d58853",
    key: "6848ef60575579bf4d415db1032153ed",
  },
  {
    name: "SERVER PALING LANCAR",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
    id: "7eea72d6075245a99ee3255603d58853",
    key: "6848ef60575579bf4d415db1032153ed",
  },
  {
    name: "SERVER 2",
    type: "hls",
    url: "https://s2.strea.ru/index.m3u8",
  },
  {
    name: "SPOTV 2 ID",
    type: "dash",
    id: "7eea72d6075245a99ee3255603d58853",
    key: "6848ef60575579bf4d415db1032153ed",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
  },
  {
    name: "TNT",
    type: "dash",
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/fb6jy4pxts/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    id: "f288380ca4cef9ad3f27a92a08e9bb8b",
    key: "9f18d26291d9230833501f7f822f6875",
  },
  {
    name: "TNT SPORT 1",
    type: "hls",
    url: "https://rr4---sn-8pxuuxa-onon.applecdnstore.com/livetv/2024/UK_TNT_SPORTS_1/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "TNT SPORT 2",
    type: "hls",
    url: "https://rr4---sn-8pxuuxa-onon.applecdnstore.com/livetv/2024/UK_TNT_SPORTS_2/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "TNT SPORT 3",
    type: "hls",
    url: "https://rr4---sn-8pxuuxa-onon.applecdnstore.com/livetv/2024/UK_TNT_SPORTS_3/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "TNT SPORT 4",
    type: "hls",
    url: "https://rr4---sn-8pxuuxa-onon.applecdnstore.com/livetv/2024/UK_TNT_SPORTS_4/tracks-v1a1/mono.ts.m3u8",
  },
];

export default function StreamingPage() {
  const [activeServer, setActiveServer] = useState(4);;
   
  const current = useMemo(() => servers[activeServer], [activeServer]);

  const changeServer = (index: number) => {
    setActiveServer(index);

    if (!sessionStorage.getItem("adShown")) {
      window.open(
        "https://welcomingexpulsion.com/w6fbd82af9?key=543876b74474d5085d21b077de5ae27f",
        "_blank",
      );

      sessionStorage.setItem("adShown", "true");
    }
  };
 
  

  return (
    <main className="container mx-auto max-w-5xl px-4 py-5 space-y-5">
      <header className="space-y-3">
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          NONTON MOTOGP LIVE STREAMING
        </h1>

        <AlertInfo
          title="PERHATIAN"
          message="Jika streaming tidak tersedia silakan ganti ke server lain."
        />
      </header>

      {/* PLAYER */}

      <div className="overflow-hidden rounded-2xl bg-black">
        {current.type === "hls" ? (
          <PlyrHlsPlayer key={current.url} url={current.url} autoPlay />
        ) : (
          <ClapprPlayer
            key={current.url}
            url={current.url}
            drmId={current.id!}
            drmKey={current.key!}
          />
        )}
      </div>

      {/* SERVER */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {servers.map((server, index) => (
          <Button
            key={server.name}
            onClick={() => changeServer(index)}
            variant={index === activeServer ? "destructive" : "outline"}
            className="w-full"
          >
            {server.name}
          </Button>
        ))}
      </div>

      {/* Disclaimer */}

      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6">
        <span className="font-bold text-red-600">⚠ Disclaimer</span>

        <p className="mt-2">
          Website ini hanya menampilkan video yang di-embed dari pihak ketiga.
          Kami tidak menyimpan ataupun mengunggah video apa pun.
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
import React from "react";
import {
  BsChat,
  BsFacebook,
  BsLink,
  BsTelegram,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-0 ">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold mb-2">LIVEMotoGPCOM</div>
          <p className="">
            LIVE MotoGP NET/Live MotoGP Com Adalah Situs Untuk Nonton Live
            Streaming MotoGP/WSBK Gratis Full Session. Live MotoGP Com <br />
            Live MotoGP Net is a site for watching MotoGP/WSBK live streaming
            for free, full session. Live MotoGP Com
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="https://t.me/+wz0g7OSf3ic3ODQ1"
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTelegram />
            Telegram
          </Link>
          <Link
            href={"https://x.com/nontonmotogp"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTwitterX /> Twitter (X)
          </Link>
          <Link
            href={"https://www.facebook.com/livemotogpnet/"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsFacebook /> Facebook
          </Link>
          <Link
            href={"https://tiktok.com/@livemotogp.net"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTiktok /> Tiktok
          </Link>
          <Link
            href="https://www.zvstreams.com/search/label/Live%20MotoGP"
            className="flex items-center gap-1"
          >
            <BsChat /> Kontak
          </Link>
          <Link
            href="https://www.zvstreams.com/search/label/Live%20MotoGP"
            className="flex items-center gap-1"
          >
            <BsLink /> Live Streaming
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="https://t.me/+wz0g7OSf3ic3ODQ1"
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTelegram />
            Telegram
          </Link>
          <Link
            href={"https://x.com/nontonmotogp"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTwitterX /> Twitter (X)
          </Link>
          <Link
            href={"https://www.facebook.com/livemotogpnet/"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsFacebook /> Facebook
          </Link>
          <Link
            href={"https://tiktok.com/@livemotogp.net"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <BsTiktok /> Tiktok
          </Link>
          <Link
            href="https://www.zvstreams.com/search/label/Live%20MotoGP"
            className="flex items-center gap-1"
          >
            <BsChat /> Kontak
          </Link>
          <Link
            href="https://www.zvstreams.com/search/label/Live%20MotoGP"
            className="flex items-center gap-1"
          >
            <BsLink /> Live Streaming
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="border-t border-border bg-background text-muted-foreground transition-colors duration-300">
      <div className="container mx-auto max-w-5xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="text-lg md:text-xl font-semibold mb-3 text-foreground">
            LIVEMotoGP.COM
          </div>

          <p className="text-sm md:text-base leading-relaxed">
            LIVE MotoGP NET/Live MotoGP Com adalah situs untuk nonton live
            streaming MotoGP/WSBK gratis full session.
            <br />
            Live MotoGP Net is a site for watching MotoGP/WSBK live streaming
            for free, full session.
          </p>
        </div>

        {/* Menu 1 */}
        <div className="flex flex-col gap-3 text-sm font-medium">
          <FooterLink href="https://t.me/+wz0g7OSf3ic3ODQ1">
            <BsTelegram /> Telegram
          </FooterLink>

          <FooterLink href="https://x.com/nontonmotogp">
            <BsTwitterX /> Twitter (X)
          </FooterLink>

          <FooterLink href="https://www.facebook.com/livemotogpnet/">
            <BsFacebook /> Facebook
          </FooterLink>

          <FooterLink href="https://tiktok.com/@livemotogp.net">
            <BsTiktok /> TikTok
          </FooterLink>

          <FooterLink href="https://nonton-motogp.blogspot.com/">
            <BsChat /> Kontak
          </FooterLink>

          <FooterLink href="https://nonton-motogp.blogspot.com/">
            <BsLink /> Live Streaming
          </FooterLink>
        </div>

        {/* Menu 2 */}
        <div className="flex flex-col gap-3 text-sm font-medium">
          <FooterLink href="https://t.me/+wz0g7OSf3ic3ODQ1">
            <BsTelegram /> Telegram
          </FooterLink>

          <FooterLink href="https://x.com/nontonmotogp">
            <BsTwitterX /> Twitter (X)
          </FooterLink>

          <FooterLink href="https://www.facebook.com/livemotogpnet/">
            <BsFacebook /> Facebook
          </FooterLink>

          <FooterLink href="https://tiktok.com/@livemotogp.net">
            <BsTiktok /> TikTok
          </FooterLink>

          <FooterLink href="https://nonton-motogp.blogspot.com/">
            <BsChat /> Kontak
          </FooterLink>

          <FooterLink href="https://nonton-motogp.blogspot.com/">
            <BsLink /> Live Streaming
          </FooterLink>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border text-center text-sm text-muted-foreground py-4">
        © {new Date().getFullYear()} LIVEMotoGP. All rights reserved.
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
  >
    {children}
  </Link>
);

export default Footer;
import Link from "next/link";
import AdsArticle from "../../components/AdsArticle";
import AdsBanner from "../../components/AdsBanner";
import CardHome from "../../components/CardHome";
import { CarouselSize } from "../../components/Carousel";
import { BannerLiveMotoGP } from "../../components/BannerLivemotogp";

export default function Home() {
  const images = [
    {
      img: "/images/1.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
    {
      img: "/images/2.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
    {
      img: "/images/3.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
    {
      img: "/images/4.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
    {
      img: "/images/5.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
    {
      img: "/images/6.jpg",
      title: "Live Streaming MotoGP",
      link: "https://zvstreams911.blogspot.com/",
    },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-950">
      <main className="flex min-h-screen  w-full max-w-5xl flex-col items-center justify-between py-1 px-1 bg-white dark:bg-neutral-950 sm:items-start">
        <CarouselSize images={images} />
        <AdsBanner />
        <div className="w-full pt-2 px-2">
          <BannerLiveMotoGP />
        </div>
        <CardHome />
        <div className="mt-1">
          <AdsArticle />
        </div>
      </main>
    </div>
  );
}

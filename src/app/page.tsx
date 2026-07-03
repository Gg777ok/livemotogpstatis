// import Link from "next/link";
// import AdsArticle from "../../components/AdsArticle";
import AdsBanner from "../../components/AdsBanner";
// import CardHome from "../../components/CardHome";
// import { CarouselSize } from "../../components/Carousel";
// import { BannerLiveMotoGP } from "../../components/BannerLivemotogp";
// import { BannerShopeeMotoGP } from "../../components/ShopeeBanner";
import StreamingPage from "../../components/PlayerHome";

export default function Home() {
  // const images = [
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN2Zjjfg9bNB90BtgQeuLQ-076YbnleC8sk-BvWrtEHpuKKnxV1OjpKyDHeeFlPSyiLjwL_JQ5T2GnOm7JXWmJd97xQVfOqugBwMaDsq0-5620iKiZIBZoJGYDQbLf8PJXZ-kveBPir1QtdN9M8-5L1lVtpKdy-nqmqfE7_3djVYEOSQwskCr6IHF6CaA/s1536/ZVStreams%20live%20streaming%20MotoGP.pn",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgofeiiI5l7G3uMWfXe9-weEjtVJ_PHJkYnLizBz7FJ6Df-ba6EMfqFpqriJsQilPlHEizsMCE_a_Tj76ocIA9qA5ErA8EIgST5t8wZopZUSrP41YcYA_9y9IpFgK3uiuza5VXiZCiZyPlxCbRoO0jNtmIPQXG3Ye4MK8XvWiqK1NLbtGDVrMHXCM84hcs/s1346/HINgbYOW4AE1qoe.jpg",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSX_shAiysyyMmExuGZLFxM3vWt6FFXC9Sx4AVVqUNmI78sD9LBqnFfu2jKawLUgc8c1ETrdVXA71tiajDlYweNpFhGGan7OPbNR-LHa4nUAOad1BOGgVETYsSLYDOvE6PTaOK9jt32qnSC9iOGzUq6Sx73DVXBFuNN3uyy-AD1O7EkaLta4g_E6y6R6s/s1500/HAVX_8UXcAAbVMY.jpg",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjug2o2I1gt9vRzDsuFZ_1aADW73jnfB279KC1HpGbTKjOYqBIukZ86eUtWmzUJSkEJLZor22HDq3D2ZeW2ugiWXaRAEjADyY61L-VMdYoDkhwaIV-qKEJyWvaoOdGxrZ40NlgH3pRKTJa-A6s7J5ELfp1gR4Z6_25WgvLORq442iW9klbsRONMmE4z7fM/s1820/HAU4yNZWUAAGhzN.jpg",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwy5wO1ANxmtEnoYPfbmLy3A5M2WSBUHEK3XboBedh7uFN9Xe6j_xgJYHQUEmgxSW3-9N0JHWPCT9LC2umR2vAbUsTEj_h4OQsXKb64uTQkfcjZ8ReT7IB1QA_q2zRISG3lstZl-CxScfIOIt87fpbXxMprF8TL2fU0u77J2k8NOecg69onqrGbTdAfn8/s1200/HIQudZ_WgAAa4r1.jpg",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  //   {
  //     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlXP8f8ktrwrAARJfdEdTpsJjIACiPts0xE6AeyzLSEbRQmRJiPGOsZ7pYNoZjiuLFT4lIMnzYipMChmLTdtz3b469vL8u1tZ03TmRQCjjLDXo7goovzOZ3El_2qZ-Y4q0jiVtLoL2dr5S9bC3FNWviITbLjSs0CuzsiD3spqGcswMzErT5RAmjNR9q4I/s1024/HAv9-gEaAAEDD9t.jfif",
  //     title: "Live Streaming MotoGP",
  //     link: "https://nonton-motogp.blogspot.com/",
  //   },
  // ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-950">
      <main className="flex min-h-screen  w-full max-w-5xl flex-col items-center justify-between py-1 px-1 bg-white dark:bg-neutral-950 sm:items-start">
        <StreamingPage />
        <AdsBanner />
        {/* <CarouselSize images={images} />
        <AdsBanner />
        <div className="w-full pt-2 px-2 space-y-3">
          <BannerLiveMotoGP />
          <BannerShopeeMotoGP />
        </div>
        <CardHome />
        <div className="mt-1">
          <AdsArticle />
        </div> */}
      </main>
    </div>
  );
}

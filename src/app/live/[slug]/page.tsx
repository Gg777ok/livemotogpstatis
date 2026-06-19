import Image from "next/image";
import Link from "next/link";
import { DataStreams } from "../../../../lib/streams";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import PlyrHlsPlayer from "../../../../components/HlsPlayer";
import ClapprPlayer from "../../../../components/ClapprPlayer";
import { BsFacebook, BsTelegram, BsTiktok, BsTwitterX } from "react-icons/bs";
import AlertInfo from "../../../../components/AlertInfo";
import AlertWarning from "../../../../components/AlertWarning";
import AdsArticle from "../../../../components/AdsArticle";
import { BannerLiveMotoGP } from "../../../../components/BannerLivemotogp";
import { BannerShopeeMotoGP } from "../../../../components/ShopeeBanner";

interface Props {
  params: { slug: string };
}
export async function generateStaticParams() {
  return DataStreams.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = DataStreams.find((e) => e.slug === slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.excerpt,

    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `https://livemotogp.com/live/${data.slug}`,
      siteName: "LIVEMotoGP",
      title: data.title,
      description: data.excerpt,
      images: [
        {
          url: data.image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [data.image || "/og-image.png"],
    },
  };
}
export default async function MotoGP({ params }: Props) {
  const { slug } = await params;
  const data = DataStreams.find((e) => e.slug === slug);
  if (!data) return notFound();

  return (
    <main className="container max-w-5xl mx-auto py-1 mb-20 px-4">
      <div className="mb-2">
        <BannerShopeeMotoGP />
      </div>
      <div className=" space-y-3">
        <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-black">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-contain "
            loading="eager"
          />
        </div>

        <header className="space-y-3">
          <span className="text-sm text-primary font-medium uppercase">
            {data.category}
          </span>

          <h1 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6 leading-tight">
            {data.title}
          </h1>

          <div className="text-sm text-muted-foreground space-x-3">
            <span>{data.author}</span>
            <span>•</span>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
        </header>
        <AlertInfo message={data.excerpt} title={"PERHATIAN"} />
        <AlertWarning
          message={
            <>
              <div>
                Link streaming{" "}
                <a
                  href="https://livemotogp.com/live/live-streaming-motogp-spotv-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <span className="text-green-400 font-bold bg-green-400/10 px-0 py-1 rounded">
                    https://livemotogp.com/live/live-streaming-motogp-spotv-2
                  </span>
                </a>{" "}
                direkomendasikan untuk kualitas streaming yang lebih lancar,
                namun proses loading player awal dapat memakan waktu sekitar
                20–40 detik (maksimal ±1 menit).
              </div>

              <div>
                Alternatif streaming tersedia di{" "}
                <a
                  href="https://zvstreams911.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline  text-red-500"
                >
                  <span className="text-green-400 font-bold bg-green-400/10 px-0 py-1 rounded">
                  LIVEMotoGP.NET
                  </span>
                </a>
              </div>
            </>
          }
          title={"PERHATIAN"}
        />
        <AdsArticle />
        <BannerLiveMotoGP link="https://zvstreams911.blogspot.com/" />
        <AlertInfo
          message="▶️ Silakan tekan tombol Play di layar untuk mulai menonton. Player akan membutuhkan waktu sekitar 20–40 detik (maksimal 1 menit)  untuk memuat, jadi mohon tunggu sebentar hingga video berjalan dengan lancar."
          title={"PERHATIAN"}
        />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {data.type === "dash" ? (
            <>
              <ClapprPlayer
                drmId={data.links[0].id}
                drmKey={data.links[0].key}
                url={data.links[0].url}
                poster={data.image}
              />
            </>
          ) : (
            <>
              <PlyrHlsPlayer url={data.links[0].url} autoPlay={true} />
            </>
          )}
        </div>

        <div className="py-3">
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
            <Link
              href="https://s.shopee.co.id/AUr1kC1KwZ"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 1
              </Button>
            </Link>

            <Link
              href="https://s.shopee.co.id/50W5C16I8g"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 2
              </Button>
            </Link>

            <Link
              href="https://s.shopee.co.id/3LNrEoplqb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 3
              </Button>
            </Link>

            <Link
              href="https://s.shopee.co.id/AKXbZnvM49"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 4
              </Button>
            </Link>
            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 5
              </Button>
            </Link>
            <Link
              href="https://welcomingexpulsion.com/pc91vdji?key=26074ca280654af24ec3252d5bef89eb"
              target="_blank"
              className="w-full lg:w-auto"
            >
              <Button className="w-full" variant="destructive">
                SERVER 6
              </Button>
            </Link>
          </div>
          <div className="py-3">
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
              <Link
                href="https://x.com/nontonmotogp"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTwitterX />
                  Twitter (X)
                </Button>
              </Link>

              <Link
                href="https://t.me/+CBkG1-074V80Mjdl"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTelegram />
                  Telegram
                </Button>
              </Link>
              <Link
                href="https://www.facebook.com/livemotogpnet/"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsFacebook />
                  Facebook
                </Button>
              </Link>
              <Link
                href="https://tiktok.com/@livemotogp.net"
                target="_blank"
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  variant="default"
                >
                  <BsTiktok />
                  Tiktok
                </Button>
              </Link>
            </div>
          </div>
          <div className="py-3 mb-3">
            <Link href="/">
              <Button variant="default">Kembali</Button>
            </Link>
          </div>
          <div className="mb-2">
            <BannerShopeeMotoGP />
          </div>
        </div>
      </div>
    </main>
  );
}

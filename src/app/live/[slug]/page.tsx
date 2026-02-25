import Image from "next/image";
import Link from "next/link";
import { DataStreams } from "../../../../lib/streams";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import PlyrHlsPlayer from "../../../../components/HlsPlayer";
import ClapprPlayer from "../../../../components/ClapprPlayer";

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
  };
}
export default async function MotoGP({ params }: Props) {
  const { slug } = await params;
  const data = DataStreams.find((e) => e.slug === slug);
  if (!data) return notFound();
  console.log({title: data.title});
console.log({link: data.links.url});

  return (
    <main className="container max-w-3xl mx-auto py-12 mb-20 px-10">
      <div className=" space-y-3">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        <header className="space-y-3">
          <span className="text-sm text-primary font-medium uppercase">
            {data.category}
          </span>

          <h1 className="text-4xl font-bold leading-tight">{data.title}</h1>

          <div className="text-sm text-muted-foreground space-x-3">
            <span>{data.author}</span>
            <span>•</span>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
        </header>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {data.excerpt}
        </p>
        <div className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold">
          Tonton Tanpa Iklan di LIVEMotoGP.NET
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {data.type === "dash" ? (
            <>
              <ClapprPlayer
                drmId={data.links.id}
                drmKey={data.links.key}
                url={data.links.url}
                poster={data.image}
              />
            </>
          ) : (
            <>
              <PlyrHlsPlayer url={data.links.url} autoPlay={true} />
            </>
          )}
        </div>
        <div className="py-2">
          <Link href={"/"}>
            <Button variant={"default"}>Kembali</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

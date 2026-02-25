import Image from "next/image";
import Link from "next/link";
import { articles } from "../lib/artikel";
import { DataStreams } from "../lib/streams";

export default function CardHome() {
  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">MotoGP Live Streaming</h1>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {DataStreams.map((article) => (
          <Link
            key={article.id}
            href={`/live/${article.slug}`}
            className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
          >
            <div className="relative aspect-video">
              <div className="relative w-full aspect-[4/3] sm:aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 50vw,
           (max-width: 1024px) 50vw,
           33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <span className="text-[10px] md:text-xs text-primary font-medium uppercase tracking-wide">
                {article.category}
              </span>

              <h2 className="text-sm md:text-base font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>

              <p className="text-[10px] text-muted-foreground">
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

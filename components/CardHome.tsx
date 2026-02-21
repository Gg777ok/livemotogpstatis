import Image from "next/image"
import Link from "next/link"
import { articles } from "../lib/artikel"

export default function CardHome() {
  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">MotoGP 2026 News</h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-video">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 space-y-3">
              <span className="text-xs text-primary font-medium uppercase">
                {article.category}
              </span>

              <h2 className="text-lg font-semibold leading-snug">
                {article.title}
              </h2>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>

              <p className="text-xs text-muted-foreground">
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
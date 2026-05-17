import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LiveMotoGP",
    short_name: "MotoGP",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtDaqI1kAcEOvyeACrUGkKphQE3OP6gupmyQY780EhdAboLHQHRAq5FsnzFLPSnI2BLC1fA9d3QjomMexZ_zoeFXTDSS8kv7rP16LdO95xlGoFqjyGMzDhdd-Sr08EjgiRAc75IXOjtZAooq6SdsQboKxJUSmr29VKMKTn8e85RCHmYZRrKuUEPnDloMk/s512/og-image.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}
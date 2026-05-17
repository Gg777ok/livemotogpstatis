// src/app/rss.xml/route.ts

import { DataStreams } from "../../../lib/streams"

export async function GET() {
  const baseUrl = "https://livemotogp.com"

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>LiveMotoGP</title>
      <link>${baseUrl}</link>
      <description>Live Streaming MotoGP</description>

      ${DataStreams.map(
        (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/live/${post.slug}</link>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
      `
      ).join("")}
    </channel>
  </rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
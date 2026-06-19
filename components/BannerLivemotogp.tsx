import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, Send } from "lucide-react"

export function BannerLiveMotoGP({ link = "https://nonton-motogp.blogspot.com/"}: {link?:string}) {
  return (
    <Card className="relative w-full overflow-hidden rounded-2xl border-0 shadow-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 via-cyan-500 to-indigo-900 opacity-90" />

      <CardContent className="relative z-10 flex flex-col gap-3 p-6 text-white">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <PlayCircle className="h-5 w-5 shrink-0" />
          Live Streaming MotoGP - Live MotoGP - Nonton MotoGP - MotoGP Live
        </h1>

        <p className="text-sm opacity-90">
          Jangan lewatkan balapan seru hari ini. Klik tombol di bawah untuk mulai menonton sekarang.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button
            asChild
            className="bg-white font-semibold text-indigo-600 transition hover:bg-gray-100"
          >
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Streaming MotoGP"
            >
              ▶ Nonton Sekarang
            </Link>
          </Button>

          <Button
            asChild
            className="bg-[#229ED9] text-white font-semibold transition hover:opacity-90"
          >
            <Link
              href="https://t.me/+CBkG1-074V80Mjdl"
              target="_blank"
              rel="noopener noreferrer"
              title="Join Telegram MotoGP"
            >
              <Send className="mr-2 h-4 w-4" />
              JOIN TELEGRAM
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
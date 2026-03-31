import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function BannerLiveMotoGP() {
  return (
    <Card className="relative w-full overflow-hidden rounded-2xl border-0 shadow-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 via-cyan-500 to-indigo-900 opacity-90" />

      <CardContent className="relative z-10 flex flex-col gap-3 p-6 text-white">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <PlayCircle className="w-5 h-5" />
          Live Streaming MotoGP
        </div>

        <p className="text-sm opacity-90">
          Jangan lewatkan balapan seru hari ini. Klik tombol di bawah untuk mulai menonton sekarang.
        </p>

        <div>
          <Button
            asChild
            className="bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
          >
            <Link
              href="https://livemotogp.net"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Streaming MotoGP"
            >
              ▶ Nonton Sekarang
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
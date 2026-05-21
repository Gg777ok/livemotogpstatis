import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, ShoppingCart } from "lucide-react";

type ProductItem = {
  title: string;
  link: string;
  price: string;
};

export function BannerShopeeMotoGP({
  products = [
    {
      title: "MotoGP 26 Game Edition PC/Laptop",
      link: "https://s.shopee.co.id/8pinn91wRV",
      price: "Rp 34.900",
    },
    {
      title: "MotoGP 26/25/24/23 Game Edition PC/Laptop",
      link: "https://s.shopee.co.id/7Ku00RWDfl",
      price: "Rp 25.000",
    },
    {
      title: "Kaos Ducati Marc Marquez",
      link: "https://s.shopee.co.id/5q5CE2v9zw",
      price: "Rp 135.000",
    },
    {
      title: "Kaos Veda Ega (Official Style)",
      link: "https://s.shopee.co.id/9Kf4OJFq8B",
      price: "Rp 78.000",
    },
  ],
}: {
  products?: ProductItem[];
}) {
  return (
    <Card className="relative w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-lg">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent dark:from-orange-500/20 dark:via-red-500/20" />

      <CardContent className="relative z-10 flex flex-col gap-4 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Gamepad2 className="h-5 w-5 shrink-0 text-orange-500" />
          MotoGP Collection{" "}
          <span className="text-xs text-orange-500">(Shopee)</span>
        </h2>

        <p className="text-sm text-muted-foreground">
          Rasakan dunia MotoGP dalam game seru dan koleksi kaos racing stylish.
          Cocok untuk fans MotoGP yang ingin bermain, tampil sporty, dan
          menunjukkan passion balap di setiap kesempatan.
        </p>

        {/* LIST PRODUK */}
        <div className="flex flex-col gap-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 rounded-lg border p-3 bg-background/50"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-green-500 font-semibold">
                  {item.price}
                </span>
              </div>

              <Button
                asChild
                size="sm"
                className="!bg-orange-500 !text-white hover:!bg-orange-600 shadow-sm"
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Beli
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

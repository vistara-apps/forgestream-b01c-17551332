
import "./globals.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ForgeStream",
  description: "Unlock exclusive creator communities with token-gated access and micro-subscriptions",
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      button: {
        title: "Launch ForgeStream",
        action: {
          type: "launch_frame",
          name: "ForgeStream",
          url: process.env.NEXT_PUBLIC_URL,
          splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
          splashBackgroundColor: "hsl(220 12% 96%)",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

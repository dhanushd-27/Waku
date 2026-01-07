import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";

import { Providers } from "./providers";
import "./globals.css";

const figtree = localFont({
  src: [
    {
      path: "../fonts/Figtree/Figtree-VariableFont_wght.ttf",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "../fonts/Figtree/Figtree-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "300 900",
    },
  ],
  display: "swap",
});

const alrobold = localFont({
  src: "../fonts/alro-bold.ttf",
  variable: "--font-alrobold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waku",
  description: "Waku application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} ${alrobold.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="waku-theme"
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

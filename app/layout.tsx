import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../fonts/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
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
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

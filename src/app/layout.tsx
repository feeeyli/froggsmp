import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans as FontSans, Pixelify_Sans } from "next/font/google";
import fontLocal from "next/font/local";
import "../styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const fontMinecraft = fontLocal({
  src: "../assets/minecraft.ttf",
  variable: "--font-minecraft",
});

export const fontPixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-pixel",
});

export const fontPixel2 = fontLocal({
  src: "../assets/pixel2.ttf",
  variable: "--font-pixel2",
});

export const metadata: Metadata = {
  title: "FroggSMP",
  description: "FroggSMP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth scroll-pt-[8.5rem] sm:scroll-pt-[6.5rem]"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-pixel antialiased",
          fontSans.variable,
          fontPixel.variable,
          fontPixel2.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

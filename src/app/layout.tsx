import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito as FontSans, Pixelify_Sans } from "next/font/google";
import fontLocal from "next/font/local";
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

const fontPixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-pixel",
});

const fontPixel2 = fontLocal({
  src: "../assets/minecraftia.ttf",
  variable: "--font-minecraftia",
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

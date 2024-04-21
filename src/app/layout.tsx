import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const soehne = localFont({
  src: [
    {
      path: "_fonts/TestSöhne-Leicht.otf",
      weight: "400",
    },
    {
      path: "_fonts/TestSöhne-Buch.otf",
      weight: "500",
    },
    {
      path: "_fonts/TestSöhne-Kräftig.otf",
      weight: "600",
    },
    {
      path: "_fonts/TestSöhne-Halbfett.otf",
      weight: "700",
    },
  ],
  variable: "--font-soehne",
});

export const metadata: Metadata = {
  title: "Dynamic Island Clone",
  description:
    "A Dynamic Island Clone for the web using Next, Framer Motiona and TailwindCSS. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={soehne.className}>
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

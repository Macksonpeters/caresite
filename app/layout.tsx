import type { Metadata, Viewport } from "next";
import { Domine, Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/hero/header";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import { Providers } from "../hooks/provider";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

const domine = Domine({
  weight: ["500", "600", "400", "700"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Joyce Care Home",
  description: "An elderly care home full of love",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={domine.className}>
        <Providers>
          <main className=" flex flex-col mx-auto items-center justify-center overflow-x-hidden bg-[#fafafe] ">
            <Header />
            <div className="w-full bg-[#421910]">
              <Navigation />
            </div>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}

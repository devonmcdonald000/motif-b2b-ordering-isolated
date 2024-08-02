import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/global/Header";
import { ZustandStoreRehydrate } from "@/stores/rehydrate";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Motif B2B Ordering",
  description: "Local Setup for B2B Ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen overflow-x-hidden">
          <Header />
          <div className="px-[33px] max-w-5xl mx-auto">
            {children}
            <ZustandStoreRehydrate />
          </div>
        </div>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/global/Header";
import { ZustandStoreRehydrate } from "@/stores/rehydrate";
import '@aws-amplify/ui-react/styles.css';
import AuthenticationProvider from "./(components)/global/AuthProvider/AuthenticationProvider";
import SignOut from "./(components)/global/SignOut";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
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
    <html lang="en" className={poppins.variable}>
      <body>
          <main>
            <div className="min-h-screen overflow-x-hidden relative">
              <Header />
              <AuthenticationProvider>
                <SignOut />
                <div className="max-w-5xl mx-auto">
                  {children}
                  <ZustandStoreRehydrate />
                </div>
              </AuthenticationProvider>
            </div>
          </main>
      </body>
    </html>
  );
}

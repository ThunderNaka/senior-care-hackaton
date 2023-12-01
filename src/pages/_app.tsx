import { type AppType } from "next/dist/shared/lib/utils";
import MainLayout from "@/layouts/MainLayout";

import "@/styles/globals.css";

import { Overpass as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Serenity: AppType = ({ Component, pageProps }) => {
  return (
    <div
      className={cn(
        "bg-background min-h-screen font-sans antialiased",
        fontSans.variable,
      )}
    >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
};

export default Serenity;

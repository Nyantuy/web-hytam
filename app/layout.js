import "./globals.css";
import Header from "@/components/Header";
import { Michroma } from "next/font/google";

const michromaSans = Michroma({
  weight:"400",
  style: "normal",
  subsets: ['latin'],
  display: "swap"
})

export const metadata = {
  title: "Under\\Ground | WarungHytam",
  description: "WarungHytam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${michromaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

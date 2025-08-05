// Next
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// CSS
import "./globals.css"
// Components
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Webimob",
  description: "Corretora de Seguros Imobiliários",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

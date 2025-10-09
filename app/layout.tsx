import type React from "react"
import type { Metadata } from "next"
import { Castoro, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
})

const castoro = Castoro({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-castoro",
})

export const metadata: Metadata = {
  title: "Anne Trulyta",
  description: "Portfolio website of Anne Trulyta",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${castoro.variable} scroll-smooth`}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import CustomCursor from "@/components/custom-cursor"
import { LanguageProvider } from "@/contexts/language-context"
import { AudienceProvider } from "@/contexts/audience-context"

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const display = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Gonza Tarno — Product Designer",
  description: "Product Designer creando experiencias humanas. Finy, Botmaker, FitCoach.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark ${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-fg antialiased grain">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <AudienceProvider>
              <ScrollToTop />
              <CustomCursor />
              {children}
            </AudienceProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

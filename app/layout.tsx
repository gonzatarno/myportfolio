import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import CustomCursor from "@/components/custom-cursor"
import { LanguageProvider } from "@/contexts/language-context"
import { AudienceProvider } from "@/contexts/audience-context"

// Configurar la fuente Poppins con los pesos que necesitamos
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Portfolio de Gonza",
  description: "Portfolio profesional de diseño y desarrollo",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="dark" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} bg-[#231955] text-white`}>
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
  );
}



import './globals.css'
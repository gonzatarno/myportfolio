"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { useLanguage } from "@/contexts/language-context"

type Audience = "recruiters" | "designers"

interface AudienceContextType {
  audience: Audience
  setAudience: (audience: Audience) => void
  getIntroText: () => string
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined)

// Textos de introducción en ambos idiomas
const introTexts = {
  es: {
    recruiters:
      "Licenciado en Diseño Multimedia e Interacción con más de 4 años de experiencia en Product Design. Especializado en crear soluciones innovadoras que mejoran la experiencia del usuario y logran objetivos de negocio.",
    designers:
      "Product Designer apasionado por crear experiencias de usuario que hagan sonreír. Me encanta explorar nuevas ideas y colaborar en proyectos que desafíen los límites del diseño.",
  },
  en: {
    recruiters:
      "Multimedia and Interaction Design graduate with more than 4 years of experience in Product Design. Specialized in creating innovative solutions that enhance user experience and achieve business goals.",
    designers:
      "Passionate Product Designer focused on creating user experiences that make people smile. I love exploring new ideas and collaborating on projects that push the boundaries of design.",
  },
}

export const AudienceProvider = ({ children }: { children: ReactNode }) => {
  const [audience, setAudience] = useState<Audience>("recruiters")
  const { language } = useLanguage()

  const getIntroText = () => {
    return introTexts[language][audience]
  }

  return <AudienceContext.Provider value={{ audience, setAudience, getIntroText }}>{children}</AudienceContext.Provider>
}

export const useAudience = () => {
  const context = useContext(AudienceContext)
  if (context === undefined) {
    throw new Error("useAudience must be used within an AudienceProvider")
  }
  return context
}


"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy, Check, Mail, Linkedin, Dribbble } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  const [copiedState, setCopiedState] = useState<{
    email: boolean
    linkedin: boolean
    behance: boolean
  }>({
    email: false,
    linkedin: false,
    behance: false,
  })

  const contactInfo = {
    email: "gonzalotarnofsky@gmail.com",
    linkedin: "https://www.linkedin.com/in/gonzalotarnofsky/",
    behance: "https://www.behance.net/gonzatarno",
  }

  const copyToClipboard = async (text: string, type: "email" | "linkedin" | "behance") => {
    try {
      await navigator.clipboard.writeText(text)

      // Set the copied state for this specific item
      setCopiedState((prev) => ({ ...prev, [type]: true }))

      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedState((prev) => ({ ...prev, [type]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image side - no container */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[400px] aspect-[3/4]">
            <Image src="/images/gonza-figure.png" alt="Gonza Figure" fill className="object-contain" priority />
          </div>
        </div>

        {/* Contact info side */}
        <div className="bg-[#2a2259] p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">{t("contact.title")}</h2>
          <p className="mb-8 text-white">{t("contact.subtitle")}</p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="bg-purple/30 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/70">Email</p>
                <p className="text-white font-medium">{contactInfo.email}</p>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.email, "email")}
                className="p-2 rounded-full bg-purple/20 hover:bg-purple/40 transition-colors"
                aria-label="Copy email"
              >
                {copiedState.email ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 group">
              <div className="bg-purple/30 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/70">LinkedIn</p>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-purple-light transition-colors"
                >
                  linkedin.com/in/gonzalotarnofsky
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.linkedin, "linkedin")}
                className="p-2 rounded-full bg-purple/20 hover:bg-purple/40 transition-colors"
                aria-label="Copy LinkedIn URL"
              >
                {copiedState.linkedin ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </button>
            </div>

            {/* Behance */}
            <div className="flex items-center gap-4 group">
              <div className="bg-purple/30 p-3 rounded-full">
                <Dribbble className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/70">Behance</p>
                <a
                  href={contactInfo.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-purple-light transition-colors"
                >
                  behance.net/gonzatarno
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.behance, "behance")}
                className="p-2 rounded-full bg-purple/20 hover:bg-purple/40 transition-colors"
                aria-label="Copy Behance URL"
              >
                {copiedState.behance ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


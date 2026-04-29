"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Copy, Mail, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import BehanceIcon from "@/components/behance-icon"

export default function ContactSectionAlt() {
  const { t } = useLanguage()
  const [emailCopied, setEmailCopied] = useState(false)
  const [isEmailHovered, setIsEmailHovered] = useState(false)

  const contactInfo = {
    email: "gonzalotarnofsky@gmail.com",
    linkedin: "https://www.linkedin.com/in/gonzalotarnofsky/",
    behance: "https://www.behance.net/gonzatarno",
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setEmailCopied(true)

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  // Reset copied state when mouse leaves the card
  useEffect(() => {
    if (!isEmailHovered && emailCopied) {
      const timer = setTimeout(() => {
        setEmailCopied(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isEmailHovered, emailCopied])

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Image side - no container, full width on mobile */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-4">
          <Image
            src="/images/gonza-toy-figure.png"
            alt="Gonza Figure"
            width={400}
            height={600}
            className="w-auto h-auto object-contain"
            priority
          />
        </div>

        {/* Contact info side */}
        <div className="w-full md:w-3/5 p-3">
          <div className="bg-[#2a2259] p-3 md:p-4 rounded-xl w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">{t("contact.title")}</h2>
            <p className="mb-4 md:mb-8 text-sm md:text-base text-white">{t("contact.subtitle")}</p>

            <div className="space-y-3 md:space-y-6">
              {/* Email */}
              <div
                className={`group p-3 md:p-4 rounded-lg transition-colors relative cursor-pointer ${
                  emailCopied ? "bg-[#A453EB]" : "bg-bg hover:bg-[#2f2470]"
                }`}
                onClick={copyEmail}
                onMouseEnter={() => setIsEmailHovered(true)}
                onMouseLeave={() => setIsEmailHovered(false)}
              >
                {emailCopied ? (
                  <p className="text-sm md:text-base text-white font-medium text-center py-1 md:py-2">
                    ¡Email copiado!
                  </p>
                ) : (
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-purple-light" />
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-white/70">Email</p>
                      <p className="text-sm md:text-base text-white font-medium truncate">{contactInfo.email}</p>
                    </div>
                    <Copy className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                )}
              </div>

              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-3 md:p-4 bg-bg rounded-lg hover:bg-[#2f2470] transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-purple-light" />
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-white/70">LinkedIn</p>
                    <p className="text-sm md:text-base text-white font-medium truncate">
                      linkedin.com/in/gonzalotarnofsky
                    </p>
                  </div>
                </div>
              </a>

              {/* Behance */}
              <a
                href={contactInfo.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-3 md:p-4 bg-bg rounded-lg hover:bg-[#2f2470] transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <BehanceIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-light" />
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-white/70">Behance</p>
                    <p className="text-sm md:text-base text-white font-medium truncate">behance.net/gonzatarno</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


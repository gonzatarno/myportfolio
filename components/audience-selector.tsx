"use client"

import { useAudience } from "@/contexts/audience-context"

export default function AudienceSelector() {
  const { audience, setAudience } = useAudience()

  return (
    <div className="flex items-center gap-6 mb-4">
      <button
        onClick={() => setAudience("recruiters")}
        className={`text-sm transition-colors hover:text-white ${
          audience === "recruiters" ? "text-white" : "text-gray-400"
        }`}
      >
        Recruiters
      </button>
      <button
        onClick={() => setAudience("designers")}
        className={`text-sm transition-colors hover:text-white ${
          audience === "designers" ? "text-white" : "text-gray-400"
        }`}
      >
        Designers
      </button>
    </div>
  )
}


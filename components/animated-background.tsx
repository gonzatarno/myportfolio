"use client"

import BackgroundWaves from "./background-waves"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <BackgroundWaves />
    </div>
  )
}


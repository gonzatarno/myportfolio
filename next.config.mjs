let userConfig = undefined;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async rewrites() {
    return [
      // Iframe del prototipo Botmaker: redirige paths absolutos del bundle al subpath
      { source: "/agent-avatar-nobg.png", destination: "/prototipo-botmaker/agent-avatar-nobg.png" },
      { source: "/agent-construction.png", destination: "/prototipo-botmaker/agent-construction.png" },
      { source: "/ai-agent-icon.png", destination: "/prototipo-botmaker/ai-agent-icon.png" },
      { source: "/avatar-ai.svg", destination: "/prototipo-botmaker/avatar-ai.svg" },
      { source: "/logo-bigpizza.jpeg", destination: "/prototipo-botmaker/logo-bigpizza.jpeg" },
      { source: "/mcp-logo.png", destination: "/prototipo-botmaker/mcp-logo.png" },
    ]
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;


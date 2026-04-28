import React from "react";
import { PlusIcon } from "lucide-react";

function LogoCard({ logo, className = "", children }) {
  return (
    <div
      className={`flex items-center justify-center bg-black/30 px-4 py-8 md:p-8 ${className}`}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 brightness-0 invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}

export default function LogoCloudSection() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-center font-medium text-lg text-white/70 tracking-tight md:text-2xl">
          Trusted by teams building next-gen automation
        </h2>
        <div className="relative grid grid-cols-2 border border-white/10 md:grid-cols-4">
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/10" />

          <LogoCard
            className="relative border-r border-b border-white/10 bg-white/5"
            logo={{
              src: "https://svgl.app/library/nvidia-wordmark-light.svg",
              alt: "Nvidia Logo",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-white/60"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="border-b border-white/10 md:border-r"
            logo={{
              src: "https://svgl.app/library/supabase_wordmark_light.svg",
              alt: "Supabase Logo",
            }}
          />

          <LogoCard
            className="relative border-r border-b border-white/10 md:bg-white/5"
            logo={{
              src: "https://svgl.app/library/github_wordmark_light.svg",
              alt: "GitHub Logo",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-white/60"
              strokeWidth={1}
            />
            <PlusIcon
              className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-white/60 md:block"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="relative border-b border-white/10 bg-white/5"
            logo={{
              src: "https://svgl.app/library/openai_wordmark_light.svg",
              alt: "OpenAI Logo",
            }}
          />

          <LogoCard
            className="relative border-r border-b border-white/10 md:border-b-0"
            logo={{
              src: "https://svgl.app/library/turso-wordmark-light.svg",
              alt: "Turso Logo",
            }}
          >
            <PlusIcon
              className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-white/60 md:hidden"
              strokeWidth={1}
            />
          </LogoCard>

          <LogoCard
            className="border-b border-white/10 md:border-r md:border-b-0 bg-white/5"
            logo={{
              src: "https://svgl.app/library/clerk-wordmark-light.svg",
              alt: "Clerk Logo",
            }}
          />

          <LogoCard
            className="border-r border-white/10"
            logo={{
              src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
              alt: "Claude AI Logo",
            }}
          />

          <LogoCard
            className="bg-white/5"
            logo={{
              src: "https://svgl.app/library/vercel_wordmark.svg",
              alt: "Vercel Logo",
            }}
          />

          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/10" />
        </div>
      </div>
    </section>
  );
}

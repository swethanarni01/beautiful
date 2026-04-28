import React from "react";
import { Layout, Pointer, Zap } from "lucide-react";

const tabs = [
  {
    value: "tab-1",
    icon: <Zap className="h-4 w-4 shrink-0" />,
    label: "Boost Throughput",
    content: {
      badge: "Modern Tactics",
      title: "Make your operations a true standout.",
      description:
        "Deploy Atlas to handle repetitive workflows while humans focus on higher-value work.",
      buttonText: "See Plans",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      imageAlt: "placeholder",
    },
  },
  {
    value: "tab-2",
    icon: <Pointer className="h-4 w-4 shrink-0" />,
    label: "Higher Reliability",
    content: {
      badge: "Expert Features",
      title: "Consistency at scale.",
      description:
        "Atlas delivers repeatable performance with real-time monitoring and adaptive control.",
      buttonText: "See Tools",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
      imageAlt: "placeholder",
    },
  },
  {
    value: "tab-3",
    icon: <Layout className="h-4 w-4 shrink-0" />,
    label: "Stunning Layouts",
    content: {
      badge: "Elite Solutions",
      title: "Build an advanced robotics stack.",
      description:
        "Integrate perception, planning, and fleet ops with a unified control plane.",
      buttonText: "See Options",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
      imageAlt: "placeholder",
    },
  },
];

export default function FeatureTabsSection() {
  const [active, setActive] = React.useState(tabs[0].value);
  const current = tabs.find((t) => t.value === active) || tabs[0];

  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            Atlas platform
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            A collection of robotics building blocks.
          </h2>
          <p className="text-white/70">
            Perception, autonomy, and fleet orchestration built for real deployments.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActive(tab.value)}
              className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active === tab.value
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white/5 p-6 lg:p-16 border border-white/10">
          <div className="grid place-items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 w-fit">
                {current.content.badge}
              </div>
              <h3 className="text-3xl font-semibold lg:text-5xl">
                {current.content.title}
              </h3>
              <p className="text-white/70 lg:text-lg">
                {current.content.description}
              </p>
              <button className="mt-2.5 w-fit gap-2 rounded-full bg-white text-black px-5 py-2 text-sm font-semibold">
                {current.content.buttonText}
              </button>
            </div>
            <img
              src={current.content.imageSrc}
              alt={current.content.imageAlt}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

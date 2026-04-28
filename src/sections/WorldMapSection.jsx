import React, { useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

function projectPoint(lat, lng) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

function createCurvedPath(start, end) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

const dots = [
  {
    start: { lat: 37.7749, lng: -122.4194, label: "SF" },
    end: { lat: 40.7128, lng: -74.006, label: "NYC" },
  },
  {
    start: { lat: 51.5072, lng: -0.1276, label: "London" },
    end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
  },
  {
    start: { lat: 35.6895, lng: 139.6917, label: "Tokyo" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
];

export default function WorldMapSection() {
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#FFFFFF40",
      shape: "circle",
      backgroundColor: "#0c0414",
    });
  }, []);

  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold">Global fleet visibility</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Track deployments and monitor performance across regions with real-time
            telemetry and operational reporting.
          </p>
        </div>
        <div className="mt-10 w-full aspect-[2/1] rounded-2xl relative border border-white/10 bg-black/40 overflow-hidden">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
            alt="world map"
            draggable={false}
          />
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full absolute inset-0 pointer-events-none select-none"
          >
            {dots.map((dot, i) => {
              const startPoint = projectPoint(dot.start.lat, dot.start.lng);
              const endPoint = projectPoint(dot.end.lat, dot.end.lng);
              return (
                <g key={`path-${i}`}>
                  <motion.path
                    d={createCurvedPath(startPoint, endPoint)}
                    fill="none"
                    stroke="url(#path-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.4 * i, ease: "easeOut" }}
                  />
                </g>
              );
            })}

            <defs>
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="5%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {dots.map((dot, i) => {
              const startPoint = projectPoint(dot.start.lat, dot.start.lng);
              const endPoint = projectPoint(dot.end.lat, dot.end.lng);
              return (
                <g key={`points-${i}`}>
                  {[startPoint, endPoint].map((pt, idx) => (
                    <g key={`${i}-${idx}`}>
                      <circle cx={pt.x} cy={pt.y} r="2" fill="#38bdf8" />
                      <circle cx={pt.x} cy={pt.y} r="2" fill="#38bdf8" opacity="0.5">
                        <animate
                          attributeName="r"
                          from="2"
                          to="8"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.5"
                          to="0"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

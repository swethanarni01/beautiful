import React, { Suspense, lazy } from "react";
import Card from "../ui/Card.jsx";
import Spotlight from "../ui/Spotlight.jsx";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default function SplineHero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <Card className="w-full h-[520px] bg-black/[0.96] relative overflow-hidden border border-white/10">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="flex h-full flex-col md:flex-row">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D Robotics
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your interface to life with real-world 3D simulations of Atlas. Showcase
              tasks, environments, and performance in a single immersive view.
            </p>
          </div>
          <div className="flex-1 relative min-h-[260px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}

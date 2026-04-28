import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function CardPattern({ mouseX, mouseY, randomString }) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

function EvervaultCard({ text }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1200));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1200));
  }

  return (
    <div className="p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative">
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EvervaultSection() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Secure control layer for autonomous fleets.
          </h2>
          <p className="mt-4 text-white/70">
            Atlas operates within strict safety envelopes and audit trails. Every action is
            logged and reversible, enabling confident deployment in mixed human environments.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm">
            Watch me hover
          </div>
        </div>
        <div className="border border-white/20 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] rounded-3xl">
          <div className="absolute h-6 w-6 -top-3 -left-3 border border-white/30 rounded-full" />
          <div className="absolute h-6 w-6 -bottom-3 -left-3 border border-white/30 rounded-full" />
          <div className="absolute h-6 w-6 -top-3 -right-3 border border-white/30 rounded-full" />
          <div className="absolute h-6 w-6 -bottom-3 -right-3 border border-white/30 rounded-full" />

          <EvervaultCard text="SAFE" />

          <h3 className="mt-4 text-sm font-light text-white">
            Hover over this card to reveal the adaptive safety mesh.
          </h3>
          <p className="text-sm border font-light border-white/20 rounded-full mt-4 text-white px-2 py-0.5">
            Security envelope
          </p>
        </div>
      </div>
    </section>
  );
}

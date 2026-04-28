import React from "react";
import { Paperclip, Sparkles } from "lucide-react";

export default function Hero1() {
  return (
    <section className="min-h-screen bg-[#0c0414] text-white flex flex-col relative overflow-x-hidden">
      {/* Background gradient beams */}
      <div className="flex gap-[10rem] -rotate-[20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] -skew-x-[40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
      </div>
      <div className="flex gap-[10rem] -rotate-[20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] -skew-x-[40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[20rem] bg-gradient-to-r from-white to-blue-300" />
      </div>
      <div className="flex gap-[10rem] -rotate-[20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] -skew-x-[40deg] opacity-50">
        <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-blue-300" />
        <div className="w-[10rem] h-[30rem] bg-gradient-to-r from-white to-blue-300" />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 relative z-[1]">
        <div className="flex items-center gap-2">
          <img src="http://hextaui.com/logo.svg" width={30} height={30} alt="Logo" />
          <div className="font-bold text-md">Atlas Robotics</div>
        </div>
        <button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold">
          Request a Pilot
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-[1]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center">
            <div className="bg-[#1c1528] rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-4">
              <span className="text-xs flex items-center gap-2">
                <span className="bg-black p-1 rounded-full">🥳</span>
                Introducing Atlas Early Access
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight">Deploy humanoid robots in weeks.</h1>

          <p className="text-md text-white/75">
            Atlas is a practical humanoid built for warehouses, light manufacturing, and labs — with staged autonomy and safety-first controls.
          </p>

          <div className="relative max-w-2xl mx-auto w-full">
            <div className="bg-[#1c1528] rounded-full p-3 flex items-center">
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all" aria-label="Attach">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all" aria-label="Sparkles">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </button>
              <input
                type="text"
                placeholder="What task should Atlas learn first?"
                className="bg-transparent flex-1 outline-none text-gray-300 pl-4"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Case picking
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Palletization
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Kitting
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Lab handling
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
              Safety validation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

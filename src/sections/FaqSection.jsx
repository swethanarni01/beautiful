import React from "react";

const questions = [
  {
    id: "item-1",
    title: "What is Atlas?",
    content:
      "Atlas is a humanoid robotics platform designed for warehouse, manufacturing, and lab workflows.",
  },
  {
    id: "item-2",
    title: "Who can benefit from Atlas?",
    content:
      "Teams looking to automate repetitive tasks and improve throughput while maintaining safety.",
  },
  {
    id: "item-3",
    title: "What features does Atlas include?",
    content:
      "Fleet monitoring, staged autonomy, and a unified control plane for deployment and updates.",
  },
  {
    id: "item-4",
    title: "Can I customize workflows?",
    content:
      "Yes. Atlas adapts to your facility using configurable task plans and safety boundaries.",
  },
  {
    id: "item-5",
    title: "How do pilots work?",
    content:
      "We deploy a small fleet, monitor ROI, and expand the scope as performance stabilizes.",
  },
];

export default function FaqSection() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto w-full max-w-3xl space-y-7">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-white/70 max-w-2xl">
            Here are common questions from teams evaluating Atlas pilots.
          </p>
        </div>
        <div className="bg-white/5 w-full rounded-lg border border-white/10 divide-y divide-white/10">
          {questions.map((item) => (
            <details key={item.id} className="group px-4 py-4">
              <summary className="cursor-pointer text-[15px] leading-6 list-none">
                {item.title}
              </summary>
              <div className="text-white/70 pt-3 text-sm">{item.content}</div>
            </details>
          ))}
        </div>
        <p className="text-white/70">
          Can't find what you're looking for? Contact our{" "}
          <a href="#" className="text-white hover:underline">
            customer support team
          </a>
          .
        </p>
      </div>
    </section>
  );
}

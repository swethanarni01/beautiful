import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Atlas improved our picking throughput by 28% in the first month.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "We deployed safely alongside humans with minimal training.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Support was hands-on and fast. The pilot exceeded expectations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "Integration was straightforward and our ops team loved it.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "A true productivity unlock for repetitive tasks.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Reliability and safety features were the differentiator.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Atlas paid for itself in weeks, not months.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "We are scaling across multiple sites this quarter.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "The UI is polished and the robots just work.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

function TestimonialsColumn({ testimonials: items, duration = 12 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map(({ text, image, name, role }) => (
              <div
                className="p-6 rounded-3xl border border-white/10 shadow-lg shadow-black/20 max-w-xs w-full bg-white/5"
                key={`${name}-${text}`}
              >
                <div className="text-sm text-white/80">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 opacity-60 tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center">
          Testimonials from early pilots
        </h2>
        <p className="mt-3 text-center text-white/70">
          Real feedback from teams deploying Atlas in production environments.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TestimonialsColumn testimonials={firstColumn} duration={12} />
          <TestimonialsColumn testimonials={secondColumn} duration={14} />
          <TestimonialsColumn testimonials={thirdColumn} duration={16} />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Card({ className = "", children, ...props }) {
  return (
    <div className={`rounded-3xl ${className}`} {...props}>
      {children}
    </div>
  );
}

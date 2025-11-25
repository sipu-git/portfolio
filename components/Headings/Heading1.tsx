"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface HeadingTagProps {
  text: string;
  icon: LucideIcon; // Lucide icon component type
  className?: string;
}

const HeadingTag: React.FC<HeadingTagProps> = ({ text, icon: Icon, className }) => {
  return (
    <div
      className={`
        flex items-center gap-3 w-fit
        rounded-md
        py-2 px-4
        bg-[rgba(20,20,20,0.65)]
        backdrop-blur-md
        border border-[rgba(255,255,255,0.08)]
        cursor-default
        transition-all
        shadow-[0_0_18px_-5px_rgba(115,96,255,0.7)]
        ${className || ""}
      `}
    >
      {/* ICON CIRCLE */}
      <div
        className="
          w-8 h-8 flex items-center justify-center
          rounded-full
          bg-gradient-to-br from-[#7b4dff] to-[#6340ff]
          shadow-[0_0_15px_-4px_rgba(123,77,255,0.9)]
        "
      >
        <Icon size={18} className="text-white" />
      </div>

      {/* TEXT */}
      <span className="text-white text-lg tracking-wide select-none">
        {text}
      </span>
    </div>
  );
};

export default HeadingTag;

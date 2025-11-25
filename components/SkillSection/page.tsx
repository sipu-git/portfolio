"use client";

import Image from "next/image";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import Heading1 from "../Headings/Heading1";
import { MessageSquareCode } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; src?: string; alt?: string }
>(({ className, src, alt }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-10px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {src && (
        <Image
          src={src}
          alt={alt || "skill-icon"}
          width={40}
          height={40}
          className="object-contain"
        />
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export default function SkillSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 10 skill refs
  const reactRef = useRef<HTMLDivElement>(null);
  const tailwindRef = useRef<HTMLDivElement>(null);

  const nodeRef = useRef<HTMLDivElement>(null);
  const expressRef = useRef<HTMLDivElement>(null);

  const mongoRef = useRef<HTMLDivElement>(null);
  const javascriptRef = useRef<HTMLDivElement>(null);

  const typescriptRef = useRef<HTMLDivElement>(null);
  const cRef = useRef<HTMLDivElement>(null);

  const javaRef = useRef<HTMLDivElement>(null);
  const mysqlRef = useRef<HTMLDivElement>(null);

  // ⭐ CENTER ICON REF
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col h-auto w-full items-start justify-start overflow-hidden py-4"
    >
         <div className="mb-8">
          <Heading1 icon={MessageSquareCode} text="My Technical Skills" className="text-4xl" />
        </div>
      <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Circle ref={centerRef} src="/coding-logos/coding.png" alt="Center Skill" />
      </div>

      <div className="flex size-full max-w-4xl flex-col gap-10">

        <div className="flex justify-between">
          <Circle ref={reactRef} src="/coding-logos/react.png" alt="React" />
          <Circle ref={tailwindRef} src="/coding-logos/tailwindcss.png" alt="Tailwind CSS" />
        </div>

        <div className="flex justify-between">
          <Circle ref={nodeRef} src="/coding-logos/nodejs.png" alt="Node.js" />
          <Circle ref={expressRef} src="/coding-logos/express.png" alt="Express.js" />
        </div>

        <div className="flex justify-between">
          <Circle ref={mongoRef} src="/coding-logos/mongodb.png" alt="MongoDB" />
          <Circle ref={javascriptRef} src="/coding-logos/javascript.png" alt="JavaScript" />
        </div>

        <div className="flex justify-between">
          <Circle ref={typescriptRef} src="/coding-logos/typescript.png" alt="TypeScript" />
          <Circle ref={cRef} src="/coding-logos/c.png" alt="C Language" />
        </div>

        <div className="flex justify-between">
          <Circle ref={javaRef} src="/coding-logos/java.png" alt="Java" />
          <Circle ref={mysqlRef} src="/coding-logos/mysql.png" alt="MySQL" />
        </div>

      </div>

      {/* ------------ ANIMATED BEAMS TO CENTER ------------ */}
      <AnimatedBeam containerRef={containerRef} fromRef={reactRef} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={tailwindRef} toRef={centerRef} />

      <AnimatedBeam containerRef={containerRef} fromRef={nodeRef} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={expressRef} toRef={centerRef} />

      <AnimatedBeam containerRef={containerRef} fromRef={mongoRef} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={javascriptRef} toRef={centerRef} />

      <AnimatedBeam containerRef={containerRef} fromRef={typescriptRef} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={cRef} toRef={centerRef} />

      <AnimatedBeam containerRef={containerRef} fromRef={javaRef} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={mysqlRef} toRef={centerRef} />
    </div>
  );
}

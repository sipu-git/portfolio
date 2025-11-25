"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import ButtonCrossArrow from "./buttons/AnimatedButton";

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Inner image zoom effect
  const { scrollYProgress: localProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(localProgress, [0, 1], [2, 1]);

  // Outer card scaling as user scrolls
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-10 w-full">
      
      <motion.div
        style={{
          scale,
          backgroundColor: color || "#111",
        }}
        className="rounded-xl w-full border border-zinc-700 shadow-xl p-5 backdrop-blur-md bg-opacity-60"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image
              src={url}
              alt="Project Image"
              fill
              className="object-cover grayscale-75"
            />
          </motion.div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-[#9e9d9d] mt-5">{title}</h2>

        {/* DESCRIPTION */}
        <p className="text-sm mt-2 text-[#eae4e4]">{description}</p>

        {/* BUTTON */}
        <div className="mt-5">
          <Link href="#">
            <ButtonCrossArrow text="Learn More" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

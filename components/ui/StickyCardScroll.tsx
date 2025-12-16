"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ButtonCrossArrow from "./buttons/AnimatedButton";
import Link from "next/link";

interface CardProps {
  i: number;
  link:string;
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
  link,
  title,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: localProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(localProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-6 w-full">
      <motion.div
        style={{ scale, backgroundColor: color || "#111" }}
        className="rounded-xl w-full border border-zinc-700 shadow-xl p-5 backdrop-blur-md bg-opacity-60"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image src={url} alt={title} fill className="object-cover grayscale-50" />
          </motion.div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-[#9e9d9d] mt-5">
          {title}
        </h2>

        {/* CTA */}
        <div className="mt-5">
          <Link href={link}>
            <ButtonCrossArrow text="Learn More" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

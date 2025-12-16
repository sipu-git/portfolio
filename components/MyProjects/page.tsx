"use client";

import Heading1 from "../Headings/Heading1";
import { FolderGit2 } from "lucide-react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Card from "../ui/StickyCardScroll";
import ReactLenis from "lenis/react";
import { ProjectData } from "@/project-data";

const leftColumn = ProjectData.filter((_, i) => i % 2 === 0);
const rightColumn = ProjectData.filter((_, i) => i % 2 !== 0);

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section ref={containerRef} className="w-full h-auto">
        <Heading1 icon={FolderGit2} text="My Projects" className="text-4xl mb-6" />

        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-8 h-auto">
            {leftColumn.map((card, index) => (
              <Card
                key={card.id}
                i={index}
                title={card.title}
                link={card.link}
                url={card.image}
                description={card.shortDesc}
                progress={scrollYProgress}
                range={[index / leftColumn.length, 1]}
                targetScale={1 - index * 0.05}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-8 h-auto">
            {rightColumn.map((card, index) => (
              <Card
                key={card.id}
                i={index}
                link={card.link}
                title={card.title}
                url={card.image}
                description={card.shortDesc}
                progress={scrollYProgress}
                range={[index / rightColumn.length, 1]}
                targetScale={1 - index * 0.05}
              />
            ))}
          </div>

        </div>
      </section>
    </ReactLenis>
  );
}

'use client';

import Heading1 from "../Headings/Heading1";
import { FolderGit2 } from "lucide-react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Card from "../ui/StickyCardScroll";
import ReactLenis from "lenis/react";

const cardData = [
  { id: 1, title: "Netflix Clone", description: "Full Stack Web Application", url: "/netflix-app.jpg", link: "#" },
  { id: 2, title: "E-Commerce", description: "Full Stack Web Application", url: "/flipkart.jpg", link: "#" },
  { id: 3, title: "TODO List", description: "Full Stack TODO List Application", url: "/todo-list.jpg", link: "#" },
  { id: 4, title: "CRUD App", description: "Full Stack Web Application", url: "/CRUD.jpg", link: "#" },
];

// Split into two columns
const leftColumn = cardData.filter((_, index) => index % 2 === 0);
const rightColumn = cardData.filter((_, index) => index % 2 !== 0);

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section ref={containerRef} className="w-full">
        <div className="mb-6">
          <Heading1 icon={FolderGit2} text="My Projects" className="text-4xl" />
        </div>

        {/* Two-column sticky layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {leftColumn.map((card, index) => {
              const targetScale = 1 - (leftColumn.length - index) * 0.05;
              return (
                <Card
                  key={card.id}
                  i={index}
                  url={card.url}
                  title={card.title}
                  description={card.description}
                  progress={scrollYProgress}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {rightColumn.map((card, index) => {
              const targetScale = 1 - (rightColumn.length - index) * 0.05;
              return (
                <Card
                  key={card.id}
                  i={card.id}
                  url={card.url}
                  title={card.title}
                  description={card.description}
                  progress={scrollYProgress}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>

        </div>
      </section>
    </ReactLenis>
  );
}

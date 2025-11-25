"use client";

import TypewriterEffect from "@/components/ui/TypeWritting";
import { ColorPicker } from "@/styles/color";
import Heading1 from "../Headings/Heading1";
import TextReveal from "../ui/TextReval";
import AOSWrapper from "../ui/FadeUp";
import Heading2 from "../Headings/Heading2";

export default function HeroSection() {
  const achievement = [
    { numbers: "20+", title: "Completed Projects" },
    { numbers: "1+", title: "Year of Experience" },
    { numbers: "5+", title: "Happy Clients / Collaborations" },
    { numbers: "2+", title: "Awards / Achievements" },
  ];

  return (
    <div className="w-full flex flex-col justify-center h-auto mt-12">
      <div className="flex flex-col gap-5">
        {/* === Greeting Text === */}
        <TextReveal
          text="👋 Say Hello, Sipu Rana"
          className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold"
          delay={0}
          lineDelay={0.5}
          blurStart={4}
          stagger={0.1}
          duration={0.3}
        />

        {/* === Typewriter Effect === */}
        <TypewriterEffect
          textList={[
            "Software Developer",
            "Full Stack Developer",
            "Frontend Developer",
          ]}
          typingSpeed={80}
          deletingSpeed={50}
          pauseTime={1500}
          style={{ color: ColorPicker.primary }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        />

        {/* === Location Heading === */}
        <AOSWrapper duration={1200} easing="ease-out" once={true}>
          <div data-aos="fade-up">
            <Heading2
              text="Based in Bhubaneswar, Odisha"
              className="text-2xl sm:text-3xl md:text-4xl mt-2"
            />
          </div>
        </AOSWrapper>

        {/* === About Paragraph === */}
        <AOSWrapper duration={1200} easing="ease-out" once={true}>
          <p
            data-aos="fade-up"
            className="leading-7 sm:leading-8 text-sm sm:text-base text-justify mt-3"
            style={{ color: ColorPicker.secondary }}
          >
            👋 Hi, I&apos;m <b>Sipu Rana</b>, a passionate Software Development Engineer specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I enjoy building scalable, secure, and user-focused web applications.
            I’ve worked on several real-time projects involving authentication systems, online transaction platforms, and
            product-based web apps. Currently, I’m expanding my expertise with Next.js to develop high-performance,
            SEO-friendly applications with modern UI/UX design principles.
          </p>
        </AOSWrapper>

        {/* === Achievements Grid === */}
        <AOSWrapper duration={1400} easing="ease-out" once={true}>
          <div
            data-aos="fade-up"
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-4 
              gap-6 
              sm:gap-8 
              mt-8 
              text-center
            "
          >
            {achievement.map((items, index) => (
              <div
                key={index}
                className="
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  p-3 
                  rounded-lg 
                  hover:scale-105 
                  transition-transform 
                  duration-300
                "
              >
                <Heading2
                  text={items.numbers}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                />
                <Heading2
                  text={items.title}
                  className="text-xs sm:text-sm md:text-base text-center text-gray-300 mt-1"
                />
              </div>
            ))}
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
}

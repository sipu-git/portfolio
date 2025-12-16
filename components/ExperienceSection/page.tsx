"use client";

// import { IoBriefcaseOutline } from "react-icons/io5";
import Heading1 from "../Headings/Heading1";
import Heading2 from "../Headings/Heading2";
import { ColorPicker } from "../../styles/color";
import { motion, Variants } from "framer-motion";
import AOSWrapper from "../ui/FadeUp";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceSection() {
    const testimonials = [
        {
            role: "Software Developer",
            duration: "Oct 2025 - Present",
            company: "Sparkradix Technology Pvt. Ltd",
            desc: "After successfully completing a three-month SDE Internship at Sparkradix Technologies, I transitioned into a full-time Software Developer role. During my internship, I significantly upgraded my technical skills, contributed to real-time development projects, and demonstrated strong problem-solving abilities, which led to my full-time selection."
        },
        {
            role: "SDE Intern",
            duration: "July 2025 - Oct 2025",
            company: "Sparkradix Technology Pvt. Ltd",
            desc: "As a Software Development Engineer Intern, I focus on designing and developing end-to-end web applications using the MERN stack. I worked on building secure APIs, implementing dynamic user interfaces with React, managing databases with MongoDB, and deploying full-stack solutions. I collaborate with the team to solve real-world business challenges through efficient code and modern development practices."
        },
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <div className="h-auto flex flex-col gap-6 py-8">
           <div className=""><Heading1 text="Experience" icon={BriefcaseBusiness} className="text-4xl" /></div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col gap-6"
            >
                {testimonials.map((data, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="p-3 rounded-lg border border-[#202020]"
                        style={{ backgroundColor: ColorPicker.bg }}
                    >
                        <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-2 justify-between">
                            <div>
                                <Heading2 text={data.role} />
                                <h2 className="text-[#979595] font-semibold">{data.company}</h2>
                            </div>
                            <div
                                className="w-auto h-10 rounded border border-[#515050] px-4 flex justify-center items-center bg-[#2e2e2e]"
                                style={{ color: ColorPicker.secondary }}
                            >
                                {data.duration}
                            </div>
                        </div>

                        <div className="w-full my-4 h-px bg-[#3e3e3e] content-none"></div>

                        <p className="text-[#605f5f]">{data.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

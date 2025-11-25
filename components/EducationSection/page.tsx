'use client'
import { FaGraduationCap } from "react-icons/fa6";
import Heading1 from "../Headings/Heading1";
import { ColorPicker } from "../../styles/color";
import Heading2 from "../Headings/Heading2";
import { motion,Variants } from 'framer-motion';
import AOSWrapper from "../ui/FadeUp";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {

    const testimonials = [
        {
            role: "Master In Computer of Application",
            duration: "2023-2025",
            college: "Gandhi Engineering College,BBSR",
            desc: "As a Software Development Engineer Intern, I focus on designing and developing end-to-end web applications using the MERN stack. I work on building secure APIs, implementing dynamic user interfaces with React, managing databases with MongoDB, and deploying full-stack solutions. I collaborate with the team to solve real-world business challenges through efficient code and modern development practices."
        },
        {
            role: "Bachelor In Computer of Application",
            duration: '2020-2023',
            college: "Bhanja College of Computer & Management",
            desc: "My role involved developing scalable backend APIs, integrating secure authentication systems, designing responsive front-end interfaces, and collaborating with cross-functional teams to deliver end-to-end solutions that enhanced user experience and performance."
        },

    ]
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
        <div className="h-auto flex flex-col gap-6 py-12">
              <div><Heading1 text="Education" icon={GraduationCap} className="text-4xl" /></div>
            <motion.div variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }} className="flex flex-col gap-6">
                {testimonials.map((data, index) => (
                    <motion.div variants={cardVariants} className="p-3 rounded-lg border border-[#202020]" style={{ backgroundColor: ColorPicker.bg }} key={index}>

                        <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-2 justify-between">
                            <div className="">
                                <Heading2 text={data.role} />
                                <h2 className="text-[#979595] font-semibold">{data.college}</h2>
                            </div>
                            <div className="w-auto h-10 rounded border border-[#515050] px-4 flex justify-center items-center bg-[#2e2e2e]" style={{ color: ColorPicker.secondary }}>{data.duration}</div>
                        </div>
                        <div className="w-full my-4 h-px bg-[#3e3e3e] content-none"></div>
                        <div className="">
                            <p className="text-[#605f5f]">{data.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
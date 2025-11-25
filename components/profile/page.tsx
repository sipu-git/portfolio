import Image from "next/image";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import MovingButton from "../ui/buttons/MovingButton";
import { ColorPicker } from "../../styles/color";
import FlipIconButton from "../ui/buttons/FlipedButton";

export default function Profile() {
  return (
    <>
        <div
          style={{ backgroundColor: ColorPicker.bg }}
          data-aos="fade-up"
          className="text-white border 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 mt-8 border-[#3e3e3e] rounded-xl h-auto pb-8"
        >
          <div className="w-full flex justify-center items-center p-4">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] aspect-square">
              <Image
                src="/my-image.jpg"
                alt="profile"
                fill
                priority
                className="object-cover rounded-xl border border-[#3e3e3e]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 400px"
              />
            </div>
          </div>

          {/* Name */}
          <div className="w-full flex justify-center items-center">
            <h2 className="text-[#ece8e8] text-3xl font-semibold">Sipu Rana</h2>
          </div>

          {/* Social Icons */}
          <div className="w-full flex justify-center items-center py-6 gap-6 flex-wrap">
            <Link href="https://www.linkedin.com/in/sipu-rana-72b56b242/" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
              <FlipIconButton frontIcon={<TbBrandLinkedin size={20} />} backIcon={<TbBrandLinkedin size={20} />} />
            </Link>
            <Link href="https://www.instagram.com/sagar_sipu_07/" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
              <FlipIconButton frontIcon={<FaInstagram size={20} />} backIcon={<FaInstagram size={20} />} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100075259404065" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
              <FlipIconButton frontIcon={<LuFacebook size={20} />} backIcon={<LuFacebook size={20} />} />
            </Link>
            <Link href="https://github.com/Sipu-982?tab=repositories" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
              <FlipIconButton frontIcon={<IoLogoGithub size={20} />} backIcon={<IoLogoGithub size={20} />} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center pt-6 items-center flex-wrap">
            <Link
              href="./my latest resume.pdf"
              className="py-2 px-6 bg-[#3e3e3e] rounded-md hover:bg-[#505050] transition"
            >
             <FlipIconButton frontText=" Download CV" backText=" Download CV" />
            </Link>
            <Link href="#contact">
              <MovingButton text="Contact Me" />
            </Link>
          </div>
        </div>
    </>
  );
}

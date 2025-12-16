import Heading1 from "../Headings/Heading1";
import { FaRegPaperPlane } from "react-icons/fa6";
import Heading2 from "../Headings/Heading2";
import Address from "../address/page";
import ContactForm from "../contact-form/page";
import AOSWrapper from "../ui/FadeUp";
import { Contact } from "lucide-react";

export default function ContactSection() {
    return (
        <div id="contact" className="min-h-[50vh] py-12">
              <div className=""><Heading1 text="Contact Me" icon={Contact} className="text-4xl" /></div> 
             <div className="mt-6">
              <AOSWrapper duration={1200} easing="ease-out" once={true}><div data-aos="zoom-in" className=""><Heading2 text="Get In Touch" /></div></AOSWrapper> 
            <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-6">
            <Address/>
             <ContactForm/>
            </div>
            </div>
        </div>
    )
}
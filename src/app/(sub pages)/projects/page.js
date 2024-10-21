import Image from "next/image";
import bg from "../../../../public/background/Wormhole_1_bgImg.jpg";
import Experience from "@/components/Experience";


export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
    <Image src={bg}
      alt="Next.js Portfolio website's about page background image"
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      priority
      sizes="100vw"
    />
    <Experience />
    
    </>
  );
}
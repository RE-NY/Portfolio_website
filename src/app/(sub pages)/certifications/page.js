import Image from "next/image";
import bg from "../../../../public/background/Symmetrical_background_1.png";
import CertificationList from "@/components/certifications/CertificationList";
import { CertificationsData } from "../../data";

export const metadata = {
  title: "Certifications",
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

    <div className="relative w-full h-auto flex flex-col items-center justify-start py-24">
    <div className="fixed flex flex-col items-center text-center top-10 sm:top-20 left-1/2 -translate-x-1/2">
        <h5 className="font-bold text-6xl lg:text-9xl text-accent">
        Certifications
        </h5>
    </div>
    </div>

    <CertificationList certifications = { CertificationsData } />
    </>
  );
}
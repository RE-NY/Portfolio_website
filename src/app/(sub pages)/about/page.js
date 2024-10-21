import Image from "next/image";
import bg from "../../../../public/background/contact-polygon-background-dark-sky-blue.jpg";
// import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";

export const metadata = {
    title : "About",
}

export default function Home() {
  return (
    <>
    <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
<div className="relative w-full h-auto flex flex-col items-center justify-start">
  <div className="absolute flex flex-col items-center text-center top-10 sm:top-20 left-1/2 -translate-x-1/2">
    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
      Rehan
    </h1>
    <p className="font-light text-foreground text-lg">
      Know the artist behind this portfolio
    </p>
  </div>
</div>


<AboutDetails />
    </>  
  );
}
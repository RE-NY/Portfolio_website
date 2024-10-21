import Image from "next/image";
import bg from "../../../../public/background/space-background.jpeg";
import Form from "@/components/contact/Form";


export const metadata = {
    title : "Contact",
}

export default function Contact() {
  return (
    <>
    <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

    <article className="relative w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Contact the Artist
        </h1>
        <p className="text-center font-light">
          Your time to contact the architect of this website and share your feedback!
        </p>
      </div>
      <Form />
    </article>


    </>  
  );
}
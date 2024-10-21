import Image from 'next/image';
import bg from "@/../public/background/hero-bg.png";
import Navigation from "@/components/navigation/Navigation";
import BackgroundAnimation from "@/components/PhysicsBackground/BackgroundAnimation"; // Adjust the path accordingly
import SplineAnimation from "@/components/PhysicsBackground/SplineAnimation";
import Head from 'next/head'; // Import Head to include the stylesheet and script

export const metadata = {
  title : "Home",
}


export default function Home() {
  return (
    <>
      <Head>
        {/* Import Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        {/* Background Image */}
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="-z-50 w-full h-full object-cover object-center opacity-50"
        />

        {/* Navigation component */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Navigation />
        </div>

        {/* HTML structure for the introduction */}
        <section className='home px-16 py-16'>
          <div className="home-content">
            <div className="logo text-[48px] font-bold mb-1"
              style={{
                color: "#fff", // Changed to correct format with #
                fontFamily: "'Montserrat', sans-serif",
              }}        
            >
              Hi! I'm <span className="text-[#915eff]">Rehan.</span>
            </div>
            <div className="change-text">
              <h3>And I'm&nbsp;</h3>
              <h3>
                <span className="word text-[#915eff] text-[32px]">DeepLearning&nbsp;Enthusiast</span>
                <span className="word text-[#915eff] text-[32px]">AI/ML&nbsp;Enthusiast</span>
                <span className="word text-[#915eff] text-[32px]">FrontEnd&nbsp;Developer</span>
              </h3>
            </div>
            <p className='{`${styles.heroSubText} mt-2 text-white`}'>
              Web designer and AI/ML Enthusiast. I am constantly <br></br>
              learning new things.I am constantly learning new things.<br></br>
              I am constantly learning new things.<br></br>
              I am constantly learning new things.
            </p>
          </div>
        </section>
        
        {/* Add the script at the end of the body */}
        <script src="/script.js"></script>
      </main>
    </>
  );
}


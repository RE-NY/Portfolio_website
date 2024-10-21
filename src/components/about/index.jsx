import React, { Children } from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
    return(
        <section className="py-20 w-full mt-48"> {/* Added margin-top (mt-24) */}
            <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">

            <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Architect of Intelligent Systems
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          My journey in AI and machine learning is fueled by a powerful toolkit of algorithms and models, 
          with Python forming the backbone of my creations. I harness frameworks like TensorFlow and PyTorch 
          with precision, building intelligent systems that transform data into meaningful insights. 
          The cutting-edge advancements in deep learning empower me to develop accurate and scalable 
          solutions, while my problem-solving approach ensures each project is innovative and 
          impactful. Join me as I continue to explore new techniques and technologies to push the boundaries 
          of AI and shape the future of intelligent systems.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full row-span-2 xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 !p-0"}> 
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=RE-NY&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-8 !p-0"}> 
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=RE-NY&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}> 
        <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,c,cpp,fastapi,figma,flask,java,opencv,py,pytorch,react,sklearn,tensorflow,threejs,vim,vscode" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-4 row-span-6"}> 
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=RE-NY&repo=MedicalChatBot&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-4 row-span-6"}> 
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=RE-NY&repo=DSCoin-Cpp&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-4 row-span-6"}> 
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=RE-NY&repo=Artificial_Neural_Networks_in_cpp&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B" 
        alt="RE-NY" loading="lazy" />
        </ItemLayout>
            </div>
        </section>
    )
};

export default AboutDetails;
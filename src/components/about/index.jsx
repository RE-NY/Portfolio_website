import React, { Children } from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
    return(
        <section className="py-20 w-full mt-48"> {/* Added margin-top (mt-24) */}
            <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">

            <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
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
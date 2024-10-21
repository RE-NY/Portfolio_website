// "user client"

// import React from "react"
// import Link from 'next/link'

// const CertificationLayout = ({name, description, date, demoLink}) => {

//     return (
//         <Link href = {demoLink} target="__blank">
//         <div className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
//             <div className="flex items-center justify-center space-x-2">
//                 <h2 className="text-foreground">{name}</h2>
//                 <p className="text-muted">{description}</p>
//             </div>
//             <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted"/>

//             <p className="text-foreground">
//                 {new Date(date).toDateString()}
//             </p>
//         </div>
//         </Link>

//     )
// };

// export default CertificationLayout

"use client";

import React from "react";
import Link from "next/link";

const CertificationLayout = ({ name, description, date, demoLink, imageUrl }) => {
  return (
    <Link href={demoLink} target="__blank">
      <div className="flex flex-col items-center justify-between w-full h-80 relative rounded-lg overflow-hidden p-6 custom-bg transition-transform transform hover:scale-105 hover:-translate-y-2">
        {/* Image Placeholder */}
        <div className="flex flex-col items-center justify-between w-full h-60 relative rounded-lg overflow-hidden p-0">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover mb-4 rounded-lg" />
        </div>
        {/* Text Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-accent">{name}</h2>
          <p className="text-muted text-sm text-center">{description}</p>

          {/* Separator */}
          <div className="self-end flex-1 mx-2 mb-1 w-full bg-transparent border-b border-dashed border-muted"></div>

          {/* Styled Date */}
          <p className="text-base font-semibold">
            {new Date(date).toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CertificationLayout;

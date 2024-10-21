// "use client";
// import CertificationLayout from "./CertificationLayout";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3, // Stagger the children by 0.3 seconds
//       delayChildren: 0.5,    // Delay the start of the children animations by 0.5 seconds
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 }, // Start from slightly below and invisible
//   show: { 
//     opacity: 1, 
//     y: 0, // Move to original position
//     transition: { duration: 0.5 } // Duration of the entrance animation
//   },
// };

// const CertificationList = ({ certifications }) => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
//     >
//       {certifications.map((certification, index) => {
//         return (
//           <motion.div key={index} variants={item}>
//             <CertificationLayout {...certification} />
//           </motion.div>
//         );
//       })}
//     </motion.div>
//   );
// };

// export default CertificationList;




"use client";
import CertificationLayout from "./CertificationLayout";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CertificationList = ({ certifications }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full px-4 mx-auto lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" // Change this line
      style={{
        gridRowGap: "100px", // Adjust the vertical gap here
        gridColumnGap: "45px", // Adjust the horizontal gap here
      }}
    >
      {certifications.map((certification, index) => (
        <motion.div key={index} variants={item}>
          <CertificationLayout {...certification} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CertificationList;

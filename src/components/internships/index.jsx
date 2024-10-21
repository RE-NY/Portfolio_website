"use client";
import { motion } from "framer-motion";
import InternshipLayout from "./InternshipLayout";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const InternshipList = ({ Internships }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {Internships.map((Internship, index) => {
        return <InternshipLayout key={index} {...Internship} />;
      })}
    </motion.div>
  );
};

export default InternshipList;
"use client"
import React from "react";
import { motion } from "framer-motion";
//import aboutImg from "../../Images/AboutImgfit.jpg"

type Props = {};

export default function About({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
      justify-evenly mx-auto items-center"
      >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
         </h3>

         <motion.img
            initial={{
               x: -200,
               opacity: 0,
            }}
            transition={{
               duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://media.licdn.com/dms/image/D4D03AQF1vrxvUl9Hfw/profile-displayphoto-shrink_800_800/0/1684670014183?e=1690416000&v=beta&t=fuohWE6q_xlZPe01iVUPZb78qqenGOSOj7VcBNGhdSE"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
         md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
         />

         <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
               Here is a{" "}
               <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
               background
            </h4>
            <p className="text-base">
               As a nurse with critical experience in the COVID-19 pandemic and
               a passion for technology, I am eager to embark on a new career as
               a FullStack Developer. My background in nursing has honed my
               ability to work effectively as part of a multidisciplinary team,
               as well as my communication, improvisational, and conflict
               resolution skills. Throughout my nursing career, I had the
               opportunity to work with complex patients and learn something new
               every day, all while managing a heavy workload in a fast-paced
               environment. This experience has prepared me well for the
               challenges of the tech industry and I am excited to bring my
               adaptability, resilience, and drive to this new field. I`ve
               always liked technology and it has always captivated me and
               sparked my interest. That`s why, after experiencing burnout from
               the demanding and emotionally taxing work as a nurse during the
               COVID-19 pandemic, I decided to look for a way to change my
               career and work with something I am passionate and excited about.
               I pursued a FullStack Developer career and honed my skills
               through hands-on projects, eager to continuously learn and grow
               in the field. I am confident that my unique background and
               experiences make me a valuable asset to any team and I am eager
               to apply my skills to real-world projects.
            </p>
         </div>
      </motion.div>
   );
}

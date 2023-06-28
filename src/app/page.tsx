/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import Image from "next/image";






const Home:NextPage = () => {
   return (
      <div
         className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
         <Head>
            <title>AC Portfolio</title>
         </Head>
      { /*@ts-ignore */}
         <Header />

         <section id="hero" className="snap-start">
         { /*@ts-ignore */} 
         <Hero />
         </section>

         <section id="about" className="snap-center">
         { /*@ts-ignore */}
            <About />
         </section>

         <section id="experience" className="snap-center">
         { /*@ts-ignore */}
            <WorkExperience />
         </section>

         <section id="skills" className="snap-start">
         { /*@ts-ignore */}
            <Skills />
         </section>
         <section id="projects" className="snap-start">
         { /*@ts-ignore */}
            <Projects />
         </section>

         <section id="contact" className="snap-start">
            <ContactMe />
         </section>
         <Link href={"#hero"}>
            <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                  <img
                     className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                     src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                     alt=""
                  />
               </div>
            </footer>
         </Link>
      </div>
   );
};


export default Home;

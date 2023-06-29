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
import { fetchPageInfo } from "./utils/fetchPageInfo/page";
import { fetchExperience } from "./utils/fetchExperiences/page";
import { fetchProjects } from "./utils/fetchProjects/page";
import { fetchSkills } from "./utils/fetchSkills/page";
import { fetchSocial } from "./utils/fetchSocials/page";

const Home = async () => {
   const pageInfo = await fetchPageInfo();
   const experiences = await fetchExperience();
   const projects = await fetchProjects();
   const skills = await fetchSkills();
   const socials = await fetchSocial();
   return (
      <div
         className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
         <Head>
            <title>AC Portfolio</title>
         </Head>
         {/*@ts-ignore */}
         <Header socials={socials} />

         <section id="hero" className="snap-start">
            {/*@ts-ignore */}
            <Hero pageInfo={pageInfo} />
         </section>

         <section id="about" className="snap-center">
            {/*@ts-ignore */}
            <About pageInfo={pageInfo} />
         </section>

         <section id="experience" className="snap-center">
            {/*@ts-ignore */}
            <WorkExperience experiences={experiences} />
         </section>

         <section id="skills" className="snap-start">
            {/*@ts-ignore */}
            <Skills skills={skills}/>
         </section>
         <section id="projects" className="snap-start">
            {/*@ts-ignore */}
            <Projects projects={projects} />
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

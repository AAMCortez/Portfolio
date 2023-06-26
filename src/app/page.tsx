/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import fetchSocial from "./utils/fetchSocials/page";

type Props = {
   // pageInfo: PageInfo;
   // experiences: Experience[];
   // skills: Skill[];
   // projects: Project[];
   socials: Social[];
};

const Home = ({ socials, }: Props) => {
   console.log("this is socials props" , socials)
   return (
      <div
         className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
         <Head>
            <title>AC Portfolio</title>
         </Head>
         <Header socials={socials} />
         <section id="hero" className="snap-start">
            <Hero />
         </section>

         <section id="about" className="snap-center">
            <About />
         </section>

         <section id="experience" className="snap-center">
            <WorkExperience />
         </section>

         <section id="skills" className="snap-start">
            <Skills />
         </section>
         <section id="projects" className="snap-start">
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

export const getStaticProps: GetStaticProps<Props> = async () => {
   const socials: Social[] = await fetchSocial();
   console.log("this is socials" , socials)
   return {
      props: {socials}
   }
}

/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import { sanityClient } from "../../sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { groq } from "next-sanity";

const Home = async () => {
   const pageInfofunc = async () => {
      const pageInfo: PageInfo = await sanityClient.fetch(groq`
      *[_type == "pageInfo"][0]
  `);
      return pageInfo;
   };
   const experiencesfunc = async (): Promise<Experience> => {
      const experiences: Experience = await sanityClient.fetch(groq`
      *[_type == "experience"] {
          ...,
          technologies[]->
      }
  `);
      return experiences;
   };
   const projectsfunc = async () => {
      const projects: Project = await sanityClient.fetch(groq`
      *[_type == "project"] {
          ...,
          technologies[]->
      }
  `);
      return projects;
   };
   const skillsfunc = async () => {
      const skills: Skill = await sanityClient.fetch(groq`
      *[_type == "skill"]
  `);
      return skills;
   };
   const socialsfunc = async () => {
      const socials: Social = await sanityClient.fetch(groq`
      *[_type == "social"]
  `);
      return socials;
   };
   const pageInfo = await pageInfofunc();
   const experiences = await experiencesfunc();
   const projects = await projectsfunc();
   const skills = await skillsfunc();
   const socials = await socialsfunc();
   return (
      <div
         className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
         <Head>
            <title>{pageInfo.name} - Portfolio</title>
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
         <section id="skills" className="snap-start">
            {/*@ts-ignore */}
            <Skills skills={skills} />
         </section>
         <section id="projects" className="snap-start">
            {/*@ts-ignore */}
            <Projects projects={projects} />
         </section>
         <section id="experience" className="snap-center">
            {/*@ts-ignore */}
            <WorkExperience experiences={experiences} />
         </section>

         <section id="contact" className="snap-start">
            <ContactMe />
         </section>
         <Link href={"#hero"}>
            <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                  <img
                     className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                     src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
                     alt=""
                  />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;

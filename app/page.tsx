"use client"

import Image from "next/image";

// bootstrap components
import Styles from './Home.module.css';

import HomeCards from "./components/home/banner/home-cards";
import GitCommitGraph from "./components/home/graph-area/git-commit-graph";
import MyDevProjects from "./components/home/dev-area/dev-projects";
import MyResearchProjects from "./components/home/research-area/research-projects";
import MyDesignProjects from "./components/home/design-area/design-projects";

export default function Home() {
  return (
    <>
      {/* intro section */}
      <header className={Styles.header_wrapper}>
        <HomeCards />
      </header>

      {/* github commit graph preview */}
      <GitCommitGraph />

      {/* dev projects showcase */}
      <div className={Styles.dev_projects_wrapper}>
        <MyDevProjects
          sectionTitle="Development"
          sectionBrief="
          As a passionate Front-End Developer with a keen interest in the 
          intersection of creativity and technology, I specialize in crafting 
          immersive and user-centric digital experiences." />
      </div>

      {/* design projects showcase */}
      <div className={Styles.design_projects_wrapper}>
        <MyDesignProjects
          sectionTitle="Design"
          sectionBrief="
          As a passionate Front-End Developer with a keen interest in the 
          intersection of creativity and technology, I specialize in crafting 
          immersive and user-centric digital experiences." />
      </div>

      {/* research projects showcase */}
      <div className={Styles.research_projects_wrapper}>
        <MyResearchProjects
          sectionTitle="Research"
          sectionBrief="
          As a passionate Front-End Developer with a keen interest in the 
          intersection of creativity and technology, I specialize in crafting 
          immersive and user-centric digital experiences." />
      </div>

      {/* articles intro */}
    </>
  );
}

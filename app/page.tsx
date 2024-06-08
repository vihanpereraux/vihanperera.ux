"use client"

import Image from "next/image";

// bootstrap components
import Styles from './Home.module.css';

import HomeCards from "./components/home/banner/home-cards";
import GitCommitGraph from "./components/home/graph-area/git-commit-graph";
import MyDevProjects from "./components/home/dev-area/dev-projects";

export default function Home() {
  return (
    <>
      {/* intro section */}
      <header className={Styles.header_wrapper}>
        <HomeCards />
      </header>

      {/* github commit graph preview */}
      <GitCommitGraph />

      {/* dev intro */}
      <MyDevProjects
        sectionTitle="Development"
        sectionBrief="
          As a passionate Front-End Developer with a keen interest in the 
          intersection of creativity and technology, I specialize in crafting 
          immersive and user-centric digital experiences." />

      {/* design intro */}
      <MyDevProjects
        sectionTitle="Research"
        sectionBrief="
          As a passionate Front-End Developer with a keen interest in the 
          intersection of creativity and technology, I specialize in crafting 
          immersive and user-centric digital experiences." />

      {/* research intro */}

      {/* articles intro */}
    </>
  );
}

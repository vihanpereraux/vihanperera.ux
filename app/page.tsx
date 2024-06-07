"use client"

import Image from "next/image";
import GithubCommitGraph from "@/public/home/github-commit-img/commit-graph.png";

// bootstrap comps
import Styles from './Home.module.css';
import { Card, Button, Col, Row } from "react-bootstrap";

import HomeCards from "./components/home/banner/home-cards";


export default function Home() {
  return (
    <>
      {/* intro section */}
      <header className={Styles.header_wrapper}>
        <Row>
          <Col sm={6} className="my-auto">
            <h2 className={Styles.heading}>
              A South Asian individual who is leagally allowed to
              work in the UK</h2>
            <Button className={Styles.get_resume}>Get Resume</Button>
          </Col>

          <Col sm={6}>
            <HomeCards />
          </Col>
        </Row>
      </header>

      <div>
        <Image
          className={Styles.commit_graph}
          src={GithubCommitGraph}
          alt="s">
        </Image>
      </div>

      {/* dev intro */}

      {/* design intro */}

      {/* research intro */}

      {/* articles intro */}
    </>
  );
}

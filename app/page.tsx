"use client"

import Image from "next/image";

// bootstrap components
import Styles from './Home.module.css';
import { Button, Col, Row } from "react-bootstrap";

import HomeCards from "./components/home/banner/home-cards";
import GitCommitGraph from "./components/home/graph-area/git-commit-graph";

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

      {/* github commit graph preview */}
      <Row>
        <Col sm={12} md={12} lg={12}>
          <GitCommitGraph />
        </Col>
      </Row>

      {/* dev intro */}

      {/* design intro */}

      {/* research intro */}

      {/* articles intro */}
    </>
  );
}

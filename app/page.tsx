"use client"

import Image from "next/image";

// bootstrap comps
import Styles from './Home.module.css';
import { Card, Button, Col, Row } from "react-bootstrap";

import HomeCards from "./components/home/cards";


export default function Home() {
  return (
    <>
      {/* intro section */}
      <header className={Styles.header_wrapper}>
        <Row>
          <Col sm={6}>
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

      {/* dev intro */}

      {/* design intro */}

      {/* research intro */}

      {/* articles intro */}
    </>
  );
}

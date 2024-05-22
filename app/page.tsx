"use client"

import Image from "next/image";

// bootstrap comps
import Styles from './Home.module.css';
import { Card, Button, Col, Row } from "react-bootstrap";


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
            {/* div card */}
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                
                {/* <Image src={dummyBg} alt="picture of the project"></Image> */}
            
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>

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

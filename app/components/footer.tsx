"use client"

import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Styles from './Footer.module.css';


export default function Footer() {
    return (
        <>
            <footer className={`${Styles.cutom_footer} bg-none`}>
                <Container>
                    <Row>
                        <Col className={Styles.footer_logo} sm={6}>vihanpereraux</Col>
                        <Col className={Styles.left_column} sm={6}>
                            <ul className={Styles.links_wrapper}>
                                <li>github</li>
                                <li>stackoverflow</li>
                                <li>linkedIn</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
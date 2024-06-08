"use client"

import Link from 'next/link';

import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Styles from './Footer.module.css';


export default function Footer() {
    return (
        <>
            <footer className={`${Styles.custom_footer} bg-none`}>
                <Row>
                    <Col className={Styles.footer_logo} sm={6}>vihanpereraux</Col>
                    <Col className={Styles.left_column} sm={6}>
                        <ul className={Styles.links_wrapper}>
                            <li><Link style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} target='_blank' href="https://github.com/vihanpereraux">Github</Link></li>
                            <li><Link style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} target='_blank' href="https://stackoverflow.com/users/11007211/vihanpereraux">stackoverflow</Link></li>
                            <li><Link style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} target='_blank' href="https://www.linkedin.com/in/vihanpereraux/">linkedIn</Link></li>
                        </ul>
                    </Col>
                </Row>
            </footer>
        </>
    )
}
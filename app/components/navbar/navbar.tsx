"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Styles from './TopNav.module.css';
import Link from 'next/link';

export default function TopNavbar() {
    return (
        <Navbar expand="lg" className={`${Styles.cutom_nav} bg-none`}>
            <Navbar.Brand className={Styles.logo} href="#home">vihanpereraux</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${Styles.link_wrapper} ms-auto`}>
                    <Link className={Styles.route_link} href="/dev">[ Dev ]</Link>
                    <Link className={Styles.route_link} href="/design">[ UX / UI ]</Link>
                    <Link className={Styles.route_link} href="/research">[Research ]</Link>
                    <Link className={Styles.route_link} href="/articles">[ Articles ]</Link>
                    <Link className={Styles.route_link} href="/articles">[ Experience ]</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
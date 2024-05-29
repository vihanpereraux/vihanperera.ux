"use client"

import Image from "next/image";
import Styles from "./homeCards.module.css";

import JavaScriptLogo from "@/public/home/tech-stack/js-logo.png";
import ComfyUILogo from "@/public/home/tech-stack/comfy-ui-logo.png";
import ViteLogo from "@/public/home/tech-stack/vite-logo.png";
import NodeJSLogo from "@/public/home/tech-stack/node-js-logo.png";
import PythonLogo from "@/public/home/tech-stack/py-logo.png";

import {
    Card,
    Button,
    Col,
    Row
} from "react-bootstrap";

export default function HomeCards() {
    return (
        <div className="home_cards_wrapper">
            {/* first row */}
            <Row>
                {/* card 01 */}
                <Col sm={6} md={6} lg={6} xl={6} style={{ position: 'relative' }}>
                    <Card className={`${Styles.card_1} ${Styles.project_card}`}>
                        <Card.Body>
                            <Card.Text>An API endpoint for ComfyUI image generation.</Card.Text>
                            <div className={Styles.tech_stack}>
                                <Image src={JavaScriptLogo} alt="" />
                                <Image src={ComfyUILogo} alt="" />
                                <Image src={ViteLogo} alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* card 02 */}
                <Col sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Card className={`${Styles.card_2} ${Styles.project_card} `}>
                        <Card.Body>
                            {/* heading and status icon */}
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td><Card.Title className="my-auto" style={{ fontSize: 18, color: 'white' }}>MUSE Client</Card.Title></td>
                                        <td style={{ position: 'relative' }}><div className={Styles.status_icon}></div></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Card.Subtitle style={{ color: 'white' }} className="mt-1 text-muted">Open-Source / Local</Card.Subtitle>
                            {/* introduction */}
                            <Card.Text style={{ fontSize: 15, color: 'white' }} className="mt-3 mb-4">An open-source monitoring tool for the muse2 EEG headband.</Card.Text>
                            {/* tech stack */}
                            <div className={Styles.tech_stack}>
                                <Image style={{ objectFit: 'cover', aspectRatio: 1 }} src={PythonLogo} alt="" />
                                <Image style={{ objectFit: 'cover', aspectRatio: 1 }} src={JavaScriptLogo} alt="" />
                                <Image style={{ objectFit: 'cover', aspectRatio: 1 }} src={NodeJSLogo} alt="" />
                                <Image style={{ objectFit: 'cover', aspectRatio: 1 }} src={ViteLogo} alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>);
}
"use client"

import Image from "next/image";

import ProjectCard from "./components/project-card";

import Styles from "./home-cards.module.css";

import JavaScriptLogo from "@/public/home/tech-stack/js-logo.png";
import ComfyUILogo from "@/public/home/tech-stack/comfy-ui-logo.png";
import ViteLogo from "@/public/home/tech-stack/vite-logo.png";
import NodeJSLogo from "@/public/home/tech-stack/node-js-logo.png";
import PythonLogo from "@/public/home/tech-stack/py-logo.png";
import StyledCardImage from "@/public/home/tech-stack/card-iamge.png";

import {
    Card,
    Button,
    Col,
    Row
} from "react-bootstrap";
import StyledCard from "./components/styled-card";


export default function HomeCards() {
    return (
        <Row>
            <Col sm={6} className="my-auto">
                <h2 className={Styles.heading}>
                    A South Asian individual who is leagally allowed to
                    work in the UK</h2>
                <Button className={Styles.get_resume}>Get Resume</Button>
            </Col>

            <Col sm={6}>
                <div className="home_cards_wrapper">
                    {/* first row */}
                    <Row className={Styles.first_row}>
                        {/* card 01 */}
                        <Col sm={6} md={6} lg={6} xl={6} style={{ position: 'relative' }}>
                            <div className={Styles.card_1}>
                                <ProjectCard
                                    projectTitle=""
                                    isFinished={false}
                                    projectSubTitle=""
                                    projectDescription="An API endpoint for ComfyUI image generation."
                                    projectTechStack={[JavaScriptLogo, ComfyUILogo, ViteLogo]}
                                />
                            </div>
                        </Col>

                        {/* card 02 */}
                        <Col sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className={Styles.card_2}>
                                <ProjectCard
                                    projectTitle="MUSE Client"
                                    isFinished={false}
                                    projectSubTitle="Open-Source / Local"
                                    projectDescription="An open-source monitoring tool for the muse2 EEG headband."
                                    projectTechStack={[PythonLogo, JavaScriptLogo, NodeJSLogo, ViteLogo]}
                                />
                            </div>
                        </Col>
                    </Row>

                    {/* second row */}
                    <Row className={Styles.second_row}>
                        {/* card 01 */}
                        <Col sm={8} md={8} lg={8} xl={8}>
                            <div className={Styles.card_3}>
                                <ProjectCard
                                    projectTitle="ICARUS Module"
                                    isFinished={true}
                                    projectSubTitle="Research"
                                    projectDescription="A .py module that processes real-time EEG data via an OSC stream. Predictions are made based on a valence-arousal scaler."
                                    projectTechStack={[PythonLogo, JavaScriptLogo, ViteLogo]}
                                />
                            </div>
                        </Col>

                        {/* card 02 */}
                        <Col sm={4} md={4} lg={4} xl={4}>
                            {/* image card */}
                            <StyledCard
                                title="Front-end Experiments"
                                backgroundImage={StyledCardImage} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
"use client"
import React from "react";

// app components
import Header from "./components/header";
import ProjectCard from "./components/project-card";

// image assets
import MuseClientBG from "@/public/home/dev-section/muse-client-bg.png";
import JavaScriptLogo from "@/public/home/tech-stack/js-logo.png";
import ComfyUILogo from "@/public/home/tech-stack/comfy-ui-logo.png";
import ViteLogo from "@/public/home/tech-stack/vite-logo.png";
import NodeJSLogo from "@/public/home/tech-stack/node-js-logo.png";
import PythonLogo from "@/public/home/tech-stack/py-logo.png";
import StyledCardImage from "@/public/home/tech-stack/card-iamge.png";

// bootstrap components
import { Row, Col } from "react-bootstrap";

interface MyDevProjectsProps {
    sectionTitle: string,
    sectionBrief: string
}

const MyDevProjects: React.FC<MyDevProjectsProps> = ({ sectionTitle, sectionBrief }) => {
    return (
        <>
            <Header sectionTitle={sectionTitle} sectionBrief={sectionBrief} />

            <Row className="mt-2">
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="MUSE Client"
                        isFinished={false}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="Meta Quest 3 - WebXR"
                        isFinished={false}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="WebGL Liquid Effect"
                        isFinished={false}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="Audio Reactive Spectrum"
                        isFinished={true}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="WebGL Mouse Interactions"
                        isFinished={true}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="WebGL Shader Wall"
                        isFinished={true}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="WebGL Paper Effect"
                        isFinished={true}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
                <Col md={4} lg={3}>
                    <ProjectCard
                        projectTitle="Explain-Me Extension"
                        isFinished={true}
                        projectSubtitle="Open-Source / Local"
                        projectImage={MuseClientBG}
                        projectDesription="An open-source monitoring tool for the muse2 EEG headband. "
                        projectTechStack={[JavaScriptLogo, NodeJSLogo, ViteLogo]}
                    />
                </Col>
            </Row>
        </>
    )
}

export default MyDevProjects;
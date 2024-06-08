"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import MuseClientBG from "@/public/home/dev-section/muse-client-bg.png";
import JavaScriptLogo from "@/public/home/tech-stack/js-logo.png";
import ComfyUILogo from "@/public/home/tech-stack/comfy-ui-logo.png";
import ViteLogo from "@/public/home/tech-stack/vite-logo.png";
import NodeJSLogo from "@/public/home/tech-stack/node-js-logo.png";
import PythonLogo from "@/public/home/tech-stack/py-logo.png";
import StyledCardImage from "@/public/home/tech-stack/card-iamge.png";
// bootstrap components
import { Card, Button } from "react-bootstrap";

import Styles from "../design-projects.module.css";

interface ProjectCardprops {
    projectTitle: string,
    isFinished: boolean,
    projectSubtitle: string,
    projectImage: StaticImageData,
    projectDesription: string,
    projectTechStack: StaticImageData[]
}

const ProjectCard: React.FC<ProjectCardprops>
    = ({
        projectTitle,
        isFinished,
        projectSubtitle,
        projectImage,
        projectDesription,
        projectTechStack }) => {
        return (
            <>
                <Card className={Styles.project_card_wrapper}>
                    <Card.Body>
                        <table style={{ width: '100%', marginBottom: 8 }}>
                            <tbody>
                                <tr>
                                    <td><Card.Title className={`${Styles.project_title} my-auto`}>{projectTitle}</Card.Title></td>
                                    <td style={{ position: 'relative' }}>
                                        {true && (
                                            <>
                                                {isFinished ?
                                                    (<div className={Styles.done_icon}></div>)
                                                    :
                                                    (<div className={Styles.ongoing_icon}></div>)}
                                            </>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Card.Subtitle className={Styles.project_subtitle}>{projectSubtitle}</Card.Subtitle>
                        <Image className={`${Styles.project_image} mx-auto d-block`} src={projectImage} alt=""></Image>
                        <Card.Text className={Styles.project_description}>{projectDesription}</Card.Text>
                        <div className={Styles.tech_stack}>
                            {projectTechStack.map((techStack, index) => (
                                <Image width={18} height={18} src={techStack} alt=""></Image>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }

export default ProjectCard;
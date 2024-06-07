import React from "react";
import Image, { StaticImageData } from "next/image";

import { Card } from "react-bootstrap";

import Styles from "../home-cards.module.css";

interface ProjectCardProps {
    projectTitle?: string;
    isFinished: boolean;
    projectSubTitle: string;
    projectDescription: string;
    projectTechStack?: StaticImageData[];
}

const ProjectCard: React.FC<ProjectCardProps>
    = ({
        projectTitle,
        isFinished,
        projectSubTitle,
        projectDescription,
        projectTechStack }) => {
        return (
            <div>
                <Card className={`${Styles.card_4} ${Styles.project_card} `}>
                    <Card.Body>
                        {/* heading and status icon */}
                        <table style={{ width: '100%', marginBottom: 8 }}>
                            <tbody>
                                <tr>
                                    <td><Card.Title className="my-auto" style={{ fontSize: 18, color: 'white' }}>{projectTitle}</Card.Title></td>
                                    <td style={{ position: 'relative' }}>
                                        {projectTitle && (
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
                        <Card.Subtitle style={{ color: 'white', fontSize: 12, fontWeight: 400, opacity: .7 }} className="mt-1">{projectSubTitle}</Card.Subtitle>
                        {/* introduction */}
                        <Card.Text style={{ fontSize: 15, color: 'white', lineHeight: 1.7 }} className="mt-3 mb-4">{projectDescription}</Card.Text>
                        {/* tech stack */}
                        {projectTechStack && (
                            <div className={Styles.tech_stack}>
                                {projectTechStack.map((techStack, index) => (
                                    <Image key={index} src={techStack} width={18} height={18} alt="" />
                                ))}
                            </div>
                        )}

                    </Card.Body>
                </Card>
            </div>
        );
    }

export default ProjectCard;
import React from "react";
import Image, { StaticImageData } from "next/image";

import { Card } from "react-bootstrap";

import Styles from "../homeCards.module.css";


interface StyledCardProps {
    title: string,
    backgroundImage: StaticImageData
}

const StyledCard: React.FC<StyledCardProps> =
    ({ title, backgroundImage }) => {
        return (
            <>
                <Card style={{
                    aspectRatio: 1,
                    width: '90%',
                    background: 'none',
                    marginRight: 100,
                    marginTop: 50,
                    borderRadius: 12
                }}>
                    <Image style={{
                        objectFit: 'cover',
                        width: '100%',
                        aspectRatio: 1,
                        borderRadius: 12
                    }} src={backgroundImage} alt="" />

                    {/* placeholder */}
                    <div
                        style={{
                            width: '90%',
                            background: 'none',
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            left: '50%',
                            bottom: '5%',
                            textAlign: 'center',
                            backdropFilter: 'blur(5px)',
                            fontSize: 14.5,
                            paddingTop: 8,
                            paddingBottom: 10,
                            borderRadius: 12,
                            color: 'white',
                            whiteSpace: 'nowrap'
                        }}
                        className="plceholder">{title}</div>
                </Card>
            </>
        )
    }

export default StyledCard
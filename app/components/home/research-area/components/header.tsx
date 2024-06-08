import React from "react";

import Styles from "../research-projects.module.css";

interface HeaderProps {
    sectionTitle: string,
    sectionBrief: string
}

const Header: React.FC<HeaderProps> = ({ sectionTitle, sectionBrief }) => {
    return (
        <>
            <h3 className={Styles.heading}>{sectionTitle}</h3>
            <p className={Styles.brief}>{sectionBrief}</p>
        </>
    )
}

export default Header;
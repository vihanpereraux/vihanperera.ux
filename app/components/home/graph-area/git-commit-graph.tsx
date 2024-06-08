import Image from "next/image"
import Link from "next/link";
import GithubCommitGraph from "@/public/home/github-commit-img/commit-graph.png";

import { Col, Row } from "react-bootstrap";

import Stylers from "@/app/components/home/graph-area/commit-graph.module.css";

const GitCommitGraph = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <p style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 17
                    }}>
                        My contributions so far, See my stats on <a style={{
                            textDecoration: 'none',
                            color: '#39D353',
                            fontWeight: '500'
                        }} target="_blank" href="https://github.com/vihanpereraux">github</a>
                    </p>

                    <Link target="_blank" href="https://github.com/vihanpereraux">
                        <Image
                            className={`${Stylers.graph}  mx-auto d-block`}
                            src={GithubCommitGraph}
                            alt="vihan perera's commit graph"
                        />
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default GitCommitGraph
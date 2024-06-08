import Image from "next/image"
import Link from "next/link";
import GithubCommitGraph from "@/public/home/github-commit-img/commit-graph.png";

import Stylers from "@/app/components/home/graph-area/commit-graph.module.css";

const GitCommitGraph = () => {
    return (
        <>
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
        </>
    )
}

export default GitCommitGraph
import Link from "next/link"
export default function ResearchPortal() {
    return <div className="periyar-research-portal"
        onMouseEnter={() => {
            document.getElementById("researchportal").style.animationPlayState = "paused"
        }}
        onMouseLeave={() => {
            document.getElementById("researchportal").style.animationPlayState = "running"
        }}>
        <Link href="http://65.0.100.133/rsm/" target="_blank">
            <h5 id="researchportal">online research portal</h5>
        </Link>

    </div>
}
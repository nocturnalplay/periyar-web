import Image from "next/image"
import Link from "next/link"
export default function CloneJournal() {
    return (<div className="periyar-clone-journal" id="journal">
        <div>
            <h2>
                <b>Cloned Group 1</b>
                <Link href="/Cloned_Group_1.pdf" target={"_blank"}>
                    <Image src="/external_link.png" alt="external link" height="20" width="20" />
                </Link>
            </h2>
            <iframe src="/Cloned_Group_1.pdf" />
        </div>
        <div>
            <h2>
                <b>Cloned Group 2</b>
                <Link href="/Cloned_Group_2.pdf" target={"_blank"}>
                    <Image src="/external_link.png" alt="external link" height="20" width="20" />
                </Link>
            </h2>
            <iframe src="/Cloned_Group_2.pdf" />
        </div>
    </div>)
}
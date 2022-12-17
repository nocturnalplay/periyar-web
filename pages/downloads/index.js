import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const dd_list = [
    { value: "Ph.D", ref: "phd" },
    { value: "D.Sc / D.Litt", ref: "dsc-dlit" }
]

const dd_con_list = [
    [
        { value: "M.Phil & PhD. GUIDESHIP APPLICATION", link: "/downloads/phd/M.Phil & PhD. GUIDESHIP APPLICATION.docx" },
        { value: "PH.D DC PANEL FORM", link: "/downloads/phd/PH.D DC PANEL FORM.docx" },
        { value: "PH.D SYLLABUS FORMAT", link: "/downloads/phd/PH.D SYLLABUS FORMAT.docx" },
        { value: "PH.D DC MINUTES FORMAT", link: "/downloads/phd/PH.D DC MINUTES FORMAT.docx" },
        { value: "PROGRESS REPORT FORMAT", link: "/downloads/phd/PROGRESS REPORT FORMAT.docx" },
        { value: "PH.D NO DUES FORM", link: "/downloads/phd/PH.D NO DUES FORM.docx" },
        { value: "Certificate of Genuineness", link: "/downloads/phd/Certificate of Genuineness.docx" },
        { value: "Indian Examiner Bank Details for Claim", link: "/downloads/phd/Indian Examiner Bank Details for Claim.docx" },
        { value: "Foreign  Examiner Bank Account Details", link: "/downloads/phd/Foreign  Examiner Bank Account Details.docx" },
        { value: "Tamil Virtual Academy", link: "/downloads/phd/Tamil Virtual Academy.docx" },
        { value: "Bio-data for Examiner - Ph.D Thesis", link: "/downloads/phd/Bio-data for Examiner - Ph.D Thesis.docx" },
        { value: "Thesis Examiner Panel", link: "/downloads/phd/Thesis Examiner Panel.docx" },
        { value: "Thesis & Viva voce Claim Form - A5 Form", link: "/downloads/phd/Thesis & Viva voce Claim Form - A5 Form.docx" },
        { value: "Journal Verification Form", link: "/downloads/phd/Journal Verification Form.docx" },
    ],
    [
        { value: "D.Sc-D.Litt. - Application Form", link: "/downloads/dsc-dlit/D.Sc-D.Litt. - Application Form.docx" },
        { value: "D.Sc-D.Litt. - Thesis Submission Form", link: "/downloads/dsc-dlit/D.Sc-D.Litt. - Thesis Submission Form.docx" },
        { value: "D.Sc-D.Litt. - Panel Form", link: "/downloads/dsc-dlit/Panel Form.pdf" },
    ]
]
export default function Downloads(props) {
    const [sc, setsc] = useState(0)
    const [scv, setscv] = useState("phd")
    console.log(props.p, parseInt(props.i))
    useEffect(() => {
        if (props.i) {
            setsc(() => parseInt(props.i))
        }
        if (props.p) {
            setscv(props.p)
        }
    }, [props])
    return (
        <div className="downloads" id="download">
            {/* <menu className="downloads-menu">
                {
                    dd_list.map((a, i) => <span key={a.value} className={`${sc == i && "active"}`} onClick={() => { setsc(i); setscv(a.ref) }}>{a.value}</span>)
                }
            </menu> */}
            <div className="download-list">
                {
                    dd_con_list[sc].map(e => <div key={e.value} className="download-card">
                        <Link href={`/downloads/${scv}/${e.value}.pdf`} target="_blank">
                            <span>{e.value}</span>
                            <button>
                                <Link href={e.link} >
                                    <Image src="/download-ic.gif" alt="Download" height="30" width="30" /><b>download</b>
                                </Link>
                            </button>
                        </Link>
                    </div>)
                }

            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: context.query, // will be passed to the page component as props
    }
}
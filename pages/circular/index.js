import CircularList from "../../data/circular/circular.json"
import Link from "next/link"
export default function Circular() {
    return (
        <div className="circular-body" id="circle">
            <h1>circular / Notification</h1>
            <div className="circular-content">
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                    {
                        CircularList.map((a, i) =>
                            <tr key={a.title}>
                                <td>{i + 1}</td>
                                <td><b>{a.date}</b></td>
                                <td><Link href={a.filename} target="_blank">
                                    {a.title}
                                </Link></td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

/* old version of the circular*/
// {
//     CircularList.map((a, i) => <div key={a.title} className="circular-card">
//         <Link href={a.filename} target="_blank">
//         <h2>{a.title}</h2>
//             <header>
//                 <span>{a.description}</span>
//             </header>
//             <span className="circular-date">announced on<b>{a.date}</b></span>
//         </Link>
//     </div>)
// }
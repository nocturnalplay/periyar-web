import { useEffect, useState } from "react";
import ResearchMenu from "../data/research/research-portal.json";
import Link from "next/link";
import CircularList from "../data/circular/circular.json"
import {useRouter} from "next/router"

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/about-us")
  })
  return (
    <>
      {/* <PopUp /> */}
      <div className="research-portal">
      </div>
    </>
  )
}

const PopUp = () => (
  <>
    {
      CircularList.map((a, i) => a.pop && <div className="circular-popup" key={i} >
        <div className="pop-close" onClick={(e) => { console.log(document.getElementsByClassName("circular-popup")[0].style.bottom = "-100px") }}>&times;</div>
        <Link href="/circular">
          <div className="pop-title">
            <h3><b>circular</b><span>{a.date}</span></h3>
            <span>{a.title}</span>
          </div></Link>

      </div>)
    }
  </>
)


// export default function Home() {
//   const [portalmenu, setPortalMenu] = useState(ResearchMenu.menu[0].title);
//   const changeHandler = (value) => {
//     setPortalMenu(() => value);
//   };
//   return (
//     <div className="research-portal">
//       <div className="research-portal-body">
//         <div className="research-portal-menu">
//           {ResearchMenu.menu.map((a) => {
//             return (
//               <b
//                 key={a.title}
//                 className={portalmenu === a.title && "active"}
//                 onClick={() => changeHandler(a.title)}
//               >
//                 {a.title}
//               </b>
//             );
//           })}
//         </div>
//         <div className="research-portal-list">
//           <h1>{portalmenu}</h1>
//           {ResearchMenu.menu.map((a) => {
//             if (a.title === portalmenu)
//               return (
//                 <div key={a.title} className="portal-list">
//                   {a.subdata.map((aa) => {
//                     return (
//                       <li key={aa.title}>
//                         <Link href={aa.link}>{aa.title}</Link>
//                       </li>
//                     );
//                   })}
//                 </div>
//               );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

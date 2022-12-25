import Link from "next/link";
import { useState } from "react";

const menu_list = [
  "UGC Regulations",
  "Ph.D Regulations",
  "D.Sc / D.Litt Regulations",
];
const submenu_list = [
  [{ value: "2016 Regulations", link: "/ugc-2016.pdf" }],
  [
    { value: "2022 Regulations", link: "/Ph.D.-r-2022.pdf" },
    { value: "2017 Regulations", link: "/Ph.D.-r-2017.pdf" },
  ],
  [
    { value: "2022 Regulations", link: "/DSc-D.Litt-r-2022.pdf" },
    { value: "2018 Regulations", link: "/DSc-D.Litt-r-2018.pdf" },
  ],
];
export default function Regulation() {
  const [spanlist, setspanlist] = useState(0);
  const menu_change = (e) => {
    setspanlist(e);
  };
  return (
    <div className="regulation" id="regulation">
      <menu className="regulation-menu">
        {menu_list.map((a, i) => (
          <span
            key={a}
            className={`span ${spanlist == i ? "active" : ""}`}
            onClick={() => menu_change(i)}
          >
            {a}
          </span>
        ))}
      </menu>
      <div className="regulation-content">
        <div className="regulation-content-body">
          <h1 className="title">
            {menu_list.map((a, i) => spanlist === i && <b key={a}>{a}</b>)}
          </h1>
          <ul className="regulation-content-list">
            {submenu_list.map((a, i) => {
              if (spanlist === i) {
                return a.map((e) => (
                  <li key={e.link}>
                    <Link href={e.link} target="_blank">
                      {e.value}
                    </Link>
                  </li>
                ));
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

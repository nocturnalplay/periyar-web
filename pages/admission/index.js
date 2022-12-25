import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menu_list = [
  "Ph.D Admission",
  "D.Sc / D.Litt Admission",
  "Fees Structure",
];
const submenu_list = [
  [
    {
      value: "Ph.D Application for entrance",
      link: "http://65.0.100.133/rsm/index.php/prePhd/OnlineApplication/homePage/home/2",
    },
    {
      value: "Ph.D Application for permission",
      link: "http://65.0.100.133/rsm/index.php/research/OnlineApplication/homepage/home/2",
    },
    {
      value: "Ph.D registration",
      link: "http://65.0.100.133/rsm/index.php/Welcome",
    },
    { value: "General instructions", link: "/general_INSTRUCTIONS.pdf" },
  ],
  [
    {
      value: "D.Sc / D.Litt registration Application",
      link: "/downloads/dsc-dlit/D.Sc-D.Litt. - Application Form.pdf",
    },
  ],
  [
    { value: "Ph.D Fees Structure", link: "/PH.D FEES STRUCTURE (2018).pdf" },
    { value: "D.Sc / D.Litt Fees Structure", link: "" },
  ],
];
export default function Regulation() {
  const [showc, setshowc] = useState(false);
  const [spanlist, setspanlist] = useState(0);
  const menu_change = (e) => {
    setspanlist(e);
    setshowc(false);
  };
  const lcChange = (j) => {
    if (j == 0) {
      setshowc(false);
    } else if (j == 1) {
      setshowc(true);
    }
  };
  return (
    <div className="regulation" id="admission">
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
                return a.map((e, j) => (
                  <li class="under-flow" key={e.link} onClick={() => i == 2 && lcChange(j)}>
                    {e.link ? (
                      <>
                        <Link href={e.link} target="_blank">
                          {e.value}
                        </Link>
                        {i == 1 && (
                          <button>
                            <Link href="/downloads/dsc-dlit/D.Sc-D.Litt. - Application Form.docx">
                              <Image
                                src="/download-ic.gif"
                                alt="Download"
                                height="30"
                                width="30"
                              />
                              <b>download</b>
                            </Link>
                          </button>
                        )}
                      </>
                    ) : (
                      e.value
                    )}
                  </li>
                ));
              }
            })}
          </ul>
        </div>
        {showc && (
          <div className="regulation-content-list-content">
            <span onClick={() => setshowc(false)}>&times;</span>
            <li>
              Registration fees : <b>&#8377;</b> 30,000/- {"(Non-Refundable)"}
            </li>
            <li>
              Thesis submission fees : <b>&#8377;</b>60,000/-
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

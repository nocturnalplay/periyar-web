import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CircularList from "../../data/circular/circular.json";
import Link from "next/link";
const Barchart = (props) => {
  var options = {
    // indexAxis: 'y',
    // // Elements options apply to all of the options unless overridden in a dataset
    // // In this case, we are setting the border of each horizontal bar to be 2px wide
    // elements: {
    //     bar: {
    //         borderWidth: 2,
    //     }
    // },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return <Bar data={props.data} options={options} />;
};

export default function About() {
  var phddata = {
    labels: [
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2010",
      "2011",
      "2012",
      "2014",
      "2015",
      "2016",
      "2018",
      "2019",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Ph.D",
        data: [
          0, 0, 0, 2, 10, 10, 20, 28, 71, 130, 148, 312, 188, 202, 510, 261,
          574, 306,
        ],
        borderWidth: 1,
        backgroundColor: "#17a2b8",
      },
    ],
  };
  // var dlitdata = {
  //     labels: ["2018", "2019", "2021", "2022",],
  //     datasets: [{
  //         label: 'No.of Scholars D.Sc / D.Lit',
  //         data: [0, 1, 3, 6,],
  //         borderWidth: 1
  //     }]
  // }
  return (
    <div className="about" id="about-us">
      <PopUp />
      <h1>About us</h1>
      <header>
        Research is one of the strongest components of Periyar University.
        Periyar University offers research programmes in various disciplines of
        Arts, Science, Humanities and Management leading to award of Ph.D.
        degree. Apart from the University departments, research institutions and
        various departments of 37 affiliated colleges have been involving in
        active research activities. The University has a Board of Research
        Studies (BoRS) to regulate research activities at various levels. The
        BoRS frames the guidelines for awarding Ph.D. degree based on University
        Grants Commission (Minimum Standards and Procedures for award of M.Phil
        and Ph.D. Degree) Regulations as well as Tamil Nadu government rules.
        The regulations are being updated time to time in order to maintain the
        quality of research.
      </header>
      <header>
        A separate research section has been functioning under the Coordinator
        of Research since 2016. More than 2750 research scholars have been
        awarded with Ph.D. degree under various disciplines since the inception
        of the Periyar University. The research section is focusing fully on
        e-Governance to speed up the process; online process for Ph.D. entrance
        examination, application for Ph.D. admission, fees collection,
        submission of soft copy of Synopsis and Thesis, information / status of
        Ph.D. program needed by research scholars/supervisors is being
        implemented.
      </header>
      <h1>
      Functions of Research and Development
      </h1>
      <span>
        <img src="about-us-For.png" alt="About-Us-For"></img>
      </span>
      <h1>Ph. D - Degree Awarded</h1>
      <div className="about-phd">
        <Barchart data={phddata} />
      </div>
      {/* <h1>D.Sc / D.Lit - Degree Awarded</h1>
            <div className="about-dlit">
                <Barchart data={dlitdata} />
            </div> */}
    </div>
  );
}
const PopUp = () => (
  <>
    {CircularList.map(
      (a, i) =>
        a.pop && (
          <div className="circular-popup" key={i}>
            <div
              className="pop-close"
              onClick={(e) => {
                console.log(
                  (document.getElementsByClassName(
                    "circular-popup"
                  )[0].style.bottom = "-100px")
                );
              }}
            >
              &times;
            </div>
            <Link href="/circular">
              <div className="pop-title">
                <h3>
                  <b>circular</b>
                  <span>{a.date}</span>
                </h3>
                <span>{a.title}</span>
              </div>
            </Link>
          </div>
        )
    )}
  </>
);

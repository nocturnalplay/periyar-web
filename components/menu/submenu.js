import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menudata from "../../data/menu/menudata.json";

export default function Submenu() {
  // const [ch, setch] = useState(false)
  // useEffect(() => {
  //     console.log(document.getElementsByClassName("dropdown-content")[0].options.length)
  // }, [ch])
  // const HeightSet = (e) => {
  //     setch(a => !a)
  // }
  return (
    <nav className="research-submenu">
      {Menudata.map((a) => {
        if (!a.submenu) {
          return (
            <div key={a.title} className="dropdown">
              <button className="dropbtn">
                <b>
                  <Link href={a.link}>{a.title}</Link>
                </b>
              </button>
            </div>
          );
        }
        return (
          <div key={a.title} className="dropdown">
            <button className="dropbtn">
              <b>
                <Link href={a.link}>{a.title}</Link>
              </b>
              <b>
                <Image
                  src="/down-icon.png"
                  alt="downicon"
                  width="15"
                  height="12"
                />
              </b>
            </button>
            <div className="dropdown-content">
              {a.submenu.map((aa) => {
                if (aa.submenu1) {
                  return (
                    <div key={aa.title} className="dropdown1">
                      <button className="dropbtn1">
                        <b>{aa.title}</b>
                        <b>
                          <Image
                            src="/SubDomain.png"
                            alt="downicon"
                            width="15"
                            height="12"
                          />
                        </b>
                      </button>
                      <div className="dropdown-content1">
                        {aa.submenu1.map((aab) => (
                          <Link key={aab.title} href={aab.link}>
                            {aab.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link key={aa.title} href={aa.link}>
                    {aa.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
{
  /* <nav className="navbar navbar-expand-md research-submenu">
                <div className="navbar-collapse">
                    <ul className="navbar-nav navbar-body">
                        <li className="dropdown">
                            <a className="dropdown-toggle text-white" href="#"  data-bs-toggle="dropdown" aria-expanded="false"> University </a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/AboutUs.php">About University</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/VCDesk.php">VC Desk</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/services.php">Services</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Facilities.php">Facilities</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2016/01/ACT-STATUTES-Book-2016.pdf">Act and Statutes</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/rollcall.php">Roll Call</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Major_Achievements.php">Major Achievements</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2021/organogram.pdf">Organogram </a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/campusmap.php">Campus Map </a> </li>
                            </ul>
                        </li>
                        <li className="dropdown"> 
                        <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Authorities </a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/chancellor.php">Chancellor</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/prochancellor.php">Pro Chancellor</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/vicechancellor.php">Vice Chancellor</a> </li>
                                <li> <a className="dropdown-item" target="_blank" href="https://www.Periyar University.ac.in/Syndicate.php">Members of Syndicate</a></li>
                                <li> <a className="dropdown-item" target="_blank" href="https://www.Periyar University.ac.in/Senate.php">Members of Senate</a> </li>
                                <li> <a className="dropdown-item" target="_blank" href="https://www.Periyar University.ac.in/scaa.php">Members of Standing Committee</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/PlanningBoard.php">Planning Board</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Administration </a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/registrar.php">Registrar</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/coe.php">Controller of Examinations</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Dean.php">Deans and Coordinators</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Finance.php">Finance Officer</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"> 
                        <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Academic </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Dept.php">Schools and Departments</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2021/CBCS_Regulations.pdf">CBCS Regulations</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Centres.php">Centres and Cells </a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Awards.php">Awards and Honors</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Dept/pgex.php">PG Extension Centre</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Community_Colleges.php">Community Colleges</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Affiliated_Colleges.php">Affiliated Colleges</a> </li>
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">BOS Members</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2022/CDC/ud_bos_members.pdf"> University Departments</a> </li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2022/CDC/UG_BOS_Members.pdf"> Affiliated Colleges for UG Programmes</a> </li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2022/CDC/PG_BOS_Members.pdf"> Affiliated Colleges for PG Programmes</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Admission </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Admission_Details.php">Admission Details</a></li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Programmes offered</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Programmes_offered.php"> University Departments</a></li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Programmes_offered_college22-23.php">Affiliated Colleges</a></li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/uicp.php">Industry – Academia Collaborative  Programmes</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Eligi.php">Eligibility Details</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/fees.php">Fees Structure</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Prospectus.php">Prospectus</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/StudentCorner.php">Scholarships</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Fellowship.php">Fellowship</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Research </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Research.php">Research Portal</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/research_centres.php">Research Centres</a> </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Research Projects</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/FundAgency.php">Research Funding Agencies</a> </li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2021/Research_Projects.pdf">Funded Research Projects</a> </li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/Documents/2021/Patents.pdf">Patents</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Examination </a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/fees.php">Revised Fees &amp; PRIDE Fees Structure</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/unclime.php">Unclaimed Certificates</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/esanad.php">E-Sanad Services</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/COEExamSche.php">Examination Schedule</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Result.php">Results</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Download.php">Downloads </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> IQAC </a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/aboutiqac.php">About IQAC</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/iqac.php">Members</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/nacc.php">NAAC-Reaccreditation</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Policies.php">Policies</a> </li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/Strategic_Plan.php">Strategic Plan </a> </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">IQAC Meetings</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/iqcmeet.php"> Meetings Minutes</a> </li>
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/iqcatr.php"> Action Taken Report</a> </li>
                                    </ul>
                                </li>

                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/aqar.php">AQAR</a> </li>


                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/feedbacksystem.php">Feedback System</a></li>
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/bestpractices.php">Best Practices</a></li>

                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/aqar2021.php"> Format AQAR 2020-21</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/annualreport.php">Annual Report</a> </li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/program_brochure.php">Programme Brochure</a> </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">IIC</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/iic/"> NISP</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Ranking</a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/ariia.php">ARIIA</a></li>
                                <li><a className="dropdown-item" href="https://www.Periyar University.ac.in/nirf.php"> NIRF</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"> DistanceEdu</a>
                            <ul className="dropdown-menu">
                                <li> <a className="dropdown-item" href="https://www.Periyar University.ac.in/pride_menu.php">PUCODE</a></li>
                                <li> <a className="dropdown-item" href="https://online.Periyar University.ac.in/">Online Programmes</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="nav-link text-white" href="https://www.Periyar University.ac.in/Contact.php"> Contact</a>
                        </li>
                    </ul>
                </div>
            </nav > */
}

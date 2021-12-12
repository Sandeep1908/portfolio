import React from "react";
import "../styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <>
      <Item1>
        <section>
          <div data-aos="fade-up">
            <img
              data-aos="fade-up"
              src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt="logo"
            />
            <h3 data-aos="fade-up">Resume</h3>
          </div>
          <h1 data-aos="fade-up">My Resume</h1>
        </section>
        <div>
          <Link to="/">
            <button>
              <i class="far fa-angle-left"></i> Back
            </button>
          </Link>
        </div>
      </Item1>
      <main className="main-content main-class">
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQHgBaYyPuDmMQ/profile-displayphoto-shrink_800_800/0/1633844698900?e=1644451200&v=beta&t=PvAH1uIZ6XfE3sh8x8q5DKx9I9ngDDfCMrmfhcfEoBY"
                  alt="Logo"
                />
              </div>
              <h2 className="name">Sandeep Yadav</h2>
              <p className="career">Web Developer</p>
            </div>
            <div className="contact-info">
              <h3 className="main-title">Contact Info</h3>
              <ul>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  +91 9340548528
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  sandbro7163337 @gmail.com
                </li>
                <li>
                  <i className="fab fa-github-square"></i>
                  github.com/sandeep1908
                </li>

                <li>
                  <i className="fa fa-map-marker"></i>
                  Bhopal (M.P)
                </li>
              </ul>
            </div>
            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <ul>
                <li>
                  <p className="skill-title">Java</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">JavaScript</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Python</p>
                  <div className="progress-bar">
                    <div className="progress j-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">React js</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Node Js</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">html/css</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">MErn Stack</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Django</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">About Me</h2>
              <p className="para">
                I am a highly competent IT professional with a proven track
                record in designing websites, networking and managing databases.
                I have strong technical skills as well as excellent
                interpersonal skills, enabling me to interact with a wide range
                of clients. I am eager to be challenged in order to grow and
                further improve my IT skills. My greatest passion is in life is
                using my technical know-how to benefit other people and
                organisations <br />
                <br />
              </p>
            </section>

            <section className="experince sect">
              <h2 className="right-title">Projects</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Portfolio</h5>
                  <p className="para">2021</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Web application (MErn)</h5>
                    <p className="para">
                      This is my portfolio Web Application where I Introduced
                      myself, my skills and my experiences my education and many
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Disney-plus-clone</h5>
                  <p className="para">2021</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      frontend Application (REact js)
                    </h5>
                    <p className="para">
                      This is a Disney-plus-clone. It's React based application
                      with user interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Tesla-clone</h5>
                  <p className="para">2021</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      Frontend Application (React js)
                    </h5>
                    <p className="para">
                      This is a Tesla-clone. It's a clone of Tesla web app and
                      Its is a frontend application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Blog-Application</h5>
                  <p className="para">2021</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Web Application (Django)</h5>
                    <p className="para">
                      This is Django based Web Application.It's all backend part
                      done by me.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="education sect">
              <h2 className="right-title">education</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Nalanda Public H.S School</h5>
                  <p className="para">2016 - 2017</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">10th Board</h5>
                    <p className="para">
                      I completed my Higher Secondary Education from Madhya
                      pradesh board of Education (Bhopal).
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Nalanda Public H.S School</h5>
                  <p className="para">2018 - 2019</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">12th Board</h5>
                    <p className="para">
                      I completed my Senior Secondary Education from Madhya
                      pradesh board of Education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">
                    Technocrats Intitute Of Technology and Science
                  </h5>
                  <p className="para">2019 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Computer Science</h5>
                    <p className="para">
                      I am persuing my graduation in Computer Science from
                      Techocrats Institute of Technology and Science College
                      which is Affiliated to Rajiv Gandhi Proudyogiki
                      Vishwavidyalaya
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Resume;
const Item1 = styled.div`
  display: flex;
  padding: 100px 150px;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      margin: 0 20px;

      img {
        margin: 2px;
        padding: 0 10px;
      }

      h3 {
        text-transform: uppercase;
        letter-spacing: 1.2px;
        margin: 0 10px;
        color: #4543e8;
        font-weight: 600;
      }
    }
    h1 {
      margin-top: 20px;
      font-size: 3.5em;
      font-weight: 900;
    }
  }

  div {
    a {
      text-decoration: none;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2px;
      padding: 10px;
      width: 150px;
      font-size: 1.2em;
      background: #4543e8;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      transition: 250ms all;

      i {
        width: 20px;
        height: 20px;
        margin-top: 1px;
        transition: 250ms;
      }
      &:hover {
        transform: scale(1.02);
        i {
          transform: translateX(-2px);
        }
      }
    }
  }
`;

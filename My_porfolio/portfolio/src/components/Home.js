import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  const handleClick = (e) => {
    const nav = document.querySelector(".navigation");
    const sec = document.querySelector(".sec");
    const logo = document.querySelector(".logo");
    const process = document.querySelector(".process");
    const project = document.querySelector(".project");
    const contact = document.querySelector(".contact");
    const footer = document.querySelector(".footer");
    const Hire = document.querySelector(".Hire");

    e.target.classList.toggle("active");
    nav.classList.toggle("active");
    sec.classList.toggle("active");
    logo.classList.toggle("active");
    process.classList.toggle("active");
    project.classList.toggle("active");
    contact.classList.toggle("active");
    footer.classList.toggle("active");
    Hire.classList.toggle("active");
  };
  return (
    <>
      <Section className="sec">
        <header data-aos="fade-up">
          <div
            className="toggle"
            onClick={handleClick}
            data-aos="fade-up"
          ></div>
          <Link to="/" className="Hire">
            Hire Me
          </Link>
        </header>

        <Image className="image1" data-aos="fade-up">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHgBaYyPuDmMQ/profile-displayphoto-shrink_800_800/0/1633844698900?e=1643846400&v=beta&t=kPVthJwIiKxoCrYGAEEFTGFgLHos4IgfrdZ-Sv_MCNM"
            alt=""
          />
        </Image>

        <Content data-aos="fade-up">
          <h2 data-aos="fade-up">
            Hi, I am <br /> <span>Sandeep Yadav</span>
          </h2>
          <p data-aos="fade-up">
            I am a highly competent IT Fresher with a proven track record in
            designing websites and managing databases. I have strong technical
            skills. I am eager to be challenged in order to grow and further
            improve my IT skills. My greatest passion is in life is using my
            technical know-how to benefit other people and organisations
          </p>
          <Link to="/resume">Download Resume</Link>
        </Content>
      </Section>

      <Logos className="logo">
        <ul>
          <li data-aos="fade-up">
            <a href="https://www.facebook.com/profile.php?id=100010783695528">
              <img src="images/facebook.png" alt="logo" />
            </a>
          </li>

          <li data-aos="fade-up">
            <a href="https://www.instagram.com/_sandeep_19/">
              <img src="images/instagram.png" alt="logo" />
            </a>
          </li>
        </ul>
      </Logos>
    </>
  );
}

export default Home;

const Section = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  transition: 1s;
  padding: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;

    div {
      position: relative;
      left: 0;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 1s;

      &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background: #777;
        transform: translateY(-6px);
        transition: 0.5s;
      }
      &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background: #777;
        transform: translateY(6px);
        transition: 0.5s;
      }
    }
    a {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      background: #ff1455;
      color: #fff;
      font-weight: 500;
      border-radius: 4px;
      letter-spacing: 1px;
      transition: 1s;
    }
  }
`;
const Image = styled.div`
  position: relative;
  min-width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  max-width: 900px;
  margin-left: 40px;

  h2 {
    font-weigth: 500;
    letter-spacing: 1px;
    color: #777;
    line-height: 2.5em;

    span {
      font-weight: 700;
      color: #4543e8;
      font-size: 3em;
    }
  }
  p {
    color: #777;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    background: #4543e8;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 1px;
    transition: 250ms;

    &:hover {
      background: transparent;
      border: 2px solid #4543e8;
      color: #4543e8;
      font-weight: 600;
    }
  }
`;
const Logos = styled.div`
  position: relative;
  transition: 1s;
  bottom: 75px;
  ul {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-left: 300px;

    li {
      list-style: none;

      a {
        position: relative;
        margin-right: 20px;
        display: inline-block;
        transform: scale(0.75);
        opcaity: 0.8;

        &:hover {
          transform: translateX(-1px);
        }
      }
    }
    @media (max-width: 991px) {
      margin-left: 143px;
    }
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
function Projectpage() {
  const { id } = useParams();
  const [val, setval] = useState([]);
  
  useEffect(() => {
    const get_data_id = async (id) => {
      const res = await fetch(`http://localhost:8000/detail/${id}`);
      const result = await res.json();
      setval(result);
    };
    get_data_id(id);
  }, [id]);

  return (
    <Container>
      <Background>
        <div>
          <img src={val.backgroundImg} alt="" />
        </div>
      </Background>

      <Item1>
        <section>
          <div data-aos="fade-up">
            <img
              data-aos="fade-up"
              src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg"
              alt="logo"
            />
            <h3 data-aos="fade-up">About</h3>
          </div>
          <h1 data-aos="fade-up">All About of the Projects</h1>
        </section>
        <div>
          <Link to="/">
            <button>
              <i className="far fa-angle-left"></i> Back
            </button>
          </Link>
        </div>
      </Item1>

      <About>
        <div>
          <h1>Discription </h1>
          
          <img src={val.backgroundImg} alt="Logo" />
          <p>
            {val.discription}
            <ul>
              <h2>Technology Used</h2>
              {val.tech&&
                val.tech.map((curr,idx)=>{
                  return <li key={idx}>{curr}</li>
                })
              }
            </ul>
          </p>
          
          <div>
          <a href={val.git_link}>Github Link</a>
          </div>
        </div>
      </About>
    </Container>
  );
}

export default Projectpage;

const Container = styled.div``;
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
const Background = styled.div`
  width: 100vw;
  height: 550px;
  display: flex;
  justify-content: center;

  div {
    width: 80%;
    height: 100%;
    object-fit: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  div {
    width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-weight: 600;
      font-size: 3em;
      letter-spacing: 1.2px;
      margin: 5px 0;
      padding: 5px 0;
    }

    p {
      letter-spacing: 1.2px;
      margin: 5px 0;
      padding: 5px 0;
      font-weight: 600;
      opacity: 0.8;
      text-align: justify;
      line-height: 1.7;
    }
    ul {
      li {
        letter-spacing: 1.2px;
        margin: 5px 0;
        padding: 5px 0;
        font-weight: 600;
        opacity: 0.8;
        text-align: justify;
        line-height: 1.7;
        list-style: number;
        margin-left: 20px;
      }
    }
    div{
      display:flex;
      flex-direction:row-reverse;

      a{
        text-decoration:none;
        margin: 2px;
        padding: 10px;
        width: 250px;
        font-size: 1.2em;
        background: #4543e8;
        color: white;
        font-weight: 600;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        transition: 250ms all;
        text-align:center;
        &:hover {
          background:none;
          color:blue;
          border:2px solid blue;
        }
    }
  }
  
    
`;

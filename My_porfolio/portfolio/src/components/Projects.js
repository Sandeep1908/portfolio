import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
function Projects() {

    const val=useSelector(state=>state.project.value);
    return (
        <Container className="project">
                <Item1>
                    <div data-aos="fade-up">
                        <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt="logo"/>
                        <h3 data-aos="fade-up">Work</h3>
                    </div>
                    <h1 data-aos="fade-up">Bringing stellar results <br/>for every client.</h1>
            </Item1>
            <Items>
                {
                    val &&

                    val.map((curr,idx)=>{
                        if(idx===3){
                            return"";
                        } 
                        return(
                           
                            <NavLink to={`/detail/${curr._id}`}>
                            <Wrap data-aos="fade-up" key={idx}>
                            <img src={curr.backgroundImg} alt="logo"/>
        
                            <div>
                                <h2>{curr.title}</h2>
                                <img src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61249fc314a91fe455c9fd4a_arrow-up-right%201.svg" alt="logo" />
                            </div>
                            <p>{curr.discription}</p>
                        </Wrap>
                        </NavLink>
                    
                     
                        )
                    })
                }
               

                
            </Items>
            <Button data-aos="fade-up">
                <NavLink to='/allprojects'>
                <div >
                    <p>View all <br/>projects</p>
                </div>
                </NavLink>
            </Button>
        </Container>
    )
}

export default Projects
const Container=styled.div`
    position:relative;
    padding:0 80px;
    width:100%;

`

const Item1=styled.div`
    display:flex;
    flex-direction:column;
    padding:0 150px;
    div{
        display:flex;
        margin:0 20px;

        img{
            margin:2px;
            padding:0 10px
        }

        h3{
            text-transform:uppercase;
            letter-spacing:1.2px;
            margin:0 10px;
            color:#4543e8;
            font-weight:600;
        }
        
    }
    h1{
        margin-top:20px;
        font-size:3.5em;
        font-weight:900;

    }
`

const Items=styled.div`

    padding:0 150px;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    a{
        display:flex;
        width:100%;
        justify-content:center;
        text-decoration:none;
        color:black;
        
    }
    
    
`
const Wrap=styled.div`
    display:flex;
    width:45%;
    flex-direction:column;
    margin:20px 0;
    cursor:pointer;
   
    div{
        display:flex;
        justify-content:space-between;
        img{
            width:30px;
            transition:250ms;
        }
        h2{
            margin:10px 0;
            font-weight:900;
            letter-spacing:1.2px;
        }
    }
    p{
        font-weight:600;
        letter-spacing:1.2px;
    }

    &:hover{
       
            img{
                opacity:.7;
            }
            
            div{
                img{
                    transform:translateX(4px) translateY(-4px);
                }
            }
    }

`
const Button=styled.div`

        
        display:flex;
        flex-direction:row-reverse;
        margin-right:300px;
        @media(max-width:991px){
            width:100%;
        }

        a{
            text-decoration:none;
        }
        div{
            width:140px;
            height:140px;
            background:#4543e8;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;   
            cursor:pointer;   
            transition:.5s;      
            p{
                font-size:16px;
                padding:10px;
                font-weight:600;
                color:#fff;
                text-transform:uppercase;
                letter-spacing:1.2px;
            }

            &:hover{
                background:#010032;
                transform:scale(1.1);
            }

            
        }
    
        
`
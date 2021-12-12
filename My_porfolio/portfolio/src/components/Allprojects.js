import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Allprojects() {
    const val=useSelector(state=>state.project.value);
    return (
        <Container>
           <Item1>
                <section>
                    <div data-aos="fade-up">
                        <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt='logo'/>
                        <h3 data-aos="fade-up">All Projects</h3>
                    </div>
                    <h1 data-aos="fade-up">Previous Projects Have<br/> Done Earlier</h1>
                 </section>
                 <div>
             
                     <Link to="/"><button><i className="far fa-angle-left"></i> Back</button></Link>
                 </div>
            </Item1>
            <Items>
            
            {
                val &&
                val.map((curr,idx)=>{
                    return(
                    <Link to={`/detail/${curr._id}`}>
                        <Wrap data-aos="fade-up" key={idx}>
                        <img src={curr.backgroundImg} alt="logo" />
    
                        <div>
                            <h2>{curr.title}</h2>
                            <img src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61249fc314a91fe455c9fd4a_arrow-up-right%201.svg" alt="logo" />
                        </div>
                        <p>{curr.discription}</p>
                    </Wrap>
                </Link>
                    )
                })
                
            }
           
            
            </Items>
        </Container>
    )
}

export default Allprojects

const Container=styled.div`
    display:flex;
    flex-direction:column;
    background:#fff;
    width:100vw;


`
const Item1=styled.div`
    display:flex;
    padding:100px 150px;
    justify-content:space-between;
    section{
        display:flex;
        flex-direction:column;
        
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
    }

    div{
        
       a{
           text-decoration:none;
       }
        button{
            display:flex;
            justify-content:center;
            align-items:center;
            margin:2px;
            padding:10px;
            width:150px;
            font-size:1.2em;
            background:#4543e8;
            color:white;
            font-weight:600;
            border:none;
            border-radius:10px;
            cursor:pointer;
            text-transform:uppercase;
            letter-spacing:1.5px;
            transition:250ms all;
            

            i{
                width:20px;
                height:20px;
                margin-top:1px;
                transition:250ms;
               
                
            }
            &:hover{
                transform:scale(1.02);
                i{
                    transform:translateX(-2px);
                }
            }
        }

    }
`
const Wrap=styled.div`
    display:flex;
    width:55%;
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

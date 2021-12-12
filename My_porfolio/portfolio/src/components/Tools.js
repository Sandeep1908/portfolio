import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
function Tools() {
    const[val,setVal]=useState([]);
    console.log(val)
    useEffect(()=>{
        const get_tools=async()=>{
            const res=await fetch('http://localhost:8000/tools/');
            const result=await res.json();
            setVal(result);
        }
        get_tools();
    },[])
    return (
        <>
        <Item1>
                    <div data-aos="fade-up">
                        <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt="Logo"/>
                        <h3 data-aos="fade-up">Tools</h3>
                    </div>
                    <h1 data-aos="fade-up">Tools that helps<br/>me to make this projects</h1>
            </Item1>
        <Container>
            <Image >
                <img src="https://assets.website-files.com/6110f0a058e44f32690dc23e/6110f0a058e44f17ee0dc250_Desktop.jpg" alt="Logo" data-aos="fade-up"/>
            </Image>
            <Contents>
                <div data-aos="fade-up"></div>
                <h1 data-aos="fade-up">The tools.</h1>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, deleniti.</p>
                
            <Wrap>
                {
                        val&&
                        val.map((curr,idx)=>{
                            console.log(curr);
                            return(
                                <Tool>
                                <img src={curr.tool} alt="Logo" data-aos="fade-up"/>
                                <span data-aos="fade-up">{curr.name}</span>
                            </Tool>
                            )
                        })
                }
                
               
                
            </Wrap>
            </Contents>
        </Container>
        </>
    )
}

export default Tools

const Container=styled.div`
    display:flex;
    background:white;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    margin-bottom:50px;
   
`
const Item1=styled.div`
    display:flex;
    flex-direction:column;
    padding:0 150px;
    margin-top:50px;
    
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
const Image =styled.div`
   margin-right:50px;
   @media(max-width:991px){
       display:none;
   }
  
    img{
        width:35vw;
        height:90vh;
        padding:10px;
      
    }
`
const Contents=styled.div`
    display:flex;
    flex-direction:column;
    max-width:400px;
   

    div{
        transition:all 250ms;
        background:#4543e8;
        width:50px;
        height:8px;
        margin-bottom:10px;
        
    }
    h1{
        font-weight:400;
        letter-spacing:1.1px;
        margin-top:2px;
    }
    p{
        font-size:1.3rem;
        font-weight:300;
        letter-spacing:1.1px;
    }
`
const Wrap=styled.section`
    display:flex;
    flex-direction:column;
 
    
`
const Tool =styled.section`
    display:flex;
    align-items:center;
    margin:2px;
    transition:all 250ms;
    cursor:pointer;
    img{
        width:45px;
        height:45px;
        margin:4px;
    }
    span{
        font-weight:400;
        letter-spacing:1.02px;
        margin:4px;
    }
    &:hover{
        transform:translateX(-6px);
    }
`
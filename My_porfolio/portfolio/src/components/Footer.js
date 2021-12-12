
import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container className="footer">
            <Content>
               <Pages>
                   <h3 data-aos="fade-up">PAGES</h3>
                   <span data-aos="fade-up">Start</span>
                   <span data-aos="fade-up">Licenses</span>
                   <span data-aos="fade-up">Instructions</span>
                   <span data-aos="fade-up">Style guide</span>
                   <span data-aos="fade-up">Changelog</span>
                   <span data-aos="fade-up">404</span>
                 </Pages>

                 <Links data-aos="fade-up">
                 <h3>LINKS</h3>
                 <Logo>
                     <a href="/"><img src="https://assets.website-files.com/6110f0a058e44f32690dc23e/6110f0a058e44f184b0dc276_Dribbble%20Icon.svg" alt="logo" /></a>

                     <a href="/"><img src="https://assets.website-files.com/6110f0a058e44f32690dc23e/6110f0a058e44f6ef60dc277_Behance%20Icon.svg" alt="logo" /></a>

                     <a href="/"><img src="https://assets.website-files.com/6110f0a058e44f32690dc23e/6110f0a058e44fe35a0dc266_Instagram%20Icon.svg" alt="logo" /></a>
                 </Logo>
                 </Links>

                 <Letter data-aos="fade-up">
                     <h3>LETTER</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic, tempora minus optio,!</p>
                     <input type="text"  placeholder="xyz@gmail.com"/>
                     <button>submit</button>
                 </Letter>
            </Content>
            <Logo1>
                <img src="https://previews.123rf.com/images/mdranahamid/mdranahamid2002/mdranahamid200201528/140899612-initial-letter-sy-logo-design-vector-template-sy-letter-logo-design.jpg" alt="logo" />
                <p>© Sandeep Yadav, LLC. All rights reserved.</p>
            </Logo1>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width:100vw;
    min-height:60vh;
    background:#010032;
    color:white;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
    opacity:.9;
    position:relative;
  
    
`
const Content =styled.div`
    width:80%;
    margin-top:50px;
    display:flex;
    justify-content:space-between;
    @media(max-width:991px){
       flex-direction:column;
       justify-content:space-between;
       align-items:center;
       
    }
`
const Pages=styled.div`
    display:flex;
    flex-direction:column;
    letter-spacing:1.2px;
    span{
        letter-spacing:1.1px;
        margin:2px 0;
        cursor:pointer;
        font-weight:600;
    }

`

const Links=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    letter-spacing:1.2px;
    @media(max-width:991px){
        margin:40px;
    }
`

const Logo=styled.div`
    a{
        margin:5px;
        padding:4px;
    }
`
const Letter=styled.div`
    width:55%;
    margin:20px 0;
    @media(max-width:991px){
        width:100%;
    }
    p{
        font-size:14px;
        letter-spacing:1.01px;
    }
    input{
        width:60%;
        padding:10px;
        margin:5px 0;
        margin-right:10px;
        border-radius:4px;
        outline:none;
        border:1px solid grey;
        color:white;
        background:transparent;
       
    }
    button{
        margin:0 5px;
        padding:12px;
        border:1px solid white;
        border-radius:50px;
        letter-spacing:1.2px;
        font-weight:600;
        cursor:pointer;
        background:#4543e8;
        color:white;
        &:hover{
            transform:scale(1.02);
        }
    }
`
const Logo1=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
        width:70px;
        height:70px;
        border-radius:50%;
    }
    p
    {
        margin:10px;
        letter-spacing:1.2px;
    }
`
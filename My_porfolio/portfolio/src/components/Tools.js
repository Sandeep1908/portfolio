import React from 'react'
import styled from 'styled-components'
function Tools() {
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
                <Tool>
                    <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="Logo" data-aos="fade-up"/>
                    <span data-aos="fade-up">React.Js</span>
                </Tool>
                <Tool>
                    <img src="https://i0.wp.com/copyassignment.com/wp-content/uploads/2021/08/Django-logo.jpg?fit=474%2C474&ssl=1" alt="Logo" data-aos="fade-up"/>
                    <span data-aos="fade-up">Django</span>
                </Tool>
                <Tool>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" alt="Logo" data-aos="fade-up"/>
                    <span data-aos="fade-up">JavaScript</span>
                </Tool>
                <Tool>
                    <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="Logo" data-aos="fade-up" />
                    <span data-aos="fade-up">Html 5</span>
                </Tool>
                <Tool>
                    <img src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="Logo" data-aos="fade-up"/>
                    <span data-aos="fade-up">Css 3</span>
                </Tool>
                <Tool>
                    <img src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png" alt="Logo" data-aos="fade-up"/>
                    <span data-aos="fade-up">BootStrap</span>
                </Tool>
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
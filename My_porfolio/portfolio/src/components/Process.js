import React from 'react'
import styled from 'styled-components'
function Process() {
    return (
        <Container className="process">
            <Item1>
                <Wrap>

                    <div>
                        <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt="logo" />
                        <h3 data-aos="fade-up">Process</h3>
                    </div>
                    <h2 data-aos="fade-up">Getting started is easy.</h2>

                </Wrap>
                <Wrap2>
                    <p data-aos="fade-up">I've developed a structure that saves time (and money) while making the most of our interactions.</p>
                </Wrap2>
            </Item1>

            <Item2>
               <div>
                   <section>
                   <h2 data-aos="fade-up">[1]</h2>
                   <h1 data-aos="fade-up">Listen</h1>
                   <p data-aos="fade-up">I get to know you and your company, your goals and expectations.</p>
                   </section>
                   <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/612622216d944e2ec74547f3_Icons.svg" alt="logo" />
               </div>
             
              
               <div className="item-hidden">
                   <section>
                   <h2 data-aos="fade-up">[2]</h2>
                   <h1 data-aos="fade-up">Ideate</h1>
                   <p data-aos="fade-up">I create a couple of pitches based on the project brief and goals.</p>
                   </section>
                   <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/612622216d944e2ec74547f3_Icons.svg" alt="logo" />
               </div>
             
               <div>
                   <section>
                   <h2 data-aos="fade-up">[3]</h2>
                   <h1 data-aos="fade-up">Execute</h1>
                   <p data-aos="fade-up">I work on the approved plan while keeping you in the loop until we have a finished project.</p>
                   </section>
               </div>
             
            </Item2>
        </Container>
    )
}

export default Process

const Container=styled.div`
    width:100%;
    padding:150px 40px;
    margin:10px;
    position:relative;
`

const Item1=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 150px;

    @media(max-width:991px){
        flex-direction:column;
        justify-content:center;
    }
    
    
`
const Wrap=styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
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
    h2{
        margin-top:20px;
        font-size:3.5em;
        font-weight:600;

    }
`
const Wrap2=styled.div`
    max-width:400px;
    p{
        font-size:1.2em;
        font-weight:300;
        letter-spacing:1.2px;
    }

`

const Item2=styled.div`
    display:flex;
    padding:0 150px;
    margin:0 30px;
    margin-top:100px;

    @media(max-width:991px){
        flex-direction:column;
        margin:50px 0;
    }
    div{
        display:flex;
        margin:0 20px;
    
        
    @media(max-width:991px){
        margin:50px 0;
    }

    section{
        display:flex;
        flex-direction:column;
        margin:0 10px;

        h2{
            font-size:4rem;
            letter-spacing:3.3px;
            color:#4543e8;
            font-weight:600;
        }
        img{
            widht:10px;
        }
        p{
            width:350px;
        }
    }
}
    
`
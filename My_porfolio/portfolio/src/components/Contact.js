import React from 'react'
import styled from 'styled-components'
function Contact() {
    return (
        <Main className="contact">
        <Item1>
                    <div>
                        <img data-aos="fade-up" src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg" alt="logo" />
                        <h3 data-aos="fade-up">Contact</h3>
                    </div>
                    <h1 data-aos="fade-up">Connect with me <br/> this form</h1>
            </Item1>
        <Container>
            <Form>
                <Input data-aos="fade-up">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name here" />
                </Input>
                <Input data-aos="fade-up">
                    <label htmlFor="">Phone No</label>
                    <input type="Number" placeholder="Enter contact no here" />
                </Input>
                <Input data-aos="fade-up">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter 
                    Email here"/>
                </Input>
                <Input data-aos="fade-up">
                    <label htmlFor="">Company</label>
                    <input type="text" placeholder="Enter Company name here" />
                </Input>
                <Input data-aos="fade-up">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="2" placeholder="Type your message..."></textarea>
                </Input>
            </Form>
                <Button data-aos="fade-up">
                    <button type="submit">Send</button>
                </Button>
        </Container>
        </Main>
    )

}

export default Contact
const Main=styled.div`
    position:relative;
`

const Container=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;

    
`
const Item1=styled.div`
    display:flex;
    flex-direction:column;
    padding:0 150px;
    @media(max-width:991px){
        margin-top:50px;
    }
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

const Form=styled.form`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(2,minmax(0,1fr));
    margin-top:60px;
    width:50%;

    @media(max-width:991px)
    {
        grid-template-columns:repeat(1,minmax(0,1fr));
    }

`
const Input=styled.div`
display:flex;
flex-direction:column;
    input{

        padding:8px;
        margin:2px;
        border:1px solid grey;
        border-radius:4px;
        outline:none;
    }
    label{
        font-weight:600;
    }

    textarea{
        width:205%;
        padding:8px;
        margin:2px;
        border:1px solid grey;
        border-radius:4px;
        outline:none;
        @media(max-width:991px){
            width:100%;
        }
        
    }

`
const Button =styled.div`
    display:flex;
    width:50%;
    justify-content:flex-end;
    @media(max-width:991px){
        justify-content:center;
    }

    
button{
    padding:7px;
    margin:10px;
    width:70px;
    cursor:pointer;
    font-size:1.01rem;
    letter-spacing:1.1px;
    border-radius:4px;
    background:#4543e8;
    color:white;
    border:none;
    &:hover{
        opacity:.9;
        transform:translateY(-2px);
    }
}

`
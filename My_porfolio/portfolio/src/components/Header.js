import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <Container className="navigation">
            <Image className="nav-img">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHgBaYyPuDmMQ/profile-displayphoto-shrink_800_800/0/1633844698900?e=1643846400&v=beta&t=kPVthJwIiKxoCrYGAEEFTGFgLHos4IgfrdZ-Sv_MCNM" alt="" />
            </Image>

            <Menu className='nav-list'>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/allprojects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header
const Container=styled.div`
    position:fixed;
    top:0;
    left:-100%;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#333;
    transition:1s;
    overflow-y:hidden;

`

const Image=styled.div`
    position:relative;
    width:50%;
    height:100%;

    img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const Menu=styled.div`
    postion:relative;
    width:50%;
    height:100%;
    display:flex;
    align-items:center;

    ul{
        position:relative;
        width:100%;

        li{
            position:relative;
            list-style:none;

            a{
                position:relative;
                color:#fff;
                font-size:2em;
                font-weight:600;
                text-decoration:none;
                margin:5px 0;
                margin-left:100px;
                display:inline-block;
                letter-spacing:1px;
                text-transform:uppercase;

                &:hover{
                    color:#2196f3;
                }

            }
        }
    }
`
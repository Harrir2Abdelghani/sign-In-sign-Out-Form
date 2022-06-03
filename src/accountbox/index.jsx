import react, { useState } from "react";
import styled from "styled-components";
import { LoginForum } from "./login-forum";
import {motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForum } from "./signup-forum";

const Boxcontainer = styled.div`
    width : 300px;
    min-height: 550px;
    display : flex;
    flex-direction : column;
    border-radius : 19px;
    background-color : #fff;
    box-shadow : 0 0 2px rgba(15 , 15 , 15 , 0.20);
    position : relative;
    overflow : hidden;
    border: solid 0.5px;
    margin-top: 30px;
    
`;

const Topcontainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

 const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(90deg);
    top: -290px;
    left: -30px;
    background: rgb(2,0,36);
    background: linear-gradient(58deg,     
    #262697 40%, 
    rgba(0,212,255,1) 100%
    );
    
 `;
 const HeaderContainer =styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
         
 `;

 const HeaderText =styled.h2 `
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: white;
    z-index:10 ;
    margin: 0;
 `;


 const SmallText = styled.h5 `
    color: white;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 12px;
    margin-left: 25px;
    color: black ;
    font-weight: bold;
    
 `;


const InnerContainer =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};


export function Accountbox(props) {
    const [isExpanded, setExpanded] =useState(false);
    const [active, setActive] = useState("signin");

    const playexpandinganimation = () => {
        setExpanded(true);
        setTimeout(()=> {
            setExpanded(false);
        },expandingTransition.duration *1000 - 1500);
    }
    const switchToSignup = () => {
        playexpandinganimation();
        setTimeout (() => {
            setActive("signup"); 


        }, 400)
    } 
    const switchToSignin = () => {
        playexpandinganimation();
        setTimeout (() => {
            setActive("signin"); 


        }, 400)
    } 
    const contextValue = { switchToSignup, switchToSignin};

    return (
    <AccountContext.Provider value ={contextValue}>
    <Boxcontainer>
        <Topcontainer>
            <BackDrop 
                initial={false} 
                animate={isExpanded ? "expanded" : "collapsed"} 
                variants={backdropVariants} 
                transition={expandingTransition}
            />
            { active === "signin" &&(
                <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please Sign in to continue</SmallText>
                </HeaderContainer>)
            }
            { active === "signup" &&(
                <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please Sign up to continue</SmallText>
                </HeaderContainer>)
            }
        </Topcontainer>

        <InnerContainer>
            {active === "signin" &&  <LoginForum></LoginForum>}
            {active === "signup" && <SignupForum></SignupForum>}
        </InnerContainer>
    </Boxcontainer>
    </AccountContext.Provider>
        );
}
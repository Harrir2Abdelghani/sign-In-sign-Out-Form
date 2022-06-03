import styled from "styled-components";

export const BoxContainer =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
`;


export const FormContainer =styled.form`
display:flex ;
flex-direction: column;
width: 100%;

`;



export const MutedLink =styled.a`
font-size: 12px;
color: #02010e;
font-weight: 500;
text-decoration: none;
margin-left: 7px;

`;



export const BoldLink = styled.a`
    font-size: 12px;
    color: rgba(52, 22, 185, 0.8);
    font-weight: 500;
    text-decoration: none;
`;


export const Input =styled.input`
    height: 42px;
    width: 100%;
    transition: all, 240ms ease-in-out;
    border: 1px solid rgba(200, 200, 200, 0.8);
    padding: 0px 10px;
    
    border-bottom: 1.4px solid transparent ;
    &::placeholder {
        color: #948e8e;

    }
    &:not(:last-of-type) {
        border-bottom: 5px rgba(200, 200, 200, 0.4);
    }


    outline: none;
    &:focus{
        outline: none;
        border-bottom: 2px solid rgba(52, 22, 185, 0.8);
    }
`;


export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: white;
    font-size: 15px;
    font-weight: 600;
    border: none;
   
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(2,0,36);
    background: linear-gradient(58deg,     
    #262697 40%, 
    rgba(0,212,255,1) 100%
    );

    &:hover{
    filter: brightness(1.5);
    }
`;



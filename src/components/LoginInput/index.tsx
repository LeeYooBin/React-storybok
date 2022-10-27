import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 285px;
    height: 45px;
    padding: 0 5px;
    border: solid 1px #000;
    border-radius: 5px;
    font: 500 1rem/1.5rem "open-sans", sans-serif;
    outline: none;

    :focus + label,
    :not(:placeholder-shown) + label {
        opacity: 1;
        position: absolute;
        top: -0.4rem;
        left: 1.2rem;
    }
`;

const Label = styled.label`
    pointer-events: none;
    position: absolute;
    top: 1.75rem;
    left: 1.7rem;
    opacity: 0.5;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    font: 500 1rem/1.5rem "open-sans", sans-serif;
    color: #000;
`;

export interface LoginInput {
    text?: string,
};

const LoginInput = ({ text } : LoginInput) => {
    return (
        <>
            <Input placeholder="ﾠﾠ" />
            <Label>{text}</Label>
        </>
    );
}

export default LoginInput;
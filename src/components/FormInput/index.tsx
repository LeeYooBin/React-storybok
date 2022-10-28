import React from "react";
import styled from "styled-components";

const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    position: relative;
    width: 100vw;
    height: 13vh;
    background-color: white;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 4% 6%;
    }
`;

const Label = styled.label`
    margin-bottom: 1.5vh;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    opacity: 0.7;
`;

const Input = styled.input`
    border: none;
    outline: none;
    color: #7640D0;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    
    ::placeholder {
        opacity: 0.35;
        font-style: italic;
        font-size: 0.9rem;
        font-weight: 400;
    }
`;

export interface FormInput {
    title?: string,
    placeholder?: string
}; 

export const FormInput = ({ title='Título', placeholder='Placeholder' } : FormInput) => {
    return(
        <Content>
            <div>
                <Label>{title}</Label>
                <Input 
                    placeholder={`“${placeholder}”`}
                />
            </div>
        </Content>
    );
};

